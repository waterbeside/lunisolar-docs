import lunisolar, { Branch, Stem } from 'lunisolar'
import zh from 'lunisolar/locale/zh'
// import type { Branch, Stem}

export const cyclicNum = (offset: number, min: number, max: number, isDesc = false): number[] => {
  const len = max - min + 1
  const nums = new Array(len)
  for (let i = 0; i < len; i++) {
    const item = isDesc ? (offset + len - i) % len : (offset + len + i) % len
    nums[i] = item
  }
  return nums
}

export const by12Orders = (offset: number): number[] => {
  const dragonStart = [8, 10, 0, 2, 4, 6] // 申戌子寅辰午
  return dragonStart.map(item => {
    return (item + offset) % 12
  })
}

type StemsAndBranchs = { stem: Stem[]; branch: Branch[] }

export const getDirection24List = (lang = 'zh') => {
  const config = {
    lang
  }
  const res = [
    lunisolar.Branch.create(0, config), // 0 子
    lunisolar.Stem.create(9, config), // 1 癸
    lunisolar.Branch.create(1, config), // 2 丑
    lunisolar.Trigram8.create(4, config), // 3 艮
    lunisolar.Branch.create(2, config), // 4寅
    lunisolar.Stem.create(0, config), // 5 甲
    lunisolar.Branch.create(3, config), // 6卯
    lunisolar.Stem.create(1, config), // 7乙
    lunisolar.Branch.create(4, config), // 8辰
    lunisolar.Trigram8.create(6, config), // 9巽
    lunisolar.Branch.create(5, config), // 10巳
    lunisolar.Stem.create(2, config), // 11丙
    lunisolar.Branch.create(6, config), // 12午
    lunisolar.Stem.create(3, config), // 13丁
    lunisolar.Branch.create(7, config), // 14未
    lunisolar.Trigram8.create(0, config), // 15坤
    lunisolar.Branch.create(8, config), // 16申
    lunisolar.Stem.create(6, config), // 17庚
    lunisolar.Branch.create(9, config), // 18酉
    lunisolar.Stem.create(7, config), // 19辛
    lunisolar.Branch.create(10, config), // 20戌
    lunisolar.Trigram8.create(7, config), // 21乾
    lunisolar.Branch.create(11, config), // 22亥
    lunisolar.Stem.create(8, config) // 23壬
  ]
  return res
}

// 取得月厌位所在的24山的索引值
export const getMonthHateAtDrt24 = (branchValue: number): number => {
  // [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  return [0, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2][branchValue]
}

// 取得厌前厌后
export const getHateFrontAndBack = (
  branchValue: number,
  lang = 'zh'
): [StemsAndBranchs, StemsAndBranchs] => {
  const hate = getMonthHateAtDrt24(branchValue) // 月厌位
  const hateOp = (hate + 12) % 24 // 厌对位
  const hill24 = getDirection24List(lang)
  const ying: StemsAndBranchs = { stem: [], branch: [] }
  const yang: StemsAndBranchs = { stem: [], branch: [] }
  for (let i = 0; i < 24; i++) {
    if (i === hate || i === hateOp) continue
    const item = hill24[i]
    // 月厌逆行十二辰为阳
    if (
      (hate > hateOp && i < hate && i > hateOp) ||
      (hate < hateOp && ((0 <= i && i < hate) || (hateOp < i && i <= 23)))
    ) {
      if (item instanceof lunisolar.Stem) yang.stem.push(item)
      if (item instanceof lunisolar.Branch) yang.branch.push(item)
    } else {
      if (item instanceof lunisolar.Stem) ying.stem.push(item)
      if (item instanceof lunisolar.Branch) ying.branch.push(item)
    }
  }
  return [yang, ying]
}

// 通过地支取季节
export const getSeasonByBranch = (branchValue: number): number => {
  const monthIdx = (branchValue - 2) % 12
  return Math.floor(monthIdx / 3)
}

/**
 * 通过天干和地支索引值，计算60个天干地支组合的索引
 * @param stemValue 天干索引值
 * @param branchValue 地支索引值
 */
export const computeSBValue = (stemValue: number, branchValue: number): number => {
  // 如果一个为奇数一个为偶数，则不能组合
  if ((stemValue + branchValue) % 2 !== 0) throw new Error('Invalid SB value')
  return (stemValue % 10) + ((6 - (branchValue >> 1) + (stemValue >> 1)) % 6) * 10
}

export type FieldsType =
  | 'branch'
  | 'stem'
  | 'season'
  | 'term1'
  | 'month'
  | 'sb'
  | 'Trigram8'
  | 'direction24'
  | 'day'
  | 'branchMonth'

const transListCache = new Map<FieldsType, string[]>()

// 取得用于翻译成泽字的列表
export function getTransList(fieldsType: FieldsType) {
  if (transListCache.has(fieldsType)) return transListCache.get(fieldsType) as string[]
  let fields: string[] = []
  if (fieldsType === 'stem') {
    fields = [...(zh.stems as string[])]
  } else if (fieldsType === 'branch') {
    fields = [...(zh.branchs as string[])]
  } else if (fieldsType === 'season') {
    fields = [...(zh.seasonName as string[])]
  } else if (fieldsType === 'month') {
    fields = [...(zh.lunarMonths as string[])]
  } else if (fieldsType === 'term1') {
    fields = new Array(12).fill(0).map((v, i) => {
      return (zh.solarTerm as string[])[(i * 2 - 1 + 24) % 24]
    })
  } else if (fieldsType === 'sb') {
    fields = new Array(60).fill(0).map((v, i) => {
      const s = (zh.stems as string[])[i % 10]
      const b = (zh.branchs as string[])[i % 12]
      return `${s}${b}`
    })
  } else if (fieldsType === 'Trigram8') {
    fields = [...(zh.eightTrigram as string[])]
  } else if (fieldsType === 'direction24') {
    fields = getDirection24List('zh').map(v => v.name)
  } else if (fieldsType === 'day') {
    fields = [...(zh.lunarDays as string[])]
  } else if (fieldsType === 'branchMonth') {
    fields = [
      ...(zh.lunarMonths as string[]).slice(10, 12),
      ...(zh.lunarMonths as string[]).slice(0, 10)
    ]
  }
  transListCache.set(fieldsType, fields)
  return fields
}

export function getTran(value: string | number | number[], godTo: FieldsType) {
  const tran = getTransList(godTo)
  if (value === null) return ''
  if (typeof value === 'number' || (typeof value === 'string' && !Number.isNaN(Number(value))))
    return tran[value]
  if (typeof value === 'string') return value
  const valuesTran = value.map(v => getTran(v, godTo))
  return valuesTran
}

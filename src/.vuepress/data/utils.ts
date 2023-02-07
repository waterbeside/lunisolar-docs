import lunisolar, {Branch, Stem} from 'lunisolar'

export const cyclicNum = (offset: number, min: number, max: number, isDesc: boolean = false): number[] => {
  const len = max - min + 1
  const nums = new Array(len)
  for (let i = 0; i < len; i++) {
    let item = isDesc ? (offset + len - i) % len : (offset + len + 1) % len
    nums.push(item)
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

export const getDirection24List = (lang: string = 'zh') => {
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
  lang: string = 'zh'
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
      if (item instanceof Stem) yang.stem.push(item)
      if (item instanceof Branch) yang.branch.push(item)
    } else {
      if (item instanceof Stem) ying.stem.push(item)
      if (item instanceof Branch) ying.branch.push(item)
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
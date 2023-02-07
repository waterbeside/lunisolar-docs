import {
  cyclicNum,
  by12Orders,
  getHateFrontAndBack,
  getSeasonByBranch,
  computeSBValue
} from '../utils'

export const monthGods = {
  月神取月建三合者: {
    // 月神取月建三合者
    天德: [[9, 17, 13, 15, 23, 19, 20, 5, 1, 3, 11, 7], 'branch', 'direction24', 4],
    天德合: [[8, 1, 8, 5, 3, 2, 2, 5, 4, 11, 7, 6], 'branch', 'stem', 4],
    月德: [[8, 6, 2, 0], 'branch', 'stem', 4],
    月德合: [[3, 1, 7, 5], 'branch', 'stem', 4],
    // 按’丙甲壬庚‘顺序，同样是p212页印误
    月空: [[2, 0, 8, 6], 'branch', 'stem', 4],
    三合: [
      [
        [4, 8],
        [5, 9],
        [6, 10],
        [7, 11],
        [8, 0],
        [1, 9],
        [2, 10],
        [3, 11],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7]
      ],
      'branch',
      'branch',
      4
    ],
    五富: [[5, 8, 11, 2], 'branch', 'branch', 4],
    臨日: [[4, 9, 6, 11, 8, 1, 10, 3, 0, 5, 2, 7], 'branch', 'branch', 4],
    驛馬: [[2, 11, 8, 5], 'branch', 'branch', 4, ['天后']],

    天火: [[6, 3, 0, 9], 'branch', 'branch', -4],
    // 月煞又名月虛
    月煞: [[7, 4, 1, 10], 'branch', 'branch', -4],
    // 大時又名咸池故又忌取魚、乘船渡水
    大時: [[9, 6, 3, 0], 'branch', 'branch', -4, ['大敗咸池']],
    遊禍: [[11, 8, 5, 2], 'branch', 'branch', -4],
    天吏: [[3, 0, 9, 6], 'branch', 'branch', -4],
    九空: [[10, 7, 4, 1], 'branch', 'branch', -4],
    // 月刑為月建所傷之地，故所忌與三煞同
    月刑: [[3, 10, 5, 0, 4, 8, 6, 1, 2, 9, 7, 11], 'branch', 'branch', -4]
  },
  月神随月建顺行者: {
    建: [cyclicNum(0, 0, 11), 'branch', 'branch', -4, ['兵福', '小時', '土府']],
    除: [cyclicNum(1, 0, 11), 'branch', 'branch', 4, ['吉期', '兵寶']],
    满: [cyclicNum(2, 0, 11), 'branch', 'branch', -4, ['天巫', '福德']],
    平: [cyclicNum(3, 0, 11), 'branch', 'branch', -4, ['陽月天罡', '陰月河魁', '死神']],
    定: [cyclicNum(4, 0, 11), 'branch', 'branch', 4, ['時陰', '死氣']],
    執: [cyclicNum(5, 0, 11), 'branch', 'branch', 4, ['小耗']],
    破: [cyclicNum(6, 0, 11), 'branch', 'branch', -4, ['大耗']],
    危: [cyclicNum(7, 0, 11), 'branch', 'branch', -4],
    成: [cyclicNum(8, 0, 11), 'branch', 'branch', -4, ['天喜', '天醫']],
    收: [cyclicNum(9, 0, 11), 'branch', 'branch', -4, ['陽月河魁', '陰月天罡']],
    開: [cyclicNum(10, 0, 11), 'branch', 'branch', -4, ['時陽', '生氣']],
    閉: [cyclicNum(11, 0, 11), 'branch', 'branch', -4, ['血支']]
  },
  月神随四序者: {
    天赦: [[14, 30, 44, 0], 'season', 'sb', -4],
    母倉: [
      [
        [11, 0],
        [2, 3],
        [4, 7, 10, 1],
        [8, 9]
      ],
      'season',
      'branch',
      4
    ],
    四相: [
      [
        [2, 3],
        [4, 5],
        [8, 9],
        [0, 1]
      ],
      'season',
      'sttem',
      4
    ],
    時德: [[6, 4, 0, 2], 'season', 'branch', 4],
    王日: [[2, 5, 8, 11], 'season', 'branch', 4],
    官日: [[3, 6, 9, 0], 'season', 'branch', 4],
    守日: [[4, 7, 10, 1], 'season', 'branch', 4],
    相日: [[5, 8, 11, 2], 'season', 'branch', 4],
    民日: [[6, 9, 0, 3], 'season', 'branch', 4],
    四擊: [[10, 1, 4, 7], 'season', 'branch', -4],
    四忌: [[0, 12, 36, 48], 'season', 'sb', -4],
    四窮: [[11, 23, 47, 59], 'season', 'sb', -4],
    四耗: [[48, 51, 54, 57], 'season', 'sb', -4],
    四廢: [
      [
        [56, 57],
        [48, 59],
        [50, 51],
        [53, 42]
      ],
      'season',
      'sb',
      -4
    ],
    五虛: [
      [
        [5, 9, 1],
        [8, 0, 4],
        [11, 3, 7],
        [2, 6, 10]
      ],
      'season',
      'branch',
      -4
    ],
    八風: [
      [
        [13, 53],
        [40, 20],
        [43, 23],
        [10, 50]
      ],
      'season',
      'sb',
      -4
    ]
  },
  月神随建旺取墓辰者: {
    五墓: [[28, 4, 31, 31, 4, 22, 22, 4, 37, 37, 4, 28], 'branch', 'sb', -4]
  },
  月神随月建三合逆行一方者: {
    九坎: [[8, 5, 4, 1, 10, 7, 3, 0, 9, 6, 2, 11], 'branch', 'branch', -4]
  },
  月神随四序行三合者: {
    土符: [[8, 0, 1, 5, 9, 2, 6, 10, 3, 7, 11, 4], 'branch', 'branch', -4]
  },
  月神随四时行三合者纳甲者: {
    地囊: [
      [
        [27, 57],
        [51, 9],
        [35, 6],
        [31, 49],
        [0, 18],
        [15, 45],
        [40, 58],
        [52, 22],
        [53, 23],
        [2, 31],
        [37, 7],
        [14, 44]
      ],
      'branch',
      'branch',
      -4
    ]
  },
  月神随月建行纳甲六辰者: {
    陽德: [[6, 8, 10, 0, 2, 4], 'branch', 'branch', 4],
    陰德: [[1, 11, 9, 7, 5, 3], 'branch', 'branch', 4],
    天馬: [[2, 4, 6, 8, 10, 0], 'branch', 'branch', 4],
    兵禁: [[6, 4, 2, 0, 10, 8], 'branch', 'branch', -4]
  },
  月神随月建逆行一方者: {
    大煞: [[8, 9, 10, 5, 6, 7, 2, 3, 4, 11, 0, 1], 'branch', 'branch', -4]
  },

  月神随月建三合顺行一方者: {
    往亡: [[10, 1, 2, 5, 8, 11, 3, 6, 9, 0, 4, 7], 'branch', 'branch', -4]
  },
  月神随孟仲季顺行三支者: {
    歸忌: [[2, 0, 1], 'branch', 'branch', -4]
  },
  月神随月建阴阳顺行六辰者: {
    // 月神隨月建陰陽順行六辰者
    要安: [[7, 1, 2, 8, 3, 9, 4, 10, 5, 11, 6, 0], 'branch', 'branch', 4],
    玉宇: [[8, 2, 3, 9, 4, 10, 5, 11, 6, 0, 7, 1], 'branch', 'branch', 4],
    金堂: [[9, 3, 4, 10, 5, 11, 6, 0, 7, 1, 8, 2], 'branch', 'branch', 4],
    敬安: [[0, 6, 7, 1, 8, 2, 9, 3, 10, 4, 11, 5], 'branch', 'branch', 4],
    普護: [[1, 7, 8, 2, 9, 3, 10, 4, 11, 5, 0, 6], 'branch', 'branch', 4],
    福生: [[2, 8, 9, 3, 10, 4, 11, 5, 0, 6, 1, 7], 'branch', 'branch', 4],
    聖心: [[4, 10, 11, 5, 0, 6, 1, 7, 2, 8, 9, 3], 'branch', 'branch', 4],
    益後: [[5, 11, 0, 6, 1, 7, 2, 8, 9, 3, 4, 10], 'branch', 'branch', 4],
    續世: [[0, 6, 1, 7, 2, 8, 9, 3, 4, 10, 5, 11], 'branch', 'branch', 4, ['血忌']]
  },
  月神随月将逆行者: {
    // 月神隨月將逆行者
    月厭: [cyclicNum(0, 0, 11, true), 'branch', 'branch', -4],

    六合: [cyclicNum(1, 0, 11, true), 'branch', 'branch', 4],
    天賊: [cyclicNum(3, 0, 11, true), 'branch', 'branch', -4],
    天倉: [cyclicNum(4, 0, 11, true), 'branch', 'branch', 4],
    六儀: [cyclicNum(5, 0, 11, true), 'branch', 'branch', 4],
    月害: [cyclicNum(6, 0, 11, true), 'branch', 'branch', -4],
    天願: [[49, 0, 11, 10, 21, 32, 43, 54, 5, 16, 27, 38], 'branch', 'sb', 4],
    兵吉: [
      (() => {
        return new Array<number>(12).fill(0).map((v, idx) => {
          const arr: number[] = []
          for (let i = 2; i < 6; i++) {
            arr.push((i + idx) % 12)
          }
          return arr
        })
      })(),
      'branch',
      'branch',
      4
    ]
  },
  月神随月建行阴阳六辰者: {
    青龍: [by12Orders(0), 'branch', 'branch', 4],
    明堂: [by12Orders(1), 'branch', 'branch', 4],
    天刑: [by12Orders(2), 'branch', 'branch', -4],
    朱雀: [by12Orders(3), 'branch', 'branch', -4],
    金匱: [by12Orders(4), 'branch', 'branch', 4],
    天德: [by12Orders(5), 'branch', 'branch', 4],
    白虎: [by12Orders(6), 'branch', 'branch', -4],
    玉堂: [by12Orders(7), 'branch', 'branch', 4],
    天牢: [by12Orders(8), 'branch', 'branch', -4],
    玄武: [by12Orders(9), 'branch', 'branch', -4],
    司命: [by12Orders(10), 'branch', 'branch', 4],
    勾陳: [by12Orders(11), 'branch', 'branch', -4],
    解神: [[6, 6, 8, 8, 10, 10, 0, 0, 2, 2, 4, 4], 'branch', 'branch', -4]
  },
  月神取月建生比者: {
    // 月神取月建生比者
    月恩: [[0, 7, 2, 3, 6, 5, 4, 7, 8, 9, 6, 1], 'branch', 'branch', 4],
    復日: [[9, 5, 0, 1, 4, 2, 3, 5, 6, 7, 4, 8], 'branch', 'branch', 4]
  },
  月神从厌建起者: {
    // 不将
    不將: [
      (() => {
        const res = []
        for (let i = 0; i < 12; i++) {
          // 厌前天干配厌后地支即为阴阳不将
          const [front, back] = getHateFrontAndBack(i)
          const resItem: number[] = []
          const sn = getSeasonByBranch(i)
          const frontStemValue = front.stem.map(item => item.value)
          // 冬春己不将
          if (sn === 0 || sn === 3) frontStemValue.push(5)
          // 夏秋戊不将
          if (sn === 1 || sn === 2) frontStemValue.push(4)
          for (const fValue of frontStemValue) {
            for (const b of back.branch) {
              if ((fValue + b.value) % 2 !== 0) continue
              resItem.push(computeSBValue(fValue, b.value))
            }
          }
        }
        return res
      })(),
      'branch',
      'sb',
      4
    ],
    大會: [[48, 59, 10, 21, null, null, 42, null, 53, 16, 27, null], 'branch', 'sb', -4],
    小會: [[35, 24, null, 15, 4, 5, 54, null, null, null, 45, 34], , 'branch', 'sb', -4],
    行狠: [[37, null, null, null, 20, 31, null, null, null, null, null, 26], 'branch', 'sb', -4],
    了戾: [[49, null, null, null, 32, 43, null, null, null, null, null, 38], 'branch', 'sb', -4],

    孤辰: [
      [
        [1, 13, 25],
        null,
        null,
        null,
        [32, 56, 44],
        [55, 7, 19],
        null,
        null,
        null,
        null,
        null,
        [50, 2, 14]
      ],
      'branch',
      'sb',
      -4
    ],

    單陰: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          return i === 4 ? 4 : null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    純陽: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          return i === 5 ? 5 : null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    孤陽: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          return i === 11 ? 34 : null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    純陰: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          return i === 11 ? 35 : null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    歲薄: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 5) return [42, 54]
          if (i === 11) return [48, 24]
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    逐陣: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 1) return [48, 24]
          if (i === 7) return [42, 54]
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    陰陽交破: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 5) return 59
          if (i === 11) return 53
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    陰陽擊沖: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 0) return 42
          if (i === 6) return 48
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    陽破陰沖: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 1) return 43
          if (i === 7) return 49
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    陰位: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 4) return 16
          if (i === 10) return 10
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    陰道沖陽: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 3) return 45
          if (i === 9) return 15
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    三陰: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 2) return 57
          if (i === 8) return 51
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    陽錯: [
      [null, [49], [50], [51], [40], [53, 5], null, [43, 55], [56], [57], [46], [59]],
      'branch',
      'sb',
      -4
    ],
    陰錯: [
      [null, [59], [46], [57], [56], [43, 31], null, [53, 3], [40], [51], [50], [49]],
      'branch',
      'sb',
      -4
    ],
    陰陽俱錯: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 1) return 48
          if (i === 6) return 42
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    絕陰: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 5) return 4
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ],
    絕陽: [
      (() => {
        return new Array(12).fill(0).map((v, i) => {
          if (i === 0) return 34
          return null
        })
      })(),
      'branch',
      'sb',
      -4
    ]
  }
}

import { cyclicNum } from '../utils'

export const yearGods = {
  // 年神随岁干起者
  年神随岁干起者: {
    歲德: ['06284', 'stem', 'branch', 8],
    歲德合: ['51739', 'stem', 'branch', 8],
    歲祿: [[2, 3, 5, 6, 5, 6, 8, 9, 11, 0], 'stem', 'branch', 8],
    陽貴: [[7, 8, 9, 11, 1, 0, 1, 2, 3, 5], 'stem', 'branch', 8],
    陰貴: [[1, 0, 11, 9, 7, 8, 7, 6, 5, 3], 'stem', 'branch', 8],
    金神: [
      [
        [6, 7, 8, 9],
        [4, 5],
        [2, 3, 6, 7, 0, 1],
        [2, 3, 10, 11],
        [8, 9, 0, 1]
      ],
      'stem',
      'branch',
      -8
    ]
  },
  年神随岁干取纳甲卦变者: {
    // 主虚耗之事，犯之主财物耗散
    破敗五鬼: [[6, 4, 0, 1, 5, 2, 3, 7, 6, 4], 'stem', 'Trigram8', -8],
    陰府太歲: [
      [
        [2, 6],
        [3, 7],
        [4, 0],
        [7, 5],
        [0, 1]
      ],
      'stem',
      'Trigram8',
      -8
    ]
  },
  年神随岁支顺行者: {
    // 年神隨支順行者
    太歲: [cyclicNum(0, 0, 11), 'branch', 'branch', -8],
    太陽: [cyclicNum(1, 0, 11), 'branch', 'branch', 8],
    喪門: [cyclicNum(2, 0, 11), 'branch', 'branch', -8],
    太陰: [cyclicNum(3, 0, 11), 'branch', 'branch', -8],
    官符: [cyclicNum(4, 0, 11), 'branch', 'branch', 8, ['畜官']],
    // godList.畜官 = [...godList.官符]
    支德: [cyclicNum(5, 0, 11), 'branch', 'branch', 8, ['死符', '小耗']],
    // godList.死符 = [...godList.支德]; godList.小耗 = [...godList.支德];
    歲破: [cyclicNum(6, 0, 11), 'branch', 'branch', -8],
    // godList.大耗 = [...godList.歲破]
    龍德: [cyclicNum(7, 0, 11), 'branch', 'branch', 8],
    白虎: [cyclicNum(8, 0, 11), 'branch', 'branch', -8],
    福德: [cyclicNum(9, 0, 11), 'branch', 'branch', 8],
    吊客: [cyclicNum(10, 0, 11), 'branch', 'branch', -8],
    病符: [cyclicNum(11, 0, 11), 'branch', 'branch', -8]
    // 巡山羅㬋: [],
  },
  年神随岁支退行者: {
    // 年支隨歲退行者
    神后: [cyclicNum(0, 0, 11, true), 'branch', 'branch', 8],
    功曹: [cyclicNum(2, 0, 11, true), 'branch', 'branch', 8],
    天罡: [cyclicNum(4, 0, 11, true), 'branch', 'branch', -8],
    勝光: [cyclicNum(6, 0, 11, true), 'branch', 'branch', 8],
    傳送: [cyclicNum(8, 0, 11, true), 'branch', 'branch', 8],
    河魁: [cyclicNum(10, 0, 11, true), 'branch', 'branch', -8],
    六害: [cyclicNum(7, 0, 11, true), 'branch', 'branch', -8],
    五鬼: [cyclicNum(4, 0, 11, true), 'branch', 'branch', -8]
  },

  年神从岁支三合者: {
    // 年神從歲支三合者
    歲馬: [[2, 11, 8, 5], 'branch', 'branch', 8],
    歲刑: [[3, 10, 5, 0, 4, 8, 6, 1, 2, 9, 7, 11], 'branch', 'branch', -8],

    劫煞: [[5, 2, 11, 8], 'branch', 'branch', -8],
    災煞: [[6, 3, 0, 9], 'branch', 'branch', -8],
    歲煞: [[7, 4, 1, 10], 'branch', 'branch', -8],
    伏兵: [[2, 0, 8, 6], 'branch', 'branch', -8],
    大禍: [[3, 1, 9, 7], 'branch', 'branch', -8],
    坐煞: [
      [
        [2, 3],
        [0, 1],
        [8, 9],
        [6, 7]
      ],
      'branch',
      'stem',
      -8
    ],
    向煞: [
      [
        [8, 9],
        [6, 7],
        [2, 3],
        [0, 1]
      ],
      'branch',
      'stem',
      -8
    ],
    天官符: [[11, 8, 5, 2], 'branch', 'branch', 8],
    大煞: [[0, 9, 6, 3], 'branch', 'branch', -8],
    黃幡: [[4, 1, 10, 7], 'branch', 'branch', 8],
    豹尾: [[10, 7, 4, 1], 'branch', 'branch', 8],
    灸退: [[3, 0, 9, 6], 'branch', 'branch', 8]
  },
  年神随岁支顺行一方者: {
    // 年神隨歲支順行一方者
    飛廉: [[8, 9, 10, 5, 6, 7, 2, 3, 4, 11, 0, 1], 'branch', 'branch', -8]
  }
}

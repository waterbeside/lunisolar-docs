export const dayGods = {
  日神取一定干支者: {
    天恩: [
      [0, 1, 2, 3, 4, 15, 16, 17, 18, 19, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
      null,
      'sb',
      2
    ],
    五合: [[2, 3], null, 'sb', 2],
    除神: [[8, 9], null, 'sb', 2, ['五離']],
    鳴吠: [[30, 42, 6, 18, 20, 32, 56, 8, 21, 33, 45, 57, 9], null, 'sb', 2],
    鳴吠對: [[12, 36, 48, 50, 2, 26, 38, 51, 4, 27, 39], null, 'sb', 2],
    寶日: [[13, 22, 30, 36, 38, 39, 41, 43, 44, 45, 47, 52], null, 'sb', 2],
    義日: [[0, 3, 4, 5, 7, 8, 9, 11, 16, 37, 46, 54], null, 'sb', 2],
    製日: [[1, 10, 18, 24, 26, 27, 29, 31, 32, 33, 35, 40], null, 'sb', 2],
    專日: [[4, 5, 34, 42, 48, 50, 51, 53, 55, 56, 57, 59], null, 'sb', -2],
    伐日: [[6, 12, 14, 15, 17, 19, 20, 21, 23, 28, 49, 58], null, 'sb', -2],
    八專: [[50, 43, 55, 56, 49], null, 'sb', -2],
    觸水龍: [[12, 19, 49], null, 'sb', -2],
    無祿: [[40, 41, 32, 23, 34, 25, 16, 17, 8, 59], null, 'sb', -2],
    重日: [[35], null, 'sb', -2]
  },
  日神按年取干支者: {
    // 日神按年取干支者
    上朔: [[59, 5, 11, 17, 23, 29, 35, 41, 47, 53], 'stem', 'sb', -2]
  },
  日神按月取日数者: {
    // 日神按月取數者
    長星: [
      [[7], [4], [1], [9], [15], [10], [8], [2, 5], [3, 4], [1], [12], [9]],
      'month',
      'day',
      -2
    ],
    短星: [
      [[21], [19], [16], [25], [25], [20], [22], [18, 19], [16, 17], [15], [22], [25]],
      'month',
      'day',
      -2
    ]
  },
  日神按朔取日数者: {
    反支: [[6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1], 'branch', 'day', -2]
  },
  日神按节气取数者: {
    // 日神按节气取数者
    四離: ['冬至 夏至 春分 秋分 各前一日', null, null, -2],
    四絕: ['立春 立夏 立秋 立冬 各前一日', null, null, -2],
    氣往亡: [
      `立春後第七日 驚蟄後十四日 清明後二十一日 立夏後第八日 芒種後十六日 小暑後二十四日 立秋後第九日 白露後十八日 寒露後二十七日 立冬後十日 大雪後二十日 小寒後三十日`.split(
        ' '
      ),
      null,
      null,
      -2
    ]
  }
}

import { cyclicNum, by12Orders } from '../utils'
export const hourGods = {
  时神从日干起者: {
    // 時神從日干起者
    日祿: [[2, 3, 5, 6, 5, 6, 8, 9, 11, 0], 'stem', 'branch', 1],
    天乙貴人: [[
      [7, 1],
      [8, 0],
      [9, 11],
      [11, 9],
      [1, 7],
      [0, 8],
      [1, 7],
      [2, 6],
      [3, 5],
      [5, 3]
    ], 'stem', 'branch', 1],
    喜神: [[2, 10, 8, 6, 4], 'stem', 'branch', 1],
    天官貴人: [[[9], [8], [0], [11], [3], [2], [6], [5], [7, 1], [4, 10]], 'stem', 'branch', 1],
    福星貴人: [[[2], [1, 11], [0, 10], [9], [8], [7], [6], [5], [4], [3]],, 'stem', 'branch', 1],
    五不遇: [[6, 7, 8, 9, 0, 1, 2, 3, 4, 5], 'stem', 'stem', -1],
    路空: [[
      [8, 9],
      [6, 7],
      [4, 5],
      [2, 3],
      [0, 1, 10, 11]
    ], 'stem', 'branch', -1],
  },
  时神从日支起者: {
    // 時神從日支起者
    日建: [cyclicNum(0, 0, 11), 'branch', 'branch', 1],
    日合: [[1, 0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],  'branch', 'branch', 1],
    日馬: [[2, 11, 8, 5],  'branch', 'branch', 1],
    日破: [cyclicNum(6, 0, 11),,  'branch', 'branch', -1],
    日害: [[7, 6, 5, 4, 3, 2, 1, 0, 11, 10, 9, 8], 'branch', 'branch', -1],
    日刑: [[3, 10, 5, 0, 4, 8, 6, 1, 2, 9, 7, 11], 'branch', 'branch', -1],
    青龍: [by12Orders(0),'branch', 'branch', 4],
    明堂: [by12Orders(1),'branch', 'branch', 4],
    天刑: [by12Orders(2),'branch', 'branch', -4],
    朱雀: [by12Orders(3),'branch', 'branch',  -4],
    金匱: [by12Orders(4),'branch', 'branch', 4],
    寶光: [by12Orders(5),'branch', 'branch', 4],
    白虎: [by12Orders(6),'branch', 'branch', -4],
    玉堂: [by12Orders(7),'branch', 'branch', 4],
    天牢: [by12Orders(8),'branch', 'branch', -4],
    玄武: [by12Orders(9),'branch', 'branch', -4],
    司命: [by12Orders(10),'branch', 'branch', 4],
    勾陳: [by12Orders(11),'branch', 'branch', -4],
  },
  时神随月将及日干支者: {
    貴登天門:[[
      [[5, 11], [4, 10], [3, 9], null, null, null, null, null, [9], [8, 2], [7, 1], [6, 0]], // 甲
      [[4, 0], [3, 11], [10], [9], null, null, [10], [9], [8], [7, 3], [6, 2], [5, 1]], // 乙
      [[1], [0], [11], [10], null, [11], [10], [9], [8], [7], [6], [5, 3], [4, 2]], // 丙
      [[3], [2], [1], [0], [9, 11], [8], [7], [6], [5], [4], [3], null], // 丁
      [null, null, [9, 3], [8, 2], [7, 1], [6, 0], [5, 11], [4, 10], [3, 9], null, null, null], // 戊
      [null, [3], [2], [9, 1], [8, 0], [7, 11], [6, 10], [5], [4], [3], null, null], // 已
      [null, null, [9, 3], [8, 2], [7, 1], [6, 0], [5, 11], [4, 10], [3, 9], null, null, null], // 庚
      [null, null, [8], [7, 3], [6, 2], [5, 1], [4, 0], [3, 11], [10], [9], null, null], // 辛
      [null, [8], [7], [6], [4, 2], [3, 1], [2, 0], [11], [10], [9], null], // 壬
      [[7, 9], [6, 8], [5], [4], [3], [2], null, [2], [1], [0], [9, 11], [8, 10]] // 癸
    ], ['stem', 'branch'], 'branch', 1],
    九醜: [
      (() => {
        const NINE_UGLILY_DAY = [24, 54, 48, 18, 51, 15, 27, 21, 45, 57]
        const NINE_UGLILY_TERM_ORDER = [2, 1, 0, 11, 10, 9, 8, 7, 6, 5, 4, 3]
        const createListItems = (offset) => {
            return NINE_UGLILY_TERM_ORDER.map(i => (i + offset + 12) % 12)
        }
        const listDict = {
          子: createListItems(0),
          午: createListItems(6),
          卯: createListItems(-3),
          酉: createListItems(3),
        }
        return [
          listDict['子'],
          listDict['午'],
          listDict['子'],
          listDict['午'],
          listDict['卯'],
          listDict['卯'],
          listDict['卯'],
          listDict['酉'],
          listDict['酉'],
          listDict['酉']
        ]
      })(),  ['sb', 'branch'], 'branch', 1]
  },
  时神随日六旬者: {
    旬空: [[
      [10, 11],
      [8, 9],
      [6, 7],
      [4, 5],
      [2, 3],
      [0, 1]
    ], ['甲子旬', '甲戌', '甲申', '甲午', '甲辰', '甲寅'], 'branch', 1]
  }  
}

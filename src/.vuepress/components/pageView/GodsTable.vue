<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
// import DataTable from '../common/DataTable.vue'
import { gods } from '../../data/gods'
import zh from 'lunisolar/locale/zh'
import { getDirection24List } from '../../data/utils'

type FieldsType = 
  | 'branch' | 'stem' | 'season' | 'term1' 
  | 'month' | 'sb' | 'Trigram8' | 'direction24'
  | 'day'

interface Props {
  godType: 'year' | 'month' | 'day' | 'hour'
  godBuildType: string
  fieldsType?: FieldsType
  fields?: string[]
  first?: string
  vItemWidth?: number
  vItemPaddingX?: number
}

interface ListItem {
  key: string
  content: string[]
  luck: number
  alias?: string[]
}

type GodData = [any[], string | [string, string] | null, FieldsType, number, string[] | undefined]

const props = withDefaults(defineProps<Props>(), {
  first: '',
  vItemWidth: 20,
  vItemPaddingX: 4
})
let fields: string[] = []

let fieldsType: FieldsType | null = null


let first: string = props.first
let list: ListItem[] = []
const transListCache = new Map<FieldsType, string[]>()

function init() {
  const godsData = gods[props.godType][props.godBuildType]
  if (!godsData) return
  const godNames = Object.keys(godsData)
  fieldsType = props.fieldsType ?? godsData[godNames[0]][1]
  if (fieldsType) {
    fields = getTransList(fieldsType)
  }
  buildList(godsData)
}

// 取得用于翻译成泽字的列表
function getTransList(fieldsType: FieldsType) {
  if (transListCache.has(fieldsType)) return transListCache.get(fieldsType) as string[]
  let fields:string[] = []
  if (fieldsType === 'stem') {
    fields = [...zh.stems]
  } else if (fieldsType === 'branch') {
    fields = [...zh.branchs]
  } else if (fieldsType === 'season') {
    fields = [...zh.seasonName]
  } else if (fieldsType === 'month') {
    fields = [...zh.lunarMonths]
  } else if (fieldsType === 'term1') {
    fields = new Array(12).fill(0).map((v, i) => {
      const solarTerm = zh.solarTerm.map((v, i) => {
        zh.solarTerm[(i + 2) % 24]
      })
      return solarTerm[(i * 2 + 1) % 24]
    })
  } else if (fieldsType === 'sb') {
    fields = new Array(60).fill(0).map((v, i) => {
      const s = zh.stems[i % 10]
      const b = zh.branchs[i % 12]
      return `${s}${b}`
    })
  } else if (fieldsType === 'Trigram8') {
    fields = [...zh.eightTrigram]
  } else if (fieldsType === 'direction24') {
    fields = getDirection24List('zh').map(v => v.name)
  } else if (fieldsType === 'day') {
    fields = [...zh.lunarDays]
  }
  transListCache.set(fieldsType, fields)
  return fields
}

function getTran(value: string | number | number[], godTo: FieldsType) {
  const tran = getTransList(godTo)
  if (value === null) return ''
  if (typeof value === 'number'|| ( typeof value === 'string' && !Number.isNaN(Number(value)))) return tran[value]
  if (typeof value === 'string') return value
  const valuesTran = value.map(v => getTran(v, godTo))
  return valuesTran
}

function buildList(godsData) {
  const godNames = Object.keys(godsData)
  for (const god of godNames) {
    const godData = godsData[god]
    const [rule, from, to, luckLevel, alias] = godData as GodData
    console.log(rule)
    const row:ListItem = {key: god, content: [], luck: luckLevel}
    if (alias && alias.length > 0) row.alias = alias
    if (fieldsType !== null) {
      for (let i = 0; i < fields.length; i++) {
        const value = rule[i % rule.length]
        row.content.push(getTran(value, to))
      }
      
    } else {
      row.content.push(getTran(rule, to))
    }
    list.push(row)
    
    
  }
}

init()
</script>

<template>
  <table class="godsTable" :style="{'--v-item-width': props.vItemWidth + 'px', '--v-item-padding-x': props.vItemPaddingX + 'px'}">
    <thead v-if="fieldsType !== null">
      <tr>
        <th>{{ first }}</th>
        <th v-for="field in fields" :key="field">
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list" :key="item.key">
        <td class="god-key">
        {{ item.key }}
          <div v-if="item.alias">
            <span class="god-alias" v-for="n in item.alias">{{ n }}</span>
          </div>
        </td>
        <td v-for="v in item.content">
          <span v-if="typeof v === 'string' || typeof v === 'number'">{{ v }}</span>
          <template v-else v-for='vItem in v'>
            <span class="v-item">{{ vItem }}</span>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.godsTable {
  text-align: center;
  thead {
    font-weight: 700;
  }
  .god-key {
    min-width: 70px;
    text-align: left;
  }
  .god-alias {
    display: inline-block;
    font-size: 13px;
    margin-right: 5px;
    opacity: 0.8;
  }
  .v-item {
    display: inline-block;
    padding: 4px var(--v-item-padding-x);
    min-width:  var(--v-item-width);
  }
}
</style>

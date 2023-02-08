<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'
import { gods } from '../../data/gods'
import { getTransList, getTran } from '../../data/utils'

type GodName = '貴登天門' | '九醜' | '旬空'

type FieldsType = 'sb' | 'stem' | 'branch'

interface Props {
  godName: GodName
  vItemWidth?: number
  vItemPaddingX?: number
}

interface ListItem {
  key: string
  content: any[]
  luck: number
  alias?: string[]
}

type GodData = [any[], string | any[], FieldsType, number, string[] | undefined]

const props = withDefaults(defineProps<Props>(), {
  first: '',
  vItemWidth: 20,
  vItemPaddingX: 4
})
let fields: string[] = []

const keyWidth = computed(() => {
  if (props.godName === '貴登天門') {
    return 30
  } else {
    return 80
  }
})

let list: ListItem[] = []

function init() {
  const godData =
    gods.hour[props.godName !== '旬空' ? '时神随月将及日干支者' : '时神随日六旬者'][props.godName]
  if (!godData) return

  if (props.godName === '貴登天門') {
    fields = ['', ...getTransList('term1')]
  } else if (props.godName === '九醜') {
    fields = getTransList('term1')
  } else if (props.godName === '旬空') {
    fields = godData[1]
  }
  buildList(godData)
}

function buildList(godData) {
  let keys: string[] = []
  if (props.godName === '貴登天門') {
    keys = getTransList('stem')
  } else if (props.godName === '九醜') {
    keys = godData[1][0].rule.map(item => getTran(item, 'sb') + '日')
  }
  const [rule, , to, luckLevel] = godData as GodData
  if (props.godName === '旬空') {
    const row: ListItem = { key: '旬空', content: [], luck: luckLevel }
    for (let j = 0; j < rule.length; j++) {
      const value = rule[j]
      row.content.push(getTran(value, to))
    }
    list.push(row)
  } else {
    for (let i = 0; i < rule.length; i++) {
      const row: ListItem = { key: keys[i], content: [], luck: luckLevel }
      if (props.godName === '貴登天門') {
        row.content.push(['旦', '夕'])
      }
      for (let j = 0; j < rule[i].length; j++) {
        const value = rule[i][j]
        row.content.push(getTran(value, to))
      }

      list.push(row)
    }
  }
}

init()
</script>

<template>
  <table
    class="godsTable"
    :style="{
      '--v-item-width': props.vItemWidth + 'px',
      '--v-item-padding-x': props.vItemPaddingX + 'px',
      '--key-width': keyWidth + 'px'
    }"
  >
    <thead>
      <tr>
        <th></th>
        <th v-for="field in fields" :key="field" :class="`th-${field ?? 'empty'}`">
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.key">
        <td class="god-key">
          {{ item.key }}
          <div v-if="item.alias">
            <span v-for="n in item.alias" :key="n" class="god-alias">{{ n }}</span>
          </div>
        </td>
        <td
          v-for="(v, i) in item.content"
          :key="v"
          class="content-item"
          :class="{ dx: props.godName === '貴登天門' && i === 0 }"
        >
          <span v-if="typeof v === 'string' || typeof v === 'number'">{{ v }}</span>
          <template v-else>
            <template v-for="vItem in v" :key="vItem">
              <span class="v-item">{{ vItem }}</span>
            </template>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.godsTable {
  text-align: center;
  thead {
    font-weight: 700;
  }
  .god-key {
    min-width: var(--key-width);
    text-align: left;
  }
  .god-alias {
    display: inline-block;
    font-size: 13px;
    margin-right: 5px;
    opacity: 0.8;
  }
  .content-item {
    &.dx {
      font-size: 12px;
    }
  }
  .v-item {
    display: inline-block;
    padding: 4px var(--v-item-padding-x);
    min-width: var(--v-item-width);
  }
  .th-empty {
    width: 30px;
  }
}
</style>

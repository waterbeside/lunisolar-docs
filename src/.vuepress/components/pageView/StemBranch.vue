<script lang="ts" setup>
import zh from 'lunisolar/locale/zh'
import en from 'lunisolar/locale/en'
import OrderGrid from '../common/OrderGrid.vue'
import { defineProps, computed } from 'vue'

interface Props {
  flag: 'stem' | 'branch' | 'sb'
}

const props = defineProps<Props>()

const list: { name: string; value: number }[] = []

if (props.flag === 'stem') {
  for (let i = 0; i < 10; i++) {
    const listItem = {
      value: i,
      name: zh.stems[i],
      nameEn: en.stems[i],
      e5: zh.fiveElements[Math.floor(i / 2)]
    }
    list.push(listItem)
  }
} else if (props.flag === 'branch') {
  for (let i = 0; i < 12; i++) {
    let eIdx = Math.floor((i + 10) / 3) % 4
    if ((i + 10) % 3 === 2) {
      eIdx = 2
    } else {
      eIdx = eIdx < 2 ? eIdx : eIdx + 1
    }
    const listItem = {
      value: i,
      name: zh.branchs[i],
      nameEn: en.branchs[i],
      e5: zh.fiveElements[eIdx],
      zd: zh.chineseZodiac[i]
    }
    list.push(listItem)
  }
} else {
  for (let i = 0; i < 60; i++) {
    const stemValue = i % 10
    const branchValue = i % 12
    const listItem = {
      value: i,
      name: zh.stems[stemValue] + zh.branchs[branchValue],
      nameEn: en.stems[stemValue] + '-' + en.branchs[branchValue]
    }
    list.push(listItem)
  }
}

const fields = [{ name: 'value' }, { name: 'name' }, { name: 'nameEn' }]
const idField = 'value'

if (['branch', 'stem'].includes(props.flag)) {
  fields.push({ name: 'e5' })
}

if (props.flag === 'branch') {
  fields.push({ name: 'zd' })
}

const colCount = computed<number>(() => {
  if (props.flag === 'branch') return 12
  return 10
})
const colCountXs = computed<number>(() => {
  if (props.flag === 'stem') return 5
  return 6
})
</script>

<template>
  <OrderGrid
    :fields="fields"
    :datas="list"
    :id-field="idField"
    :col-count="colCount"
    :col-count-xs="colCountXs"
  />
</template>

<style lang="scss" scoped>
:deep(.orderGrid__field-item--name) {
  font-weight: 700;
}
</style>

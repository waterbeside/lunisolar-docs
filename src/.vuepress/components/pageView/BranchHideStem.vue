
<script lang="ts" setup>
import lunisolar from 'lunisolar'
import DataTable from '../common/DataTable.vue'
// import { defineProps, computed } from 'vue'

interface ListItem {
  branch: string
  s1: string
  s2: string
  s3: string
}
const list: ListItem[] = []

for (let i = 0; i < 12; i++) {
  const b = lunisolar.Branch.create(i)
  const [s1, s2, s3] = b.hiddenStems
  const listItem = {
    branch: b.name,
    s1: s1.name,
    s2: s2?.name || '',
    s3: s3?.name || ''
  }
  list.push(listItem)
}

const fields = [
  {name: 'branch', title: '地支'},
  {name: 's1', title: '本气'},
  {name: 's2', title: '中气'},
  {name: 's3', title: '余气'},
]
const idField = 'branch'

</script>


<template>
<DataTable
  :fields="fields"
  :datas="list"
  :idField="idField"
 />
</template>

<style lang="scss">
</style>
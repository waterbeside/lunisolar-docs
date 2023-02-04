
<script lang="ts" setup>
import lunisolar from 'lunisolar'
import DataTable from '../common/DataTable.vue'
// import { defineProps, computed } from 'vue'

interface ListItem {
  branch: string
  conflict: string
  destroying: string
  punishing: string
  harming: string
}
const list: ListItem[] = []

for (let i = 0; i < 12; i++) {
  const b = lunisolar.Branch.create(i)
  const listItem = {
    branch: b.name,
    conflict: b.conflict.name,
    destroying: b.destroying.name,
    punishing: b.punishing.name,
    harming: b.harming.name,
    g6: b.group6.name
  }
  list.push(listItem)
}

const fields = [
  {name: 'branch', title: '地支'},
  {name: 'conflict', title: '冲'},
  {name: 'destroying', title: '破'},
  {name: 'punishing', title: '刑'},
  {name: 'harming', title: '害'},
  {name: 'g6', title: '六合'}
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
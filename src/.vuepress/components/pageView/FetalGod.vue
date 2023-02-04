
<script lang="ts" setup>
import lunisolar from 'lunisolar'
import zh from 'lunisolar/plugins/fetalGod/locale/zh'
import OrderGrid from '../common/OrderGrid.vue'

const list: {name: string, fetalGod: string}[] = []

for (let i = 0; i < 60; i++) {
  const sb = new lunisolar.SB(i)
  const listItem = {
    name: sb.name,
    fetalGod: zh.fetalGodDayDesc[i],
  }
  list.push(listItem)
}

const fields = [{name: 'name'}, {name: 'fetalGod'}]
const idField = 'value'

const colCount = 5
const colCountXs = 3

</script>


<template>
<OrderGrid
  :fields="fields"
  :datas="list"
  :idField="idField"
  :colCount="colCount"
  :colCountXs="colCountXs"
 />
</template>

<style lang="scss" scoped>
:deep(.orderGrid__field-item--name) {
  font-weight: 700;
}
</style>
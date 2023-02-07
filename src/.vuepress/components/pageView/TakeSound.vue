<script lang="ts" setup>
import lunisolar from 'lunisolar'
import takeSound from 'lunisolar/plugins/takeSound'
import OrderGrid from '../common/OrderGrid.vue'

lunisolar.extend(takeSound)

const list: { name: string; takeSound: string }[] = []

for (let i = 0; i < 30; i++) {
  const sb = new lunisolar.SB(i * 2)
  const sb1 = new lunisolar.SB(i * 2 + 1)
  const listItem = {
    name: `${sb.name}、${sb1.name}`,
    takeSound: sb.takeSound
  }
  list.push(listItem)
}

const fields = [{ name: 'name' }, { name: 'takeSound' }]
const idField = 'value'

const colCount = 5
const colCountXs = 3
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
:deep(.orderGrid__field-item--takeSound) {
  font-weight: 700;
}
</style>

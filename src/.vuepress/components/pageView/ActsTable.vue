<script lang="ts" setup>
import OrderGrid from '../common/OrderGrid.vue'
import { defineProps, computed } from 'vue'
import { TheGods } from 'lunisolar/plugins/theGods'

interface Props {
  actType: 0 | 1 | 2 | 3
}

const props = defineProps<Props>()


const fields = [{ name: 'value' }]
const idField = 'value'

const list: { value: string }[] = TheGods.getAllActs(props.actType).map(i => ({value: i}))


</script>

<template>
  <OrderGrid
    :fields="fields"
    :datas="list"
    :id-field="idField"
    :col-count="6"
    :col-count-xs="4"
  />
</template>

// <style lang="scss" scoped>

// </style>

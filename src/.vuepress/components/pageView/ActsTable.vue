<script lang="ts" setup>
import OrderGrid from '../common/OrderGrid.vue'
import { defineProps } from 'vue'
import theGods from 'lunisolar/plugins/theGods'


const TheGods = theGods.TheGods

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


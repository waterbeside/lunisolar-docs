<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
import DataTable from '../common/DataTable.vue'
import { gods } from '../../data/gods'


interface Props {
  godType: 'year' | 'month' | 'day' | 'hour'
  godBuildType: string
  fieldsType?: 'branch' | 'stem' | 'season' | 'term1',
  fields?: string[]
}

const props = defineProps<Props>()
const fields = []

function init() {
  const godData = gods[props.godType][props.godBuildType]
  if (!godData) { return }
  const godNames = godData.keys()
  const gods
}


</script>

<template>
  <table class="dataTable">
    <thead>
    <tr>
      <th v-for="field in fields" :key="field.name" :style="{width:field.width || 'auto'}">
       {{ field.title ?? field.name }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="data, index in props.datas" :key="props.idField ? data[props.idField] : index">
      <td v-for="field in fields">
        {{ data[field.name] }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.dataTable {
  thead {
    font-weight: 700;
  }
}
</style>
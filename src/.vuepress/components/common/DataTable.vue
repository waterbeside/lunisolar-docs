<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface FieldSetting {
  name: string
  title?: string
  width?: number
}

interface Props {
  fields: FieldSetting[]
  datas: any[]
  idField?: string
  isShowHead?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isShowHead: true
})
</script>

<template>
  <table class="dataTable">
    <thead v-if="isShowHead">
      <tr>
        <th v-for="field in fields" :key="field.name" :style="{ width: field.width || 'auto' }">
          {{ field.title ?? field.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in props.datas" :key="props.idField ? data[props.idField] : index">
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

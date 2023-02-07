<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
// import DataTable from '../common/DataTable.vue'
import { gods } from '../../data/gods'
import zh from 'lunisolar/locale/zh'

interface Props {
  godType: 'year' | 'month' | 'day' | 'hour'
  godBuildType: string
  fieldsType?: 'branch' | 'stem' | 'season' | 'term1' | 'month'
  fields?: string[]
}

const props = defineProps<Props>()
let fields: string[] = []

function init() {
  const godData = gods[props.godType][props.godBuildType]
  if (!godData) return
  const godNames = godData.keys()
  const filedsType = props.fieldsType ?? godData[godNames[0]][1]
  buildFields(filedsType)
}

function buildFields(fieldsType) {
  if (fieldsType === 'stem') {
    fields = [...zh.stems]
  } else if (fieldsType === 'branch') {
    fields = [...zh.branchs]
  } else if (fieldsType === 'season') {
    fields = [...zh.seasonName]
  } else if (fieldsType === 'month') {
    fields = [...zh.lunarMonths]
  } else if (fieldsType === 'term1') {
    fields = new Array(12).fill(0).map((v, i) => {
      const solarTerm = zh.solarTerm.map((v, i) => {
        zh.solarTerm[(i + 2) % 24]
      })
      return solarTerm[(i * 2 + 1) % 24]
    })
  }
}
</script>

<template>
  <table class="dataTable">
    <thead>
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

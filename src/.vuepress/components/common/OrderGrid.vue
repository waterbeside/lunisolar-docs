<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'

interface FieldSetting {
  name: string
  title?: string
}

interface Props {
  fields: FieldSetting[]
  datas: any[]
  idField?: string
  colCount?: number
  colCountXs?: number
}

const props = withDefaults(defineProps<Props>(), {
  colCount: 10
})

const colCountXs = computed(() => {
  return props.colCountXs ?? props.colCount
})
</script>

<template>
  <div class="orderGrid" :style="{'--col-count': props.colCount, '--col-count-xs': colCountXs}">
    <div class="orderGrid__item" v-for="data, index in datas" :key="props.idField ? data[props.idField] : index">
      <div class="orderGrid__field-item" :class="`orderGrid__field-item--${field.name}`" v-for="field in fields">
        {{ data[field.name] }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.orderGrid {
  --col-count: 10;
  --col-count-xs: 5;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(var(--col-count), 1fr);
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(var(--col-count-xs), 1fr);
  }
  &__item {
    border: 1px solid var(--table-border-color);
  }
  &__field-item {
    padding: 8px 12px;
  }
  &__field-item + &__field-item {
    border-top: 1px solid var(--table-border-color);
  }
  &__item:nth-child(even) {
    background-color: var(--table-even-bg-color);
  }
}
</style>
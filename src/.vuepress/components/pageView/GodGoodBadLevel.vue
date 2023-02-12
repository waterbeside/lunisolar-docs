<script lang="ts" setup>
// import { ref } from 'vue'
import { GOD_LEVELS , GOD_LEVEL_DICT} from '../../data/godsConstant'
import { getTran } from '../../data/utils'
const cols = [...GOD_LEVELS]
const godKeys = Object.keys(GOD_LEVEL_DICT)
const list: {key: string, content: any[]}[] = []

for (const key of godKeys) {
  const listItem = { key, content: new Array(6).fill('').map(i => new Array())}
  for (const levelItem of GOD_LEVEL_DICT[key]) {
    const [levelIdx, branchValue, gods ] = levelItem
    const branchs = getTran(branchValue, 'branch').join('') + '月'
    listItem.content[levelIdx].push({branchs, gods})
  }
  list.push(listItem)
}
// console.log('list', list)

</script>

<template>
  <table class="godGbl-table">
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols" :key="c[0]" class="head__item">
          {{ c[0] }}
        </th>
      </tr>
      <tr>
        <th></th>
        <td v-for="c in cols" :key="c[0]" class="head__item--sub">
          {{ c[1] }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="li in list" :key="li.key">
        <td class="key-td">{{ li.key }}</td>
        <td v-for="c, i in li.content" :key="i">
          <div v-for="cItem in c" :key="cItem" class="content-box">
            <span class="month">{{ cItem.branchs }}</span>
            <span v-for="g in cItem.gods" :key="g" class="god"> {{ g }}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.godGbl-table {
  .head__item--sub {
    font-size: 12px;
  }
  td {
    padding: 0;
  }
  thead td, .key-td, .content-box {
    padding: 0.4em 1em;
  }
  .content-box + .content-box {
    border-top: 1px dotted var(--table-border-color);
  }
  .month {
    font-size: 1.1em;
  }
  .god {
    display: inline-block;
    background-color: var(--text-box-bg-color);
    border-radius: 3px;
    margin: 0 4px 4px 0; 
    padding: 2px 4px;
    font-size: 12px;
  }
}
</style>


<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-05 19:30:53
 * @LastEditTime: 2023-12-09 11:38:32
-->
<template>
  <div class="about">
    <h1>使用pinia</h1>
    <div @click="handleChange">
      <span
        data-vie="num"
        :class="{
          red: active('num')
        }"
        >OptionsApi</span
      >
      |
      <span
        data-vie="list"
        :class="{
          red: active('list')
        }"
        >CompositionApi</span
      >
    </div>
    <component :is="componentList[selectedComponent]" />
    <component :is="h" />
  </div>
</template>
<script setup>
import { reactive, ref, shallowRef, computed, toRefs, resolveComponent } from 'vue'
import { useComponentList } from './composition/useComponentList'
const componentList = useComponentList()
// resolveComponent 只能加载同步组件
const h = resolveComponent('All')
console.log(h, 'hhhhhhhhhhhhhhhhhhhhh')
console.log(componentList)
const active = computed(
  // 完整写法
  // {
  //   get() {
  //     return val => {
  //       return selectedComponent.value === val
  //     }
  //   }
  // },
  // set() {}

  // 默认 返回一个函数 调用 get方法
  () => {
    return val => {
      return selectedComponent.value === val
    }
  }
)
let selectedComponent = ref('num')
const handleChange = e => {
  selectedComponent.value = e.target.dataset.vie
}
</script>
<style lang="scss" scoped>
.red {
  color: red;
}
</style>

<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-30 00:52:03
 * @LastEditTime: 2023-08-30 01:36:09
-->
<template>
  <div>
    <div>options api风格使用</div>
    <button @click="decrement">-</button>
    {{ num }} --- {{ doubleNum }}
    <button @click="increment">+</button>
    <br />
    <button @click="reset">重置</button>
    <br />
    <button @click="set">设定值</button>
  </div>
</template>
<script setup name="Num">
import { useNumStore } from '@/pinia/useNumStore'
const store = useNumStore()
import { storeToRefs } from 'pinia'
// 解构 state getters 通过storeToRefs来保持响应式
const { num, doubleNum } = storeToRefs(store)
// action中 通过结构来获取方法
const { increment, decrement } = store
// 重置当前仓库的值
const reset = () => {
  store.$reset()
}
// 设置
const set = () => {
  // 对象形式修改
  store.$patch({
    // ... 可以设置多个
    num: 1000
  })
  // 函数式修改
  //   store.$patch(state => {
  //     console.log(state)
  //     state.num = 300
  //   })
}
</script>

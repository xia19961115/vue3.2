<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-05 19:30:53
 * @LastEditTime: 2023-08-29 16:23:02
-->
<template>
  <div class="about">
    <h1>使用pinia</h1>
    <button @click="decrement">-</button>
    {{ num }} --- {{ doubleNum }}
    <button @click="increment">+</button>
  </div>
</template>
<script setup>
import { useNumStore } from '../pinia/useNumStore'
const store = useNumStore()
import { storeToRefs } from 'pinia'
// 解构 state getters 通过storeToRefs来保持响应式
const { num, doubleNum } = storeToRefs(store)
// action中 通过结构来获取方法
const { increment, decrement } = store
</script>

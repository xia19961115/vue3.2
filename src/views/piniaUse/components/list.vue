<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-30 00:52:03
 * @LastEditTime: 2023-08-30 02:20:07
-->
<template>
  <div>
    <div>composition api风格使用</div>
    其他仓库的数据:{{ otherNum }}
    <br />
    {{ list }}
    <br />
    <button @click="handleAdd">添加数据</button>
    <button @click="handleDel">随机删除数据</button>
  </div>
</template>
<script setup name="List">
import { useListStroe } from '@/pinia/useListStroe'
const store = useListStroe()
import { storeToRefs } from 'pinia'
// 通过storeToRefs来保持响应式 读取值 xxx.value
const { list, listLength, otherNum } = storeToRefs(store)
// action中 通过结构来获取方法
const { add, del } = store
// 添加
const handleAdd = () => {
  const number = Math.floor(Math.random() * 10)
  if (list.value.includes(number)) return
  add(number)
}
// 删除
const handleDel = () => {
  const len = listLength.value
  if (len) {
    const number = Math.floor(Math.random() * (len - 1))
    del(number)
  }
}
</script>

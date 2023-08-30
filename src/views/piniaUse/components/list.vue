<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-30 00:52:03
 * @LastEditTime: 2023-08-30 16:16:14
-->
<template>
  <div>
    <div>composition api风格使用</div>
    其他仓库的数据:{{ otherNum }}
    <br />
    {{ list.item }}
    <br />
    <button @click="handleAdd">添加数据</button>
    <button @click="handleDel">随机删除数据</button>
    <button @click="reset">重置</button>
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
  if (list.value.item.includes(number)) return
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
// 重置(由于使用composition 无法使用$reset 需要自定义)
const reset = () => {
  // 使用了自定义
  store.reset()
}
</script>

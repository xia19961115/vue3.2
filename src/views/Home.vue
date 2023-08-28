<!--
 * @Description: vue3 基础用法
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-15 10:16:37
 * @LastEditTime: 2023-08-28 11:22:04
-->
<template>
  <div class="home">
    <div class="show" ref="dom" @click="handleClick">home页面</div>
  </div>
</template>

<script setup name="Home">
import { nextTick, onMounted, ref } from 'vue'

// 获取节点
const dom = ref(null)

const color = ref('pink')
onMounted(async () => {
  await nextTick()
  // vue3 通过 reactive 和 ref 来创建响应式对象
  // reactive （props, reactive） 只能传递 一个对象
  // ref （computed, ref） 可以传递任何类型（包括代理对象） 修改 通过 xxx.value 来取值 / 赋值
  // const ref1 = ref(1)
  // 如果传递的是代理对象 两个地址是一样的
  // const ref2 = ref(ref1)
  // console.log(ref1.value === ref2.value) 返回true
  console.log(dom.value, 'dommmmmmmm')
})
</script>

<style lang="scss" scoped>
// 动态绑定class
.show {
  color: v-bind(color);
}
</style>

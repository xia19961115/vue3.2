<!--
 * @Description: vue3 基础用法
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-15 10:16:37
 * @LastEditTime: 2023-08-28 14:06:36
-->
<template>
  <div class="home">
    <div class="show" ref="dom" @click="handleClick">home页面</div>
    <!-- 简易的Store -->
    <div>
      <div>简易的Store</div>
      <button @click="decrement">-</button>
      {{ count }}
      <button @click="add">+</button>
    </div>
    <div>
      <div>组件使用</div>
      <props-component ref="com" :nickName="nickName" @change="emitChage" />
    </div>
  </div>
</template>

<script setup name="Home">
// 组件需要引入 (可以不用注册了)
import PropsComponent from '@/components/props.vue'
import { nextTick, onMounted, ref } from 'vue'
// 使用简易的store
import { countStore, increment, decrement } from '@/store/useCountStore'
const { count } = countStore
const add = () => {
  increment()
}

const nickName = ref('niko')
const emitChage = e => {
  nickName.value = e
}
// 获取节点(接受的参数  于模板中ref 定义的相同)
const dom = ref(null)
// 获取子组件
const com = ref(null)

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
  // 获取子组件  可以通过 子组件暴露出的方法 属性
  console.log(com.value, 'commmmmmmm')
})
</script>

<style lang="scss" scoped>
// 动态绑定class
.show {
  color: v-bind(color);
}
</style>

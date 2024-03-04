<!--
 * @Description: vue3 基础用法
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-15 10:16:37
 * @LastEditTime: 2024-03-04 14:52:41
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
      <div>组件使用props,emit</div>
      <props-component class="bin" ref="com" abc="123" :nickName="nickName" @change="emitChage" />
    </div>
    <div>
      <div @click="asd">{{ a }}组件使用v-model</div>
      <!-- vue3 取消了.sync（语法糖）现在可以使用 多个v-model绑定数据 -->
      <!-- 默认 v-model='text' 默认绑定 moudelValue 子组件Props接受 moudelValue-->
      <!-- 具名 v-model:viewText="viewText" 具名绑定 viewText 子组件Props接受 viewText -->
      <!-- 高级用法 修饰符  -->
      <!-- 默认修饰符 v-model.trim = 'text' 子组件props接受 modelModifiers 一个对象 -->
      <!-- 具名修饰符 v-model:viewText.trim = 'viewText' 子组件props接受 viewTextModifiers 一个对象 -->
      <!-- 具名用法 v-model:xxx = "变量" props传递 xxx     修饰符 xxxModifiers -->
      <!-- 默认用法 v-model = "变量" props传递 moudelValue     修饰符 moudelValueModifiers -->
      <!-- 完整写法 <组件 :viewText.trim="aaaa" @upade:viewText="函数" /> -->
      <TextModel v-model:viewText.trim="text" />
    </div>
    <!--  -->
    <div>
      <div>v-model高级组件用法</div>
      <Minput v-model="myText" />
    </div>
    <!--  -->
    <div>
      <div @click="mitter">{{ nowRef.name }}</div>
    </div>
  </div>
</template>

<script setup name="Home">
// 组件需要引入 (可以不用注册了)
import PropsComponent from '@/components/props.vue'
import TextModel from '@/components/textModel.vue'
import Minput from '@/components/Input/Input.vue'
import { nextTick, onMounted, ref, reactive, watchEffect } from 'vue'
// 使用简易的store
import { countStore, increment, decrement } from '@/store/useCountStore'
const { count } = countStore

import { useHome } from './homeHooks'
const nowRef = ref({ name: '789', age: 18 })
const mitter = () => {
  console.log(nowRef)
  // nowRef.value = {
  //   name: '123'
  // }
}
const { add: asd, a } = useHome(957)
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
// v-model使用
const text = ref('')
// v-model 高级用法
const myText = ref({
  keyWord: ''
})
onMounted(async () => {
  console.log('组件内部的onMounted')
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

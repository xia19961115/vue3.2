<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-16 00:03:36
 * @LastEditTime: 2023-08-28 11:14:24
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <!-- <div class="show" ref="as" @click="handleClick">{{ a }}</div>
  {{ count }}
  {{ GetNum(3) }}
  <hello-world v-model:count="count" abc="132111" ref="cp">
    <template #title="props"> {{ props }} </template>
  </hello-world>
  <Minput v-model="myText" />
  <button @click="handleValue">按钮</button><br />
  <button @click="page">About页面</button>
  <View v-model:viewText="viewText" />
  {{ viewText }} -->
</template>
<script setup>
import HelloWorld from '@/components/HelloWorld'
import Minput from '@/components/Input/Input'
import View from '@/components/view'
console.log('----', Minput)
import { ref, onMounted, computed, reactive, getCurrentInstance, watch } from 'vue'
// 路由 通过导入导出形式实现
import { useRouter, useRoute } from 'vue-router'
const router = useRouter() // 等于 vue2 this.$router
const route = useRoute() // 等于 vue2 this.$route
// 从原型上获取 方法
const { $axios } = getCurrentInstance().appContext.config.globalProperties
console.log($axios)
// vue3 通过 reactive 和 ref 来创建响应式对象
// reactive （props, reactive） 只能传递 一个对象
// ref （computed, ref） 可以传递任何类型（包括代理对象） 修改 通过 xxx.value 来取值 / 赋值
// const ref1 = ref(1)
// 如果传递的是代理对象 两个地址是一样的
// const ref2 = ref(ref1)
// console.log(ref1.value === ref2.value) 返回true
const a = ref('1231133211')
const as = ref(null)
// 获取节点 （在模板中refs绑定） onMounted 可以获取节点信息
const cp = ref(null)
const count = ref(1)
const num = ref(1)
const myText = ref({
  keyWord: ''
})
const viewText = ref('')
const form = reactive({
  name: 'zhangsan'
})
const page = () => {
  // console.log(route, router)
  router.push({
    name: 'About'
  })
}
const red = ref('red')
console.log(form)
const GetNum = computed(() => {
  return val => {
    return num.value + val
  }
})
const handleValue = () => {
  console.log(myText)
}
const handleClick = val => {
  // console.log(as.value.innerText);
  console.log(cp.value.title)
}
const handleInit = () => {
  console.log('mounted')
}
onMounted(() => {
  // console.log(as.value);
  handleInit()
  setTimeout(() => {
    form.name = 'lisi'
    console.log(form)
  }, 500)
})
</script>
<style lang="scss">
// 通过v-bind直接绑定CSS样式
// .show {
//   color: v-bind(red);
// }
</style>

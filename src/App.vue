<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <div class="show" ref="as" @click="handleClick">{{ a }}</div>
  {{ count }}
  {{ GetNum(3) }}
  <hello-world v-model:count="count" abc="132111" ref="cp">
    <template #title="props"> {{ props }} </template>
  </hello-world>
  <Minput v-model="myText" />
  <button @click="handleValue">按钮</button><br />
  <View v-model:viewText="viewText" />
  {{ viewText }}
</template>
<script setup>
import HelloWorld from '@/components/HelloWorld'
import Minput from '@/components/Input/Input'
import View from '@/components/view'
console.log('----', Minput)
import { ref, onMounted, computed, reactive, getCurrentInstance, watch } from 'vue'
// 从原型上获取 方法
const { $axios } = getCurrentInstance().appContext.config.globalProperties
console.log($axios)
// 通过ref获取值 必须 XX.value
const a = ref('1231133211')
const as = ref(null)
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
.show {
  color: v-bind(red);
}
</style>

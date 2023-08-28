<template>
  <div>props中的nickName: {{ nickName }}</div>
  <button @click="change">改变</button>
</template>
<script setup name="PropsComponent">
import { defineProps, defineEmits, watchEffect, watch } from 'vue'
// props 中的响应式 是由 reactive提供的
const props = defineProps({
  nickName: {
    typeof: String,
    default: ''
  }
})
// 收集同步依赖(会默认执行一次, 响应式式数据变化了 也会触发)
watchEffect(() => {
  console.log(props.nickName)
})
// 在 watch中 监听 reactive 对象时 需要 用函数返回   ref对象 可以直接监听
watch(
  () => props.nickName,
  (newVal, oldVal) => {
    console.log('change')
  },
  {
    immediate: true
  }
)
/***
 * 
 * // 监听多个数据的变化
    watch([() => state.count, countRef], ([new1, new2], [old1, old2]) => {
    // ...
    });
 * 
 */
// 定义传递的所有事件
const emits = defineEmits(['change'])
const change = () => {
  // 这里跟vue2 里 一样 this.$emit()
  emits('change', 'hooxi')
}
</script>

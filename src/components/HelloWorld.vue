<template>
  <div class="hello">
    <button @click="handleAdd">加</button>
    {{ abc }}
    <slot name="title" v-bind="{ title }"></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, useAttrs, useSlots, defineExpose } from 'vue'
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})
const title = '东西'
const attrs = useAttrs()
console.log('------', attrs)
const slots = useSlots()
console.log(slots)
console.log(slots.title())
const { abc } = attrs
const emits = defineEmits(['update:count'])
const handleAdd = () => {
  emits('update:count', props.count + 1)
}
console.log(props)
// 暴露数据 给父组件使用
defineExpose({
  title
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

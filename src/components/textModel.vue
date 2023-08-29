<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-16 00:03:36
 * @LastEditTime: 2023-08-29 12:16:40
-->
<template>
  <!-- :modeValue="viewText" -->
  <!-- <input type="text" v-model="text" @input="change(text)" /> -->
  <input type="text" :value="viewText" @input="hadleInput" />
</template>

<script setup name="TextModel">
import { defineProps, defineEmits, ref } from 'vue'
/*
 * vue3 中 v-model绑定的数据 props会接受
 * 默认 v-model  props接受 modelValue  emit事件 update:modelValue 默认修饰符 modelValueModifiers
 * 具名参数 v-model:aaa.trim props接受aaa emit事件 update:aaa 默认修饰符 aaaModifiers
 */
const props = defineProps({
  viewText: {
    type: String
  },
  viewTextModifiers: {
    type: Object,
    default: () => ({})
  }
})
const text = ref('')
const emits = defineEmits(['update:viewText'])
const hadleInput = e => {
  console.log(props.viewTextModifiers)
  let value = e.target.value
  if (props.viewTextModifiers.trim) {
    value = value.trim()
  }
  // console.log(e.target.value)
  emits('update:viewText', value)
}
</script>

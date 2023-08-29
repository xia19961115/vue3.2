<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-16 00:03:36
 * @LastEditTime: 2023-08-29 00:59:06
-->
<template>
  <!-- :modeValue="viewText" -->
  <input type="text" v-model="text" @input="change(text)" />
</template>

<script setup name="TextModel">
import { defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
  viewText: {
    type: String
  }
})
const text = ref('')
const emits = defineEmits(['update:viewText'])
const change = e => {
  // console.log(e)
  emits('update:viewText', e)
}
</script>

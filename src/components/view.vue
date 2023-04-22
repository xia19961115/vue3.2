<template>
  <!-- :modeValue="viewText" -->
  <input type="text" v-model="text" @input="change(text)" />
</template>
<script>
export default {
  name: 'View'
}
</script>
<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
  viewText: {
    type: String
  }
})
const text = ref('')
const emits = defineEmits(['update:viewText'])
const change = e => {
  //   console.log(e)
  emits('update:viewText', e)
}
</script>

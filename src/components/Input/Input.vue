<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-04-21 14:48:38
 * @LastEditTime: 2023-04-21 15:52:40
-->
<template>
  <div>
    <input type="text" v-model="model.keyWord" />
  </div>
</template>
<script>
export default {
  name: 'Minput'
}
</script>
<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Object
  }
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return new Proxy(props.modelValue, {
      set(obj, name, val) {
        console.log(name, '-----', val)
        emit('update:modelValue', {
          ...obj,
          [name]: val
        })
        return true
      }
    })
  }
})
</script>

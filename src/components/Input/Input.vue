<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-04-21 14:48:38
 * @LastEditTime: 2023-08-30 02:24:09
-->
<template>
  <div>
    <input type="text" v-model="model.keyWord" />
  </div>
</template>
<script setup name="Minput">
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
        // 表示 修改成功
        return true
      }
    })
  }
})
</script>

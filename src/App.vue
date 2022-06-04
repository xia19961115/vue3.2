<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <div ref="as" @click="handleClick">{{ a }}</div>
  {{ count }}
  {{ GetNum(3) }}
  <hello-world v-model:count="count" abc="132111">
    <template #title="props"> {{ props }} </template>
  </hello-world>
</template>
<script setup>
import HelloWorld from "@/components/HelloWorld";
import { ref, onMounted, computed } from "vue";
const a = ref("1231133211");
const as = ref(null);
const count = ref(1);
const num = ref(1);
const GetNum = computed(() => {
  return (val) => {
    return num.value + val;
  };
});
const handleClick = () => {
  console.log(as.value.innerText);
};
const handleInit = () => {
  console.log("mounted");
};
onMounted(() => {
  // console.log(as.value);
  handleInit();
});
</script>
<style lang="scss"></style>

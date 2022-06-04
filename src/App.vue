<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <div ref="as" @click="handleClick">{{ a }}</div>
  {{ count }}
  <hello-world v-model:count="count" />
</template>
<script setup>
import HelloWorld from "@/components/HelloWorld";
import { ref, onMounted } from "vue";
const a = ref("1231133211");
const as = ref(null);
const count = ref(1);
// console.log(as.value);
const handleClick = () => {
  // console.log("12311");
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

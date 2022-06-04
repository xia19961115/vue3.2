<template>
  <div class="hello">
    <button @click="handleAdd">加</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:count"]);
const handleAdd = () => {
  emits("update:count", props.count + 1);
};
console.log(props);
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

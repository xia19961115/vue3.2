import { onMounted, ref } from 'vue'

// const a = ref(1)

// onMounted(() => {
//   console.log(a)
// })

export const useHome = val => {
  const a = ref(val)
  onMounted(() => {
    console.log(a, 'homeHooks')
  })

  return {
    a,
    add: () => {
      a.value += 1
    }
  }
}

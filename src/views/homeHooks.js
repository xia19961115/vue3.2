import { onMounted, ref, onUnmounted } from 'vue'

export const useHome = val => {
  const a = ref(val)

  onMounted(() => {
    console.log(a.value, 'homeHooks')
  })

  onUnmounted(() => {
    console.log('homeHooks卸载了')
  })

  return {
    a,
    add: () => {
      a.value += 1
    }
  }
}

// 简易的store
import { reactive, readonly, toRefs } from 'vue'
const state = reactive({
  count: 0
})
// 对外暴露的数据是只读的，不能直接修改
// 使用toRefs进行封装，从而避免解构或展开后响应式丢失
const countStore = toRefs(readonly(state))
// 加
const increment = () => {
  state.count++
}
// 减
const decrement = () => {
  state.count--
}
export { countStore, increment, decrement }

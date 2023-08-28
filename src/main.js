/*
 * @Description:''
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-16 00:03:36
 * @LastEditTime: 2023-08-28 11:13:46
 */
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
// const ref1 = ref(1)
// const ref2 = ref(ref1)
// console.log(ref1.value === ref2.value, '?????')
// 原型上绑定方法
app.config.globalProperties.$axios = 'axios'

app.use(store).use(router).mount('#app')

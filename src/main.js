/*
 * @Description:''
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-16 00:03:36
 * @LastEditTime: 2023-08-29 16:21:13
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)

// 原型上绑定方法
app.config.globalProperties.$axios = 'axios'

// 使用pinia vue3.2 版本  建议使用2.0.33版本的pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
// 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)

app.use(store).use(router).use(pinia).mount('#app')

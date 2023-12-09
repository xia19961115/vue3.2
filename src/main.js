/*
 * @Description:''
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-16 00:03:36
 * @LastEditTime: 2023-12-09 22:52:07
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import install from './plugin/install'
const app = createApp(App)

// 原型上绑定方法
app.config.globalProperties.$axios = 'axios'

// 使用pinia vue3.2 版本  建议使用2.0.33版本的pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
// 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 使用插件
pinia.use(piniaPluginPersistedstate)

// 使用自定义插件
import { piniaResetPlugin } from './plugin/piniaResetPlugin'
pinia.use(piniaResetPlugin)
app.use(store).use(router).use(pinia).use(install).mount('#app')

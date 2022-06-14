import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
// 原型上绑定方法
app.config.globalProperties.$axios = 'axios'

app.use(store).use(router).mount('#app')

/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-29 14:15:45
 * @LastEditTime: 2023-12-09 22:49:59
 */
// options api分格
// pinina提供了 state  getters actions(支持同步/异步)
import { defineStore } from 'pinia'
export const useNumStore = defineStore('num', {
  // 返回的数据
  state: () => {
    return {
      num: 0
    }
  },
  getters: {
    doubleNum: state => state.num * 2
  },
  actions: {
    increment() {
      this.num++
    },
    decrement() {
      this.num--
    }
  },
  // 使用持久化插件
  persist: {
    // 取别名  默认是 store的id
    key: 'PINIA_NUM',
    // 保存的位置   默认 localStorage  可选值 localStorage | sessionStorage
    storage: sessionStorage,
    // 只保存num
    paths: ['num']
  }
})

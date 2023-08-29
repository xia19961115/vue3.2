/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-29 14:15:45
 * @LastEditTime: 2023-08-29 16:22:18
 */
// options api分格
// pinina提供了 state  getters actions(支持同步/异步)
import { defineStore } from 'pinia'
export const useNumStore = defineStore('num', {
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
  persist: true
})

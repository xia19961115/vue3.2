/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-30 01:26:29
 * @LastEditTime: 2023-12-09 22:21:54
 */
import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
// 使用其他仓库的数据
import { useNumStore } from './useNumStore'
export const useListStroe = defineStore(
  'list',
  () => {
    // 获取其他仓库的实例
    const store = useNumStore()
    const list = reactive({
      item: []
    })
    const listLength = computed(() => list.item.length)
    const otherNum = computed(() => store.doubleNum * 4)
    const add = val => {
      list.item.push(val)
    }
    const del = val => {
      list.item.splice(val, 1)
    }
    return {
      list,
      listLength,
      otherNum,
      add,
      del
    }
  },
  // 使用持久化插件
  {
    persist: true
  }
)

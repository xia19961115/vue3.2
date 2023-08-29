/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-30 01:40:24
 * @LastEditTime: 2023-08-30 01:44:37
 */
import Num from '../components/num.vue'
import List from '../components/list.vue'
import { reactive, shallowRef } from 'vue'
export const useComponentList = () => {
  return reactive({
    num: shallowRef(Num),
    list: shallowRef(List)
  })
}

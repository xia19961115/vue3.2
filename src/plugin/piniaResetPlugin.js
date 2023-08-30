/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-30 15:29:26
 * @LastEditTime: 2023-08-30 16:11:40
 */
function deepClone(obj) {
  if (Array.isArray(obj)) {
    let newArr = []
    for (let i = 0; i < obj.length; i++) {
      newArr.push(deepClone(obj[i]))
    }
    return newArr
  } else if (typeof obj === 'object') {
    let newObj = {}
    for (let p in obj) {
      newObj[p] = deepClone(obj[p])
    }
    return newObj
  } else {
    return obj
  }
}

export const piniaResetPlugin = ({ store }) => {
  //   console.log(ctx)
  // ctx.pinia // 使用 `createPinia()` 创建的 pinia
  // ctx.app // 使用 `createApp()` 创建的当前应用程序（仅限 Vue 3）
  // ctx.store // 插件正在扩充的 store
  // ctx.options // 定义存储的选项对象传递给`defineStore()`

  // 给某个单独仓库添加
  if (store.$id === 'list') {
    console.log(store)
    // 需要深度克隆
    const state = deepClone(store.$state)
    // 给store添加方法
    store.reset = () => {
      // 需要再次备份
      console.log(deepClone(state))
      store.$patch(deepClone(state))
    }
  }
}

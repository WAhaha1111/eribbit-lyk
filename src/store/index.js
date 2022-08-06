import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    category,
    user
  },
  // 配置数据持久化插件
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储名字
      key: 'eribbit-lyk-store',
      // 指定需要存储模块
      paths: ['user', 'cart']
    })]
})

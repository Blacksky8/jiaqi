import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'',
    wwtRoute:''
  },
  mutations: {
    // 登录用户名存储
    wwtName(state,name){
      state.username=name
    },
    // 面包屑数据存储
    wwtRouter(state,route){
      console.log(state)
      state.wwtRoute=route
    }
  },
  actions: {
  },
  modules: {
  }, 
  plugins: [createPersistedState({
    storage: sessionStorage
  })]})

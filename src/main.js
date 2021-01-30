import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import "@/assets/css/index.scss"

//按需引入
import "@/plugins/element.js"

Vue.config.productionTip = false

//全局路由守卫
router.beforeEach((to,form,next)=>{
  // console.log(to)
  if(to.meta.hasOwnProperty('title')){
    store.commit("wwtRouter",to.meta.title)
  }

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

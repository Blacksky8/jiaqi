import axios from 'axios';

import { Loading, Message } from 'element-ui'
let loading
import { baseUrl } from '@/config'
// console.log(baseUrl)
const Server = axios.create({
  baseURL: '/api',
  timeout: 5000,
  // withCredentials:true //是否携带cookie
})

Server.interceptors.request.use((config) => {

  // console.log(config)

  // let token=sessionStorage.getItem('token')
  // if(token!=null) {
  //   config.headers.Authorization= token;
  // }

  loading = Loading.service({
    lock: true,
    text: '加载中···',
    spinner: 'el-icon-loading',
  })

  return Promise.resolve(config)
}, error => {
  Message.error({message:'连接不到服务器，请稍后再试', offset:150})
  return Promise.reject(error)
})

Server.interceptors.response.use((response) => {

  // console.log(response)
  // console.log(loading)

  loading.close()
  if(response.status==200) {
    return Promise.resolve(response);
  }else{
    return Promise.reject(response)
  }
}, (error) => {
  // if(error.response.status) {
  loading.close()
  //   switch(error.response.status) {
  //   case 401:
  //     this.$router.replace({
  //       path:'/login',
  //       query:{
  //         redirect:this.$router.currentRoute.fullPath
  //       }
  //     });
  //     break;
  //   }
  // }
  return Promise.reject(error)
})

export default Server
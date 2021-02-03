import qs from 'qs'

import request from './request'
// import api from './api'

// 登录
export function wwtLogin(params) {
  return request({
    url:'/manage/user/login.do',
    method:'post',
    data: qs.stringify(params),
  })
}

// 退出
export function wwtLogout() {
  return request({
    url:'/user/logout.do',
    method:'post',
  })
}

//首页
export function wwtHome(){
  return request({
    url:'/manage/statistic/base_count.do',
    method:'get'
  })
}

// 商品管理
export function wwtShop(page){
  return request({
    url:`/manage/product/list.do?pageNum=${page}`,
    method:'get'
  })
}

//商品状态
export function wwtStatus(data){
  return request({
    url:`/manage/product/set_sale_status.do?productId=${data.id}&status=${data.status}`,
    method:'GET'
  })
} 
 
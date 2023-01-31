/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-30 10:15:01
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-31 13:19:11
 * @Description: 具体接口
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
import http from '../axiosInterface'

// 地址路径以 /api 开头，配置了代理，在上线时，需要配置 NG
export const login = (data: object) => {
  return http.post('/api/admin/admin/login', data)
}
export const login1 = (data: object) => {
  return http.post('/api/admin/admin/login', data)
}
export const login2 = (data: object) => {
  return http.post('/api/admin/admin/login', data)
}

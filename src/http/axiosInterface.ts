/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 17:23:59
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-31 13:12:19
 * @Description: 封装get、post方法
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
import { axiosInstance } from './request'

const http = {
  /*
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url: string, params: object, ...others: any) {
    const config: object | any = {
      method: 'get',
      url: url,
      ...others,
    }
    if (params) config.params = params
    return axiosInstance(config)
  },
  post(url: string, params: object, ...others: any) {
    const config: object | any = {
      method: 'post',
      url: url,
      ...others,
    }
    if (params) config.data = params
    return axiosInstance(config)
  },
}

export default http

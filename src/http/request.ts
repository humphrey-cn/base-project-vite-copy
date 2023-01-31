/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-30 10:06:25
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-30 16:33:25
 * @Description: 实例化axios，配置请求响应拦截
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    return config
  },
  // 请求失败
  (error: any) => {
    return error
  },
)

// axios实例拦截响应
// axiosInstance.interceptors.response.use(
// 	(response: AxiosResponse) => {
// 		const res = response.data
// 		if (res.code !== 1 || res.code !== 200) {
// 			return response.data
// 		} else {
// 			return response.data
// 		}
// 	},
// 	(error: any) => {
// 		if (error.response) {
// 			switch (error.response.status) {
// 				case 500:
// 					break
// 				default:
// 					if (error.response.data.error == "invalid_grant") {
// 					}
// 					return Promise.reject(error)
// 			}
// 		}
// 	}
// )

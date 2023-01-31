/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 14:54:36
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-30 16:34:07
 * @Description: 操作本地存储
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
export const local = {
  /**
   * @description: 获取本地存储数据，无需转换数据格式
   * @param {array} names 需要获取的数据名称,字符串类型，获取多个时，用逗号(,)分隔
   * @return {*} 当获取单个存储数据时，直接返回当前数据，获取多条存储数据时，会组合成对象返回，key为名称，value为值
   */
  get: (...names: string[]) => {
    let result = {} as any
    names.forEach(name => {
      let v = localStorage.getItem(name)
      result[name] = v && JSON.parse(v)?.v
    })
    if (names.length <= 1) {
      result = result[names[0]]
    }
    return result
  },
  /**
   * @description: 设置本地存储
   * @param {string} name 存储名称
   * @param {any} value 值，无需转换数据类型存储
   * @return {*} 无返回
   */
  set: (name: string, value: any) => {
    // 新增本地存储，存入数据类型什么样，获取时就是什么样
    localStorage.setItem(name, JSON.stringify({ v: value }))
  },
  /**
   * @description: 删除本地存储数据（支持同时删除多条）
   * @param {array} names 需要获取的数据名称,字符串类型，获取多个时，用逗号(,)分隔
   * @return {*} 无返回
   */
  del: (...names: string[]) => {
    names.forEach(name => {
      localStorage.removeItem(name)
    })
  },
}

export const session = {
  /**
   * @description: 获取本地存储数据，无需转换数据格式
   * @param {array} names 需要获取的数据名称,字符串类型，获取多个时，用逗号(,)分隔
   * @return {*} 当获取单个存储数据时，直接返回当前数据，获取多条存储数据时，会组合成对象返回，key为名称，value为值
   */
  get: (...names: string[]): any => {
    let result = {} as any
    names.forEach(name => {
      let v = sessionStorage.getItem(name)
      result[name] = v && JSON.parse(v)?.v
    })
    if (names.length <= 1) {
      result = result[names[0]]
    }
    return result
  },
  /**
   * @description: 设置本地存储
   * @param {string} name 存储名称
   * @param {any} value 值，无需转换数据类型存储
   * @return {*} 无返回
   */
  set: (name: string, value: any): void => {
    // 新增本地存储，存入数据类型什么样，获取时就是什么样
    sessionStorage.setItem(name, JSON.stringify({ v: value }))
  },
  /**
   * @description: 删除本地存储数据（支持同时删除多条）
   * @param {array} names 需要获取的数据名称,字符串类型，获取多个时，用逗号(,)分隔
   * @return {*} 无返回
   */
  del: (...names: string[]): void => {
    names.forEach(name => {
      sessionStorage.removeItem(name)
    })
  },
}

// 页面使用示例
// 调用本地存储方法示例
// import { local, session } from 'utils/storage'
// local.set('demo-number', 1)
// local.set('demo-string', 'demo1')
// local.set('demo-boolean', true)
// local.set('demo-object', { a: 1, b: '2', c: false })
// console.log('demo-number:', local.get('demo-number'))
// console.log('demo-string:', local.get('demo-string'))
// console.log('demo-boolean:', local.get('demo-boolean'))
// console.log('demo-object:', local.get('demo-object'))
// local.del('demo-number', 'demo-string', 'demo-boolean', 'demo-object')

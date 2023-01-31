/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 14:52:30
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-30 16:34:05
 * @Description:
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
export default (app: any) => {
  const files = import.meta.glob('./*.ts', { eager: true }) as any
  const utils = {} as any
  Object.keys(files).map(key => {
    let name = key.replace(/\.|\/|ts/g, '')
    utils[name] = files[key].default || files.default
  })
  app.config.globalProperties.$utils = utils
}

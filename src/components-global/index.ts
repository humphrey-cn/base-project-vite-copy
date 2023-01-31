/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 13:26:07
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-30 14:01:08
 * @Description: 导出全局公共组件
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved. 
 */

export default (app: any) => {
    const files = import.meta.glob('./*/index.vue', { eager: true }) as any
    Object.keys(files).map(key => {
        let name = key.replace(/\.|\/|index.vue/g, '')
        app.component(`${name}-global`, files[key].default || files[key])
    })
}

// 全局公共组件
// 页面直接使用 <文件夹名-global /> ，无需手动引入

// tips：组件的主文件必须命名为 index.vue

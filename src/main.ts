/*
 * @Author: Humphrey humphre_ch@163.com
 * @Date: 2023-01-29 10:31:37
 * @LastEditors: Humphrey humphre_ch@163.com
 * @LastEditTime: 2023-01-30 16:34:20
 * @Description:
 * Copyright (c) 2023 by Humphrey humphre_ch@163.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import './assets/styles/index.less' // 引入基础样式
import App from './App.vue'
import router from './router' // 路由
import componentsGlobal from './components-global/index' // 全局公共组件

const app = createApp(App)

componentsGlobal(app)

app.use(router).mount('#app')

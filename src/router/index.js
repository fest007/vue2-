import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
Vue.use(VueRouter)

// 1.创建路由组件
// 2.将路由与组件进行映射
// 3. 创建 router 实例，然后传 `routes` 配置
// 4.将router实例进行暴露

const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        // redirect重定向, 当url为/重定向到home
        redirect: 'home',
        children: [
            // 首页
            {
                path: 'home',
                component: Home
            },
            // 用户管理
            {
                path: 'user',
                component: User
            },
            // 商品管理
            {
                path: 'mall',
                component: Mall
            },
            // 页面一
            {
                path: 'page1',
                component: PageOne
            },
            // 页面二
            {
                path: 'page2',
                component: PageTwo
            },
        ]
    }
  ]


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

export default router



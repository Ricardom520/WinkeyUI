import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
const homepage = () => import('@/views/homepage/index');
const rooms = () => import('@/views/rooms');
const components = () => import('@/views/rooms/subpage/components');
const button = () => import('@/views/rooms/subpage/button');
const icon = () => import('@/views/rooms/subpage/icon');
const divider = () => import('@/views/rooms/subpage/divider');
const gird = () => import('@/views/rooms/subpage/gird');
const dropdown = () => import('@/views/rooms/subpage/dropdown'); // 未完成
const message = () => import('@/views/rooms/subpage/message');

export const constantRouters = [
  {
    path: '/zh-CN',
    component: homepage,
  },
  {
    path: '/rooms',
    component: rooms,
    redirect: '/rooms/components/button',
    children: [
      {
        path: 'components',
        name: '组件',
        component: components,
        redirect: '/rooms/components/button',
        children: [
          {
            path: 'button',
            name: 'Button组件',
            component: button
          },
          {
            path: 'icon',
            name: 'Icon组件',
            component: icon
          },
          {
            path: 'divider',
            name: 'Divider组件',
            component: divider
          },
          {
            path: 'gird',
            name: 'Gird组件',
            component: gird
          },
          {
            path: 'dropdown',
            name: 'Dropdown组件',
            component: dropdown
          },
          {
            path: 'message',
            name: 'Message组件',
            component: message
          }
        ]
      }
    ]
  },
  {
    path: '/',
    redirect: '/zh-CN',
  }
]

export const asyncRouters = [
  
]

const createRouter = () => new Router({
  mode: 'hash',
  routes: constantRouters
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
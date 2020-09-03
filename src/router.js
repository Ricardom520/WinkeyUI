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
// const dropdown = () => import('@/views/rooms/subpage/dropdown'); // 未完成
const message = () => import('@/views/rooms/subpage/message');
const Switch = () => import('@/views/rooms/subpage/switch');
const steps = () => import('@/views/rooms/subpage/steps');
const space = () => import('@/views/rooms/subpage/space');
const breadcrumb = () => import('@/views/rooms/subpage/breadcrumb');
const pagination = () => import('@/views/rooms/subpage/pagination'); // 未完成
const Input = () => import('@/views/rooms/subpage/input');

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
            // component: dropdown
          },
          {
            path: 'message',
            name: 'Message组件',
            component: message
          },
          {
            path: 'switch',
            name: 'Switch组件',
            component: Switch
          },
          {
            path: 'steps',
            name: 'Steps组件',
            component: steps
          },
          {
            path: 'space',
            name: 'Space组件',
            component: space
          },
          {
            path: 'breadcrumb',
            name: 'Breadcrumb组件',
            component: breadcrumb
          },
          {
            path: 'pagination',
            name: 'Pagination组件',
            component: pagination
          },
          {
            path: 'input',
            name: 'Input组件',
            component: Input
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
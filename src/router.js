import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouters = [
  {
    path: '/zh-CN',
    component: () => import('@/views/homepage/index'),
  },
  {
    path: '/rooms',
    component: () => import('@/views/rooms'),
    redirect: '/rooms/components/button',
    children: [
      {
        path: 'components',
        name: '组件',
        component: () => import('@/views/rooms/subpage/components'),
        redirect: '/rooms/components/button',
        children: [
          {
            path: 'button',
            name: 'Button组件',
            component: () => import('@/views/rooms/subpage/button')
          },
          {
            path: 'icon',
            name: 'Icon组件',
            component: () => import('@/views/rooms/subpage/icon')
          },
          {
            path: 'divider',
            name: 'Divider组件',
            component: () => import('@/views/rooms/subpage/divider')
          },
          {
            path: 'gird',
            name: 'Gird组件',
            component: () => import('@/views/rooms/subpage/gird')
          },
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
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    user: {
      name: 'busta-mingo'
    },
    introduction: 'I am a super adminisrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    menuList: [
      {
        path: '/menu',
        component: '/layout',
        name: 'menu',
        title: '菜单',
        icon: '',
        isShow: 1,
        children: [
          {
            path: '/menu/menu1',
            component: '/sys/menu/index',
            name: 'menu1',
            title: '菜单1',
            isShow: 1,
            icon: ''
          },
          {
            path: '/menu/menu2',
            component: '/sys/menu/index',
            name: 'menu2',
            title: '菜单2',
            isShow: 1,
            icon: '',
            children: [
              {
                path: '/menu/menu3',
                component: '/sys/menu/index',
                name: 'menu3',
                title: '菜单3',
                isShow: 1,
                icon: ''
              },
              {
                path: '/menu/menu4',
                component: '/sys/menu/index',
                name: 'menu4',
                title: '菜单4',
                isShow: 1,
                icon: ''
              }
            ]
          }
        ]
      },
      {
        path: '/demo',
        name: 'demo',
        component: '/layout',
        icon: '',
        isShow: 1,
        children: [
          {
            path: 'index',
            component: '/demo/list/list',
            name: 'demo',
            title: '示例1',
            isShow: 1,
            icon: ''
          }
        ]
      },
      {
        path: '/components',
        name: 'components',
        component: '/layout',
        icon: '',
        isShow: 1,
        title: '组件',
        children: [
          {
            path: '/components/page',
            component: '/demo/list/list',
            name: 'demo',
            title: 'Page 页面组件',
            isShow: 1,
            icon: ''
          },
          {
            path: '/components/list/list',
            name: 'demo',
            title: 'Page 页面组件',
            isShow: 1,
            icon: ''
          }
        ]
      },
      {
        path: '/user',
        component: '/layout',
        icon: '',
        name: 'user',
        title: '用户管理',
        isShow: 1,
        children: [
          {
            path: 'index',
            component: '/sys/user/index',
            name: '用户管理2',
            title: '用户管理',
            isShow: 1,
            icon: ''
          }
        ]
      }
    ]
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },

  {
    url: '/user/loginInfo',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 200,
        message: '操作成功',
        data: info
      }
    }
  },

  {
    url: '/user/logout',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
<template>
  <div class="rooms">
    <header>
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="find">
        <img src="@/assets/images/icon/search.svg"><input type="text" placeholder="搜索文档"/>
      </div>
      <div class="lists">
        <ul class="nav">
          <li v-for="item in lists" :key="item.title">
            <router-link :to="item.path">
              {{item.title}}
            </router-link>
          </li>
          <div class="nav-dropdown" @click.stop="show = !show">中文</div>
          <div :class="show?'language active':'language'">
            <ul>
              <li>中文</li>
              <li>English</li>
              <li>Español</li>
              <li>Français</li>
            </ul>
          </div>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'rooms',
  data() {
    return {
      lists: [
        {
          title: '指南',
          path: '/guide'
        },
        {
          title: '组件',
          path: '/rooms/components'
        },
        {
          title: '主题',
          path: '/theme'
        },
        {
          title: '资源',
          path: '/source'
        },
      ],
      show: false
    }
  }
}
</script>


<style lang="less" scoped>
.rooms {
  height: 100%;
  header {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    min-width: 1140px;
    padding: 10px 20px;
    border-bottom: 1px solid #F6F7F7;
    box-shadow: 0px 5px 5px #F6F7F7;
    z-index: 900;
    background: #fff;
    .logo {
      width: 270px;
      padding-left: 50px;
      img {
        width: 150px;
      }
      img:hover {
        cursor: pointer;
      }
    }
    .find {
      display: flex;
      align-items: center;
      margin-left: 10px;
      padding-left: 20px;
      border-left: 1px solid #F0F0F0;
      img {
        margin-right: 5px;
      }
      input {
        border: none;
        outline: none;
        color: #595959;
        background: transparent;
      }
    }
    .lists {
      position: absolute;
      right: 20px;
      .nav {
        display: flex;
        li {
          color: #626262;
          a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0 20px;
          }
          a:hover {
            color: #1890FF;
          }
        }
        .nav-dropdown {
          position: relative;
          margin-left: 55px;
          margin-right: 35px;
          font-size: 17px;
          color: #A4A4A4;
          transition: color ease-in-out .2s;
        }
        .nav-dropdown::after {
          position: absolute;
          content: ' ';
          top: 50%;
          right: -10px;
          width: 6px;
          height: 6px;
          border-right: 1px solid #A4A4A4;
          border-bottom: 1px solid #A4A4A4;
          transform: rotate(45deg) translateY(-6px);
        }
        .nav-dropdown:hover {
          cursor: pointer;
          color: #1989FA;
        }
        .nav-dropdown:hover::after {
          border-right: 1px solid #1989FA;
          border-bottom: 1px solid #1989FA;
        }
        .language {
          position: absolute;
          right: 0;
          top: 54px;
          height: 0;
          opacity: 0;
          border: 1px solid #EBEEF5;
          box-shadow: 0 0 5px #EBEEF5;
          background: #fff;
          transition: all ease-in-out .5s;
          overflow: hidden;
          ul {
            padding: 10px 0;
            li {
              color: #000;
              font-weight: 300;
              margin: 0;
              padding: 10px 20px;
            }
            li:hover {
              cursor: pointer;
              background-color: #ECF5FF;
            }
          }
        }
        .language::after {
          position: absolute;
          content: ' ';
          top: -9px;
          left: 50%;
          width: 15px;
          height: 15px;
          border-left: 1px solid #EBEEF5;
          border-top: 1px solid #EBEEF5;
          background: #fff;
          transform: rotate(45deg);
        }
        .language.active {
          height: auto;
          opacity: 1;
          overflow: visible;
        }
      }
    }
  }
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: #A9B7C4 !important;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #A9B7C4 !important;
  opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:#A9B7C4 !important;
  opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #A9B7C4 !important;
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: #A9B7C4!important;
}
</style>

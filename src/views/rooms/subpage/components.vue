<template>
  <div class="box">
    <div class="left" ref="Component">
      <div class="content" v-for="item in menus" :key="item.id">
        <ul>
          <div class="title">
            <p>{{item.title}}</p>
          </div>
          <div class="desc" v-for="child in item.children" :key="child.id">
            <li @click="openMenus($event)">
              <router-link :to='child.path?child.path:"/"' :class="pathname === child.path? 'active':''">
                {{child.title}}
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menus from '@/assets/jsons/menus.json'
export default {
  name: 'components',
  data() {
    return {
      menus: menus.lists,
      pathname: ''
    }
  },
  created() {
    this.pathname = this.$route.path
  },
  mounted() {
    
  },
  methods: {
    openMenus: function(e) {
      let target = e.target;
      let Component = this.$refs.Component;
      let as = Component.getElementsByTagName('a');

      for (let i = 0; i < as.length; i++) {
        as[i].className = ''
      }
      target.classList.add('active');
    }
  }
}
</script>


<style lang="less" scoped>
.box {
  display: flex;
  height: 100%;
  padding-top: 95px;
  .left {
    min-width: 302px;
    width: 302px;
    border-right: 1px solid #F0F0F0;
    overflow-y: hidden;
    .content {
      ul {
        .title {
          padding-left: 30px;
          p {
            color: #8C8C8C;
            font-size: 13px;
            padding: 10px 0;
            border-bottom: 1px solid #F0F0F0;
          }
        }
        .desc {
          padding: 10px 0;
          li {
            color: #626262;
            font-size: 13px;
            width: 100%;
            transition: all ease-in-out .5s;
            a {
              display: block;
              width: 100%;
              height: 100%;
              padding: 10px 0 10px 30px;
            }
            a.active {
              color: #2496FF;
              border-right: 4px solid #2496FF;
              background: #E6F7FF;
            }
          }
          li:hover {
            cursor: pointer;
            color: #2496FF;
          }
        }
      }
    }
  }
  .left:hover,.right:hover {
    overflow-y: scroll;
  }
  .left::-webkit-scrollbar,.right::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .left::-webkit-scrollbar-thumb,.right::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.1);
    background: rgba(0, 0, 0, .1)
  }
  .left::-webkit-scrollbar-track,.right::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.1);
    border-radius: 0;
    background: rgba(0, 0, 0, .05);
  }
  .right {
    min-width: 740px;
    width: 100%;
    padding: 10px 50px;
    overflow-y: hidden;
  }
}
</style>

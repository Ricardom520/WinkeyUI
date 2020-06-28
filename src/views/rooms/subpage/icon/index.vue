<template>
  <div class="Icon" ref="Icon">
    <div>
      <section class="box box1">
        <h2>Icon 图标 </h2>
        <p>提供了一套常用的图标集合。</p>
      </section>

      <!--使用方法-->
      <section class="box box2" id="box2">
        <p class="p1">使用方法</p>
        <p>直接通过设置类名为 el-icon-iconName 来使用即可。例如：</p>
        <div class="container" @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-row class="row">
              <i class="iconfont wk-icon-write icon"></i>
              <i class="iconfont wk-icon-share icon"></i>
              <i class="iconfont wk-icon-dustbin icon"></i>
              <wk-button type="primary"><i class="iconfont wk-icon-search"></i>搜索</wk-button>
            </wk-row>
            <div class="content" :style="box2?{height: '168.2px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <iconBase></iconBase>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box2')">
            <p>
              <i :class="[box2Line?'hovering':'',box2?'active':'']"></i>
              <transition name="fade">
                <span v-if="box2Line">{{box2?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--图标集合-->
      <section class="box box3" id="box3">
        <p class="p1">图标集合</p>
        <div class="container">
          <div class="demo">
            <ul>
              <li v-for="item in datas" :key="item.index">
                <p class="icon"><i :class="'iconfont ' + item.icon"></i></p>
                <p><span>{{item.icon}}</span></p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          使用方法
        </li>
        <li @click="returnTop($event,'#box3')">
          图标集合
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import iconBase from '@/assets/markdown/icon/iconBase.md'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {    
          return hljs.highlight(lang, code, true).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
    }
});
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre');
  preEl.forEach((el)=>{
    hljs.highlightBlock(el)
  })
}
export default {
  name: 'icon',
  data() {
    return {
      box2Line: false,
      box2: false,
      datas: [
        {
          icon: 'wk-icon-write',
          index: 0
        },
        {
          icon: 'wk-icon-upload',
          index: 1
        },
        {
          icon: 'wk-icon-share',
          index: 2
        },
        {
          icon: 'wk-icon-search',
          index: 3
        },
        {
          icon: 'wk-icon-dustbin',
          index: 4
        },
        {
          icon: 'wk-icon-collection',
          index: 5
        },
        {
          icon: 'wk-icon-envelope',
          index: 6
        },
        {
          icon: 'wk-icon-hock',
          index: 7
        },
        {
          icon: 'wk-icon-success',
          index: 8
        },
        {
          icon: 'wk-icon-sigh',
          index: 9
        },
        {
          icon: 'wk-icon-fail',
          index: 10
        },
        {
          icon: 'wk-icon-close',
          index: 11
        },
        {
          icon: 'wk-icon-check',
          index: 12
        },
        {
          icon: 'wk-icon-arrow-right',
          index: 13
        }
      ]
    }
  },
  components: {
    iconBase,
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = '直接通过设置类名为 `wk-icon-iconName` 来使用即可。例如：';
        return marked(detail || '', {
          sanitize: true
        });
    },
  },
  methods: {
    returnTop(e,box) {
      let Button = this.$refs.Icon;
      let anchor = this.$refs.anchor;
      let lis = anchor.getElementsByTagName('li');
      let target = e.target;

      for(let i = 0; i < lis.length; i++) {
        lis[i].className = '';
      }
      
      target.classList.add('active');
      Button.querySelector(box).scrollIntoView(true)
    },
    mouseEnter(box) {
      switch(box) {
        case 'box2':
          this.box2Line = true;
          break;
      }
    },
    mouseLeave(box) {
      switch(box) {
        case 'box2':
          this.box2Line = false;
          break;
      }
    },
    showData(box) {
      switch(box) {
        case 'box2':
          this.box2 = !this.box2;
          break;
      }
    }
  }
}
</script>


<style lang="less" scoped>
.Icon {
  display: flex;
  margin-bottom: 20px;
  .box {
    p {
      color: #5E6D82;
      padding: 18px 0;
    }
    .p1 {
      color: #333;
      font-size: 22px;
      padding: 0;
    }
    .container {
      border: 1px solid #EBEBEB;
      border-radius: 5px;
      .demo {
        padding: 20px;
      }
      .row {
        padding: 10px 0;
        button {
          margin: 0 8px;
        }
      }
      .content {
        overflow: hidden;
        transition: all ease-in-out .2s;
        .desc {
          padding: 20px 15px;
          border: 1px solid #EBEBEB;
          border-radius: 5px;
          background: #fff;
          p {
            font-size: 14px;
            color: #5e6d82;
          }
        }
        .code {
          margin: 20px 0;
          border-radius: 10px;
        }
      }
      .showline {
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #EBEBEB;
        transition: all ease-in-out .5s;
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D4DDE7;
          height: 100%;
          padding: 0;
          transition: all ease-in-out .5s;
          i {
            width: 0;
            height: 0;
            margin-top: 5px;
            margin-right: 10px;
            border-top: 6px solid #EBEBEB;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid transparent;
            transition: transform ease-out .5s;
          }
          i.hovering {
            transform: translateX(-10px);
          }
          i.active {
            margin-top: -5px;
            border-bottom: 6px solid #EBEBEB !important;
            border-left: 6px solid transparent !important;
            border-right: 6px solid transparent !important;
            border-top: 6px solid transparent !important;
          }
        }
      }
      .showline:hover {
        cursor: pointer;
        background: #F9FAFC;
        p {
          color: #489FFF;
          i {
            width: 0;
            height: 0;
            border-top: 6px solid #489FFF;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid transparent;
          }
          i.active {
            border-bottom: 6px solid #489FFF !important;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid transparent;
          }
        }
      }
    }
  }
  .box2 {
    margin-top: 50px;
    .icon {
      font-size: 30px;
      margin: 0 5px;
    }
  }
  .box3 {
    margin-top: 50px;
    .container {
      margin-top: 20px;
      ul {
        li {
          display: inline-block;
          width: 145px;
          height: 120px;
          vertical-align: middle;
          border: 1px solid #EAEEFB;
          p {
            text-align: center;
            padding: 0;
            i {
              font-size: 30px;
            }
            span {
              color: #99A9C5;
            }
          }
          p.icon {
            margin-top: 30px;
            margin-bottom: 10px;
          }
        }
        li:hover {
          p {
            color: #5CB6FF;
            transition: color ease-in-out .4s;
            span {
              color: #5CB6FF;
              transition: color ease-in-out .4s;
            }
          }
        }
      }
    }
  }
  .anchor {
    width: 150px;
    margin-left: 30px;
    ul {
      position: fixed;
      border-left: 1px solid #f0f0f0;
      background: #fff;
    }
    li {
      font-size: 12px;
      padding: 1px 20px;
    }
    li.active {
      color: #489FFF;
    }
    li:hover {
      cursor: pointer;
      color: #489FFF;
    }
  }
}
</style>

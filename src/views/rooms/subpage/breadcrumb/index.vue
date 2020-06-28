<template>
  <div class="Breadcrumb" ref="Breadcrumb">
    <div class="middle">
      <section class="box box1">
        <h2>Breadcrumb 面包屑 </h2>
        <p>显示当前页面的路径，快速返回之前的任意页面。</p>
      </section>

      <!--基础使用-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <p>适用广泛的基础用法。</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-breadcrumb separator="/">
              <wk-breadcrumb-item :to="{ path: '/' }">首页</wk-breadcrumb-item>
              <wk-breadcrumb-item><a href="/">活动管理</a></wk-breadcrumb-item>
              <wk-breadcrumb-item>活动列表</wk-breadcrumb-item>
              <wk-breadcrumb-item>活动详情</wk-breadcrumb-item>
            </wk-breadcrumb>
            <div class="content" :style="box2?{height: '250px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <BreadcrumbBase></BreadcrumbBase>
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

      <!--图标分隔符-->
      <section class="box box3" id="box3">
        <p class="p1">图标分隔符</p>
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')" style="margin-top: 30px;">
          <div class="demo">
            <wk-breadcrumb separator-class="wk-icon-arrow-right">
              <wk-breadcrumb-item :to="{ path: '/' }">首页</wk-breadcrumb-item>
              <wk-breadcrumb-item>活动管理</wk-breadcrumb-item>
              <wk-breadcrumb-item>活动列表</wk-breadcrumb-item>
              <wk-breadcrumb-item>活动详情</wk-breadcrumb-item>
            </wk-breadcrumb>
            <div class="content" :style="box3?{height: '230px'}:{height:'0px'}">
              <div class="desc" v-html="iconContent"></div>
              <div class="code">
                <BreadcrumbIcon></BreadcrumbIcon>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box3')">
            <p>
              <i :class="[box3Line?'hovering':'',box3?'active':'']"></i>
              <transition name="fade">
                <span v-if="box3Line">{{box3?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文本描述-->
      <section class="box box4" id="box4">
        <p class="p1">Breadcrumb Attributes</p>
        <BreadcrumbRead></BreadcrumbRead>
      </section>

      <!--文本描述-->
      <section class="box box5" id="box5">
        <p class="p1">Breadcrumb Item Attributes</p>
        <BreadcrumbItemRead></BreadcrumbItemRead>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础用法
        </li>
        <li @click="returnTop($event,'#box3')">
          图标分隔符
        </li>
        <li @click="returnTop($event, '#box4')">
          Breadcrumb Attributes
        </li>
        <li @click="returnTop($event, '#box5')">
          Breadcrumb Item Attributes
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BreadcrumbBase from '@/assets/markdown/breadcrumb/breadcrumbBase.md'
import BreadcrumbIcon from '@/assets/markdown/breadcrumb/breadcrumbIcon.md'
import BreadcrumbRead from '@/assets/markdown/breadcrumb/breadcrumbRead.md'
import BreadcrumbItemRead from '@/assets/markdown/breadcrumb/breadcrumbItemRead.md'
import marked from 'marked'
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
  name: 'message',
  data() {
    return {
      active: 0,
      box2Line: false,
      box2: false,
      box3Line: false,
      box3: false,
    }
  },
  components: {
    BreadcrumbBase,
    BreadcrumbIcon,
    BreadcrumbRead,
    BreadcrumbItemRead,
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = `在\`wk-breadcrumb\`中使用\`wk-breadcrumb-item\`标签表示从首页开始的每一级。\`Winkey\` 提供了一个\`separator\`属性，
                    在\`wk-breadcrumb\`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠\`/\`。`;
      return marked(detail || '', {
          sanitize: true
        });
    },
    iconContent: function() {
      let detail = `通过设置 \`separator-class\` 可使用相应的 \`iconfont\` 作为分隔符，注意这将使 \`separator\` 设置失效`;
        return marked(detail || '', {
          sanitize: true
        });
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    returnTop(e,box) {
      let Button = this.$refs.Breadcrumb;
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
        case 'box3':
          this.box3Line = true;
          break;
        case 'box4':
          this.box4Line = true;
          break;
        case 'box5':
          this.box5Line = true;
          break;
      }
    },
    mouseLeave(box) {
      switch(box) {
        case 'box2':
          this.box2Line = false;
          break;
        case 'box3':
          this.box3Line = false;
          break;
        case 'box4':
          this.box4Line = false;
          break;
        case 'box5':
          this.box5Line = false;
          break;
      }
    },
    showData(box) {
      switch(box) {
        case 'box2':
          this.box2 = !this.box2;
          break;
        case 'box3':
          this.box3 = !this.box3;
          break;
        case 'box4':
          this.box4 = !this.box4;
          break;
        case 'box5':
          this.box5 = !this.box5;
          break;
      }
    }
  }
}
</script>


<style lang="less" scoped>
.Breadcrumb {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  .middle {
    min-width: 1000px;
    width: 89%;
  }
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
        p {
          padding: 0;
        }
      }
      .content {
        overflow: hidden;
        transition: all ease-in-out .2s;
        .code {
          margin-top: 30px;
        }
        .desc {
          margin: 20px 0;
          padding: 20px 15px;
          border: 1px solid #EBEBEB;
          border-radius: 5px;
          background: #fff;
          p {
            font-size: 14px;
            color: #5e6d82;
          }
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
  .box2, .box3, .box4, .box5, .box6 {
    margin-top: 50px;
    .demo-col {
      margin: 10px 0;
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

<style lang="less">
.Breadcrumb {
  .box4, .box5 {
    h3 {
      margin-top: 26px;
      padding: 20px 0;
    }
    section {
      table {
        width: 100%;
        tr {
          display: block;
          border-bottom: 1px solid #DCDFE6;
          padding: 15px 0;
        }
        th {
          display: inline-block;
          color: #909399;
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          padding: 0 10px;
        }
        td {
          display: inline-block;
          color: #606266;
          font-size: 14px;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="Dropdown" ref="Dropdown">
    <div class="middle">
      <section class="box box1">
        <h2>Message 消息提示 </h2>
        <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
      </section>

      <!--基础使用-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <p>从顶部出现，3 秒后自动消失。</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-button :plain="true" class="demo-button" @click="open" v-bind:test="123">打开信息提示</wk-button>
            <wk-button :plain="true" class="demo-button" v-bind:test="12334">VNode</wk-button>
            <div class="content" :style="box2?{height: '410px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <Dropdown-base></Dropdown-base>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box2')">
            <p>
              <i :class="[box2Line?'hovering':'',box2?'active':'']"></i>
              <transition name="fade">
                <span v-if="box2Line">{{box4?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文本描述-->
      <section class="box box8" id="box8">
        <p class="p1">Attributes</p>
        <DropdownRead></DropdownRead>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          设计理念
        </li>
        <li @click="returnTop($event,'#box3')">
          概述
        </li>
        <li @click="returnTop($event,'#box4')">
          基础栅格
        </li>
        <li @click="returnTop($event,'#box5')">
          区块间隔
        </li>
        <li @click="returnTop($event,'#box6')">
          左右偏移
        </li>
        <li @click="returnTop($event,'#box7')">
          对齐
        </li>
        <li @click="returnTop($event, '#box8')">
          Attributes
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
      box2Line: false,
      box2: false,
      box4Line: false,
      box4: false,
      box5Line: false,
      box5: false,
      box6Line: false,
      box6: false,
      box7Line: false,
      box7: false,
    }
  },
  components: {
    
  },
  mounted() {
    console.log(this.$message)
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = '使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    gutterContent: function() {
      let detail = `栅格常常需要和间隔进行配合，你可以使用 \`Row\` 的 \`gutter\` 属性，我们推荐使用 \`(16+8n)px\` 作为栅格间隔。(n 是自然数)
                    如果要支持响应式，可以写成 \`{ xs: 8, sm: 16, md: 24, lg: 32 }\`。
                    如果需要垂直间距，可以写成数组形式 \`[水平间距, 垂直间距]\` \`[16, { xs: 8, sm: 16, md: 24, lg: 32 }]\`。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    offsetContent: function() {
      let detail = '使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    alignmentContent: function() {
      let detail = '子元素垂直对齐。';
        return marked(detail || '', {
          sanitize: true
        });
    }
  },
  methods: {
    open() {
      console.log(this)
      this.$message('这是一条信息提示')
    },
    returnTop(e,box) {
      let Button = this.$refs.Dropdown;
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
        case 'box4':
          this.box4Line = true;
          break;
        case 'box5':
          this.box5Line = true;
          break;
        case 'box6':
          this.box6Line = true;
          break;
        case 'box7':
          this.box7Line = true;
          break;
      }
    },
    mouseLeave(box) {
      switch(box) {
        case 'box2':
          this.box2Line = false;
          break;
        case 'box4':
          this.box4Line = false;
          break;
        case 'box5':
          this.box5Line = false;
          break;
        case 'box6':
          this.box6Line = false;
          break;
        case 'box7':
          this.box7Line = false;
          break;
      }
    },
    showData(box) {
      switch(box) {
        case 'box2':
          this.box2 = !this.box2;
          break;
        case 'box4':
          this.box4 = !this.box4;
          break;
        case 'box5':
          this.box5 = !this.box5;
          break;
        case 'box6':
          this.box6 = !this.box6;
          break;
        case 'box7':
          this.box7 = !this.box7;
          break;
      }
    }
  }
}
</script>


<style lang="less" scoped>
.Dropdown {
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
  .box2 {
    margin-top: 50px;
    .demo-button {
      margin: 0 10px;
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
.Dropdown {
  .box8 {
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
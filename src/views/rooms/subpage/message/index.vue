<template>
  <div class="Message" ref="Message">
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
            <wk-button :plain="true" class="demo-button" @click="open">打开信息提示</wk-button>
            <div class="content" :style="box2?{height: '323px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <MessageBase></MessageBase>
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

      <!--不同状态-->
      <section class="box box3" id="box3">
        <p class="p1">不同状态</p>
        <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')">
          <div class="demo">
            <wk-button :plain="true" class="demo-button" @click="open1">成功</wk-button>
            <wk-button :plain="true" class="demo-button" @click="open2">警告</wk-button>
            <wk-button :plain="true" class="demo-button" @click="open">消息</wk-button>
            <wk-button :plain="true" class="demo-button" @click="open3">错误</wk-button> 
            <div class="content" :style="box3?{height: '600px'}:{height:'0px'}">
              <div class="desc" v-html="statusContent"></div>
              <div class="code">
                <MessageStatus></MessageStatus>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box3')">
            <p>
              <i :class="[box2Line?'hovering':'',box3?'active':'']"></i>
              <transition name="fade">
                <span v-if="box3Line">{{box3?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--可关闭-->
      <section class="box box4" id="box4">
        <p class="p1">可关闭</p>
        <p>可以添加关闭按钮。</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <wk-button :plain="true" class="demo-button" @click="open5">成功</wk-button>
            <wk-button :plain="true" class="demo-button" @click="open6">警告</wk-button>
            <wk-button :plain="true" class="demo-button" @click="open4">消息</wk-button>
            <wk-button :plain="true" class="demo-button" @click="open7">错误</wk-button> 
            <div class="content" :style="box4?{height: '780px'}:{height:'0px'}">
              <div class="desc" v-html="closeContent"></div>
              <div class="code">
                <MessageClose></MessageClose>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box4')">
            <p>
              <i :class="[box4Line?'hovering':'',box4?'active':'']"></i>
              <transition name="fade">
                <span v-if="box4Line">{{box4?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文字居中-->
      <section class="box box5" id="box5">
        <p class="p1">文字居中</p>
        <p>使用 center 属性让文字水平居中。</p>
        <div class="container"  @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')">
          <div class="demo">
            <wk-button :plain="true" @click="openCenter">文字居中</wk-button>
            <div class="content" :style="box5?{height: '270px'}:{height:'0px'}">
              <div class="code">
                <MessageCenter></MessageCenter>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box5')">
            <p>
              <i :class="[box5Line?'hovering':'',box5?'active':'']"></i>
              <transition name="fade">
                <span v-if="box5Line">{{box5?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文本描述-->
      <section class="box box6" id="box6">
        <p class="p1">Options</p>
        <MessageRead></MessageRead>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础用法
        </li>
        <li @click="returnTop($event,'#box3')">
          不同状态
        </li>
        <li @click="returnTop($event,'#box4')">
          可关闭
        </li>
        <li @click="returnTop($event,'#box5')">
          文字居中
        </li>
        <li @click="returnTop($event, '#box6')">
          Options
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MessageBase from '@/assets/markdown/message/messageBase.md'
import MessageStatus from '@/assets/markdown/message/messageStatus.md'
import MessageClose from '@/assets/markdown/message/messageClose.md'
import MessageCenter from '@/assets/markdown/message/messageCenter.md'
import MessageRead from '@/assets/markdown/message/messageRead.md'
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
      box3Line: false,
      box3: false,
      box4Line: false,
      box4: false,
      box5Line: false,
      box5: false,
    }
  },
  components: {
    MessageBase,
    MessageStatus,
    MessageClose,
    MessageCenter,
    MessageRead
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = `Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，
                    可以结合 Notification 的文档理解它们。Element 注册了一个\`$message\`方法用于调用，Message 可以接收一个
                    字符串或一个 VNode 作为参数，它会被显示为正文内容。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    statusContent: function() {
      let detail = `当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置\`type\`字段可以定义不同的状态，默认为\`info\`。
                    此时正文内容以\`message\`的值传入。同时，我们也为 \`Message\` 的各种 \`type\` 注册了方法，可以在不传入\`type\`字段的情况下
                    像\`open3\`那样直接调用。`;
        return marked(detail || '', {
          sanitize: true
        })
    },
    closeContent: function() {
      let detail = `默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用\`showClose\`字段。此外，和 Notification 一样，
                    Message拥有可控的\`duration\`，设置\`0\`为不会被自动关闭，默认为 3000 毫秒。`;
        return marked(detail || '', {
          sanitize: true
        })
    },
  },
  methods: {
    open() {
      this.$message('这是一条信息提示')
    },
    open1() {
      this.$message({
        message: '恭喜你，这是一条成功信息',
        type: 'success'
      })
    },
    open2() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open3() {
      this.$message.error('错了哦，这是一条错误信息');
    },
    open4() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
        duration: 0
      });
    },
    open5() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: 3000
      });
    },
    open6() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        duration: 4000
      });
    },
    open7() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error',
        duration: 3000
      });
    },
    openCenter() {
      this.$message({
        message: '居中的文字',
        center: true,
      });
    },
    returnTop(e,box) {
      let Button = this.$refs.Message;
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
.Message {
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
.Message {
  .box6 {
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
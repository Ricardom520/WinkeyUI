<template>
  <div class="Message" ref="Message">
    <div class="middle">
      <section class="box box1">
        <h2>Switch 开关</h2>
        <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      </section>

      <!--基本用法-->
      <section class="box box2" id="box2">
        <p class="p1">基本用法</p>
        <p>从顶部出现，3 秒后自动消失。</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-switch
              class="demo-switch"
              v-model="value2"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </wk-switch>
            <div class="content" :style="box2?{height: '335px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <SwitchBase></SwitchBase>
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

      <!--文字描述-->
      <section class="box box3" id="box3">
        <p class="p1">文字描述</p>
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')">
          <div class="demo">
            <wk-switch
              class="demo-switch"
              v-model="value2"
              active-text="按月付费"
              inactive-text="按年付费">
            </wk-switch>
            <wk-switch
              class="demo-switch"
              style="display: block"
              v-model="value3"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="按月付费"
              inactive-text="按年付费">
            </wk-switch>
            <div class="content" :style="box3?{height: '505px'}:{height:'0px'}">
              <div class="desc" v-html="textContent"></div>
              <div class="code">
                <SwitchText></SwitchText>
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

      <!--禁用状态-->
      <section class="box box4" id="box4">
        <p class="p1">禁用状态</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <wk-switch
              class="demo-switch"
              v-model="value2"
              disabled>
            </wk-switch>
            <wk-switch
              class="demo-switch"
              v-model="value3"
              disabled>
            </wk-switch>
            <div class="content" :style="box4?{height: '430px'}:{height:'0px'}">
              <div class="desc" v-html="disabledContent"></div>
              <div class="code">
                <SwitchDisabled></SwitchDisabled>
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

      <!--文本描述-->
      <section class="box box5" id="box5">
        <p class="p1">Attributes</p>
        <SwitcheRead></SwitcheRead>
      </section>

      <!--Events-->
      <section class="box box6" id="box6">
        <p class="p1">Events</p>
        <SwitchEvent></SwitchEvent>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基本用法
        </li>
        <li @click="returnTop($event,'#box3')">
          文字描述
        </li>
        <li @click="returnTop($event,'#box4')">
          禁用状态
        </li>
        <li @click="returnTop($event, '#box5')">
          Attributes
        </li>
        <li @click="returnTop($event, '#box6')">
          Events
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SwitchBase from '@/assets/markdown/switch/switchBase.md'
import SwitchText from '@/assets/markdown/switch/switchText.md'
import SwitchDisabled from '@/assets/markdown/switch/switchDisabled.md'
import SwitcheRead from '@/assets/markdown/switch/switchRead.md'
import SwitchEvent from '@/assets/markdown/switch/switchEvent.md'
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
      value2: true,
      value3: false,
    }
  },
  components: {
    SwitchBase,
    SwitchText,
    SwitchDisabled,
    SwitcheRead,
    SwitchEvent
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = `绑定\`v-model\`到一个\`Boolean\`类型的变量。可以使用\`active-color\`属性与\`inactive-color\`属性来设置开关的背景色。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    textContent: function() {
      let detail = `使用\`active-text\`属性与\`inactive-text\`属性来设置开关的文字描述。`;
        return marked(detail || '', {
          sanitize: true
        })
    },
    disabledContent: function() {
      let detail = `设置\`disabled\`属性，接受一个\`Boolean\`，设置\`true\`即可禁用。`;
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
  .box2, .box5, .box6 {
    margin-top: 50px;
    .demo-switch {
      margin: 20px 20px 20px 0;
    }
  }
  .box3 {
    margin-top: 50px;
    .container {
      margin-top: 30px;
    }
    .demo-switch {
      margin: 10px 20px 10px 0;
    }
  }
  .box4 {
    margin-top: 50px;
    .container {
      margin-top: 30px;
    }
    .demo-switch {
      margin: 20px 10px 20px 0;
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
  .box5, .box6 {
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
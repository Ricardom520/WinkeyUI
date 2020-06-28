<template>
  <div class="Steps" ref="Steps">
    <div class="middle">
      <section class="box box1">
        <h2>Space间距 </h2>
        <p>设置组件之间的间距。</p>
        <p>#避免组件紧贴在一起，拉开统一的空间。</p>
      </section>

      <!--基础使用-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <p>相邻组件水平间距。</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-space>
              <wk-space-item>space</wk-space-item>
              <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
              <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
            </wk-space>
            <div class="content" :style="box2?{height: '135px'}:{height:'0px'}">
              <div class="code">
                <SpaceBase></SpaceBase>
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

      <!--垂直间距-->
      <section class="box box3" id="box3">
        <p class="p1">垂直间距</p>
        <p>相邻组件垂直间距。</p>
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')">
          <div class="demo">
            <wk-space direction="vertical">
              <wk-space-item>space</wk-space-item>
              <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
              <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
            </wk-space>
            <div class="content" :style="box3?{height: '215px'}:{height:'0px'}">
              <div class="desc" v-html="directionContent"></div>
              <div class="code">
                <SpaceDirection></SpaceDirection>
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

      <!--间距大小-->
      <section class="box box4" id="box4">
        <p class="p1">间距大小</p>
        <p>间距预设大、中、小三种大小。</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <wk-space :size="16">
              <wk-space-item>space</wk-space-item>
              <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
              <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
            </wk-space>
            <div class="content" :style="box4?{height: '215px'}:{height:'0px'}">
              <div class="desc" v-html="sizeContent"></div>
              <div class="code">
                <SpaceSize></SpaceSize>
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

      <!--对齐-->
      <section class="box box5" id="box5">
        <p class="p1">对齐</p>
        <p>设置对齐模式。</p>
        <div class="container"  @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')">
          <div class="demo">
            <wk-row>
              <wk-col :span="12" class="demo-col">
                <wk-space align="center">
                  <wk-space-item>space</wk-space-item>
                  <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
                  <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
                </wk-space>
              </wk-col>
              <wk-col :span="12" class="demo-col">
                <wk-space align="start">
                  <wk-space-item>space</wk-space-item>
                  <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
                  <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
                </wk-space>
              </wk-col>
              <wk-col :span="12" class="demo-col">
                <wk-space align="end">
                  <wk-space-item>space</wk-space-item>
                  <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
                  <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
                </wk-space>
              </wk-col>
              <wk-col :span="12" class="demo-col">
                <wk-space align="baseline">
                  <wk-space-item>space</wk-space-item>
                  <wk-space-item><wk-button type="primary">Button</wk-button></wk-space-item>
                  <wk-space-item><wk-button>Confirm</wk-button></wk-space-item>
                </wk-space>
              </wk-col>
            </wk-row>
            <div class="content" :style="box5?{height: '510px'}:{height:'0px'}">
              <div class="code">
                <SpaceAlign></SpaceAlign>
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
        <p class="p1">Steps Attributes</p>
        <SpaceRead></SpaceRead>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础用法
        </li>
        <li @click="returnTop($event,'#box3')">
          垂直间距
        </li>
        <li @click="returnTop($event,'#box4')">
          间距大小
        </li>
        <li @click="returnTop($event,'#box5')">
          对齐
        </li>
        <li @click="returnTop($event, '#box6')">
          Steps Attributes
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SpaceBase from '@/assets/markdown/space/spaceBase.md'
import SpaceDirection from '@/assets/markdown/space/spaceDirection.md'
import SpaceSize from '@/assets/markdown/space/spaceSize.md'
import SpaceAlign from '@/assets/markdown/space/spaceAlign.md'
import SpaceRead from '@/assets/markdown/space/spaceRead.md'
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
      box4Line: false,
      box4: false,
      box5Line: false,
      box5: false,
    }
  },
  components: {
    SpaceBase,
    SpaceDirection,
    SpaceSize,
    SpaceAlign,
    SpaceRead,
  },
  mounted() {
    highlightCode()
  },
  computed: {
    directionContent: function() {
      let detail = `可以设置 \`width: 100%\` 独占一行。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    sizeContent: function() {
      let detail = `通过设置 \`size\` 为 \`large\` \`middle\` 分别把间距设为大、中间距。若不设置 \`size\`，则间距为小。或者可以自定义\`size\`大小`;
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
      let Button = this.$refs.Steps;
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
.Steps {
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
.Steps {
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
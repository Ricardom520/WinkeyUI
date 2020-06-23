<template>
  <div class="Steps" ref="Steps">
    <div class="middle">
      <section class="box box1">
        <h2>Steps 步骤条 </h2>
        <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
      </section>

      <!--基础使用-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <p>简单的步骤条。</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-steps :active="active" finish-status="success">
              <wk-step title="步骤 1"></wk-step>
              <wk-step title="步骤 2"></wk-step>
              <wk-step title="步骤 3"></wk-step>
            </wk-steps>
            <wk-button style="margin-top: 12px;" @click="next">下一步</wk-button>
            <div class="content" :style="box2?{height: '475px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <StepsBase></StepsBase>
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

      <!--含状态步骤条-->
      <section class="box box3" id="box3">
        <p class="p1">含状态步骤条</p>
        <p>每一步骤显示出该步骤的状态。</p>
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')">
          <div class="demo">
            <wk-steps :space="200" :active="1" finish-status="success">
              <wk-step title="已完成"></wk-step>
              <wk-step title="进行中"></wk-step>
              <wk-step title="步骤 3"></wk-step>
            </wk-steps>
            <div class="content" :style="box3?{height: '215px'}:{height:'0px'}">
              <div class="desc" v-html="statusContent"></div>
              <div class="code">
                <StepsStatus></StepsStatus>
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

      <!--有描述的步骤条-->
      <section class="box box4" id="box4">
        <p class="p1">有描述的步骤条</p>
        <p>每个步骤有其对应的步骤状态描述。</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <wk-steps :active="1">
              <wk-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></wk-step>
              <wk-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></wk-step>
              <wk-step title="步骤 3" description="这段就没那么长了"></wk-step>
            </wk-steps>
            <div class="content" :style="box4?{height: '130px'}:{height:'0px'}">
              <div class="code">
                <StepsDesc></StepsDesc>
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

      <!--居中的步骤条-->
      <section class="box box5" id="box5">
        <p class="p1">居中的步骤条</p>
        <p>标题和描述都将居中。</p>
        <div class="container"  @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')">
          <div class="demo">
            <wk-steps :active="2" align-center>
              <wk-step title="步骤1" description="这是一段很长很长很长的描述性文字"></wk-step>
              <wk-step title="步骤2" description="这是一段很长很长很长的描述性文字"></wk-step>
              <wk-step title="步骤3" description="这是一段很长很长很长的描述性文字"></wk-step>
              <wk-step title="步骤4" description="这是一段很长很长很长的描述性文字"></wk-step>
            </wk-steps>
            <div class="content" :style="box5?{height: '150px'}:{height:'0px'}">
              <div class="code">
                <StepsCenter></StepsCenter>
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

      <!--竖式步骤条-->
      <section class="box box6" id="box6">
        <p class="p1">竖式步骤条</p>
        <p>竖直方向的步骤条。</p>
        <div class="container"  @mouseenter="mouseEnter('box6')" @mouseleave="mouseLeave('box6')">
          <div class="demo">
            <div style="height: 300px;">
              <wk-steps direction="vertical" :active="1">
                <wk-step title="步骤 1"></wk-step>
                <wk-step title="步骤 2"></wk-step>
                <wk-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></wk-step>
              </wk-steps>
            </div>
            <div class="content" :style="box5?{height: '135px'}:{height:'0px'}">
              <div class="code">
                <StepsVertical></StepsVertical>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box6')">
            <p>
              <i :class="[box6Line?'hovering':'',box6?'active':'']"></i>
              <transition name="fade">
                <span v-if="box6Line">{{box6?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文本描述-->
      <section class="box box7" id="box7">
        <p class="p1">Steps Attributes</p>
        <StepsRead></StepsRead>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础用法
        </li>
        <li @click="returnTop($event,'#box3')">
          含状态步骤条
        </li>
        <li @click="returnTop($event,'#box4')">
          有描述的步骤条
        </li>
        <li @click="returnTop($event,'#box5')">
          居中的步骤条
        </li>
        <li @click="returnTop($event, '#box6')">
          竖式步骤条
        </li>
        <li @click="returnTop($event, '#box7')">
          Steps Attributes
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import StepsBase from '@/assets/markdown/steps/stepsBase.md'
import StepsStatus from '@/assets/markdown/steps/stepsStatus.md'
import StepsDesc from '@/assets/markdown/steps/stepsDesc.md'
import StepsCenter from '@/assets/markdown/steps/stepsCenter.md'
import StepsRead from '@/assets/markdown/steps/stepsRead.md'
import StepsVertical from '@/assets/markdown/steps/stepsVertical.md'
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
    StepsBase,
    StepsStatus,
    StepsDesc,
    StepsCenter,
    StepsVertical,
    StepsRead
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = `设置\`active\`属性，接受一个\`Number\`，表明步骤的 \`index\`，从 0 开始。需要定宽的步骤条时，设置\`space\`属性即可，它接受\`Number\`，
                    单位为\`px\`，如果不设置，则为自适应。设置\`finish-status\`属性可以改变已经完成的步骤的状态。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    statusContent: function() {
      let detail = `也可以使用\`title\`具名分发，可以用\`slot\`的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。`;
        return marked(detail || '', {
          sanitize: true
        })
    },
    closeContent: function() {
      let detail = `默认的 Steps 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用\`showClose\`字段。此外，和 Notification 一样，
                    Message拥有可控的\`duration\`，设置\`0\`为不会被自动关闭，默认为 3000 毫秒。`;
        return marked(detail || '', {
          sanitize: true
        })
    },
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
  .box2, .box3, .box4, .box5, .box6, .box7 {
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
.Steps {
  .box7 {
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
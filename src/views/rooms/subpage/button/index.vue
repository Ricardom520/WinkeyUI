<template>
  <div class="Button" ref="Button">
    <div>
      <section class="box box1">
        <h2>Button 按钮</h2>
        <p>常用的操作按钮</p>
      </section>
      <!--基础用法-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <p>基础的按钮用法</p>
        <div class="container" @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-row class="row">
              <wk-button>默认按钮</wk-button>
              <wk-button type="primary">主要按钮</wk-button>
              <wk-button type="success">成功按钮</wk-button>
              <wk-button type="info">信息按钮</wk-button>
              <wk-button type="warning">警告按钮</wk-button>
              <wk-button type="danger">危险按钮</wk-button>
            </wk-row>
            <wk-row class="row">
              <wk-button plain>默认按钮</wk-button>
              <wk-button type="primary" plain>主要按钮</wk-button>
              <wk-button type="success" plain>成功按钮</wk-button>
              <wk-button type="info" plain>信息按钮</wk-button>
              <wk-button type="warning" plain>警告按钮</wk-button>
              <wk-button type="danger" plain>危险按钮</wk-button>
            </wk-row>
            <wk-row class="row">
              <wk-button round>默认按钮</wk-button>
              <wk-button type="primary" round>主要按钮</wk-button>
              <wk-button type="success" round>成功按钮</wk-button>
              <wk-button type="info" round>信息按钮</wk-button>
              <wk-button type="warning" round>警告按钮</wk-button>
              <wk-button type="danger" round>危险按钮</wk-button>
            </wk-row>
            <wk-row class="row">
              <wk-button circle icon="wk-icon-search"></wk-button>
              <wk-button type="primary" circle icon="wk-icon-write"></wk-button>
              <wk-button type="success" circle icon="wk-icon-success"></wk-button>
              <wk-button type="info" circle icon="wk-icon-envelope"></wk-button>
              <wk-button type="warning" circle icon="wk-icon-collection"></wk-button>
              <wk-button type="danger" circle icon="wk-icon-dustbin"></wk-button>
            </wk-row>
            <div class="content" :style="box2?{height: '627.2px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <buttonBase></buttonBase>
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

      <!--禁用状态-->
      <section class="box box3" id="box3">
        <p class="p1">禁用状态</p>
        <p>按钮不可用状态</p>
        <div class="container" @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')">
          <div class="demo">
            <wk-row class="row">
              <wk-button disabled>默认按钮</wk-button>
              <wk-button type="primary" disabled>主要按钮</wk-button>
              <wk-button type="success" disabled>成功按钮</wk-button>
              <wk-button type="info" disabled>信息按钮</wk-button>
              <wk-button type="warning" disabled>警告按钮</wk-button>
              <wk-button type="danger" disabled>危险按钮</wk-button>
            </wk-row>
            <wk-row class="row">
              <wk-button plain disabled>默认按钮</wk-button>
              <wk-button type="primary" plain disabled>主要按钮</wk-button>
              <wk-button type="success" plain disabled>成功按钮</wk-button>
              <wk-button type="info" plain disabled>信息按钮</wk-button>
              <wk-button type="warning" plain disabled>警告按钮</wk-button>
              <wk-button type="danger" plain disabled>危险按钮</wk-button>
            </wk-row>
            <div class="content" :style="box3?{height: '359.2px'}:{height:'0px'}">
              <div class="desc" v-html="disabledContent"></div>
              <div class="code">
                <buttonDisabled></buttonDisabled>
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

      <!--文字按钮-->
      <section class="box box4" id="box4">
        <p class="p1">文字按钮</p>
        <p>没有边框和背景色的按钮</p>
        <div class="container" @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <div class="row">
              <wk-button type="text">文字按钮</wk-button>
              <wk-button type="text" disabled>文字按钮</wk-button>
            </div>
            <div class="content" :style="box4?{height: '105.2px'}:{height:'0px'}">
              <div class="code">
                <buttonText></buttonText>
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

      <!--图标按钮-->
      <section class="box box5" id="box5">
        <p class="p1">图标按钮</p>
        <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
        <div class="container" @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')">
          <div class="demo">
            <wk-row class="row">
              <wk-button type="primary" icon="wk-icon-write"></wk-button>
              <wk-button type="primary" icon="wk-icon-envelope"></wk-button>
              <wk-button type="primary" icon="wk-icon-success"></wk-button>
              <wk-button type="primary" icon="wk-icon-search"></wk-button>
              <wk-button type="primary">上传<i class="iconfont wk-icon-upload"></i></wk-button>
            </wk-row>
            <div class="content" :style="box5?{height: '194.2px'}:{height:'0px'}">
              <div class="desc" v-html="iconContent"></div>
              <div class="code">
                <buttonIcon></buttonIcon>
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

      <!--加载中-->
      <section class="box box6" id="box6">
        <p class="p1">加载中</p>
        <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
        <div class="container" @mouseenter="mouseEnter('box6')" @mouseleave="mouseLeave('box6')">
          <div class="demo">
            <wk-row class="row">
              <wk-button type="primary" :loading="true">加载中</wk-button>
            </wk-row>
            <div class="content" :style="box6?{height: '123.2px'}:{height:'0px'}">
              <div class="desc" v-html="iconContent"></div>
              <div class="code">
                <buttonLoading></buttonLoading>
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

      <!--不同尺寸-->
      <section class="box box7" id="box7">
        <p class="p1">不同尺寸</p>
        <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
        <div class="container" @mouseenter="mouseEnter('box7')" @mouseleave="mouseLeave('box7')">
          <div class="demo">
            <wk-row class="row">
              <wk-button>默认按钮</wk-button>
              <wk-button size="medium">中等按钮</wk-button>
              <wk-button size="small">小型按钮</wk-button>
              <wk-button size="mini">超小按钮</wk-button>
            </wk-row>
            <wk-row class="row">
              <wk-button round>默认按钮</wk-button>
              <wk-button size="medium" round>中等按钮</wk-button>
              <wk-button size="small" round>小型按钮</wk-button>
              <wk-button size="mini" round>超小按钮</wk-button>
            </wk-row>
            <div class="content" :style="box7?{height: '328.2px'}:{height:'0px'}">
              <div class="desc" v-html="sizeContent"></div>
              <div class="code">
                <buttonSize></buttonSize>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box7')">
            <p>
              <i :class="[box7Line?'hovering':'',box7?'active':'']"></i>
              <transition name="fade">
                <span v-if="box7Line">{{box7?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文本描述-->
      <section class="box box8">
        <p class="p1">Attributes</p>
        <buttonRead></buttonRead>
      </section>
    </div>
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础用法
        </li>
        <li @click="returnTop($event,'#box3')">
          禁用状态
        </li>
        <li @click="returnTop($event,'#box4')">
          文字按钮
        </li>
        <li @click="returnTop($event,'#box5')">
          图标按钮
        </li>
        <li @click="returnTop($event,'#box6')">
          加载中
        </li>
        <li @click="returnTop($event,'#box7')">
          不同尺寸
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import buttonBase from '@/assets/markdown/button/buttonBase.md'
import buttonDisabled from '@/assets/markdown/button/buttonDisabled.md'
import buttonText from '@/assets/markdown/button/buttonText.md'
import buttonIcon from '@/assets/markdown/button/buttonIcon.md'
import buttonSize from '@/assets/markdown/button/buttonSize.md'
import buttonRead from '@/assets/markdown/button/buttonRead.md'
import buttonLoading from '@/assets/markdown/button/buttonLoading.md'
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
  name: 'Button',
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
      box6Line: false,
      box6: false,
      box7Line: false,
      box7: false,
    }
  },
  components: {
    buttonBase,
    buttonDisabled,
    buttonText,
    buttonIcon,
    buttonSize,
    buttonRead,
    buttonLoading,
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = '使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    disabledContent: function() {
      let detail = '你可以使用`disabled`属性来定义按钮是否可用，它接受一个Boolean值。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    iconContent: function() {
      let detail = '设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    sizeContent: function() {
      let detail = '额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。';
        return marked(detail || '', {
          sanitize: true
        });
    }
  },
  methods: {
    returnTop(e,box) {
      let Button = this.$refs.Button;
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
        case 'box6':
          this.box6Line = true;
          break;
        case 'box7':
          this.box7Line = true;
          break;
        default:
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
        case 'box6':
          this.box6Line = false;
          break;
        case 'box7':
          this.box7Line = false;
          break;
        default:
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
.Button {
  display: flex;
  margin-bottom: 20px; 
  .anchor {
    position: fixed;
    right: 100px;
    border-left: 1px solid #f0f0f0;
    background: #fff;
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
  .box1 {
    h2 {
      font-size: 26px;
      font-weight: 400;
    }
  }
  .box2 {
    margin-top: 50px;
  }
  .box3 {
    margin-top: 50px;
  }
  .box4 {
    margin-top: 50px;
  }
  .box5 {
    margin-top: 50px;
  }
  .box6 {
    margin-top: 50px;
  }
  .box7 {
    margin-top: 50px;
  }
  .box8 {
    margin-top: 50px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter{
  opacity: 0;
  transform: translateX(20px);
}
.fade-leave  {
  transform: translateX(0px);
}
</style>
<style lang="less">
.Button {
  .box8 {
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
      }
      td {
        display: inline-block;
        color: #606266;
        font-size: 14px;
      }
    }
  }
}
</style>

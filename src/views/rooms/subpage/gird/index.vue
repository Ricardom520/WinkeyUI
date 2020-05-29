<template>
  <div class="Gird" ref="Gird">
    <div class="middle">
      <section class="box box1">
        <h2>Gird 栅格 </h2>
        <p>24 栅格系统。</p>
      </section>

      <!--设计理念-->
      <section class="box box2" id="box2">
        <p class="p1">设计理念</p>
        <div class="gird-demo">
          <wk-row class="demo-row">
            <wk-col :span="24" class="demo-col demo-col-1">100%</wk-col>
          </wk-row>
          <wk-row class="demo-row">
            <wk-col :span="6" class="demo-col demo-col-2-1">25%</wk-col>
            <wk-col :span="6" class="demo-col demo-col-2-2">25%</wk-col>
            <wk-col :span="6" class="demo-col demo-col-2-3">25%</wk-col>
            <wk-col :span="6" class="demo-col demo-col-2-4">25%</wk-col>
          </wk-row>
          <wk-row class="demo-row">
            <wk-col :span="8" class="demo-col demo-col-3-1">33.33%</wk-col>
            <wk-col :span="8" class="demo-col demo-col-3-2">33.33%</wk-col>
            <wk-col :span="8" class="demo-col demo-col-3-3">33.33%</wk-col>
          </wk-row>
          <wk-row class="demo-row">
            <wk-col :span="12" class="demo-col demo-col-4-1">50%</wk-col>
            <wk-col :span="12" class="demo-col demo-col-4-2">50%</wk-col>
          </wk-row>
          <wk-row class="demo-row">
            <wk-col :span="16" class="demo-col demo-col-5-1">66.66%</wk-col>
            <wk-col :span="8" class="demo-col demo-col-5-2">33.33%</wk-col>
          </wk-row>
        </div>
        <div class="desc">
          <p class="p1">在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p>
          <p class="p2">划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
        </div>
      </section>

      <!--概述-->
      <section class="box box3" id="box3">
        <p class="p1">概述</p>
        <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
        <div class="lists">
          <ul>
            <li>通过<span>row</span>在水平方向建立一组<span>column</span>（简写 col）</li>
            <li>你的内容应当放置于<span>col</span>内，并且，只有<span>col</span>可以作为<span>row</span>的直接元素</li>
            <li>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用<span><Col span={8} /></span>来创建</li>
            <li>如果一个<span>row</span>中的<span>col</span>总和超过 24，那么多余的<span>col</span>会作为一个整体另起一行排列</li>
          </ul>
        </div>
        <div class="desc">
          <p>我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p>
          <p>布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
        </div>
      </section>

      <!--基础使用-->
      <section class="box box4" id="box4">
        <p class="p1">基础栅格</p>
        <p>从堆叠到水平排列。</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <wk-row class="demo-row">
              <wk-col :span="24" class="demo-col demo-1">col</wk-col>
            </wk-row>
            <wk-row class="demo-row">
              <wk-col :span="12" class="demo-col demo-2-1">col-12</wk-col>
              <wk-col :span="12" class="demo-col demo-2-2">col-12</wk-col>
            </wk-row>
            <wk-row class="demo-row">
              <wk-col :span="8" class="demo-col demo-3-1">col-8</wk-col>
              <wk-col :span="8" class="demo-col demo-3-2">col-8</wk-col>
              <wk-col :span="8" class="demo-col demo-3-3">col-8</wk-col>
            </wk-row>
            <wk-row class="demo-row">
              <wk-col :span="6" class="demo-col demo-4-1">col-6</wk-col>
              <wk-col :span="6" class="demo-col demo-4-2">col-6</wk-col>
              <wk-col :span="6" class="demo-col demo-4-3">col-6</wk-col>
              <wk-col :span="6" class="demo-col demo-4-4">col-6</wk-col>
            </wk-row>
            <div class="content" :style="box4?{height: '410px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <gird-base></gird-base>
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

      <!--区块间隔-->
      <section class="box box5" id="box5">
        <p class="p1">区块间隔</p>
        <p>使区块产生一些间隔。</p>
        <div class="container"  @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')">
          <div class="demo">
            <wk-divider orientation="left">
              Horizontal
            </wk-divider>
            <wk-row class="demo-row" :gutter="16">
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
            </wk-row>
             <wk-divider orientation="left">
              Responsive
            </wk-divider>
            <wk-row class="demo-row" :gutter="{xs: 8, sm: 16, md: 24, lg: 32}">
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
            </wk-row>
            <wk-divider orientation="left">
              Vertical
            </wk-divider>
            <wk-row class="demo-row" :gutter="[16, 24]">
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
              <wk-col :span="6" class="demo-col">
                <div>col-6</div>
              </wk-col>
            </wk-row>
            <div class="content" :style="box5?{height: '1134px'}:{height:'0px'}">
              <div class="desc" v-html="gutterContent"></div>
              <div class="code">
                <girdGutter></girdGutter>
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

      <!--左右偏移-->
      <section class="box box6" id="box6">
        <p class="p1">左右偏移</p>
        <p>列偏移。</p>
        <div class="container"  @mouseenter="mouseEnter('box6')" @mouseleave="mouseLeave('box6')">
          <div class="demo">
            <wk-row class="demo-row">
              <wk-col :span="8" class="demo-col demo-col-1">
                col-8
              </wk-col>
              <wk-col :span="8" class="demo-col demo-col-2" :offset="8">
                col-8
              </wk-col>
            </wk-row>
            <wk-row class="demo-row">
              <wk-col :span="6" class="demo-col demo-col-2-1" :offset="6">
                col-6 col-offset-6
              </wk-col>
              <wk-col :span="6" class="demo-col demo-col-2-2" :offset="6">
                col-6 col-offset-6
              </wk-col>
            </wk-row>
            <wk-row class="demo-row">
              <wk-col :span="12" class="demo-col demo-col-2-1" :offset="6">
                col-12 col-offset-6
              </wk-col>
            </wk-row>
            <div class="content" :style="box6?{height: '465px'}:{height:'0px'}">
              <div class="desc" v-html="offsetContent"></div>
              <div class="code">
                <girdOffset></girdOffset>
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

      <!--对齐-->
      <section class="box box7" id="box7">
        <p class="p1">对齐</p>
        <p>对齐。</p>
        <div class="container"  @mouseenter="mouseEnter('box7')" @mouseleave="mouseLeave('box7')">
          <div class="demo">
            <wk-divider orientation="left">Align Top</wk-divider>
            <wk-row class="demo-row" justify="center" align="top">
              <wk-col :span="4" class="demo-col demo-col-1-1">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-2">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-3">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-4">
                col-4
              </wk-col>
            </wk-row>
            <wk-divider orientation="left">Align Middle</wk-divider>
            <wk-row class="demo-row" justify="space-around" align="middle">
              <wk-col :span="4" class="demo-col demo-col-1-1">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-2">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-3">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-4">
                col-4
              </wk-col>
            </wk-row>
            <wk-divider orientation="left">Align Bottom</wk-divider>
            <wk-row class="demo-row" justify="space-between" align="bottom">
              <wk-col :span="4" class="demo-col demo-col-1-1">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-2">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-3">
                col-4
              </wk-col>
              <wk-col :span="4" class="demo-col demo-col-1-4">
                col-4
              </wk-col>
            </wk-row>
            <div class="content" :style="box7?{height: '825px'}:{height:'0px'}">
              <div class="desc" v-html="alignmentContent"></div>
              <div class="code">
                <girdAlignment></girdAlignment>
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
      <section class="box box8" id="box8">
        <p class="p1">Attributes</p>
        <girdRead></girdRead>
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
import girdBase from '@/assets/markdown/gird/girdBase.md'
import girdGutter from '@/assets/markdown/gird/girdGutter.md'
import girdOffset from '@/assets/markdown/gird/girdOffset.md'
import girdAlignment from '@/assets/markdown/gird/girdAlignment.md'
import girdRead from '@/assets/markdown/gird/girdRead.md'
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
  name: 'icon',
  data() {
    return {
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
    girdBase,
    girdGutter,
    girdOffset,
    girdAlignment,
    girdRead,
  },
  mounted() {
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
    returnTop(e,box) {
      let Button = this.$refs.Gird;
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
.Gird {
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
    .gird-demo {
      margin-top: 20px;
      .demo-row {
        margin-bottom: 8px;
        overflow: hidden;
        background-image: linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 4.16666667%,transparent 8.33333333%,#f5f5f5 8.33333333%,#f5f5f5 12.5%,transparent 12.5%,transparent 16.66666667%,#f5f5f5 16.66666667%,#f5f5f5 20.83333333%,transparent 20.83333333%,transparent 25%,#f5f5f5 25%,#f5f5f5 29.16666667%,transparent 29.16666667%,transparent 33.33333333%,#f5f5f5 33.33333333%,#f5f5f5 37.5%,transparent 37.5%,transparent 41.66666667%,#f5f5f5 41.66666667%,#f5f5f5 45.83333333%,transparent 45.83333333%,transparent 50%,#f5f5f5 50%,#f5f5f5 54.16666667%,transparent 54.16666667%,transparent 58.33333333%,#f5f5f5 58.33333333%,#f5f5f5 62.5%,transparent 62.5%,transparent 66.66666667%,#f5f5f5 66.66666667%,#f5f5f5 70.83333333%,transparent 70.83333333%,transparent 75%,#f5f5f5 75%,#f5f5f5 79.16666667%,transparent 79.16666667%,transparent 83.33333333%,#f5f5f5 83.33333333%,#f5f5f5 87.5%,transparent 87.5%,transparent 91.66666667%,#f5f5f5 91.66666667%,#f5f5f5 95.83333333%,transparent 95.83333333%);
        .demo-col {
          color: #fff;
          font-size: 18px;
          text-align: center;
          min-height: 30px;
          margin-top: 0;
          margin-bottom: 0;
          padding: 38px 0;
          border: none;
        }
        .demo-col-1 {
          background-color: rgba(0, 146, 255, .75);
        }
        .demo-col-2-1,.demo-col-2-3 {
          background-color: rgba(0,146,255,.5);
        }
        .demo-col-2-2,.demo-col-2-4 {
          color: #999DA5;
        }
        .demo-col-3-1,.demo-col-3-3 {
          background-color: rgba(0,146,255,.5);
        }
        .demo-col-3-2 {
          color: #999DA5;
        }
        .demo-col-4-1 {
          background-color: rgba(0, 146, 255, .75);
        }
        .demo-col-4-2 {
          color: #999DA5;
        }
        .demo-col-5-1 {
          background-color: rgba(0,146,255,.5);
        }
        .demo-col-5-2 {
          color: #999DA5;
        }
      }
    }
    .desc {
      margin-top: 30px;
      p {
        color: #5E6D82;
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
  .box3 {
    margin-top: 50px;
    p {
      font-size: 16px;
      line-height: 25px;
    }
    .lists {
      li {
        list-style: circle;
        padding: 10px 5px;
        margin: 0 20px;
      }
    }
    .desc {
      margin-top: 30px;
      p {
        color: #5E6D82;
        font-size: 16px;
        line-height: 25px;
        padding: 5px 0;
      }
    }
    span {
      padding: 3px 5px;
      margin: 0 3px;
      background-color: #F2F4F5;
    }
  }
  .box4 {
    margin-top: 50px;
    .container {
      .demo-row {
        margin: 10px 0;
        .demo-col {
          color: #fff;
          text-align: center;
          padding: 18px 0;
        }
        .demo-1,.demo-2-1,.demo-3-1,.demo-3-3,.demo-4-1,.demo-4-3 {
          background-color: #40ADFF;
        }
        .demo-2-2,.demo-3-2,.demo-4-2,.demo-4-4 {
          background-color: #0092FF;
        }
      }
    }
  }
  .box5 {
    margin-top: 50px;
    .container {
      .demo-row {
        margin: 10px 0;
        .demo-col {
          color: #fff;
          text-align: center;
          div {
            padding: 10px 0;
            background-color: #0092FF;
          }
        }
      }
    }
  }
  .box6 {
    margin-top: 50px;
    .container {
      .demo-row {
        margin: 15px 0;
        .demo-col {
          color: #fff;
          text-align: center;
          padding: 20px 0 ;
        }
        .demo-col-1,.demo-col-2-1 {
          background-color: #40ADFF;
        }
        .demo-col-2,.demo-col-2-2 {
          background-color: #0092FF;
        }
      }
    }
  }
  .box7 {
    margin-top: 50px;
    .container {
      .demo-row {
        padding: 10px 0;
        background-color: #F5F5F5;
        .demo-col {
          color: #fff;
          text-align: center;
        }
        .demo-col-1-1 {
          padding: 50px 0 ;
          background-color: #3DAAFC;
        }
        .demo-col-1-3 {
          padding: 70px 0 ;
          background-color: #3DAAFC;
        }
        .demo-col-1-2 {
          padding: 30px 0 ;
          background-color: #0092FF;
        }
        .demo-col-1-4 {
          padding: 40px 0 ;
          background-color: #0092FF;
        }
      }
    }
  }
  .box8 {
    margin-top: 50px;
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
.Gird {
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


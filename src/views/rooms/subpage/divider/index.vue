<template>
  <div class="Divider" ref="Divider">
    <div class="middle">
      <section class="box box1">
        <h2>Divider 分割线 </h2>
        <p>区隔内容的分割线。</p>
      </section>

      <!--基础方法-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <p>水平分割线。</p>
        <div class="container" @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')">
          <div class="demo">
            <wk-row class="row">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider></wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider dashed></wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            </wk-row>
            <div class="content" :style="box2?{height: '250px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <dividerBase></dividerBase>
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

      <!--分割文字-->
      <section class="box box3" id="box3">
        <p class="p1">分割文字</p>
        <p>带文字的分割线。</p>
        <div class="container" @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')">
          <div class="demo">
            <wk-row class="row">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider>Left Text</wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider orientation="left">Left Text</wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider orientation="right">Left Text</wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            </wk-row>
            <div class="content" :style="box3?{height: '277px'}:{height:'0px'}">
              <div class="desc" v-html="divisionContent"></div>
              <div class="code">
                <dividerDivision></dividerDivision>
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

      <!--虚化文字-->
      <section class="box box4" id="box4">
        <p class="p1">虚化文字</p>
        <p>分割文字使用正文样式。</p>
        <div class="container" @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')">
          <div class="demo">
            <wk-row class="row">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider plain>Left Text</wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider orientation="left" plain>Left Text</wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
              <wk-divider orientation="right" plain>Left Text</wk-divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            </wk-row>
            <div class="content" :style="box4?{height: '250px'}:{height:'0px'}">
              <div class="desc" v-html="plainContent"></div>
              <div class="code">
                <dividerPlain></dividerPlain>
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

      <!--垂直分割-->
      <section class="box box5" id="box5">
        <p class="p1">垂直分割</p>
        <p>垂直分割线。</p>
        <div class="container" @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')">
          <div class="demo">
            <wk-row class="row">
              Text
              <wk-divider type="vertical" />
              <a href="javascript:void(0)">Link</a>
              <wk-divider type="vertical" />
              <a href="javascript:void(0)">Link</a>
            </wk-row>
            <div class="content" :style="box5?{height: '277px'}:{height:'0px'}">
              <div class="desc" v-html="veriticalContent"></div>
              <div class="code">
                <dividerVeritical></dividerVeritical>
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
        <p class="p1">Attributes</p>
        <divider-read></divider-read>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础方法
        </li>
        <li @click="returnTop($event,'#box3')">
          分割文字
        </li>
        <li @click="returnTop($event,'#box4')">
          虚化文字
        </li>
        <li @click="returnTop($event,'#box5')">
          垂直分割
        </li>
        <li @click="returnTop($event, '#box6')">
          Attributes
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import dividerBase from '@/assets/markdown/divider/dividerBase.md'
import dividerDivision from '@/assets/markdown/divider/dividerDivision.md'
import dividerPlain from '@/assets/markdown/divider/dividerPlain.md'
import dividerVeritical from '@/assets/markdown/divider/dividerVertical.md'
import dividerRead from '@/assets/markdown/divider/dividerRead.md'
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
      box3Line: false,
      box3: false,
      box4Line: false,
      box4: false,
      box5Line: false,
      box5: false,
    }
  },
  components: {
    dividerBase,
    dividerDivision,
    dividerPlain,
    dividerVeritical,
    dividerRead,
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = '默认为水平分割线，`dashed`可使分割线变为虚线，可在中间加入文字。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    divisionContent: function() {
      let detail = '分割线中带有文字，可以用 `orientation` 指定文字位置。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    plainContent: function() {
      let detail = '虚化分割线中带有文字，可以用 `plain` 来处理。';
        return marked(detail || '', {
          sanitize: true
        });
    },
    veriticalContent: function() {
      let detail = '使用 type=`"vertical"` 设置为行内的垂直分割线。';
        return marked(detail || '', {
          sanitize: true
        });
    },
  },
  methods: {
    returnTop(e,box) {
      let Button = this.$refs.Divider;
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
.Divider {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  .middle {
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
  }
  .box3 {
    margin-top: 50px;
  }
  .box4 {
    margin-top: 50px;
  }
  .box5 {
    margin-top: 50px;
    .demo {
      a {
        color: #489FFF;
      }
    }
  }
  .box6 {
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
.Divider {
  .code {
    pre {
      overflow-x: scroll;
    }
    pre::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    pre::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.1);
      background: rgba(0, 0, 0, .1)
    }
    pre::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.1);
      border-radius: 0;
      background: rgba(0, 0, 0, .05);
    }
  }
}
</style>

<style lang="less">
.Divider {
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


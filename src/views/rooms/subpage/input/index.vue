<template>
  <div class="Input" ref="Input">
    <div class="middle">
      <section class="box box1">
        <h2>Input 输入框 </h2>
        <p>通过鼠标或键盘输入字符</p>
        <div class="desc">
          <p>Input为受控组件，它<strong>总会显示Vue绑定值</strong></p>
          <p>通常情况下，应当处理<span>input</span>事件，并更新组件的绑定值（或使用<span>v-model</span>）。否则，输入框内显示的值将不会改变。</p>
          <p>不支持<span>v-model</span>修饰符</p>
        </div>
      </section>

      <!--基础使用-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input v-model="input" placeholder="请输入内容"></wk-input>
              </div>
            </div>
            <div class="content" :style="box2?{height: '335px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <InputBase></InputBase>
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
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input v-model="input" placeholder="请输入内容" :disabled="true"></wk-input>
              </div>
            </div>
            <div class="content" :style="box3?{height: '380px'}:{height:'0px'}">
              <div class="desc" v-html="disContent"></div>
              <div class="code">
                <InputDisabled></InputDisabled>
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

      <!--可清空-->
      <section class="box box4" id="box4">
        <p class="p1">可清空</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input v-model="input" placeholder="请输入内容" clearable></wk-input>
              </div>
            </div>
            <div class="content" :style="box4?{height: '375px'}:{height:'0px'}">
              <div class="desc" v-html="clearContent"></div>
              <div class="code">
                <InputClear></InputClear>
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

      <!--密码框-->
      <section class="box box5" id="box5">
        <p class="p1">密码框</p>
        <div class="container"  @mouseenter="mouseEnter('box5')" @mouseleave="mouseLeave('box5')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input v-model="input" placeholder="请输入密码" show-password></wk-input>
              </div>
            </div>
            <div class="content" :style="box5?{height: '315px'}:{height:'0px'}">
              <div class="desc" v-html="passContent"></div>
              <div class="code">
                <InputPass></InputPass>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box5')">
            <p>
              <i :class="[box5Line?'hovering':'',box5?'active':'']"></i>
              <transition name="fade">
                <span v-if="box4Line">{{box5?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--带 icon 的输入框-->
      <section class="box box6" id="box6">
        <p class="p1">带 icon 的输入框</p>
        <p>带有图标标记输入类型</p>
        <div class="container"  @mouseenter="mouseEnter('box6')" @mouseleave="mouseLeave('box6')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <span>属性方式：</span>
                <wk-input v-model="input" placeholder="请输入日期" suffix-icon="wk-icon-date"></wk-input>
                <wk-input v-model="input" placeholder="请输入内容" prefix-icon="wk-icon-search"></wk-input>
              </div>
            </div>
            <div class="content" :style="box6?{height: '520px'}:{height:'0px'}">
              <div class="desc" v-html="iconContent"></div>
              <div class="code">
                <InputIcon></InputIcon>
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

      <!--可自适应文本高度的文本域-->
      <section class="box box7" id="box7">
        <p class="p1">可自适应文本高度的文本域</p>
        <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整。</p>
        <div class="container"  @mouseenter="mouseEnter('box7')" @mouseleave="mouseLeave('box7')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input
                  type="textarea"
                  autosize
                  placeholder="请输入内容"
                  v-model="textarea1">
                </wk-input>
              </div>
            </div>
            <div class="content" :style="box7?{height: '235px'}:{height:'0px'}">
              <div class="desc" v-html="iconContent"></div>
              <div class="code">
                <InputTextarea></InputTextarea>
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

      <!--复合型输入框-->
      <section class="box box8" id="box8">
        <p class="p1">复合型输入框</p>
        <p>可前置或后置元素，一般为标签或按钮</p>
        <div class="container"  @mouseenter="mouseEnter('box8')" @mouseleave="mouseLeave('box8')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input placeholder="请输入内容" v-model="input" style="width: 100%;">
                  <template slot="prepend">Http://</template>
                </wk-input>
              </div>
              <div style="margin-top: 20px">
                <wk-input placeholder="请输入内容" v-model="input" style="width: 100%;">
                  <template slot="append">.com</template>
                </wk-input>
              </div>
            </div>
            <div class="content" :style="box8?{height: '620px'}:{height:'0px'}">
              <div class="desc" v-html="iconContent"></div>
              <div class="code">
                <InputReunite></InputReunite>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box8')">
            <p>
              <i :class="[box8Line?'hovering':'',box8?'active':'']"></i>
              <transition name="fade">
                <span v-if="box8Line">{{box8?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--尺寸-->
      <section class="box box9" id="box9">
        <p class="p1">尺寸</p>
        <div class="container"  @mouseenter="mouseEnter('box9')" @mouseleave="mouseLeave('box9')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input
                  placeholder="请输入内容"
                  suffix-icon="wk-icon-date"
                  v-model="input">
                </wk-input>
                <wk-input
                  size="medium"
                  placeholder="请输入内容"
                  suffix-icon="wk-icon-date"
                  v-model="input">
                </wk-input>
                <wk-input
                  size="small"
                  placeholder="请输入内容"
                  suffix-icon="wk-icon-date"
                  v-model="input">
                </wk-input>
                <wk-input
                  size="mini"
                  placeholder="请输入内容"
                  suffix-icon="wk-icon-date"
                  v-model="input">
                </wk-input>
              </div>
            </div>
            <div class="content" :style="box9?{height: '745px'}:{height:'0px'}">
              <div class="desc" v-html="sizeContent"></div>
              <div class="code">
                <InputSize></InputSize>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box9')">
            <p>
              <i :class="[box9Line?'hovering':'',box9?'active':'']"></i>
              <transition name="fade">
                <span v-if="box9Line">{{box9?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--输入长度限制-->
      <section class="box box10" id="box10">
        <p class="p1">输入长度限制</p>
        <div class="container"  @mouseenter="mouseEnter('box10')" @mouseleave="mouseLeave('box10')" style="margin-top: 30px;">
          <div class="demo">
            <div class="source">
              <div>
                <wk-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="input"
                  :maxlength="10"
                  show-word-limit
                ></wk-input>
              </div>
              <div style="margin-top: 20px;">
                <wk-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="input"
                  :maxlength="10"
                  show-word-limit
                ></wk-input>
              </div>
            </div>
            <div class="content" :style="box10?{height: '605px'}:{height:'0px'}">
              <div class="desc" v-html="countContent"></div>
              <div class="code">
                <InputCount></InputCount>
              </div>
            </div>
          </div>
          <div class="showline" @click="showData('box10')">
            <p>
              <i :class="[box10Line?'hovering':'',box10?'active':'']"></i>
              <transition name="fade">
                <span v-if="box10Line">{{box10?'隐藏代码':'展示代码'}}</span>
              </transition>
            </p> 
          </div>
        </div>
      </section>

      <!--文本描述-->
      <section class="box box11" id="box11">
        <p class="p1">Input Attributes</p>
        <InputRead/>
      </section>

      <!--文本描述-->
      <section class="box box12" id="box12">
        <p class="p1">Input Slots</p>
        <InputSlots/>
      </section>

      <!--文本描述-->
      <section class="box box13" id="box13">
        <p class="p1">Input Events</p>
        <InputEvents/>
      </section>

      <!--文本描述-->
      <section class="box box14" id="box14">
        <p class="p1">Input Methods</p>
        <InputMethods/>
      </section>

      <!--文本描述-->
      <section class="box box15" id="box15">
        <p class="p1">Autocomplete Attributes</p>
        <InputAttr/>
      </section>

      <!--文本描述-->
      <section class="box box16" id="box16">
        <p class="p1">Autocomplete Slots</p>
        <InputSlot/>
      </section>

      <!--文本描述-->
      <section class="box box17" id="box17">
        <p class="p1">Autocomplete Scoped Slot</p>
        <input-s-slot/>
      </section>

      <!--文本描述-->
      <section class="box box18" id="box18">
        <p class="p1">Autocomplete Events</p>
        <input-event/>
      </section>

      <!--文本描述-->
      <section class="box box19" id="box19">
        <p class="p1">Autocomplete Methods</p>
        <input-method/>
      </section>
    </div>

    <!--锚点-->
    <div class="anchor" ref="anchor">
      <ul>
        <li @click="returnTop($event,'#box2')">
          基础用法
        </li>
        <li @click="returnTop($event,'#box3')">
          禁用状态
        </li>
        <li @click="returnTop($event, '#box4')">
          可清空
        </li>
        <li @click="returnTop($event, '#box5')">
          密码框
        </li>
        <li @click="returnTop($event,'#box6')">
          带 icon 的输入框
        </li>
        <li @click="returnTop($event,'#box7')">
          可自适应文本高度的文本域
        </li>
        <li @click="returnTop($event, '#box8')">
          复合型输入框
        </li>
        <li @click="returnTop($event, '#box9')">
          尺寸
        </li>
        <li @click="returnTop($event, '#box10')">
          输入长度限制
        </li>
        <li @click="returnTop($event, '#box11')">
          Input Attributes
        </li>
        <li @click="returnTop($event,'#box12')">
          Input Slots
        </li>
        <li @click="returnTop($event,'#box13')">
          Input Events
        </li>
        <li @click="returnTop($event, '#box14')">
          Input Methods
        </li>
        <li @click="returnTop($event, '#box15')">
          Autocomplete Attributes
        </li>
        <li @click="returnTop($event,'#box16')">
          Autocomplete Slots
        </li>
        <li @click="returnTop($event, '#box17')">
          Autocomplete Scoped Slot
        </li>
        <li @click="returnTop($event, '#box18')">
          Autocomplete Events
        </li>
        <li @click="returnTop($event, '#box19')">
          Autocomplete Methods
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import InputBase from '@/assets/markdown/input/inputBase.md'
import InputDisabled from '@/assets/markdown/input/inputDisabled.md'
import InputClear from '@/assets/markdown/input/inputClear.md'
import InputPass from '@/assets/markdown/input/inputPass.md'
import InputIcon from '@/assets/markdown/input/inputIcon.md'
import InputTextarea from '@/assets/markdown/input/inputTextarea.md'
import InputReunite from '@/assets/markdown/input/inputReunite.md'
import InputSize from '@/assets/markdown/input/inputSize.md'
import InputCount from '@/assets/markdown/input/inputCount.md'
import InputRead from '@/assets/markdown/input/inputRead.md'
import InputSlots from '@/assets/markdown/input/inputSlots.md'
import InputEvents from '@/assets/markdown/input/inputEvents.md'
import InputMethods from '@/assets/markdown/input/inputMethods.md'
import InputAttr from '@/assets/markdown/input/inputAttr.md'
import InputSlot from '@/assets/markdown/input/inputSlot.md'
import InputSSlot from '@/assets/markdown/input/inputSSlots.md'
import InputEvent from '@/assets/markdown/input/inputEvent.md'
import InputMethod from '@/assets/markdown/input/inputMethod.md'

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
  preEl.forEach((wk)=>{
    hljs.highlightBlock(wk)
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
      box6Line: false,
      box6: false,
      box7Line: false,
      box7: false,
      box8Line: false,
      box8: false,
      box9Line: false,
      box9: false,
      box10Line: false,
      box10: false,
      input: '',
      textarea1: '',
    }
  },
  components: {
    InputBase,
    InputDisabled,
    InputClear,
    InputPass,
    InputIcon,
    InputTextarea,
    InputReunite,
    InputSize,
    InputCount,
    InputRead,
    InputSlots,
    InputEvents,
    InputMethods,
    InputAttr,
    InputSlot,
    InputSSlot,
    InputEvent,
    InputMethod
  },
  mounted() {
    highlightCode()
  },
  computed: {
    baseContent: function() {
      let detail = `设置\`layout\`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。\`prev\`表示上一页，\`next\`为下一页，\`pager\`表示页码列表，
                    除此以外还提供了\`jumper\`和\`total\`，\`size\`和特殊的布局符号\`->\`，\`->\`后的元素会靠右显示，\`jumper\`表示跳页元素，\`total\`表示总\`size\`体积数，
                    用于设置每页显示的页码数量。`;
      return marked(detail || '', {
          sanitize: true
        });
    },
    disContent: function() {
      let detail = `通过 \`disabled\` 属性指定是否禁用 input 组件`;
      return marked(detail || '', {
          sanitize: true
        });
    },
    clearContent: function() {
      let detail = `使用\`clearable\`属性即可得到一个可清空的输入框`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    passContent: function() {
      let detail = `使用\`show-password\`属性即可得到一个可切换显示隐藏的密码框`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    iconContent: function() {
      let detail = `可以通过\`prefix-icon\`和\`suffix-icon\`属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    sizeContent: function() {
      let detail = `可通过\`size\`属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。`;
        return marked(detail || '', {
          sanitize: true
        });
    },
    countContent: function() {
      let detail = `\`maxlength\` 和 \`minlength\` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。
                    对于类型为 \`text\` 或 \`textarea\` 的输入框，在使用 \`maxlength\` 属性限制最大输入长度的同时，可通过设置 \`show-word-limit\` 
                    属性来展示字数统计。`;
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
      let Button = this.$refs.Input;
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
        case 'box8':
          this.box8Line = true;
          break;
        case 'box9':
          this.box9Line = true;
          break;
        case 'box10':
          this.box10Line = true;
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
        case 'box8':
          this.box8Line = false;
          break;
        case 'box9':
          this.box9Line = false;
          break;
        case 'box10':
          this.box10Line = false;
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
        case 'box8':
          this.box8 = !this.box8;
          break;
        case 'box9':
          this.box9 = !this.box9;
          break;
        case 'box10':
          this.box10 = !this.box10;
          break;
      }
    }
  }
}
</script>


<style lang="less" scoped>
.Input {
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
  .box1 {
    .desc {
      padding: 10px 20px;
      border-left: 8px solid #FE6C6F;
      border-radius: 8px;
      background: #FFF6F7;
      p {
        padding: 10px 0;
        span {
          font-size: 12px;
          padding: 2px;
          margin: 0 3px;
          border: 1px solid #EAEEFB;
          background: #fff;
        }
      }
    }
  }
  .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9, .box10, .box11, .box12, .box13, .box14, .box15, .box16, .box17, .box18, .box19 {
    margin-top: 50px;
    .source {
      .wk-input {
        width: 180px;
        margin: 0 10px;
      }
      .wk-inpupt-disabled {
        width: 180px;
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

<style lang="less">
.Input {
  .box11, .box12, .box13, .box14, .box15, .box16, .box17, .box18, .box19 {
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
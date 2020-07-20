<template>
  <div class="Breadcrumb" ref="Breadcrumb">
    <div class="middle">
      <section class="box box1">
        <h2>Pagination 分页 </h2>
        <p>当数据量过多时，使用分页分解数据。</p>
      </section>

      <!--基础使用-->
      <section class="box box2" id="box2">
        <p class="p1">基础用法</p>
        <div class="container"  @mouseenter="mouseEnter('box2')" @mouseleave="mouseLeave('box2')" style="margin-top: 30px;">
          <div class="demo">
            <div class="block">
              <span class="demonstration">页数较少小于7页时的效果</span>
              <wk-pagination
                layout="prev, pager, next"
                :total="50">
              </wk-pagination>
            </div>
            <div class="block">
              <span class="demonstration">大于 7 页时的效果</span>
              <wk-pagination
                layout="prev, pager, next"
                :total="1000">
              </wk-pagination>
            </div>
            <div class="content" :style="box2?{height: '390px'}:{height:'0px'}">
              <div class="desc" v-html="baseContent"></div>
              <div class="code">
                <PaginationBase></PaginationBase>
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

      <!--设置最大页码按钮数-->
      <section class="box box3" id="box3">
        <p class="p1">设置最大页码按钮数</p>
        <div class="container"  @mouseenter="mouseEnter('box3')" @mouseleave="mouseLeave('box3')" style="margin-top: 30px;">
          <div class="demo">
            <div class="block">
              <wk-pagination
                :page-size="20"
                :page-count="10"
                layout="prev, pager, next"
                :total="1000">
              </wk-pagination>
            </div>
            <div class="content" :style="box3?{height: '390px'}:{height:'0px'}">
              <div class="desc" v-html="maxContent"></div>
              <div class="code">
                <PaginationMax></PaginationMax>
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

      <!--带有背景色的分页-->
      <section class="box box4" id="box4">
        <p class="p1">带有背景色的分页</p>
        <div class="container"  @mouseenter="mouseEnter('box4')" @mouseleave="mouseLeave('box4')" style="margin-top: 30px;">
          <div class="demo">
            <wk-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </wk-pagination>
            <div class="content" :style="box4?{height: '230px'}:{height:'0px'}">
              <div class="desc" v-html="backContent"></div>
              <div class="code">
                <PaginationBack></PaginationBack>
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
        <PaginationRead/>
      </section>

      <!--文本描述-->
      <section class="box box6" id="box6">
        <p class="p1">Events</p>
        <PaginationEvents/>
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
import PaginationBase from '@/assets/markdown/pagination/paginationBase.md'
import PaginationMax from '@/assets/markdown/pagination/paginationMax.md'
import PaginationBack from '@/assets/markdown/pagination/paginationBack.md'
import PaginationRead from '@/assets/markdown/pagination/paginationRead.md'
import PaginationEvents from '@/assets/markdown/pagination/paginationEvents.md'

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
    }
  },
  components: {
    PaginationBase,
    PaginationMax,
    PaginationBack,
    PaginationRead,
    PaginationEvents,
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
    maxContent: function() {
      let detail = `默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过\`pager-count\`属性可以设置最大页码按钮数。`;
      return marked(detail || '', {
          sanitize: true
        });
    },
    backContent: function() {
      let detail = `设置\`background\`属性可以为分页按钮添加背景色。`;
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
    .block {
      margin-top: 10px;
      .demonstration {
        font-weight: 600;
        vertical-align: inherit;
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
.Breadcrumb {
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
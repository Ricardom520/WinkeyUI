<template>
  <div class="wk-pagination">
    <span class="wk-pagination__total" :style="layout.indexOf('total') > -1 ? '': 'display: none;'">共{{total}}条</span>
    <button 
      type="button" 
      class="btn-prev"
      @click="goPrev" 
      v-if="prev"
      :style="layout.indexOf('prev') > -1 ? '' : 'display: none'"
      :class="background ? 'is-background' : ''">
      <i class="iconfont wk-icon-arrow-left"></i>
    </button>
    <ul class="wk-pager" v-if="pager && numbers <= 7">
      <li 
        v-for="number in numbers" 
        :key="number" 
        class="number" 
        :class="[acIndex === number ? 'active' : '',
                background ? 'is-background' : '']" 
        @click="toNum(number)">
        <font>{{number}}</font>
      </li>
    </ul>
    <ul class="wk-pager" v-if="pager && numbers > 7">
      <li 
        class="number" 
        :class="[acIndex === 1 ? 'active' : '',
                 background ? 'is-background' : '']" 
        @click="toNum(1)">
        <font>1</font>
      </li>
      <li 
        class="number iconfont" 
        v-if="acIndex >= 5" 
        :class="[dbarrowL ? 'wk-icon-dbarrow-left dbarrow' : 'wk-icon-ellipsis',
                 background ? 'is-background' : '']"
        @mouseenter="dbarrowL = true"
        @mouseleave="dbarrowL = false"
        @click="goPrev"
      ></li>
      <li 
        class="number" 
        v-for="number in (pageCount-1)" :key="number" 
        @click="toNum((pageCount-1) > acIndex ? number + 1 : acIndex > total-(pageCount-1) ? total-pageCount + number : number - 3 + acIndex)" 
        :class="[acIndex > 1 && acIndex === (((pageCount-1) > acIndex) ? number + 1 : (acIndex > total-(pageCount-1)) ? (total-pageCount + number) : (number - 3 + acIndex)) ? 'active' : '',
                 background ? 'is-background' : '']"
      >
        <font>{{ ((pageCount-1) > acIndex) ? number + 1 : ( acIndex > total-(pageCount-1)) ? total-pageCount + number : (number - 3 + acIndex)}}</font>
      </li>
      <li 
        class="number iconfont" 
        v-if="acIndex <= 95" 
        :class="[dbarrowR ? 'wk-icon-dbarrow-right dbarrow' : 'wk-icon-ellipsis',
                 background ? 'is-background' : '']"
        @mouseenter="dbarrowR = true"
        @mouseleave="dbarrowR = false"
        @click="goNext"
      ></li>
      <li 
        class="number" 
        :class="[acIndex === numbers ? 'active' : '',
                 background ? 'is-background' : '']" 
        @click="toNum(numbers)">
        <font>{{numbers}}</font>
      </li>
    </ul>
    <button 
      type="button" 
      class="btn-next" 
      @click="goNext" 
      v-if="next"
      :style="layout.indexOf('next') > -1 ? '' : 'display: none'"
      :class="background ? 'is-background' : ''"
    >
      <i class="iconfont wk-icon-arrow-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'wk-pagination',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    pageCount: {
      type: Number,
      default: 6
    },
    total: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: 'prev, pager, next'
    },
    background: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      numbers: 0,
      acIndex: 1,
      dbarrowL: false,
      dbarrowR: false,
      prev: true,
      pager: true,
      next: true
    }
  },
  created() {
    this.numbers = this.total / this.pageSize;
    let layout = this.layout;
    layout.indexOf('prev') > -1 ? this.prev = true : this.prev = false;
    layout.indexOf('pager') > -1 ? this.pager = true : this.pager = false;
    layout.indexOf('next') > -1 ? this.next = true : this.next = false;
  },
  methods: {
    goPrev() {
      let acIndex = this.acIndex;
      if (acIndex > 1) {
        this.acIndex = this.acIndex - 1;
        this.$emit('current-change', this.acIndex)
        this.$emit('prev-click', this.acIndex)
      }
    },
    goNext() {
      let acIndex = this.acIndex;
      if (acIndex < this.numbers) {
        this.acIndex = this.acIndex + 1;
        this.$emit('current-change', this.acIndex)
        this.$emit('next-click', this.acIndex)
      }
    },
    toNum(number) {
      console.log(number)
      this.acIndex = number
      this.$emit('current-change', this.acIndex)
    }
  }
}
</script>

<style lang="less" scoped>
.wk-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;

  .span {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
  }

  .wk-pagination__total {
    margin-right: 10px;
    font-weight: 400;
    color: #606266;
  }

  button {
    outline: none;
    border: none;
    padding: 0 6px;
    background-color: transparent;
  }

  button.is-background {
    color: #606266;
    min-width: 30px;
    margin: 0 5px;
    border-radius: 2px;
    background-color: #f4f4f5;
  }

  button, span:not([class*=suffix]) {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
  }

  .btn-prev, .btn-next {
    background: 50% no-repeat;
    background-size: 16px;
    background-color: #fff;
    cursor: pointer;
    margin: 0;
    color: #303133;
  }
  
  .btn-prev {
    padding-right: 12px;
  }

  .wk-pager {
    user-select: none;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
    .number {
      padding: 0 4px;
      background-color: #fff;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      margin: 0;
    }
    .number.active {
      color: #409eff;
      cursor: default;
    }
    .number.dbarrow {
      color: #409eff;
      font-size: 16px;
    }
    .is-background {
      color: #606266;
      min-width: 30px;
      margin: 0 5px;
      border-radius: 2px;
      background-color: #f4f4f5;
    }
    .is-background.active {
      color: #fff;
      background-color: #409eff;
    }
  }
}
.wk-pagination::before, .wk-pagination::after {
  display: table;
  content: "";
}
.wk-pagination::after {
  clear: both;
}
</style>

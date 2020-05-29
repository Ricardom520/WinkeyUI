<template>
  <div :class="[
                justify ?`wk-row-${justify}` : '',
                align ? `wk-row-${align}` : '',
                'wk-row',]" :style="style">
    <slot sName="name"></slot>
  </div>
</template>

<script>
export default {
  name: 'wk-row',
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0,
      style: ''
    },
    justify: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: '',
    }
  },
  created() {
    this.screenWidth = document.body.scrollWidth;
    if (Object.prototype.toString.call(this.gutter) === '[object Number]') {
      this.style = {marginLeft: `${this.gutter/2}px`, marginRight: `${this.gutter/2}px`}
    } else if (Object.prototype.toString.call(this.gutter) === '[object Object]') {
      console.log("捡来多少了")
      if (this.screenWidth < 576) {
        this.style = {marginLeft: `-${this.gutter.xs}px`, marginRight: `-${this.gutter.xs}px`}
      } else if (576 <= this.screenWidth) {
        this.style = {marginLeft: `-${this.gutter.sm}px`, marginRight: `-${this.gutter.sm}px`}
      } else if (768 <= this.screenWidth) {
        this.style = {marginLeft: `-${this.gutter.md}px`, marginRight: `-${this.gutter.md}px`}
      } else if (992 <= this.screenWidth) {
        this.style = {marginLeft: `-${this.gutter.lg}px`, marginRight: `-${this.gutter.lg}px`}
      } else if (1200 <= this.screenWidth) {
        this.style = {marginLeft: `-${this.gutter.xl}px`, marginRight: `-${this.gutter.xl}px`}
      } else if (1600 <= this.screenWidth) {
        this.style = {marginLeft: `-${this.gutter.xxl}px`, marginRight: `-${this.gutter.xxl}px`}
      }
    } else if (Object.prototype.toString.call(this.gutter) === '[object Array]') {
      this.style =  {marginTop: `-${this.gutter[1]/2}px`, marginRight: `-${this.gutter[0]/2}px`, marginBottom: `${this.gutter[1]/2}px`}
    }
  },
  data () {
    return {
      screenWidth: 0
    }
  }
}
</script>

<style>
.wk-row {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
}

/**   justify   */
.wk-row-center {
  justify-content: center;
}
.wk-row-flex-start {
  justify-content: flex-start;
}
.wk-row-flex-end {
  justify-content: flex-end;
}
.wk-row-space-between {
  justify-content: space-between;
}
.wk-row-space-around {
  justify-content: space-around;
}

/**   align  */
.wk-row-top {
  align-items: flex-start;
}
.wk-row-bottom {
  align-items: flex-end;
}
.wk-row-middle {
  align-items: center;
}
</style>
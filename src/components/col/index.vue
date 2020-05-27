<template>
  <div :class="[
                span ?'wk-col ' + `wk-col-${span}` : 'wk-col-24',
                ]"
        :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wk-col',
  props: {
    span: {
      type: Number,
      default: 24,
    }
  },
  data() {
    return {
      gutter: 0,
      screenWidth: 0,
      style: ''
    }
  },
  created() {
    this.screenWidth = document.body.scrollWidth;
    this.gutter = this.$parent.gutter
    if (Object.prototype.toString.call(this.gutter) === '[object Number]') {
      this.style = {paddingLeft: `${this.gutter/2}px`, paddingRight: `${this.gutter/2}px`}
    } else if (Object.prototype.toString.call(this.gutter) === '[object Object]') {
      if (this.screenWidth < 576) {
        this.style = {paddingLeft: `${this.gutter.xs}px`, paddingRight: `${this.gutter.xs}px`}
      } else if (576 <= this.screenWidth) {
        this.style = {paddingLeft: `${this.gutter.sm}px`, paddingRight: `${this.gutter.sm}px`}
      } else if (768 <= this.screenWidth) {
        this.style = {paddingLeft: `${this.gutter.md}px`, paddingRight: `${this.gutter.md}px`}
      } else if (992 <= this.screenWidth) {
        this.style = {paddingLeft: `${this.gutter.lg}px`, paddingRight: `${this.gutter.lg}px`}
      } else if (1200 <= this.screenWidth) {
        this.style = {paddingLeft: `${this.gutter.xl}px`, paddingRight: `${this.gutter.xl}px`}
      } else if (1600 <= this.screenWidth) {
        this.style = {paddingLeft: `${this.gutter.xxl}px`, paddingRight: `${this.gutter.xxl}px`}
      }
    } else if (Object.prototype.toString.call(this.gutter) === '[object Array]') {
      this.style = {padding: `${this.gutter[1]/2}px ${this.gutter[0]/2}px`}
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>
.wk-col {
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
}
.wk-col-24 {
  max-width: 100%;
}
.wk-col-6 {
  max-width: 25%;
}
.wk-col-8 {
  max-width: 33.3333333%;
}
.wk-col-12 {
  max-width: 50%;
}
.wk-col-16 {
  max-width: 66.66%;
}
</style>

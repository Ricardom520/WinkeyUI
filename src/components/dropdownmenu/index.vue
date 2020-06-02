<template>
  <ul class="wk-dropdown-menu" :style="hide">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'WkDropdownMenu',
  data() {
    return {
      menus: false
    }
  },
  mounted() {
    console.log(this)
    this.menus = this.$parent.menus;
  },
  watch: {
    hide() {
      console.log(this)
    }
  }
}
</script>

<style lang="less" scoped>
.wk-dropdown-menu {
  position: absolute;
  display: block;
  top: 25px;
  left: 10px;
  padding: 10px 0;
  margin: 5px 0;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .1);
  background: #fff;
  transform-origin: center bottom;
}
.wk-dropdown-menu::after {
  position: absolute;
  content: '';
  top: -6px;
  left: 20px;
  width: 10px;
  height: 10px;
  border-left: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  background: #fff;
  transform: rotate(45deg);
}
</style>

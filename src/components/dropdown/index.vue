<template>
  <div class="wk-dropdown" @mouseenter="menusShow" @mouseleave="menusHide">
    <slot></slot>
    <slot name="dropdown" style="none" class="none"></slot>
  </div>
</template>

<script>
export default {
  name: 'WkDropdown',
  data() {
    return {
      menus: false
    }
  },
  methods: {
    menusShow: function() {
      this.menus = true
      console.log("进来了吗")
    },
    menusHide: function() {
      this.menus = false
    }
  }
}
</script>

<style lang="less" scoped>
.wk-dropdown {
  position: relative;
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
  padding: 0 10px;
}
</style>

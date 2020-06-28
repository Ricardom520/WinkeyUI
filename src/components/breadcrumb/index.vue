<template>
  <div class="wk-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wk-breadcrumb',
  props: {
    separator: {
      type: String,
      default: ''
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      breadcrumb: [], // 记录面包屑数组
    }
  }
}
</script>

<style lang="less" scoped>
.wk-breadcrumb {
  font-size: 14px;
  line-height: 1;
}
.wk-breadcrumb::before {
  display: table;
  content: '';
}
.wk-breadcrumb::after {
  display: table;
  content: '';
  clear: both;
}
</style>
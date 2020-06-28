<template>
  <span class="wk-breadcrumb-item">
    <span class="wk-breadcrumb__inner" :class="[to ? 'is-link' : '']" @click="toTarget"><slot></slot></span>
    <span class="wk-breadcrumb__separator" :class="!separator ? 'none' : isLast ? 'none' : ''">{{separator}}</span>
    <i class="iconfont wk-breadcrumb__separator" :class="isLast ? 'none' : separatorClass ? separatorClass : 'none'"></i>
  </span>
</template>

<script>
export default {
  name: 'WkBreadcrumbItem',
  data() {
    return {
      separator: '',
      separatorClass: ''
    }
  },
  props: {
    to: {
      type: Object,
    }
  },
  beforeCreate() {
    this.$parent.breadcrumb.push(this);
    console.log(this.$parent.separator)
  },
  created() {
    this.separator = this.$parent.separator;
    this.separatorClass = this.$parent.separatorClass;
  },
  computed: {
    isLast() {
      const parent = this.$parent;
      return parent.breadcrumb[parent.breadcrumb.length - 1] === this;
    }
  },
  methods: {
    toTarget() {
      console.log("核减率i了")
      if (this.to) {
        this.$router.push(`${this.to.path}`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wk-breadcrumb-item {
  float: left;
  .wk-breadcrumb__inner {
    color: #606266;
    a {
      font-weight: 700;
      text-decoration: none;
      transition: color .2s cubic-bezier(.645, .045, .355, 1);
      color: #303133;
    }
    a:hover {
      color: #409eff;
    }
  }
  .wk-breadcrumb__inner.is-link {
    font-weight: 700;
    text-decoration: none;
    transition: color .2s cubic-bezier(.645, .045, .355, 1);
    color: #303133;
  }
  .wk-breadcrumb__inner.is-link:hover {
    cursor: pointer;
    color: #409eff;
  }
  .wk-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
  }
  .wk-breadcrumb__separator[class*=icon] {
    margin: 0 6px;
    font-weight: 400;
    font-size: 12px;
  }
}
</style>
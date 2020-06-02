<template>
  <li class="wk-dropdown-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'WkDropdownItem'
}
</script>

<style lang="less" scoped>
.wk-dropdown-item {
  list-style: none;
  line-height: 36px;
  width: auto;
  height: auto;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: none;
}
.wk-dropdown-item:hover {
  color: #66B1FF;
  background: #ECF5FF;
}
</style>

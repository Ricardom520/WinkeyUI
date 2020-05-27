<template>
  <div class="wk-row"><slot></slot></div>
</template>

<script>
export default {
  name: 'wk-row'
}
</script>

<style>
.wk-row {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
}
</style>
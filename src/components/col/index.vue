<template>
  <div :class="[
                span ? 'wk-col ' + `wk-col-${span}` : 'wk-col',
                ]"><slot></slot></div>
</template>

<script>
export default {
  name: 'wk-col',
  props: {
    span: {
      type: Number,
      default: 24
    }
  }
}
</script>


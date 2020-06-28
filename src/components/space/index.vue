<template>
  <div class="Wkspace" :class="[align ? `wk-space-align-${align}` : 'wk-space-align-center',
                                direction ? `wk-space-direction-${direction}` : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wk-space',
  props: {
    align: {
      type: String,
      default: 'center'
    },
    direction: {
      type: String,
      default: 'center'
    },
    size: {
      type: Number || String,
      default: 8
    }
  }
}
</script>

<style lang="less" scoped>
.Wkspace {
  display: inline-flex;
}
.Wkspace.wk-space-align-center {
  align-items: center;
}
.Wkspace.wk-space-align-start {
  align-items: flex-start;
}
.Wkspace.wk-space-align-end {
  align-items: flex-end;
}
.Wkspace.wk-space-align-baseline {
  align-items: baseline;
}
.Wkspace.wk-space-direction-vertical {
  flex-direction: column;
}
</style>

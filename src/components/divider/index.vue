<template>
  <div :class="[
                dashed ? 'is-dashed wk-divider' : 'wk-divider',
                Object.keys(this.$slots).length ? 'is-text' : '',
                orientation ? `is-text-${orientation}` : '',
                plain ? 'is-text-plain' : '',
                type ? `is-text-${type}` : '',
              ]"
  >
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'WkDivider',
  props: {
    dashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: ''
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>
.wk-divider {
  display: flex;
  clear: both;
  box-sizing: border-box;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  width: 100%;
  min-width: 100%;
  margin: 24px 0;
  border-top: 1px solid #f0f0f0;
}

/**  虚线   */
.wk-divider.is-dashed {
  border-top: 1px dashed #f0f0f0;
}

/**  分割文字  */
.wk-divider.is-text {
  border: none;
  span {
    display: inline-block;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    padding: 0 1em;
  }
}
.wk-divider.is-text::before {
  position: relative;
  top: 50%;
  width: 50%;
  border-top: 1px solid #f0f0f0;
  transform: translateY(50%);
  content: ' ';
}
.wk-divider.is-text::after {
  position: relative;
  top: 50%;
  width: 50%;
  border-top: 1px solid #f0f0f0;
  transform: translateY(50%);
  content: ' ';
}
.wk-divider.is-text.is-text-left::before {
  width: 5%;
}
.wk-divider.is-text.is-text-left::after {
  width: 95%;
}
.wk-divider.is-text.is-text-right::before {
  width: 95%;
}
.wk-divider.is-text.is-text-right::after {
  width: 5%;
}

/**   虚化   */
.wk-divider.is-text-plain {
  span {
    font-weight: 100;
    font-size: 14px;
    color: rgba(0, 0, 0, .65);
  }
}

/**   垂直分割  */
.wk-divider.is-text-vertical {
  position: relative;
  top: -.06em;
  display: inline-block;
  width: .1em;
  min-width: .1em;
  height: .9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid #f0f0f0;
}
</style>

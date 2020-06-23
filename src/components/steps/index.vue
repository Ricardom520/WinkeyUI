<template>
  <div class="wk-steps"
       :class="[
        !simple && 'wk-steps--' + direction,
        simple && 'wk-steps--simple'
       ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WkSteps',
  props: {
    space: {
      type: Number || String,
    },
    active: {
      type: Number,
      default: 0
    },
    processStatus: { // 设置当前步骤的状态
      type: String,
      default: 'process'
    },
    finishStatus: { // 设置结束步骤的状态
      type: String,
      default: 'finish'
    },
    direction: { // 显示方向
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean, // 进行居中对齐
    simple: Boolean, // 是否应用简洁风格
  },
  data() {
    return {
      steps: [], // 记录步骤数组
      stepOffset: 0
    }
  },
  watch: {
    active(newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
      // 当前激活步骤时，触发父组件的change方法，将改变前和改变后的步骤作为参数传递出去
      this.$emit('change', newVal, oldVal)
    },
    steps(steps) {
      console.log(steps)
      steps.forEach((child, index) => {
        child.index = index;
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wk-steps {
  display: flex;
}
.wk-steps--horizontal {
  white-space: normal;
}
.wk-steps--vertical {
  height: 100%;
  flex-flow: column;
}
</style>

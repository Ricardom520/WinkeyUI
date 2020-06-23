<template>
  <div class="wk-step" 
    :style="style"
    :class="[
      !isSimple && `is-${$parent.direction}`,
      isSimple && 'is-simple',
      isLast && !space && !isCenter && 'is-flex',
      isCenter && !isVertical && !isSimple && 'is-center'
    ]">
    <!--步骤的数字和步骤直线-->
    <div class="wk-step__head" :class="`is-${currentStatus}`">
      <!--步骤条直线-->
      <!--如果是最后一步，margin-right不存在；如果不是，则为0-->
      <div class="wk-step__line" :style="isLast ? '' : {marginRight: $parent.stepOffset + 'px'}">
        <i class="wk-step__line-inner"></i>
      </div>
      <!--步骤条的数字图标-->
      <div class="wk-step__icon" :class="`is-${icon ? 'icon' : 'text'}`">
        <!--如果当前状态为：wait、process、finish-->
        <slot v-if="currentStatus !== 'success' && currentStatus !== 'error'" name="icon">
          <!--如果是图标则显示对应的图标-->
          <i v-if="icon" class="wk-step__icon-inner iconfont" :class="[icon]"></i>
          <div class="wk-step__icon-inner">
            {{index + 1}}
          </div>
        </slot>
        <!--当前状态为：success、error-->
        <i v-else :class="['wk-icon-'+ (currentStatus === 'success' ? 'check' : 'close')]" class="wk-step__icon-inner is-status iconfont"></i>
      </div>
    </div>
    <div class="wk-step__main">
      <div class="wk-step__title" ref="title" :class="['is-' + currentStatus]">
        <slot name="title">{{title}}</slot>
      </div>
      <!--简洁模式下会有图片-->
      <div v-if="isSimple" class="wk-step__arrow"></div>
      <!--每一步的描述-->
      <div v-else class="wk-step__description" :class="['is-' + currentStatus]">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WkStep',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: '' //设置当前步骤的状态，不设置则根据 steps 确定状态。 wait（灰色）/ process（黑色）/ finish（蓝色）/ error / success（绿色）
    }
  },
  data() {
    return {
      index: -1,
      lineStyle: {}, // 步骤条直线的样式
      internalStatus: ''
    }
  },
  beforeCreate() {
    console.log(this.$parent)
    this.$parent.steps.push(this);
  },
  mounted() {
    const unwatch = this.$watch('index', val => {
      console.log(val)
      console.log(this.$parent)
      this.$watch('$parent.active', this.updateStatus, { immediate: true });
      unwatch();
    });
  },
  beforeDestroy() {
    const steps = this.$parent.steps;
    const index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },
  computed: {
    // 返回当前步骤的状态
    currentStatus() {
      console.log(this.status)
      console.log(this.internalStatus)
      return this.status || this.internalStatus;
    },
    prevStatus() {
      console.log(this.index)
      console.log(this.$parent.steps)
      console.log(this.$parent.steps[this.index - 1]);
      const prevStep = this.$parent.steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : 'wait';
    },
    // 判断是否是居中对齐
    isCenter() {
      console.log("这列这里")
      console.log(this.$parent)
      console.log(this.$parent.alignCenter)
      return this.$parent.alignCenter;
    },
    // 返回显示的方向；竖直（false）或者水平（true）
    isVertical() {
      return this.$parent.direction === 'vertical'
    },
    // 返回是否应用简洁风格
    isSimple() {
      return this.$parent.simple;
    },
    // 判断当前是不是最后步骤
    isLast() {
      const parent = this.$parent;
      console.log(parent)
      console.log(parent.steps)
      console.log(parent.steps.length)
      console.log(parent.steps[parent.steps.length - 1] === this)
      return parent.steps[parent.steps.length - 1] === this;
    },
    // 返回总步骤数
    stepsCount() {
      return this.$parent.steps.length;
    },
    // 返回每个step的间距
    space() {
      const { isSimple, $parent: { space } } = this;
      return isSimple ? '' : space;
    },
    style: function() {
      const style = {};
      const parent = this.$parent;
      const len = parent.steps.length; // 总步骤
      // 每个step的间距
      const space = (typeof this.space === 'number' // 如果设置的space是number
        ? this.space + 'px' // space等于设置的space
        : this.space ? this.space : 100 / (len - (this.isCenter ? 0 : 1)) + '%'); // 如果未设置space，未设置居中，则等于100除以（总步骤数-1）；设置居中显示，则等于00除以总步骤数。
      // flex-basis 属性用于设置或检索弹性盒伸缩基准值。
      style.flexBasis = space;
      //如果是水平方向则直接返回设置的样式
      if (this.isVertical) return style;
      //如果是最后的步骤，设置最大宽度等于(100/总步骤数)%
      if (this.isLast) {
        console.log("美金来吗")
        style.maxWidth = 100 / this.stepsCount + '%';
      } else {
          //如果不是最后的步骤，marginRight为0
        style.marginRight = -this.$parent.stepOffset + 'px';
      }
      console.log(style)
      return style;
    }
  },
  methods: {
    updateStatus: function(val) {
      console.log(val)
      console.log(this.$parent)
      console.log(this.index)
      const prevChild = this.$parent.$children[this.index - 1];
      if (val > this.index) { // 如果是下一步
        // internalStatus 等于用户设置的结束步骤状态
        this.internalStatus = this.$parent.finishStatus;
      } else if (val === this.index && this.prevStatus !== 'error') {
        // 等于用户设置的当前步骤状态
        this.internalStatus = this.$parent.processStatus;
      } else {
        this.internalStatus = 'wait';
      }
      if (prevChild) prevChild.calcProgress(this.internalStatus);
    },
    // 设置步骤间直线的样式
    calcProgress: function(status) {
      let step = 100;
      const style = {};
      // transitionDelay在过渡效果开始前等待的秒数
      style.transitionDelay = 150 * this.index + 'ms';
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== 'error' ? 0 : 0;
      } else if (status === 'wait') {
        step = 0;
        // 为负数的时候过渡的动作会从该时间点开始显示，之前的动作被截断；为正数的时候过渡的动作会延迟触发。
        style.transitionDelay = (-150 * this.index) + 'ms';
      }

      style.borderWidth = step ? '1px' : 0;
      this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

      this.lineStyle = style;
    }
  }
}
</script>

<style lang="less" scoped>
.wk-step {
  position: relative;
  flex-shrink: 1;
  .wk-step__head {
    position: relative;
    width: 100%;
    .wk-step__line {
      position: absolute;
      border-color: inherit;
      background-color: #c0c4cc;
    }
    .wk-step__icon {
      position: relative;
      z-index: 1;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      font-size: 14px;
      box-sizing: border-box;
      background-color: #fff;
      transition: .15s ease-out;
    }
    .wk-step__icon.is-text {
      border-radius: 50%;
      border: 2px solid;
      border-color: inherit;
    }
  }
  .wk-step__main {
    white-space: normal;
    text-align: left;
    .wk-step__title {
      font-size: 16px;
      line-height: 38px;
    }
    .wk-step__title.is-success {
      color: #67c23a;
    }
    .wk-step__title.is-process {
      font-size: 700;
      color: #303133;
    }
    .wk-step__title.is-finish {
      color: #409eff;
    }
    .wk-step__description {
      padding-right: 10%;
      margin-top: -5px;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
    }
    .wk-step__description.is-process {
      color: #303133;
    }
    .wk-step__description.is-finish {
      color: #409eff;
    }
  }
  .wk-step__head.is-process {
    color: #303133;
    border-color: #303133;
  }
  .wk-step__head.is-wait {
    color: #c0c4cc;
    border-color: #c0c4cc;
  }
  .wk-step__head.is-success {
    color: #67c23a;
    border-color: #67c23a;
    .wk-step__line {
      background-color: #67c23a;
    }
  }
  .wk-step__head.is-finish {
    color: #409eff;
    border-color: #409eff;
  }
}
.wk-step.is-horizontal {
  display: inline-block;
  .wk-step__line {
    height: 2px;
    top: 11px;
    left: 0;
    right: 0;
  }
}
.wk-step.is-center {
  .wk-step__head {
    text-align: center;
    .wk-step__line {
      left: 50%;
      right: -50%;
    }
  }
  .wk-step__main {
    text-align: center;
    .wk-step__description {
      padding-left: 20%;
      padding-right: 20%;
    }
  }
}
.wk-step.is-vertical {
  display: flex;
  .wk-step__head {
    flex-grow: 0;
    width: 24px;
    .wk-step__line {
      width: 2px;
      top: 0;
      bottom: 0;
      left: 11px;
    }
  }
  .wk-step__main {
    padding-left: 10px;
    flex-grow: 1;
    .wk-step__title {
      line-height: 24px;
      padding-bottom: 8px;
    }
  }
}
.wk-step:last-of-type.is-flex {
  flex-basis: auto !important;
  flex-shrink: 0;
  flex-grow: 0;
}
.wk-step:last-of-type .wk-step__line {
  display: none;
}
</style>

<template>
  <button 
    :class="[
              type ? 'wk-button ' + type : 'wk-button',
              plain ? 'is-plain' : '',
              round ? 'is-round' : '',
              circle ? 'is-circle' : '',
              disabled ? 'is-disabled' : '',
              size ? size : '',
            ]"
    :disabled="disabled?'disabled':false"
    @click="onClick"
  >
  <i :class="loading?'loader':'none'"></i>
  <span>
    <slot>
      <i :class="icon ? 'iconfont ' + icon : ''"></i>
    </slot>
  </span>
  </button>
</template>

<script>
export default {
  name: 'wk-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
  },
  data() {
    return {}
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    onClick: function() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
/**  default  */
.wk-button {
  display: inline-block;
  outline: none;
  box-sizing: border-box;
  line-height: 1;
  color: #606266;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding: 15px 25px;
  background: #fff;
  i {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    top: 0px;
    font-size: 18px;
    width: 16px;
    height: 16px;
    line-height: 1;
    margin: 0 5px;
    vertical-align: baseline;
  }
  .loader {
    font-size: 25px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: relative;
    text-indent: -9999px;
    -webkit-animation: load 1.1s infinite ease;
    animation: load 1.1s infinite ease;
  }
  span {
    display: inline-block;
    box-sizing: border-box;
  }
}
.wk-button:hover {
  cursor: pointer;
  color: #409EFF;
  border: 1px solid #409EFF;
}
.wk-button:active {
  color: #409EFF;
  border: 1px solid #C6E2FF;
  background: #EBF4FE;
}

.wk-button.is-round {
  border-radius: 20px;
}

.wk-button.is-circle {
  padding: 12px;
  border-radius: 50%;
  i {
    margin: 0;
  }
}

.wk-button.is-disabled {
  cursor: url('../../assets/images/icon/disabled.svg'),auto;
  opacity: .8;
}

/**  尺寸大小  */
.wk-button.medium {
  font-size: 14px;
  padding: 12px 25px; 
}
.wk-button.small {
  font-size: 12px;
  padding: 10px 18px; 
}
.wk-button.mini {
  font-size: 11px;
  padding: 8px 16px; 
}

/**  primary  */
.wk-button.primary {
  color: #fff;
  border: 1px solid #409EFF;
  background: #409EFF;
}
.wk-button.primary:hover {
  background: #66B1FF;
}
.wk-button.primary:active {
  color: #fff;
  background: #3A8EE6;
}

.wk-button.primary.is-plain {
  color: #fff;
  border: 1px solid #409EFF;
  background: #66B1FF;
}
.wk-button.primary.is-plain:hover {
  background: #409EFF;
}
.wk-button.primary.is-plain:active {
  color: #fff;
  background: #3A8EE6;
}

/**  success  */
.wk-button.success {
  color: #fff;
  border: 1px solid #67C23A;
  background: #67C23A;
}
.wk-button.success:hover {
  background: #85CE61;
}
.wk-button.success:active {
  color: #fff;
  background: #5DAF34;
}

.wk-button.success.is-plain {
  color: #fff;
  border: 1px solid #67C23A;
  background:  #85CE61;
}
.wk-button.success:hover {
  background: #67C23A;
}
.wk-button.success:active {
  color: #fff;
  background: #5DAF34;
}

/**  info  */
.wk-button.info {
  color: #fff;
  border: 1px solid #909399;
  background: #909399;
}
.wk-button.info:hover {
  background: #A6A9AD;
}
.wk-button.info:active {
  color: #fff;
  background: #82848A;
}

.wk-button.info.is-plain {
  color: #fff;
  border: 1px solid #909399;
  background:  #A6A9AD;
}
.wk-button.info.is-plain:hover {
  background: #909399;
}
.wk-button.info.is-plain:active {
  color: #fff;
  background: #82848A;
}

/**  warning  */
.wk-button.warning {
  color: #fff;
  border: 1px solid #E6A23C;
  background: #E6A23C;
}
.wk-button.warning:hover {
  background: #EBB563;
}
.wk-button.warning:active {
  color: #fff;
  background: #CF9236;
}

.wk-button.warning.is-plain {
  color: #fff;
  border: 1px solid #E6A23C;
  background: #EBB563;
}
.wk-button.warning.is-plain:hover {
  background: #E6A23C;
}
.wk-button.warning.is-plain:active {
  color: #fff;
  background: #CF9236;
}

/**  danger  */
.wk-button.danger {
  color: #fff;
  border: 1px solid #F56C6C;
  background: #F56C6C;
}
.wk-button.danger:hover {
  background: #F78989;
}
.wk-button.danger:active {
  color: #fff;
  background: #DD6161;
}

.wk-button.danger.is-plain {
  color: #fff;
  border: 1px solid #F56C6C;
  background: #F78989;
}
.wk-button.danger.is-plain:hover {
  background: #F56C6C;
}
.wk-button.danger.is-plain:active {
  color: #fff;
  background: #DD6161;
}

/**  text  */
.wk-button.text {
  color: #409EFF;
  padding: 0;
  border: none;
  background: transparent;
}
.wk-button.text:active {
  color: #3A8EE6;
}
.wk-button.text.is-disabled {
  color: #909399;
  border: none;
  background: transparent;
}

@-webkit-keyframes load {
  0%,
  100% {
    box-shadow: 0px -2.6px 0px 0px #ffffff, 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.5);
  }
  12.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.7), 1.8px -1.8px 0 0px #ffffff, 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  25% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.5), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.7), 2.5px 0px 0 0px #ffffff, 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.5), 2.5px 0px 0 0px rgba(255, 255, 255, 0.7), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.5), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.7), 0px 2.5px 0 0px #ffffff, -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.5), 0px 2.5px 0 0px rgba(255, 255, 255, 0.7), -1.8px 1.8px 0 0px #ffffff, -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.5), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.7), -2.6px 0px 0 0px #ffffff;
  }
  87.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.5), -2.6px 0px 0 0px rgba(255, 255, 255, 0.7);
  }
}
@keyframes load {
  0%,
  100% {
    box-shadow: 0px -2.6px 0px 0px #ffffff, 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.5);
  }
  12.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.7), 1.8px -1.8px 0 0px #ffffff, 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  25% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.5), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.7), 2.5px 0px 0 0px #ffffff, 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.5), 2.5px 0px 0 0px rgba(255, 255, 255, 0.7), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.5), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.7), 0px 2.5px 0 0px #ffffff, -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.2), -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.5), 0px 2.5px 0 0px rgba(255, 255, 255, 0.7), -1.8px 1.8px 0 0px #ffffff, -2.6px 0px 0 0px rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.5), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.7), -2.6px 0px 0 0px #ffffff;
  }
  87.5% {
    box-shadow: 0px -2.6px 0px 0px rgba(255, 255, 255, 0.2), 1.8px -1.8px 0 0px rgba(255, 255, 255, 0.2), 2.5px 0px 0 0px rgba(255, 255, 255, 0.2), 1.75px 1.75px 0 0px rgba(255, 255, 255, 0.2), 0px 2.5px 0 0px rgba(255, 255, 255, 0.2), -1.8px 1.8px 0 0px rgba(255, 255, 255, 0.5), -2.6px 0px 0 0px rgba(255, 255, 255, 0.7);
  }
}
</style>

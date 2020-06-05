<template>
  <div :class="[this.value?'is-checked ':'']+'wk-switch'">
    <input type="checkbox" class="wk-switch_input">
    <span :class="[!this.value ? 'is-active': ''] + ' wk-switch_label' + ' wk-switch_label_left'">{{inactiveText}}</span>
    <span :class="[disabled?'is-disabled':'']+' wk-switch_core'" 
          @click="changeStatus" 
          :style="[this.value?`border-color: ${activeColor};background-color: ${activeColor};`:
          `background-color: ${inactiveColor};border-color:${inactiveColor};`] + 'width: 40px;'" 
        ></span>
    <span :class="[this.value ? 'is-active': ''] + ' wk-switch_label' + ' wk-switch_label_right'">{{activeText}}</span>
  </div>
</template>

<script>
export default {
  name: 'WkSwitch',
  data() {
    return {
      value: false
    }
  },
  props: {
    activeColor: {
      type: String,
      default: '#409EFF',
    },
    inactiveColor: {
      type: String,
      default: '#DCDFE6'
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: String || Number || Object || Array,
      default: ''
    },
    inactiveValue: {
      type: String || Number || Object || Array,
      default: ''
    }
  },
  mounted() {
    console.log(this)
    this.value = this.$attrs.value;
  },
  methods: {
    changeStatus: function() {
      if (!this.disabled) {
        if (this.value) {
          this.$emit('change', this.activeValue || this.value)
        } else {
          this.$emit('change', this.inactiveValue || this.value)
        }
        this.value = !this.value;
      } 
    }
  }
}
</script>

<style lang="less" scoped>
.wk-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .wk-switch_input {
    cursor: pointer;
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .wk-switch_label {
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
    color: #303133;
    height: 20px;
    transition: .2s;
  }
  .wk-switch_label.is-active {
    color: #409eff;
  }
  .wk-switch_label_left {
    margin-right: 10px;
  }
  .wk-switch_label_right {
    margin-left: 10px;
  }
  .wk-switch_core {
    cursor: pointer;
    position: relative;
    display: inline-block;
    outline: none;
    height: 20px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #dedfe6;
    border-radius: 10px;
    background: #dcdfe6;
    transition: all .3s;
    vertical-align: middle;
  }
  .wk-switch_core::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #fff;
    transition: all .3s;
  }
  .wk-switch_core.is-disabled {
    cursor: url('../../assets/images/icon/disabled.svg'),auto;
    opacity: .8;
  }
}
.wk-switch.is-checked {
  .wk-switch_core::after {
    left: 100%;
    margin-left: -17px;
  }
}
</style>

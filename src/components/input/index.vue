<template>
  <div :class="[disabled ? 'wk-inpupt-disabled' : '',
                clearable || showPassword || suffixIcon ? 'wk-input--suffix' : '',
                prefixIcon ? 'wk-input--suffix--pre' : '',
                suffixIcon ? 'wk-input--suffix--suf' : '',
                type === 'textarea' ? 'wk-textarea' : '',
                this.$slots.prepend ? 'wk-input-group wk-input-group--prepend' : '',
                this.$slots.append ? 'wk-input-group wk-input-group--append' : '',
                size === 'medium' ? 'wk-input--medium' :
                size === 'small' ? 'wk-input--small' :
                size === 'mini' ? 'wk-input--mini' : '']"
       class="wk-input"
  >
    <span class="wk-input__suffix__pre" :style="prefixIcon ? '' : 'display:none'">
      <i class="iconfont" :class="prefixIcon"></i>
    </span>
    <div class="wk-input-group__prepend" v-if="this.$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input 
      :type="showPassword ? 'password' : 'text'" 
      :placeholder="placeholder" 
      autocomplete="off" 
      class="wk-input__inner" 
      v-model="value" 
      :maxlength="maxlength"
      :minlength="minlength"
      :disabled="disabled"
      @focus="focus"
      @blur="blur"
      @input="getInput"
      v-if="type === 'text'"
    />
    <textarea 
      v-if="type === 'textarea'" 
      v-model="value"
      :placeholder="placeholder"
      class="wk-textarea__inner" 
      :class="autosize ? 'autosize' : ''"
      :maxlength="maxlength"
      :minlength="minlength"
      style="min-height: 33px;"
      :style="'height:'+row+'px'" 
      @input="getInfo($event)"
    ></textarea>
    <div class="wk-input-group__append" v-if="this.$slots.append">
      <slot name="append"></slot>
    </div>
    <span class="wk-input__suffix" @click="clear" v-if="clearable && suffix">
      <i class="wk-icon-fail iconfont"></i>
    </span>
    <span class="wk-input__suffix" v-if="showPassword && suffix">
      <i class="wk-icon-eyes iconfont"></i>
    </span>
    <span class="wk-input__suffix" v-if="suffixIcon">
      <i class="iconfont" :class="suffixIcon"></i>
    </span>
    <span class="wk-input__suffix" v-if="showWordLimit">
      <span class="wk-input__count">
        <span class="wk-input__count-inner">
          {{nums}}/{{maxlength}}
        </span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'wk-input',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'large'
    },
    maxlength: {
      type: Number,
    },
    minlength: {
      type: Number
    },
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: '',
      suffix: false,
      row: 33,
      nums: 0
    }
  },
  created() {
    this.value = this.$attrs.value
    console.log(this)
  },
  methods: {
    clear() {
      this.value = ''
    },
    focus() {
      this.suffix = true
    },
    blur() {
      this.suffix = false
    },
    keyup(e) {
      console.log(e.target.style.height)
      console.log(e.target.scrollHeight)
      if (parseInt(e.target.style.height) < e.target.scrollHeight + 5) {
        this.row += 26
      } else {
        this.row -= 26
      }
    },
    getInfo(e) {
      if (e.target.scrollHeight > e.target.offsetHeight) {
        this.row = e.target.scrollHeight
      } else if (e.target.scrollHeight < e.target.offsetHeight) {
        this.row -= 21
      }
      this.nums = this.value.length
    },
    getInput() {
      this.nums = this.value.length
    }
  }
}
</script>

<style lang="less" scoped>
.wk-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  .wk-input__inner {
    display: inline-block;
    outline: none;
    font-size: inherit;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-image: none;
    background-color: #fff;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
  .wk-input__inner:focus {
    outline: none;
    border-color: #409eff;
  }
}
.wk-inpupt-disabled {
  .wk-input__inner {
    cursor: not-allowed;
    color: #c0c4cc;
    border-color: #e4e7ed;
    background-color: #f5f7fa;
  }
}
.wk-input__suffix {
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 0;
  right: 10px;
  height: 100%;
  align-items: center;
  i {
    color: #dcdfe6;
  }
  .wk-input__count {
    pointer-events: all;
    height: 100%;
    display: inline-flex;
    align-items: center;
    color: #909399;
    font-size: 12px;
    .wk-input__count-inner {
      background-color: #fff;
      line-height: normal;
      display: inline-block;
      padding: 0 5px;
    }
  }
}
.wk-input--suffix--pre {
  .wk-input__inner {
    padding-left: 30px;
  }
  .wk-input__suffix__pre {
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
    align-items: center;
    i {
      color: #dcdfe6;
    }
  }
}
.wk-input--medium {
  font-size: 14px;
  .wk-input__inner {
    height: 36px;
    line-height: 36px;
  }
}
.wk-input--small {
  font-size: 13px;
  .wk-input__inner {
    height: 32px;
    line-height: 32px;
  }
}
.wk-input--mini {
  font-size: 12px;
  .wk-input__inner {
    height: 28px;
    line-height: 28px;
  }
}
.wk-input--suffix--suf {
  .wk-input__inner {
    padding-right: 30px;
  }
  .wk-input__suffix__pre {
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
    align-items: center;
    i {
      color: #dcdfe6;
    }
  }
}

.wk-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
  .wk-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  }
  .wk-textarea__inner.autosize {
    overflow: hidden;
  }
  .wk-textarea__inner:focus {
    outline: none;
    border-color: #409eff;
  }
}
.wk-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  .wk-input-group__append, .wk-input-group__prepend {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
  }
  .wk-input__inner {
    vertical-align: middle;
    display: table-cell;
  }
  .wk-input__append {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .wk-input-group__prepend {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.wk-input-group--prepend {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  .wk-input__inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.wk-input-group--append {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  .wk-input__inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .wk-input-group__append {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>

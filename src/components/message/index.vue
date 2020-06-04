<template>
  <div :class="[type === 'success' ? 'wk-message-success' : 
                type === 'warning' ? 'wk-message-warning' : 
                type === 'error' ? 'wk-message-error' : ''] + ' wk-message'">
    <p :class="[center ? 'wk-message__content_center' : ''] + ' wk-message__content'">
      <i :class="[type === 'error' ? 'wk-icon-fail' : 'wk-icon-sigh'] + ' iconfont'"></i>
      {{message}}
      <i :class="showClose ?'wk-icon-close iconfont showClose' : 'none'" @click="closeMessage"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'WkMessage',
  data() {
    return {
      duration: 3000,
      type: '',
      showClose: false,
      center: false
    }
  },
  mounted() {
    if (this.duration) {
      setTimeout(()=>{
        this.$el.classList.add('active')
      },this.duration - 1000)
      setTimeout(()=> {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el);
      }, this.duration)
    }
  },
  methods: {
    closeMessage: function() {
      setTimeout(()=>{
        this.$el.classList.add('active');
      },0)
      setTimeout(()=>{
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el);
      },1000)
    }
  }
}
</script>

<style lang="less" scoped>
.wk-message {
  position: fixed;
  display: flex;
  align-items: center;
  top: 20px;
  left: 50%;
  z-index: 2001;
  box-sizing: border-box;
  min-width: 380px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 15px 15px 15px 20px;
  background-color: #edf2f2;
  transform: translateX(-50%);
  overflow: hidden;
  i {
    margin-right: 5px;
  }
  .wk-message__content {
    position: relative;
    color: #909399;
    width: 100%;
    .showClose {
      position: absolute;
      right: 0px;
    }
    .showClose:hover {
      cursor: pointer;
    }
  }
  .wk-message__content_center {
    text-align: center;
  }
}
.wk-message.active {
  top: 20px;
  transition-property: top;
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 2s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 2s;
  -o-transition-property: -o-transform;
  -o-transition-duration: 2s;
  transition-duration: 2s;
  -webkit-animation: back 1s ease-in-out;
  -moz-animation: back 1s ease-in-out;
  -o-animation: back 1s ease-in-out;
  animation: back 1s ease-in-out; 
}

@-webkit-keyframes back {
  from {
    top: 20px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
@-moz-keyframes back {
  from {
    top: 20px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
@-o-keyframes back {
  from {
    top: 20px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@-keyframes back {
  from {
    top: 20px;
    opacity: 1;
  }
  to {
    top: 20px;
    opacity: 1;
  }
}

// 成功
.wk-message-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  i {
    color: #67c23a;
  }
  .wk-message__content {
    color: #67c23a;
  }
}

// 警告
.wk-message-warning {
  border-color: #fdf6ec;
  background-color: #faecd8;
  i {
    color: #e6a23c;
  }
  .wk-message__content {
    color: #e6a23c;
  }
}

// 错误
.wk-message-error {
  border-color: #fde2e2;
  background-color: #fef0f0;
  i {
    color: #f56c6c;
  }
  .wk-message__content {
    color: #f56c6c;
  }
}
</style>

<template>
  <transition name="fade">
    <div class="wk-message">
      <i class="iconfont wk-icon-sigh"></i><p class="wk-message__content">{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WkMessage',
  data() {
    return {
      duration: 3000
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$el.classList.add('active')
    },this.duration - 1000)
    setTimeout(()=> {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el);
    }, this.duration)
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
    margin-right: 10px;
  }
  .wk-message__content {
    color: #909399;
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
</style>

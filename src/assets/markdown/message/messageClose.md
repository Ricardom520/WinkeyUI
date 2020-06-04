```html
<wk-button :plain="true" class="demo-button" @click="open5">成功</wk-button>
<wk-button :plain="true" class="demo-button" @click="open6">警告</wk-button>
<wk-button :plain="true" class="demo-button" @click="open4">消息</wk-button>
<wk-button :plain="true" class="demo-button" @click="open7">错误</wk-button> 

<script>
  export default {
    methods: {
      open4() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
        duration: 0
      });
    },
    open5() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: 3000
      });
    },
    open6() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        duration: 4000
      });
    },
    open7() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error',
        duration: 3000
      });
    },
  }
</script>
```
```html
<wk-button :plain="true" class="demo-button" @click="open1">成功</wk-button>
<wk-button :plain="true" class="demo-button" @click="open2">警告</wk-button>
<wk-button :plain="true" class="demo-button" @click="open">消息</wk-button>
<wk-button :plain="true" class="demo-button" @click="open3">错误</wk-button> 

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条信息提示')
      },
      open1() {
        this.$message({
          message: '恭喜你，这是一条成功信息',
          type: 'success'
        })
      },
      open2() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },
      open3() {
        this.$message.error('错了哦，这是一条错误信息');
      },
    }
  }
</script>
```
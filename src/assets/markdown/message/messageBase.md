```html
<wk-button :plain="true" class="demo-button" @click="open">打开信息提示</wk-button>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条信息提示')
      },
    }
  }
</script>
```
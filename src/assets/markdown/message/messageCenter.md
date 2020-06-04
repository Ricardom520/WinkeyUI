```html
<wk-button :plain="true" @click="openCenter">文字居中</wk-button>

<script>
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true,
        });
      },
    }
  }
</script>
```
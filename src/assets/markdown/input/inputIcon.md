```html
<div class="demo-input-suffix">
  属性方式：
  <wk-input
    placeholder="请选择日期"
    suffix-icon="wk-icon-date"
    v-model="input1">
  </wk-input>
  <wk-input
    placeholder="请输入内容"
    prefix-icon="wk-icon-search"
    v-model="input2">
  </wk-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>
```
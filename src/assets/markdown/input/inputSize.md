```html
<div class="demo-input-size">
  <wk-input
    placeholder="请输入内容"
    suffix-icon="wk-icon-date"
    v-model="input1">
  </wk-input>
  <wk-input
    size="medium"
    placeholder="请输入内容"
    suffix-icon="wk-icon-date"
    v-model="input2">
  </wk-input>
  <wk-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="wk-icon-date"
    v-model="input3">
  </wk-input>
  <wk-input
    size="mini"
    placeholder="请输入内容"
    suffix-icon="wk-icon-date"
    v-model="input4">
  </wk-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
```
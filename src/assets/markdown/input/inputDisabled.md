```html
<wk-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</wk-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
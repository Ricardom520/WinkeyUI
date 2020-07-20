```html
<div>
  <wk-input placeholder="请输入内容" v-model="input1">
    <template slot="prepend">Http://</template>
  </wk-input>
</div>
<div style="margin-top: 15px;">
  <wk-input placeholder="请输入内容" v-model="input2">
    <template slot="append">.com</template>
  </wk-input>
</div>

<style>
  .wk-select .wk-input {
    width: 130px;
  }
  .input-with-select .wk-input-group__prepend {
    background-color: #fff;
  }
</style>

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
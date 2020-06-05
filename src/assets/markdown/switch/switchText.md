```html
<wk-switch
  class="demo-switch"
  v-model="value2"
  active-text="按月付费"
  inactive-text="按年付费">
</wk-switch>
<wk-switch
  class="demo-switch"
  style="display: block"
  v-model="value3"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</wk-switch>

<script>
  data() {
    return {
      value2: true,
      value2: false
    }
  }
</script>
```
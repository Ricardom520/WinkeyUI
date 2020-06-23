```html
<wk-steps :active="active" finish-status="success">
  <wk-step title="步骤 1"></wk-step>
  <wk-step title="步骤 2"></wk-step>
  <wk-step title="步骤 3"></wk-step>
</wk-steps>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
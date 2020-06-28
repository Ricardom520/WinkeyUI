<template>
  <div 
    class="wk-space-item" 
    :style=" direction === 'center' ? `margin-right: ${size === 'small' ? 8 : size === 'large' ? 16 : size === 'large' ? 24 : size}px;` : 
    direction === 'vertical' ? `margin-bottom: ${size === 'small' ? 8 : size === 'large' ? 16 : size === 'large' ? 24 : size}px;` : 
    `margin-right: ${size === 'small' ? 8 : size === 'large' ? 16 : size === 'large' ? 24 : size}px;`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wk-space-item',
  created() {
    console.log(this.$parent)
    this.direction = this.$parent.direction;
    this.size = this.$parent.size;
  },
  data() {
    return {
      direction: '',
      size: '',
    }
  }
}
</script>

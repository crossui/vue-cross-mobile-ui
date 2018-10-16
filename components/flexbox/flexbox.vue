<template>
  <div class="vcu-flexbox" :class="{
    'vcu-flex-col': orient === 'vertical',
    'vcu-flex-row': orient === 'horizontal'
  }" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VFlexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles() {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      }
      return styles
    }
  }
}
</script>

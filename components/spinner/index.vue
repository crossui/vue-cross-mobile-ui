<template>
  <span class="vcu-spinner" :class="className" :style="styles"></span>
</template>

<script>
import Spinner from './spinner'
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']

export default {
  name: 'v-spinner',
  mounted() {
    this.$nextTick(() => {
      Spinner(this.$el, this.type, this.size)
    })
  },
  props: {
    type: {
      type: String,
      default: 'ios'
    },
    size: String
  },
  computed: {
    styles() {
      if (typeof this.size !== 'undefined' && this.size !== '28px') {
        return {
          width: this.size,
          height: this.size
        }
      }
    },
    className() {
      let rs = {}
      for (let i = 0; i < types.length; i++) {
        rs[`vcu-spinner-${types[i]}`] = this.type === types[i]
      }
      return rs
    }
  }
}
</script>


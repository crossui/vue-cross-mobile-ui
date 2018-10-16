<template>
  <div class="vcu-cell-box vcu-cell" :class="className" :style="style" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { go } from '../libs/router'

export default {
  name: 'VCellBox',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style() {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        }
      }
    },
    className() {
      return {
        'vcu-tap-active': this.isLink || !!this.link,
        'vcu-cell_access': this.isLink || !!this.link,
        'vcu-cell-no-border-intent': !this.borderIntent
      }
    }
  },
  methods: {
    onClick() {
      this.link && go(this.link, this.$router)
    }
  }
}
</script>

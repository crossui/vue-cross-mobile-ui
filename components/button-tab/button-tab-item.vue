<template>
  <a class="vcu-button-tab-item" :class="classes" href="javascript:" :style="style" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from '../mixins/multi-items'

export default {
  name: 'v-button-tab-item',
  mixins: [childMixin],
  computed: {
    classes() {
      return {
        'vcu-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'vcu-button-tab-item-first': this.currentIndex === 0,
        'vcu-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'vcu-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      }
    },
    style() {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        }
      }
    }
  }
}
</script>

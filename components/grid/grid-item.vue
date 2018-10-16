<template>
  <a href="javascript:;" class="vcu-grids-item" :class="{
      'vcu-grids-item-no-border': (isLast && !$parent.showLrBorders) || (!isLast && !$parent.showVerticalDividers),
    }" @click="onClick" :style="style">
    <div class="vcu-grids__icon" v-if="hasIconSlot || icon">
      <slot name="icon">
        <img :src="icon" alt="">
      </slot>
    </div>
    <p v-if="hasLabelSlot || label" class="vcu-grids__label">
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </p>
    <slot></slot>
  </a>
</template>

<script>
import { go } from '../libs/router'

export default {
  name: 'VGridItem',
  props: ['icon', 'label', 'link'],
  created() {
    this.$parent.countColumn()
  },
  mounted() {
    this.$slots.icon && (this.hasIconSlot = true)
    this.$slots.label && (this.hasLabelSlot = true)
  },
  destroyed() {
    this.$parent.countColumn()
  },
  computed: {
    isLast() {
      return !((this.index + 1) % this.$parent.column)
    },
    style() {
      const column = this.$parent.column
      if (!column || column === 3) {
        return
      }
      const styles = {}
      styles.width = `${100 / column}%`
      return styles
    }
  },
  methods: {
    onClick() {
      this.$emit('on-item-click')
      go(this.link, this.$router)
    }
  },
  data() {
    return {
      index: 0,
      hasIconSlot: false,
      hasLabelSlot: false
    }
  }
}
</script>

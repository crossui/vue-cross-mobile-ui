<template>
  <div class="vcu-timeline">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-timeline',
  props: {
    color: String,
    isShowIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    setChildProps() {
      if (!this.$children) return
      const len = this.$children.length
      this.$children.forEach((child, index) => {
        child.isLast = index === len - 1
        child.isFirst = index === 0
      })
    }
  }
}
</script>

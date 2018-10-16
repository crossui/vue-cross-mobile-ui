<template>
  <div class="vcu-wepay-flow__li" :class="{'vcu-wepay-flow__li_done': isDone}">
    <div class="vcu-wepay-flow__state">{{ state }}</div>
    <p :class="`vcu-wepay-flow__title-${titlePosition}`">
      <slot name="title">{{ title }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'v-flow-state',
  props: {
    state: [String, Number],
    title: String,
    isDone: Boolean
  },
  computed: {
    titlePosition() {
      return this.$parent.orientation === 'vertical' ? 'right' : 'bottom'
    }
  }
}
</script>
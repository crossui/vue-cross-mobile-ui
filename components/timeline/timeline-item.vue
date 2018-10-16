<template>
  <li class="vcu-timeline-item">
    <div :class="['vcu-timeline-item-color', {'vcu-timeline-item-head': !isFirst,'vcu-timeline-item-head-first': isFirst }]" :style="headStyle">
      <icon v-show="isFirst && $parent.isShowIcon" type="check" class="vcu-timeline-item-checked"></icon>
    </div>
    <div class="vcu-timeline-item-tail" :style="tailStyle"></div>
    <div class="vcu-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'v-timeline-item',
  data() {
    return {
      isLast: true,
      isFirst: true,
      headStyle: { backgroundColor: this.$parent.color }
    }
  },
  mounted() {
    this.$parent.setChildProps()
  },
  beforeDestroy() {
    // this will be null
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.setChildProps()
    })
  },
  components: {
    Icon
  },
  computed: {
    tailStyle() {
      return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color }
    }
  }
}
</script>


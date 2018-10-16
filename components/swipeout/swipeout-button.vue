<template>
  <button class="vcu-swipeout-button" :class="{'vcu-swipeout-button-primary': type === 'primary', 'vcu-swipeout-button-warn': type === 'warn', 'vcu-swipeout-button-default': type === 'default'}" :style="{width: `${width}px`, backgroundColor: backgroundColor}" @click="onButtonClick" type="button">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  name: 'VSwipeoutButton',
  props: {
    text: String,
    backgroundColor: String,
    type: String,
    width: {
      type: Number,
      default: 80
    }
  },
  methods: {
    onButtonClick() {
      if (this.$parent.$options._componentTag === 'swipeout-item') {
        this.$parent.onItemClick(this.text)
      }
    }
  }
}
</script>
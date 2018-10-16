<template>
  <div class="vcu-popup-header" :class="showBottomBorder ? 'vcu-1px-b' : ''">
    <div class="vcu-popup-header-left" @click="$emit('on-click-left')">
      <slot name="left-text">{{ leftText }}</slot>
    </div>
    <div class="vcu-popup-header-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="vcu-popup-header-right" @click="$emit('on-click-right')">
      <slot name="right-text">{{ rightText }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VPopupHeader',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    showBottomBorder: {
      type: Boolean,
      default: true
    }
  }
}
</script>

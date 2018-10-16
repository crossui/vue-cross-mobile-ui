<template>
  <transition :name="transition">
    <div class="vcu-loading_toast vcu-loading-wrap" :class="!text ? 'vcu-loading-no-text' : ''" v-show="show">
      <div class="vcu-mask_transparent"></div>
      <div class="vcu-toast" :style="{
          position: position
        }">
        <i class="vcu-loading vcu-icon_toast"></i>
        <p class="vcu-toast__content" v-if="text">{{ text || '加载中' }}<slot></slot>
        </p>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'VLoading',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'vcu-mask'
    }
  },
  watch: {
    show(val) {
      this.$emit('update:show', val)
    }
  }
}
</script>
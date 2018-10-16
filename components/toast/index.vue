<template>
  <div class="vcu-toast-wrap">
    <div class="vcu-mask_transparent" v-show="isShowMask && show"></div>
    <transition :name="currentTransition">
      <div class="vcu-toast" :style="{width: width}" :class="toastClass" v-show="show">
        <i class="vcuicon vcu-icon-success-no-circle vcu-icon_toast" v-show="type !== 'text'"></i>
        <p class="vcu-toast__content" v-if="text" :style="style" v-html="text"></p>
        <p class="vcu-toast__content" v-else :style="style">
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import SafariFixIssue from '../mixins/safari-fix'

export default {
  name: 'VToast',
  mixins: [SafariFixIssue],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    if (this.value) {
      this.show = true
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition
      }
      if (this.position === 'top') {
        return 'vcu-slide-from-top'
      }
      if (this.position === 'bottom') {
        return 'vcu-slide-from-bottom'
      }
      return 'vcu-fade'
    },
    toastClass() {
      return {
        'vcu-toast_forbidden': this.type === 'warn',
        'vcu-toast_cancel': this.type === 'cancel',
        'vcu-toast_success': this.type === 'success',
        'vcu-toast_text': this.type === 'text',
        'vcu-toast-top': this.position === 'top',
        'vcu-toast-bottom': this.position === 'bottom',
        'vcu-toast-middle': this.position === 'middle'
      }
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' }
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true)
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
          this.$emit('on-hide')
          this.fixSafariOverflowScrolling('touch')
        }, this.time)
      }
    },
    value(val) {
      this.show = val
    }
  }
}
</script>

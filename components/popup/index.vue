<template>
  <transition :name="`vcu-popup-animate-${position}`">
    <div v-show="show && !initialShow" :style="styles" class="vcu-popup-dialog" :class="[`vcu-popup-${position}`, show ? 'vcu-popup-show' : '']">
      <slot v-if="shouldRenderBody"></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup'
import dom from '../libs/dom'

export default {
  name: 'VPopup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // get global layout config
    if (this.$vcu && this.$vcu.config && this.$vcu.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX'
    }
  },
  mounted() {
    this.$overflowScrollingList = document.querySelectorAll('.vcu-fix-safari-overflow-scrolling')
    this.$nextTick(() => {
      const _this = this
      this.popup = new Popup({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen() {
          _this.fixSafariOverflowScrolling('auto')
          _this.show = true
        },
        onClose() {
          _this.show = false
          if (window.__$vcuPopups && Object.keys(window.__$vcuPopups).length > 1) return
          if (document.querySelector('.vcu-popup-dialog.vcu-popup-mask-disabled')) return
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch')
          }, 300)
        }
      })
      if (this.value) {
        this.popup.show()
      }
      this.initialShow = false
    })
  },
  deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false
    }
    this.removeModalClassName()
  },
  methods: {
    fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
      }
    },
    removeModalClassName() {
      this.layout === 'VIEW_BOX' && dom.removeClass(document.body, 'vcu-modal-open')
    },
    doShow() {
      this.popup && this.popup.show()
      this.$emit('on-show')
      this.fixSafariOverflowScrolling('auto')
      this.layout === 'VIEW_BOX' && dom.addClass(document.body, 'vcu-modal-open')
      if (!this.hasFirstShow) {
        this.$emit('on-first-show')
        this.hasFirstShow = true
      }
    },
    scrollTop() {
      this.$nextTick(() => {
        this.$el.scrollTop = 0
        const box = this.$el.querySelectorAll('.vcu-scrollable')
        if (box.length) {
          for (let i = 0; i < box.length; i++) {
            box[i].scrollTop = 0
          }
        }
      })
    }
  },
  data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    }
  },
  computed: {
    styles() {
      const styles = {}
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height
      } else {
        styles.width = this.width
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight
      }

      this.isTransparent && (styles['background'] = 'transparent')
      if (this.popupStyle) {
        for (let i in this.popupStyle) {
          styles[i] = this.popupStyle[i]
        }
      }
      return styles
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
      if (val) {
        // rerender body
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false
          this.$nextTick(() => {
            this.scrollTop()
            this.shouldRenderBody = true
            this.doShow()
          })
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop()
          }
          this.doShow()
        }
      } else {
        this.$emit('on-hide')
        this.show = false
        this.popup.hide(false)
        setTimeout(() => {
          if (!document.querySelector('.vcu-popup-dialog.vcu-popup-show')) {
            this.fixSafariOverflowScrolling('touch')
          }
          this.removeModalClassName()
        }, 200)
      }
    }
  },
  beforeDestroy() {
    this.popup && this.popup.destroy()
    this.fixSafariOverflowScrolling('touch')
    this.removeModalClassName()
  }
}
</script>

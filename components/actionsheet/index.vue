<template>
  <div class="vcu-actionsheet-wrap">

    <transition name="vcu-actionsheet-mask">
      <div class="vcu-mask vcu-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>

    <div class="vcu-skin_android" v-if="theme === 'android'">
      <transition name="vcu-android-actionsheet" @after-enter="$emit('on-after-show')" @after-leave="$emit('on-after-hide')">
        <div class="vcu-actionsheet" v-show="show">
          <div class="vcu-actionsheet__menu">
            <div class="vcu-actionsheet__cell" v-for="(text, key) in menus" @click="onMenuClick(text, key)" v-html="text.label || text">
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="vcu-actionsheet" :class="{'vcu-actionsheet_toggle': show}" v-else ref="iOSMenu">
      <div class="vcu-actionsheet__menu">
        <div class="vcu-actionsheet__cell" v-if="hasHeaderSlot">
          <slot name="header"></slot>
        </div>
        <div class="vcu-actionsheet__cell" v-for="(text, key) in menus" @click="onMenuClick(text, key)" v-html="text.label || text" :class="`vcu-actionsheet-menu-${text.type || 'default'}`">
        </div>
      </div>
      <div class="vcu-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">
        <div class="vcu-actionsheet__cell">{{cancelText || '取消'}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VActionsheet',
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.vcu-tabbar')
      this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener('transitionend', this.onTransitionEnd)
    })
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false
    }
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide')
    },
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text)
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text)
          } else {
            this.emitEvent('on-click-menu', '', text)
            this.show = false
          }
        }
      }
    },
    onClickingMask() {
      this.$emit('on-click-mask')
      this.closeOnClickingMask && (this.show = false)
    },
    emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let _item = item
        if (typeof _item === 'object') {
          _item = JSON.parse(JSON.stringify(_item))
        }
        this.$emit(event, menu, _item)
        this.$emit(`${event}-${menu}`)
        this.closeOnClickingMenu && (this.show = false)
      }
    },
    fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val)
      if (val) {
        this.fixIos(-1)
      } else {
        setTimeout(() => {
          this.fixIos(100)
        }, 200)
      }
    },
    value: {
      handler: function (val) {
        this.show = val
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.fixIos(100)
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd)
  }
}
</script>
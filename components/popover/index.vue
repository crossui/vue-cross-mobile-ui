<template>
  <div v-click-outside="onClickedOutside">
    <span ref="trigger" @click="toggle">
      <slot>
      </slot>
    </span>
    <div class="vcu-popover" v-transfer-dom ref="popover" :style="popoverStyle" v-show="show">
      <div :class="arrowClass"></div>
      <div @click="$emit('on-click-content')">
        <slot name="content">
          <div v-html="content"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../directives/click-outside'
import TransferDom from '../directives/transfer-dom'

export default {
  name: 'v-popover',
  mounted() {
    this.$nextTick(() => {
      this.init()
      window.addEventListener('resize', this.reset)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reset)
  },
  directives: {
    TransferDom,
    ClickOutside
  },
  props: {
    content: String,
    placement: String,
    gutter: {
      type: Number,
      default: 5
    }
  },
  methods: {
    reset() {
      if (this.show) {
        this.init(true)
      }
    },
    init(isReset) {
      const trigger = this.$refs.trigger.children[0]
      const popover = this.$refs.popover
      switch (this.placement) {
        case 'top':
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.getBoundingClientRect().top - popover.offsetHeight - this.gutter
          break
        case 'left':
          this.position.left = trigger.offsetLeft - popover.offsetWidth - this.gutter
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'right':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth + this.gutter
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'bottom':
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter
          break
        default:
          console.warn('Wrong placement prop')
      }
      if (!isReset) {
        this.show = false
      }

      this.popoverStyle = {
        top: this.position.top + 'px',
        left: this.position.left + 'px',
        display: isReset ? this.popoverStyle.display : 'none'
      }
    },
    onClickedOutside() {
      if (this.show) {
        this.show = false
        this.$emit('on-hide')
      }
    },
    toggle() {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(() => {
          this.init(true)
        })
      }
      this.$emit(`on-${this.show === true ? 'show' : 'hide'}`)
    }
  },
  data() {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true,
      popoverStyle: {}
    }
  },
  computed: {
    arrowClass() {
      return {
        'vcu-popover-arrow': true,
        'vcu-popover-arrow-up': this.placement === 'bottom',
        'vcu-popover-arrow-right': this.placement === 'left',
        'vcu-popover-arrow-left': this.placement === 'right',
        'vcu-popover-arrow-down': this.placement === 'top'
      }
    }
  }
}
</script>


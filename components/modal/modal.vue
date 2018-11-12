<template>

  <div class="vcu-modal-wrap">
    <transition :name="maskTransition">
      <div v-show="show" class="vcu-mask" style="" @click="handeleMaskClick" :style="maskStyle"></div>
    </transition>
    <transition :name="modalTransition">
      <div v-show="show" class="vcu-modal">
        <div class="vcu-modal-header" v-if="title">
          <div class="vcu-modal-title">
            {{title}}
          </div>
        </div>
        <div class="vcu-modal-body">
          <slot>
            <div v-if="msg">
              {{msg}}
            </div>
          </slot>
        </div>
        <div class="vcu-modal-footer" v-if="!hideClose">
          <slot name="footer">
            <a href="javascript:;" class="vcu-modal-footer__btn" @click="close">关闭</a>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TransferDom from '../directives/transfer-dom'
export default {
  name: "v-modal",
  directives: {
    TransferDom
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    clickOverlayClose: {
      type: Boolean,
      default: false
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vcu-mask'
    },
    maskZIndex: [String, Number],
    modalTransition: {
      type: String,
      default: 'vcu-modal'
    },
    cancel: {
      type: Function
    }
  },
  watch: {
    value(val) {
      this.show = val
    }
  },
  computed: {
    maskStyle() {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        }
      }
    }
  },
  data() {
    return {
      show: this.value
    }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('input', false)
      this.$emit('cancel', this.cancel)
    },
    handeleMaskClick() {
      if (this.clickOverlayClose) {
        this.show = false
        this.$emit('input', false)
      }
    }
  }
}
</script>

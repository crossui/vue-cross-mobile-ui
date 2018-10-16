<template>
  <button :style="buttonStyle" class="vcu-btn" :class="classes" :disabled="disabled" :type="actionType" @click="onClick">
    <i class="vcu-loading" v-if="showLoading"></i>
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
import { go } from '../libs/router'

export default {
  name: 'v-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function (val) {
        return val.length === 2
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && go(this.link, this.$router)
    }
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients)
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF'
        }
      }
    },
    classes() {
      return [
        {
          'vcu-btn_disabled': !this.plain && this.disabled,
          'vcu-btn_plain-disabled': this.plain && this.disabled,
          'vcu-btn_mini': this.mini,
          'vcu-x-button-no-border': this.noBorder
        },
        !this.plain ? `vcu-btn_${this.type}` : '',
        this.plain ? `vcu-btn_plain-${this.type}` : '',
        this.showLoading ? `vcu-btn_loading` : ''
      ]
    }
  }
}
</script>


<template>
  <div class="vcu-cell" :class="{
      'vcu-tap-active': isLink || !!link,
      'vcu-cell_access': isLink || !!link,
      'vcu-cell-no-border-intent': !borderIntent,
      'vcu-cell-disabled': disabled
    }" :style="style" @click="onClick">
    <div class="vcu-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="vcu-cell-bd" :class="{'vcu-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="vcu-cell-label" :style="labelStyles" :class="labelClass" v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title"></slot>
      </p>
      <inline-desc>
        <slot name="inline-desc">{{ inlineDesc }}</slot>
      </inline-desc>
    </div>
    <div class="vcu-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{ value }}</slot>
      <!-- <v-no-ssr> -->
      <i class="vcu-loading" v-if="isLoading"></i>
      <!-- </v-no-ssr> -->
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
import InlineDesc from '../inline-desc'
import { go } from '../libs/router'
import props from './props'
import cleanStyle from '../libs/clean-style'
import getParentProp from '../libs/get-parent-prop'

export default {
  name: 'VCell',
  components: {
    InlineDesc
  },
  props: props(),
  /* created() {
    if (typeof SUPPORT_SSR_TAG === 'undefined' && process.env.NODE_ENV === 'development') {
      console.warn('[vcu] 抱歉，当前组件[cell]要求更新依赖 vcu-loader@latest')
    }
  }, 
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title
    if (this.$slots.value && process.env.NODE_ENV === 'development') {
      console.warn('[vcu] [cell] slot=value 已经废弃，请使用默认 slot 替代')
    }
  },*/
  computed: {
    labelStyles() {
      return cleanStyle({
        width: getParentProp(this, 'labelWidth'),
        textAlign: getParentProp(this, 'labelAlign'),
        marginRight: getParentProp(this, 'labelMarginRight')
      })
    },
    valueClass() {
      return {
        'vcu-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vcu-cell-align-left': this.valueAlign === 'left',
        'vcu-cell-arrow-transition': !!this.arrowDirection,
        'vcu-cell-arrow-up': this.arrowDirection === 'up',
        'vcu-cell-arrow-down': this.arrowDirection === 'down'
      }
    },
    labelClass() {
      return {
        'vcu-cell-justify': this.$parent && (this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify')
      }
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        }
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && go(this.link, this.$router)
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    }
  }
}
</script>

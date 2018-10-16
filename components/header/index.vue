<template>
  <div class="vcu-header">
    <div class="vcu-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="vcu-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}</a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="vcu-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="vcu-header-title-area" v-if="shouldOverWriteTitle">
      <slot name="overwrite-title"></slot>
    </div>
    <div class="vcu-header-right">
      <a class="vcu-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import objectAssign from 'object-assign'

export default {
  name: 'v-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        }
      }
    }
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true
    }
  },
  computed: {
    _leftOptions() {
      return objectAssign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {})
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  },
  data() {
    return {
      shouldOverWriteTitle: false
    }
  }
}
</script>
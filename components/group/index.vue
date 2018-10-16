<template>
  <div>
    <div class="vcu-cells__title" v-if="title" :style="cleanStyle({
      color: titleColor
    })" v-html="title"></div>
    <slot name="title"></slot>
    <div class="vcu-cells" :class="{
      'vcu-no-group-title': !title
    }" :style="cleanStyle({
      marginTop: typeof gutter === 'number' ? (gutter + 'px') : gutter
    })">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
    <div class="vcu-cells__title vcu-group-footer-title" v-if="footerTitle" :style="cleanStyle({
      color: footerTitleColor
    })" v-html="footerTitle"></div>
  </div>
</template>

<script>
import cleanStyle from '../libs/clean-style'

export default {
  name: 'VGroup',
  methods: {
    cleanStyle
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
}
</script>

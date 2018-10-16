<template>
  <div class="vcu-form-preview vcu-form-preview">
    <div class="vcu-form-preview__hd">
      <label class="vcu-form-preview__label" v-html="headerLabel"></label>
      <em class="vcu-form-preview__value" v-html="headerValue || '&nbsp;'"></em>
    </div>
    <div class="vcu-form-preview__bd">
      <div class="vcu-form-preview__item" v-for="item in bodyItems">
        <label class="vcu-form-preview__label">{{item.label}}</label>
        <span class="vcu-form-preview__value">{{item.value}}</span>
      </div>
    </div>
    <div class="vcu-form-preview__ft">
      <a class="vcu-form-preview__btn" :class="{'vcu-form-preview__btn_default': button.style==='default', 'vcu-form-preview__btn_primary': button.style === 'primary'}" href="javascript:" v-for="button in footerButtons" @click="onButtonClick(button.onButtonClick, button.link)">{{button.text}}</a>
    </div>
  </div>
</template>

<script>
import { go } from '../libs/router'

export default {
  name: 'VFormPreview',
  props: ['headerLabel', 'headerValue', 'bodyItems', 'footerButtons', 'name'],
  methods: {
    onButtonClick(cb, link) {
      cb && cb(this.name)
      if (link) {
        go(link, this.$router)
      }
    }
  }
}
</script>
<template>
  <div class="vcu-panel vcu-panel_access">
    <div class="vcu-panel__hd" v-if="header && header.title" v-html="header.title" @click="$emit('on-click-header')"></div>
    <slot name="header"></slot>
    <div class="vcu-panel__bd">
      <div class="vcu-card-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="vcu-panel__ft">
      <a class="vcu-cell vcu-cell_access vcu-cell_link" href="javascript:" v-if="footer && footer.title" @click="onClickFooter">
        <div class="vcu-cell__bd" v-html="footer.title"></div>
      </a>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { go } from '../libs/router'

export default {
  name: 'VCard',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter() {
      this.footer.link && go(this.footer.link, this.$router)
      this.$emit('on-click-footer')
    }
  }
}
</script>

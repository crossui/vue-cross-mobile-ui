<template>
  <div class="vcu-msg">
    <div class="vcu-msg__icon-area"><i class="vcuicon vcu-icon_msg" :class="`vcuicon-${icon || 'roundcheckfill'}`"></i></div>
    <div class="vcu-msg__text-area">
      <h2 class="vcu-msg__title" v-html="title"></h2>
      <p class="vcu-msg__desc">
        <slot name="description"></slot>
      </p>
      <p class="vcu-msg__desc" v-if="description" v-html="description"></p>
    </div>
    <div class="vcu-msg__opr-area">
      <p class="vcu-btn-area">
        <slot name="buttons">
          <a v-for="button in buttons" href="javascript:;" class="vcu-btn" :class="`vcu-btn_${button.type}`" @click="onClick(button.onClick, button.link)">{{button.text}}</a>
        </slot>
      </p>
    </div>
  </div>
</template>

<script>
import { go } from '../libs/router'

export default {
  name: 'v-msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick(handler, link) {
      typeof handler === 'function' && handler()
      link && go(link, this.$router)
    }
  }
}
</script>
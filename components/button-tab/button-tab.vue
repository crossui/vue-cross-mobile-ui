<template>
  <div class="vcu-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../mixins/multi-items'

export default {
  name: 'v-button-tab',
  mixins: [parentMixin],
  props: {
    height: Number
  }
}
</script>

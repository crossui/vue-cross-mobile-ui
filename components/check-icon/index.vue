<template>
  <div class="vcu-check-icon" @click="updateValue">
    <icon type="roundcheckfill" v-show="type === 'default' && value"></icon>
    <icon type="roundcheck" v-show="type === 'plain' && value"></icon>
    <icon type="round" v-show="!value"></icon>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'VCheckIcon',
  components: {
    Icon
  },
  methods: {
    updateValue() {
      this.$emit('update:value', !this.value)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

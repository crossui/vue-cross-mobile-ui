<template>
  <div class="vcu-wepay-flow" :class="{'vcu-wepay-flow_vertical': orientation === 
  'vertical'}">
    <div class="vcu-wepay-flow__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-flow',
  props: {
    orientation: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>
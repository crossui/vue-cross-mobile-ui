<template>
  <div class="vcu-group-tip" :style="{'text-align':align}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTip',
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>

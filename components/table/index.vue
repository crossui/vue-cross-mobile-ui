<template>
  <table class="vcu-table" :class="{'vcu-table-bordered': fullBordered, 'vcu-table-no-cell-bordered': !cellBordered, 'vcu-table-no-content-bordered': !contentBordered}">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'v-table',
  props: {
    fullBordered: Boolean,
    cellBordered: {
      type: Boolean,
      default: true
    },
    contentBordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<template>
  <span v-text="text" :class="['vcu-badge', {'vcu-badge-dot': typeof text === 'undefined', 'vcu-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
  name: 'VBadge',
  props: {
    text: [String, Number]
  }
}
</script>

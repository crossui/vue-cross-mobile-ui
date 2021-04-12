<template>
  <div
    class="vcu-loadmore vcu-loadmore"
    :class="{
      'vcu-loadmore_line': !showLoading,
      'vcu-loadmore_dot': !showLoading && !tip,
    }"
  >
    <i class="vcu-loading" v-if="showLoading"></i>
    <span class="vcu-loadmore__tips" v-show="tip || !showLoading">{{
      tip
    }}</span>
  </div>
</template>

<script>
export default {
  name: "v-load-more",
  props: {
    showLoading: {
      type: Boolean,
      default: true,
    },
    tip: String,
  },
};
</script>

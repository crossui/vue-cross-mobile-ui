<template>
  <div class="vcu-tab">
    <slot name="header"></slot>
    <div
      class="vcu-tab__panel vcu-fix-safari-overflow-scrolling"
      ref="viewBoxBody"
      id="vcu_view_box_body"
      :style="{ paddingTop: bodyPaddingTop, paddingBottom: bodyPaddingBottom }"
    >
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "VViewBox",
  props: ["bodyPaddingTop", "bodyPaddingBottom"],
  methods: {
    scrollTo(top) {
      this.$refs.viewBoxBody.scrollTop = top;
    },
    getScrollTop() {
      return this.$refs.viewBoxBody.scrollTop;
    },
    getScrollBody() {
      return this.$refs.viewBoxBody;
    },
  },
};
</script>


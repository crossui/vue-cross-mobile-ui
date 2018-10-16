<template>
  <div class="text-body" :style="scrollable ? 'height:375px;overflow:scroll;' : ''">
    <v-spinner name="crescent" v-show="text !== 'initialization done(click to close me)'"></v-spinner>
    <br>
    <span>{{ text }}</span>
    <div v-if="scrollable" style="height:1000px;"></div>
  </div>
</template>

<script>
export default {
  props: {
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.text = 'initialization done(click to close me)'
    }, 2000)
  },
  data() {
    return {
      text: 'initializing~'
    }
  }
}
</script>

<style lang="less" scoped>
.text-body {
  padding: 30px 0;
  color: #666;
  text-align: center;
}
</style>
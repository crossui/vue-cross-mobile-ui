<template>
  <div class="demo-block padding-20">
    <div class="sticky-header"></div>
    <v-sticky>
      <v-button type="primary" mini>固定元素</v-button>
    </v-sticky>
    <p v-for="i in 100">{{i}}<br></p>
  </div>
</template>
<style lang="less" scoped>
.sticky-header {
  background: #bbb;
  height: 100px;
}
</style>


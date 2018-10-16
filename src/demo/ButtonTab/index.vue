<template>
  <div class="demo-block padding-20">
    <v-button-tab>
      <v-button-tab-item>今天</v-button-tab-item>
      <v-button-tab-item selected>本周</v-button-tab-item>
      <v-button-tab-item>本月</v-button-tab-item>
    </v-button-tab>
    <br>
    <v-divider>使用 v-model 设置当前选中项</v-divider>
    <br>
    <v-button-tab v-model="demo01">
      <v-button-tab-item @on-item-click="consoleIndex()">文章</v-button-tab-item>
      <v-button-tab-item @on-item-click="consoleIndex()">商品</v-button-tab-item>
    </v-button-tab>
    <br>
    <v-button-tab v-model="demo01">
      <v-button-tab-item>文章同步</v-button-tab-item>
      <v-button-tab-item>商品同步</v-button-tab-item>
    </v-button-tab>
    <br>
    <v-divider>红点</v-divider>
    <br>
    <v-button-tab>
      <v-button-tab-item selected>所有消息</v-button-tab-item>
      <v-button-tab-item><span class="vcu-reddot-s">新消息</span></v-button-tab-item>
    </v-button-tab>
  </div>
</template>
<script>
export default {
  methods: {
    consoleIndex() {
      console.log('click demo01', this.demo01)
    }
  },
  data() {
    return {
      demo01: 0
    }
  }
}
</script>
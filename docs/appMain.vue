<template>
  <div class="main">
    <app-header></app-header>
    <div class="main-container">
      <v-row>
        <v-col :span="4">
          <menu-component></menu-component>
        </v-col>
        <v-col :span="13">
          <div class="main-router-view">
            <router-view></router-view>
          </div>
        </v-col>
      </v-row>
    </div>
    <vcu-demo :demourl.sync="demourl"></vcu-demo>
    <app-footer></app-footer>
    <div id="components-back-top-demo-custom">
      <v-back-top></v-back-top>
    </div>
  </div>
</template>
<script>
import appHeader from "./appHeader.vue";
import appFooter from "./appFooter.vue";
import menuComponent from "./menu.vue";
import vcuDemo from "./vcu-demo.vue";
export default {
  components: {
    appHeader,
    appFooter,
    menuComponent,
    vcuDemo
  },
  data() {
    return {
    }
  },
  computed: {
    demourl() {
      return this.$route.meta.demourl
    }
  },
}
</script>
<style lang="less">
@import "highlight.js/styles/github.css";
@import "./style/nprogress.less";
@import "./style/main.less";
#components-back-top-demo-custom .vcu-back-top {
  bottom: 20px;
}
</style>


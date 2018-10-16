<template>
  <div class="home">
    <h1 class="home-title">
      <img src="../assets/logo.png">
      <span>VcuMobile</span>
    </h1>
    <h3 class="home-desc">移动端 Vue 组件库<br />全名（vue-crossmobile-ui）</h3>
    <template v-for="item in routers">
      <v-group>
        <v-cell :title="item.title" is-link :arrow-direction="item.showInMobile ? 'up' : 'down'" @click.native="item.showInMobile = !item.showInMobile"></v-cell>
        <template v-for="child in item.children" v-if="item.showInMobile">
          <v-cell-box class="sub-item" is-link @click.native="handleClick(child.name)">{{child.title}}</v-cell-box>
        </template>
      </v-group>
    </template>
  </div>
</template>

<script>
import { menuRouter } from '../router/router';
export default {
  name: 'home',
  data() {
    return {
      showContent001: false,
      routers: menuRouter
    }
  },
  methods: {
    handleClick(val) {
      this.$router.push({
        name: val
      });
    }
  }
}
</script>
<style lang="less" scoped>
.home-title {
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
  font-weight: normal;
  img {
    width: 36px;
    height: 36px;
    position: relative;
    top: 5px;
  }
}
.home-desc {
  text-align: center;
  font-weight: 100;
  font-size: 14px;
  padding-bottom: 20px;
}
.sub-item {
  color: #666;
}
</style>

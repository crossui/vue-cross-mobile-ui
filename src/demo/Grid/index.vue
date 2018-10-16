<template>
  <div class="demo-block padding-tb-20">
    <h2 class="demo-block__title">2列</h2>
    <v-grid>
      <v-grid-item label="九宫格" v-for="i in 2" :key="i">
        <v-icon slot="icon" type="cascades"></v-icon>
      </v-grid-item>
    </v-grid>

    <h2 class="demo-block__title">3列</h2>
    <v-grid :show-lr-borders="false" :show-vertical-dividers="false">
      <v-grid-item link="/Layout/Flexbox" label="九宫格">
        <v-icon slot="icon" type="cascades"></v-icon>
      </v-grid-item>
      <v-grid-item :link="{ path: '/Layout/Flexbox'}" label="九宫格">
        <v-icon slot="icon" type="cascades"></v-icon>
      </v-grid-item>
      <v-grid-item link="/Layout/Flexbox" @on-item-click="onItemClick">
        <v-icon slot="icon" type="cascades"></v-icon>
        <span slot="label">九宫格</span>
      </v-grid-item>
    </v-grid>

    <h2 class="demo-block__title">4列</h2>
    <v-grid :show-lr-borders="false">
      <v-grid-item label="九宫格" v-for="i in 4" :key="i">
        <v-icon slot="icon" type="cascades"></v-icon>
      </v-grid-item>
    </v-grid>

    <h2 class="demo-block__title"> 自定义内容 </h2>
    <v-grid :show-vertical-dividers="false">
      <v-grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </v-grid-item>
    </v-grid>

    <h2 class="demo-block__title"> 自定义列 </h2>
    <v-grid :cols="3" :show-lr-borders="false">
      <v-grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </v-grid-item>
    </v-grid>
  </div>
</template>
<script>
export default {
  methods: {
    onItemClick() {
      console.log('on item click')
    }
  }
}
</script>
<style lang="less" scoped>
.demo-block .vcu-grids {
  background: #fff;
  color: #666;
  text-align: center;
  a {
    color: #666;
  }
  .vcuicon {
    color: #bbb;
    font-size: 24px;
  }
}
</style>


# Grid 栅格

```handlebars
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


```


## Grid API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| rows | Number | 3 | '宫格行数，建议少于5' | 
| cols | Number | 3 | '列数。如果为非单行 Grid，需要设置 cols，否则所有 GridItem 会平均宽度显示在一行。' | 
| show-lr-borders | Boolean | true | '是否显示左右边框' | 
| show-vertical-dividers | Boolean | true | '是否显示垂直分割线' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 用于grid-item的插槽 |

## GridItem API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| icon | String | | '图标地址，如果是线上地址，推荐使用该prop。如果是本地图标资源，使用slot=icon可以保证资源被正确打包' | 
| label | String | | 'label 文字' | 
| link | String | | 'vue-router 路径' | 

### GridItem slots
| 名字 | 说明 |
| --- | --- |
| icon | 图标内容，直接使用img标签 |
| label | label 文字的 slot，作用同 prop:label |
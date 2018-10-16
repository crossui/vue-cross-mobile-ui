# ButtonTab 按钮选项卡


```handlebars
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
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Number | 0 | '当前选中索引值，从0开始，使用 v-model 绑定' | 
| height | Number | 30 | '高度值, 单位为像素' | 

## button-tab-item API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| selected | Boolean | false | '是否选中' | 

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-item-click | (index) | 当前按钮点击时触发 |


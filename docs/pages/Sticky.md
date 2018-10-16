# Sticky 固定元素


```handlebars
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


```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| top | Number/String | 0 | '距离浏览器顶部高度' | 
| zIndex | Number | 10 | '容器所在层级' | 

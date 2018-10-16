# Flexbox 伸缩布局盒


```handlebars
<template>
  <div class="demo-block padding-20">
    <h2 class="demo-block__title"> 水平 </h2>
    <v-flexbox>
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <v-flexbox>
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">3</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <v-flexbox>
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">3</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">4</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <v-flexbox>
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">3</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">4</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">5</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <v-flexbox>
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">3</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">4</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">5</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">6</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <h2 class="demo-block__title"> 水平无间隙 </h2>
    <v-flexbox :gutter="0">
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">3</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">4</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <h2 class="demo-block__title"> 垂直 </h2>
    <v-flexbox orient="vertical">
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <h2 class="demo-block__title"> 垂直无间隙 </h2>
    <v-flexbox orient="vertical" :gutter="0">
      <v-flexbox-item>
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2</div>
      </v-flexbox-item>
    </v-flexbox>

    <h2 class="demo-block__title"> 网格（12列） </h2>
    <v-flexbox>
      <v-flexbox-item :span="4">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">2/3</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <v-flexbox>
      <v-flexbox-item :span="6">
        <div class="flex-demo">6/12</div>
      </v-flexbox-item>
      <v-flexbox-item :span="2">
        <div class="flex-demo">2/12</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">rest</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <h2 class="demo-block__title"> 弹性网格 </h2>
    <v-flexbox>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/6">
        <div class="flex-demo">1/6</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/8">
        <div class="flex-demo">1/8</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/8">
        <div class="flex-demo">1/8</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">rest</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <v-flexbox :gutter="0">
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/6">
        <div class="flex-demo">1/6</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/8">
        <div class="flex-demo">1/8</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/8">
        <div class="flex-demo">1/8</div>
      </v-flexbox-item>
      <v-flexbox-item>
        <div class="flex-demo">rest</div>
      </v-flexbox-item>
    </v-flexbox>
    <br>
    <h2 class="demo-block__title"> 弹性网格 </h2>
    <v-flexbox :gutter="0">
      <v-flexbox-item :span="1/3" :order="4">
        <div class="flex-demo">1</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/6" :order="3">
        <div class="flex-demo">2</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/8" :order="2">
        <div class="flex-demo">3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/8" :order="1">
        <div class="flex-demo">4</div>
      </v-flexbox-item>
      <v-flexbox-item :order="-99">
        <div class="flex-demo">5</div>
      </v-flexbox-item>
    </v-flexbox>
    <h2 class="demo-block__title"> flex-wrap </h2>
    <v-flexbox :gutter="0" wrap="wrap">
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
      <v-flexbox-item :span="1/3">
        <div class="flex-demo">1/3</div>
      </v-flexbox-item>
    </v-flexbox>
  </div>
</template>
<style lang="less">
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #b1b1b1;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>


```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| gutter | number | 8 | '间隙像素大小（px）' | 
| orient | String | horizontal | '排布方向，可选['horizontal', 'vertical']' | 
| justify | String | | '`flex`的`justify-content`属性' | 
| align | String | | '`flex`的`align-items`属性' | 
| wrap | String | | '`flex`的`flex-wrap`属性' | 
| direction | String | | '`flex`的`flex-direction`属性' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | `flexbox-item`的内容插槽 |



## FlexboxItem API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| span | number | | '占用宽度，如果不设置，所有flexbox-item将平分' | 
| order | String | | '`flex`的`order`属性' | 
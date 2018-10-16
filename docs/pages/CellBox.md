# CellBox 单元组

> `tip` 与`cell`相比，`cell-box`更自由和灵活，只提供`is-link`和`link`属性，内容直接使用默认`slot`定义。 `cell-box`同样只能在`Group`中使用

```handlebars
<template>
  <div class="demo-block">
    <v-group>
      <v-cell title="cell" value="hello" is-link></v-cell>
      <v-cell-box is-link>
        cell-box long long long long long long long
      </v-cell-box>
      <v-cell-box>
        cell-box hello world hello world hello world
      </v-cell-box>
      <v-cell title="cell" value="hello" is-link></v-cell>
    </v-group>
  </div>
</template>

```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| is-link | Boolean | false | '是否为链接，如果是，右侧将会出现指引点击的右箭头' | 
| link | object/String | | '点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式' | 
| border-intent | Boolean | true | '是否显示边框与左边的间隙' | 
| align-items | String | center | 'flex 布局 align-items 设置' | 


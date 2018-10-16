# InlineNumber 内联数字选择器


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <div style="text-align:center;">
      <v-inline-number width="50px"></v-inline-number>
    </div>
    <div style="text-align:center;">
      <v-inline-number width="50px" button-style="round"></v-inline-number>
    </div>
    <v-group>
      <v-cell title="在cell中使用">
        <v-inline-number style="display:block;" :min="0" width="50px" button-style="round"></v-inline-number>
      </v-cell>
    </v-group>
  </div>
</template>

```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | String | 50px | '数字所占据的宽度' | 
| button-style | String | square | '按钮样式，可选['round']' | 
| min | Number | | '最小值' | 
| max | Number | | '最大值' | 

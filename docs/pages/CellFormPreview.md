# CellFormPreview 预览单元表单

> `CellFormPreview` 需要在 `Group` 组件中使用。

```handlebars
<template>
  <div class="demo-block">
    <v-group>
      <v-cell title="合计" value="￥1024"></v-cell>
      <v-cell-form-preview :list="list"></v-cell-form-preview>
    </v-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    }
  }
}
</script>

```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| list | Array | | '内容列表，键值包括label和value，可缺值' | 
| border-intent | Boolean | true | '是否显示边框与左边的间隙' | 

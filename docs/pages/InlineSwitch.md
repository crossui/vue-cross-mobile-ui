# InlineSwitch 内联开关


```handlebars
<template>
  <div class="demo-block">
    <div style=" text-align:center;margin-top:15px; ">
      <v-inline-switch v-model="value "></v-inline-switch>
    </div>
    <v-group>
      <v-switch title="switch " v-model="value "></v-switch>
    </v-group>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| disabled | Boolean | false | '是否不可点击' | 
| value | Boolean | false | '表单值, 使用v-model绑定' | 
| value-map | Array | [false, true] | '用于自定义 false 和 true 映射的实际值，用于方便处理比如接口返回了 0 1 这类非 boolean 值的情况' | 

### slots
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | 值变化时触发，参数为 (currentValue) |
# CheckIcon 复选框图标


```handlebars
<template>
  <div class="demo-block padding-20">
    <div style="padding:15px;">
      <v-check-icon :value.sync="demo1"> 同意不？ ({{ demo1 }})</v-check-icon>
      <br>
      <br>
      <v-check-icon :value.sync="demo2" type="plain"> 同意不？ ({{ demo2 }})</v-check-icon>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      demo1: false,
      demo2: true
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Boolean | false | '是否选中，使用 :value.sync 双向绑定' | 
| type | String | unknown | 'check icon 样式，可选值为['plain']' | 

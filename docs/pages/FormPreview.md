# FormPreview 表单预览


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></v-form-preview>
    <br>
    <v-form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons2" name="demo"></v-form-preview>
    <br>
    <v-form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list"></v-form-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: '跳转到首页',
        link: '/'
      }],
      buttons2: [{
        style: 'primary',
        text: '点击事件',
        onButtonClick: (name) => {
          console.info(`clicking ${name}`)
        }
      }]
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| header-label | String | | '头部标题' | 
| header-value | String | | '头部内容' | 
| body-items | Array | [] | '主体内容列表， `[{label:'label',value:'value'}]`' | 
| footer-buttons | Array | [] | '底部按钮列表，`default` 为灰色样式，`primary` 文字为高亮颜色， `[{style: "primary", text: "text", onButtonClick: fn(prop:name), link: "/path"}]`' | 

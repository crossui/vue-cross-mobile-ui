# Qrcode 二维码


```handlebars
<template>
  <div class="demo-block padding-20" style="text-align: center">
    <v-divider>'默认类型为 img，可以在微信里长按识别'</v-divider>
    <v-qrcode value="https://gitee.com" type="img"></v-qrcode>
    <br>
    <br>
    <v-divider>'类型为 canvas'</v-divider>
    <v-qrcode value="https://github.com"></v-qrcode>
    <br>
    <v-qrcode :value="value" :fg-color="fgColor"></v-qrcode>
    <br>
    <span>当前url: {{value}}</span>
    <br>
    <span>当前颜色: {{fgColor}}</span>
  </div>
</template>
<script>
export default {
  mounted() {
    setInterval(() => {
      this.value = `https://github.com?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 1000)
  },
  data() {
    return {
      value: 'https://github.com',
      fgColor: '#000000'
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | String | | '编码内容，如果为链接，请保证有http(s)协议名' | 
| size | Number | 80 | '尺寸大小' | 
| bg-color | String | #FFFFFF | '背景颜色' | 
| fg-color | String | #000000 | '二维码着色' | 
| type | String | img | '渲染类型，可以为`img`(适合需要在微信需要长按识别的场景)和`canvas`' | 

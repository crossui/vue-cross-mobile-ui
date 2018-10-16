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
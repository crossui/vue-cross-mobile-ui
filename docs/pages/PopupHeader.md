# PopupHeader 下拉选择面板


```handlebars
<template>
  <div class="demo-block">
    <v-popup-header left-text="取消" right-text="确定" title="请选择银行卡"></v-popup-header>
    <v-group>
      <v-switch v-model="show1" title="Popup 中使用"></v-switch>
    </v-group>
    <div v-transfer-dom>
      <v-popup v-model="show1">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <v-popup-header left-text="取消" right-text="确定" title="请选择银行卡" :show-bottom-border="false" @on-click-left="show1 = false" @on-click-right="show1 = false"></v-popup-header>
        <v-group gutter="0">
          <v-radio :options="['招商银行', '工商银行', '农业银行', '增加银行卡']"></v-radio>
        </v-group>
      </v-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| left-text | String | | '左侧文字' | 
| right-text | String | | '右侧文字' | 
| title | String | | '标题' | 
| show-bottom-border | Boolean | | '是否显示底部边框' | 

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-click-left |  | 左侧文字点击时触发 |
| @on-click-right |  | 右侧文字点击时触发 |

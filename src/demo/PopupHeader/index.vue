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
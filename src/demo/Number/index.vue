<template>
  <div class="demo-block padding-tb-20">
    <v-group title="默认">
      <v-number name="数量" title="数量"></v-number>
    </v-group>

    <v-group title="监听 on-change 事件，在调试窗口中输出">
      <v-number title="数量" v-model="changeValue" :min="0" @on-change="change"></v-number>
    </v-group>

    <v-group title="设置宽度为100px">
      <v-number title="数量" width="100px"></v-number>
    </v-group>

    <v-group title="圆形按钮">
      <v-number title="数量" v-model="roundValue" button-style="round" :min="0" :max="5"></v-number>
    </v-group>

    <v-group title="设置步长为0.5">
      <v-number title="数量" :step="0.5"></v-number>
    </v-group>

    <v-group title="设置值为1，最小值为-5，最大值为8">
      <v-number title="数量" :min="-5" :max="8" :value="1"></v-number>
    </v-group>

    <v-group title="设置可以输入">
      <v-number :value="10" title="数量" fillable></v-number>
    </v-group>

  </div>
</template>
<script>
export default {
  data() {
    return {
      changeValue: 0,
      roundValue: 0
    }
  },
  methods: {
    change(val) {
      console.log('change', val)
    }
  }
}
</script>
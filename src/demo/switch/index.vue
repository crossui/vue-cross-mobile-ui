<template>
  <div class="demo-block">
    <v-group title="值转换 map">
      <v-switch title="默认 true" :value-map="['0', '1']" v-model="stringValue"></v-switch>
      <v-cell title="value" :value="typeof stringValue + ' ' + stringValue"></v-cell>
    </v-group>
    <v-group title="基本用法">
      <v-switch title="默认 false"></v-switch>
      <v-switch title="默认 true" :inline-desc="value1 + ''" v-model="value1"></v-switch>
    </v-group>
    <v-group title="禁用">
      <v-switch title="默认 false" disabled></v-switch>
      <v-switch title="默认 true" :value="true" disabled></v-switch>
    </v-group>
    <v-group title="prevent default">
      <v-switch title="默认 false" prevent-default v-model="value2" @on-click="onClick"></v-switch>
    </v-group>
    <v-group title="使用html设置title">
      <v-switch :title="htmlTitle"></v-switch>
    </v-group>
  </div>
</template>
<script>
export default {
  methods: {
    onClick(newVal, oldVal) {
      console.log(newVal, oldVal)
      this.$vcu.loading.show({
        text: 'in processing'
      })
      setTimeout(() => {
        this.$vcu.loading.hide()
        this.value2 = newVal
      }, 1000)
    }
  },
  data() {
    return {
      value1: true,
      value2: false,
      stringValue: '0',
      htmlTitle: '<span style=" color:red ">我是红色</span>'
    }
  }
}
</script>
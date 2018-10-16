# Switch 开关

> `switch`只能在`Group`中使用

```handlebars
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
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | | 'label文字' | 
| disabled | Boolean | false | '是否不可点击' | 
| value | Boolean | false | '表单值, 使用v-model绑定' | 
| inline-desc | String | | '标签下文字' | 
| prevent-default | Boolean | | '阻止点击时自动设定值' | 
| value-map | Array | [false, true] | '用于自定义 false 和 true 映射的实际值，用于方便处理比如接口返回了 0 1 这类非 boolean 值的情况' | 

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | 值变化时触发，参数为 (currentValue) |
| @on-click | (newVal, oldVal) | 点击组件时触发 |


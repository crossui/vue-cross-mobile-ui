# Radio 单选框

> `radio`只能在`Group`中使用

```handlebars
<template>
  <div class="demo-block">
    <v-group title="default">
      <v-radio :options="radio001" @on-change="change"></v-radio>
    </v-group>

    <v-group title="默认值 China(禁用操作)">
      <v-radio :options="radio001" value="China" disabled></v-radio>
    </v-group>

    <v-group :title="'fill mode value is '+radio001Value">
      <v-radio :selected-label-style="{color: '#FF9900'}" fill-mode :options="radio001" v-model="radio001Value" @on-change="change"></v-radio>
    </v-group>

    <v-group title="fill mode with custom placeholder and label">
      <v-radio fill-mode fill-label="Other" fill-placeholder="填写其他的哦" :options="radio001" @on-change="change"></v-radio>
    </v-group>

    <v-group title="object options">
      <v-radio fill-mode fill-label="Other" fill-placeholder="other" :options="radio003" @on-change="change"></v-radio>
    </v-group>

    <v-group title="slot:each-item">
      <v-radio :options="radio001">
        <template slot-scope="props" slot="each-item">
          <p>
            V{{ props.index + 1 }} <img src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" class="vcu-radio-icon"> {{ props.label }}
          </p>
        </template>
      </v-radio>
    </v-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio001: ['China', 'Japan'],
      radio001Value: 'China',
      radio002Value: 'Japan',
      radio003: [{
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '001',
        value: 'radio001'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '002',
        value: 'radio002'
      }]
    }
  },
  methods: {
    change(value, label) {
      console.log('change:', value, label)
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | String | | '表单值，使用v-model绑定' | 
| options | Array | | '可选列表，可以用字符串组成的数组或者 `key=>value` 的形式' | 
| fill-mode | Boolean | false | '是否可填写' | 
| fill-placeholder | String | | '可填写时的提示文字' | 
| fill-label | String | | '可填写时的label文字' | 
| disabled | Boolean | | '禁用操作' | 
| selected-label-style | Object | | '设置选中时的 label 样式，比如使用其他颜色更容易区分是否为选中项' | 

### slots
| 名字 | 说明 |
| --- | --- |
| each-item | 自定义如何显示每一项 |

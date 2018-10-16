# DatetimeRange 日期时间范围

> 该组件和 `Datetime` 组件不同的地方是年月日集中显示在一栏，适合范围不大的日期选择。 需要在`Group`组件里使用

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group :title="value[0] + ' ' + value[1] + ':' + value[2]">
      <v-datetime-range title="选择" start-date="2017-01-01" end-date="2017-02-02" format="YYYY年MM月DD日" v-model="value" @on-change="onChange"></v-datetime-range>
    </v-group>
  </div>
</template>
<script>

export default {
  methods: {
    onChange(val) {
      console.log('change', val)
    }
  },
  data() {
    return {
      value: ['2017-01-15', '03', '05']
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | | '标题文字' | 
| value | String | | '表单值，v-model绑定。比如，['2017-01-15', '03', '05']' | 
| inline-desc | String | false | '描述字符' | 
| placeholder | String | | '提示文字，当value为空时显示' | 
| start-date | String | | '限定最小日期，注意该限制只能限定到日期，不能限定到小时分钟' | 
| end-date | String | | '限定最大日期，注意该限制只能限定到日期，不能限定到小时分钟' | 
| format | String | YYYY-MM-DD | '日期栏的显示格式' | 

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | 表单值变化时触发, 参数 (newVal) |
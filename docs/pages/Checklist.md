# Checklist 复选框列表

> `max=1`即为单选模式，不会要求先取消上一个选中的才能选中下一个值。

```handlebars
<template>
  <div class="demo-block">
    <v-checklist title="基本使用" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></v-checklist>
    <div style="padding:15px;">
      <v-button @click.native="labelPosition = labelPosition === 'left' ? '' : 'left'" type="primary"> 切换 label 位置 </v-button>
      <v-button @click.native="selectFirst" type="primary"> 选择第1个值 </v-button>
      <v-button @click.native="selectFirstTwo" type="primary"> 选择前两个值 </v-button>
      <v-button @click.native="selectLeft" type="primary"> 选择剩下值 </v-button>
    </div>

    <v-checklist title="默认选中 China 和 Japan (禁用操作)" disabled label-position="left" :options="commonList" v-model="checklist002" @on-change="change"></v-checklist>

    <v-checklist title="最多可选中2个" :options="commonList" v-model="checklist003" :max=2 @on-change="change"></v-checklist>

    <v-checklist title="max=1（单选模式）" :options="commonList" v-model="radioValue" :max="1" @on-change="change"></v-checklist>

    <v-checklist title="打乱选项顺序" random-order :options="checklist005" v-model="checklist005Value" @on-change="change"></v-checklist>

    <v-checklist ref="demoObject" title="使用 Object 类型的选项列表，key 必须为字符串" :options="objectList" v-model="objectListValue" @on-change="change"></v-checklist>
    <v-group>
      <v-cell-box>{{ fullValues }}</v-cell-box>
    </v-group>
    <div style="padding:15px;">
      <v-button type="primary" @click.native="fullValues = $refs.demoObject.getFullValue()">getFullValue()</v-button>
    </div>

    <v-checklist title="包含 inlineDesc 属性的 Object 类型选项列表" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></v-checklist>

    <v-checklist title="异步选项列表" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></v-checklist>

    <v-divider> 相关 </v-divider>
    <v-group title="参见">
      <v-cell title="Checker" is-link link="/Form/checker"></v-cell>
    </v-group>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  mounted() {
    setTimeout(() => {
      this.asyncList = ['A', 'B', 'C', 'D']
    }, 3000)
  },
  methods: {
    change(val, label) {
      console.log('change', val, label)
    },
    selectFirst() {
      this.checklist001 = ['China']
    },
    selectFirstTwo() {
      this.checklist001 = ['China', 'Japan']
    },
    selectLeft() {
      const left = _.without.apply(_, [this.commonList].concat(this.checklist001))
      this.checklist001 = left
    }
  },
  data() {
    return {
      fullValues: [],
      labelPosition: '',
      error: '',
      commonList: ['China', 'Japan', 'America'],
      checklist001: [],
      checklist0011: [],
      checklist002: ['China', 'Japan'],
      checklist003: ['China', 'Japan'],
      checklist005: ['01', '02', '03'],
      checklist005Value: [],
      objectList: [{ key: '1', value: '001 value' }, { key: '2', value: '002 value' }, { key: '3', value: '003 value' }],
      objectListValue: ['1', '2'],
      inlineDescList: [
        { key: '1', value: 'Tiger is good', inlineDesc: 'Tiger is the king of mountain' },
        { key: '2', value: 'Lion is better', inlineDesc: 'Lion is the king of woods' },
        { key: '3', value: 'Camel is best, no inline-desc' }
      ],
      inlineDescListValue: [1],
      asyncList: [],
      asyncListValue: [],
      radioValue: ['China']
    }
  }
}
</script>

<style scoped>
.error {
  padding-left: 15px;
  line-height: 28px;
  color: #888;
  font-size: 12px;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Array | | '表单值' | 
| title | String | | '标题' | 
| required | Boolean | false | '是否为必选' | 
| options | Array | [] | '选项列表，可以为[{key:'name',value:'value',inlineDesc:'inlineDesc'}]的形式' | 
| max | Number | | '最多可选个数' | 
| min | Number | | '最少可选个数' | 
| random-order | Boolean | false | '是否随机打乱选项顺序' | 
| check-disabled | Boolean | true | '是否进行可选检测，默认情况下当选择个数等于可选个数(max)时，其他项不可选择。该选项主要适用于从多个选项列表中收集值的场景。注意的该选项设为 false 时 max 设置将失效。' | 
| label-position | String | right | 'label 位置，可以设置为 left 或者 right' | 
| disabled | String | | '是否禁用操作' | 



### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value, label) | 值变化时触发，参数为 (value, label) |


### Method 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| getFullValue || 获取值和对应的显示文字 |
# PopupPicker 选择器弹出


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group title="single column" label-width="5em">
      <v-popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></v-popup-picker>
      <v-popup-picker popup-title="请选择" :title="title1" :data="list1" v-model="value1_1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择">
        <template slot="title" slot-scope="props">
          <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span style="vertical-align:middle;">手机</span>
          </span>
        </template>
      </v-popup-picker>
      <v-datetime title="datetime" v-model="date"></v-datetime>
    </v-group>
    <br>
    <div class="picker-buttons">
      <v-button type="primary" @click.native="value1=[]">将值置为空</v-button>
      <v-button type="primary" @click.native="changeList10">重新赋值列表</v-button>
      <v-button type="primary" @click.native="changeList11">push方式更改列表</v-button>
    </div>
    <v-group title="double columns">
      <v-popup-picker :title="title2" :data="list2" v-model="value2"></v-popup-picker>
    </v-group>
    <br>

    <v-group title="chained columns">
      <v-popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" ref="picker3"></v-popup-picker>
      <v-cell title="获取值对应的文字" :value="$refs.picker3&&$refs.picker3.getNameValues()"></v-cell>
      <v-popup-picker :title="title4" :data="list3" :columns="3" v-model="value4" show-name></v-popup-picker>
    </v-group>

    <br>
    <div class="picker-buttons">
      <v-button type="primary" @click.native="changeList21">push方式更改列表</v-button>
    </div>

    <br>
    <v-divider>Control the visibility of v-popup-picker</v-divider>
    <div style="margin: 0 15px;">
      <v-button @click.native="showPopupPicker = true" type="primary">Show PopupPicker. value: {{value5 }}</v-button>
    </div>
    <v-group>
      <v-popup-picker :show.sync="showPopupPicker" :show-v-cell="false" title="TEST" :data="[['1', '2', '3', '4', '5']]" v-model="value5"></v-popup-picker>
    </v-group>

    <br>
    <v-group title="隐藏时不影响其他v-popup-picker的mask">
      <v-switch title="ishide v-popup-picker" v-model="switch6"></v-switch>
      <v-popup-picker v-if="!switch6" title="显示值" :data="['我不会影响遮罩层'.split('')]" v-model="value6"></v-popup-picker>
    </v-group>

    <br>
    <br>

    <v-group title="显示格式化">
      <v-popup-picker title="时间" :inline-desc="`当前值[${formatDemoValue}]`" v-model="formatDemoValue" :data="[['01','02','03'],['11','12','13']]" :display-format="format"></v-popup-picker>
    </v-group>

  </div>
</template>
<script>
export default {
  methods: {
    onChange(val) {
      console.log('val change', val)
    },
    changeList10() {
      this.list1 = [['小米1', 'iPhone1', '华为1', '情怀1', '三星1', '其他1', '不告诉你1']]
    },
    changeList11() {
      this.list1[0].push('我是push条目')
    },
    changeList20() {

    },
    changeList21() {
      this.list3.push({
        name: '美国002_007',
        value: '0007',
        parent: 'usa002'
      })
    },
    onShow() {
      console.log('on show')
    },
    onHide(type) {
      console.log('on hide', type)
    }
  },
  data() {
    return {
      date: '',
      title1: '手机机型',
      title2: '详细机型',
      title3: '联动显示值',
      title4: '联动显示文字',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
      list3: [{
        name: '中国',
        value: 'china',
        parent: 0
      }, {
        name: '美国',
        value: 'USA',
        parent: 0
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: 'china002'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: 'china002'
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
      }],
      value1: ['iPhone'],
      value1_1: ['iPhone'],
      value2: ['iPhone', '华为3'],
      value3: [],
      value4: [],
      showPopupPicker: false,
      value5: ['2'],
      switch6: false,
      value6: [],
      formatDemoValue: ['01', '12'],
      format: function (value, name) {
        return `${value[0]}:${value[1]}`
      }
    }
  }
}
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Array | | '表单值，使用v-model绑定' | 
| title | String | | '标题' | 
| cancel-text | String | | '弹窗的取消文字' | 
| confirm-text | String | | '弹窗的确认文字' | 
| placeholder | String | | '提示文字' | 
| show-name | Boolean | false | '是否显示文字值而不是key' | 
| inline-desc | String | | 'Cell的描述文字' | 
| show | Boolean | | '显示 (支持.sync修饰 next)' | 
| value-text-align | String | right | 'value 对齐方式(text-align)' | 
| display-format | String | | '自定义在cell上的显示格式，参数为当前 value，使用该属性时，show-name 属性将失效' | 
| popup-style | String | | '弹窗样式，可以用于强制指定 `z-index`' | 
| popup-title | String | | '弹窗标题' | 
| disabled | Boolean | false | '是否禁用选择' | 

### slots
| 名字 | 说明 |
| --- | --- |
| title | 标题插槽，使用 scope.labelClass 和 scope.labelStyle 继承原有样式(实现样式受控于 group label 设置) |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | 值变化时触发 |
| @on-show |  | 弹窗出现时触发 |
| @on-hide | (closeType) true表示confirm(选择确认), false表示其他情况的关闭 | 弹窗关闭时触发 |
| @on-shadow-change | (Array ids, Array names) | picker 值变化时触发，即滑动 picker 时触发	 |

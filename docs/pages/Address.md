# Address 地址

> `Address` 只能在 `Group` 中使用。但是你依然可以不在 `Group` 中使用，使用 `display:none` 隐藏然后用 `:show.sync` 来控制组件显示状态

> 需要单独引入地址数据

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></v-address>
      <v-cell title="上面value值" :value="value"></v-cell>
    </v-group>
  </div>
</template>
<script>
import ChinaAddressV4Data from '../../datas/china_address_v4.json';
export default {
  data() {
    return {
      title: '默认为空',
      value_0_1: [],
      value: [],
      title2: '设置值',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区'],
      showAddress: false
    }
  },
  methods: {
    doShowAddress() {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange(ids, names) {
      console.log(ids, names)
    },
    changeData() {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels() {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2() {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide(str) {
      console.log('on-hide', str)
    },
    logShow(str) {
      console.log('on-show')
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| raw-value | Boolean | false | '指定初始化时绑定的数据是否为文本(即省市名，而不是id)类型，即对于非id值组件内部会转换为id。如果是异步设置value，只能使用id赋值。' | 
| title | String | | '表单标题' | 
| value | Boolean | false | '表单值, 使用v-model绑定' | 
| list | Number/String | | '地址列表, 可以引入内置地址数据或者用自己的数据，但是需要按照一致的数据结构' | 
| inline-desc | String | | '标题下的描述' |  
| placeholder | String | | '没有值时的提示文字' |  
| hide-district | Boolean | false | '是否隐藏区，即只显示省份和城市' |  
| value-text-align | String | right | 'value 对齐方式(text-align)' |  
| popup-style | Object | | '弹窗样式，可以用于强制指定 `z-index`' |  
| show | Boolean | | '显示 (支持`.sync`修饰 `next`)' | 
| disabled | Boolean | | '是否禁用选择' | 

### slots
| 名字 | 说明 |
| --- | --- |
| title | title 插槽，可以使用它来添加 icon 等自定义样式，受控于 group 需要从 scope 里继承 class 和 样式 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-hide |  | 关闭后触发，当非确定时，参数为false，反之为true |
| @on-show |  | 显示时触发 |
| @on-shadow-change | (Array ids, Array names) | picker 值变化时触发，即滑动 picker 时触发 |


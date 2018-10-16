# Search 搜索


```handlebars
<template>
  <div class="demo-block">
    <v-search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></v-search>
    <v-group>
      <v-cell title="keyword">{{ value }}</v-cell>
    </v-group>

    <div style="padding:15px;">
      <v-button @click.native="setFocus" type="primary">set focus</v-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    setFocus() {
      this.$refs.search.setFocus()
    },
    resultClick(item) {
      console.info('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit() {
      this.$refs.search.setBlur()
      this.$vcu.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    }
  },
  data() {
    return {
      results: [],
      value: 'test'
    }
  }
}

function getResult(val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| placeholder | String | 搜索 | '提示文字' | 
| cancel-text | String | 取消 | '取消文字' | 
| value | String | | '表单值，v-model绑定' | 
| results | Array | | '指定搜索结果, 为带有 title key 的对象组成的数组，如 [{title: 'hello', otherData: otherValue}], auto-fixed 为 false 时不会显示结果' | 
| auto-fixed | Boolean | true | '是否自动固定在顶端' | 
| top | String | 0px | '自动固定时距离顶部的距离' | 
| position | String | fixed | '自动固定时的定位，一些布局下可能需要使用其他定位，比如absolute' | 
| auto-scroll-to-top | Boolean | false | 'Safari下弹出键盘时可能会出现看不到input，需要手动滚动，启用该属性会在fix时滚动到顶端' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 搜索结果列表上面 slot，可以用来自定义搜索结果显示区域(results 设为空) |
| right | 输入框右侧 slot |
| left | 输入框左侧 slot |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-submit | (value) | 表单提交时触发 |
| @on-cancel |  | 点击`取消`按钮时触发 |
| @on-change | (value) | 输入文字变化时触发 |
| @on-result-click | (item) | 点击结果条目时触发，原来的`result-click`事件不符合规范已经废弃 |
| @on-focus |  | 输入框获取到焦点时触发 |
| @on-blur |  | 输入框失去焦点时触发 |
| @on-clear |  | 点击清除按钮时触发 |


### Method 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| setFocus |  | 获取 input 焦点，在 Safari 上你必须在 click 事件回调里使用才能生效 |
| setBlur |  | 手动设置 input 失去焦点，一般用于在 on-submit 事件中实现隐藏手机键盘 |
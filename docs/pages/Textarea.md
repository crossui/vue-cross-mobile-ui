# Textarea 文本框

> `Textarea`只能在`Group`中使用

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-textarea :max="20" placeholder="提示" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></v-textarea>
    </v-group>
    <v-group title="和input一起使用">
      <v-input placeholder="标题"></v-input>
      <v-textarea :max="200" name="description" placeholder="提示"></v-textarea>
    </v-group>
    <v-group title="不显示计数器">
      <v-textarea :max="200" name="detail" placeholder="提示" :show-counter="false"></v-textarea>
    </v-group>
    <v-group title="自动高度">
      <v-textarea placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></v-textarea>
      <v-textarea title="标题" placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></v-textarea>
    </v-group>
    <v-group title="设置高度为200像素">
      <v-textarea title="标题" :max="200" placeholder="提示" :show-counter="false" :height="200" :rows="8" :cols="30"></v-textarea>
    </v-group>
  </div>
</template>
<script>

export default {
  methods: {
    onEvent(event) {
      console.log('on', event)
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | | 'label文字' | 
| inline-desc | String | | '位于标题下的描述文字' | 
| show-counter | Boolean | true | '是否显示计数' | 
| max | Number | 0 | '最大长度限制' | 
| value | String | | '表单值, 使用v-model绑定' | 
| name | String | | '表单名字' | 
| placeholder | String | | '没有值时的提示文字' | 
| rows | Number | 3 | 'textarea 标准属性 rows' | 
| cols | Number | 30 | 'textarea 标签属性 cols' | 
| height | Number | 0 | '高度' | 
| readonly | Boolean | false | 'textarea 标签属性 readonly' | 
| disabled | Boolean | false | 'textarea 标签属性 disabled' | 
| autosize | Boolean | false | '是否根据内容自动设置高度' | 

### slots
| 名字 | 说明 |
| --- | --- |
| label | 用于自定义`label`(即 `title`)部分内容，比如使用`icon` |
| restricted-label | 用于自定义`label`部分，和`slot=label`不同的是，该slot宽度受到父组件`group`的限制 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | 表单值变化时触发 |
| @on-focus |  | focus 事件 |
| @on-blur |  | blur 事件 |


### Method 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| updateAutosize |  | 重置 autosize 高度，如果绑定值不为空，需要调用该函数进行高度重置 |
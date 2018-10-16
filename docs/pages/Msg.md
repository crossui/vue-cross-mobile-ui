# Msg 成功(失败)页面

> `prop:buttons` 列表是 `slot:buttons` 插槽的默认显示内容，如果 `prop:buttons` 无法满足需求，可以使用 `slot:buttons` 引入 `v-button` 组件。

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-msg title="操作成功" :description="description" :buttons="buttons" :icon="icon"></v-msg>
  </div>
</template>
<script>
export default {
  methods: {
    changeIcon() {
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'time'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'roundcheckfill'
      }
    }
  },
  data() {
    return {
      description: '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>',
      icon: '',
      buttons: [{
        type: 'primary',
        text: 'Primary button',
        onClick: this.changeIcon.bind(this)
      }, {
        type: 'default',
        text: 'Secondary button',
        link: '/'
      }]
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | | '操作状态提示文字' | 
| description | String | | '描述文字' | 
| icon | String | success | '图标类型，可选值有 success, warn, info, waiting' | 
| buttons | Array | | '操作按钮列表，一个按钮对象包含`text`, `type`(和`v-button`组件type一致), `link`, `onClick`' | 

### slots
| 名字 | 说明 |
| --- | --- |
| buttons | 自定义按钮区域元素 |
| description | 自定义描述文字内容 |

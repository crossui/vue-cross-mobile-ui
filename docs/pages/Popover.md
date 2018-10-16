# Popover tips提示窗

> 使用 `<v-icon></v-icon>` 标签声明组件，指定图标对应的 type 属性. 例如： `<v-icon type=""check></v-icon>`

```handlebars
<template>
  <div class="demo-block padding-20" style="text-align:center;">
    <v-popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>上方出现</v-button>
    </v-popover>

    <v-popover placement="bottom" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>下方出现</v-button>
    </v-popover>

    <v-popover placement="left" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>左边出现</v-button>
    </v-popover>

    <v-popover placement="right" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>右边出现</v-button>
    </v-popover>

    <div style="position:fixed;bottom:50px;text-align:center;width:100%;">
      <p>fixed element</p>
      <v-popover placement="right" style="margin: 20px;">
        <div slot="content" class="popover-demo-content">
          hello world
        </div>
        <v-button mini>右边出现</v-button>
      </v-popover>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    onShow() {
      console.log('on show')
    },
    onHide() {
      console.log('on hide')
    }
  }
}
</script>
<style scoped>
.popover-demo-content {
  padding: 5px 10px;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | String | | '弹出窗口内容' | 
| placement | String | | '弹出窗口位置' | 
| gutter | Number | 5 | '箭头和触发元素之间的距离' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 触发元素 |
| content | 弹窗内容 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-show |  | 弹窗显示时触发 |
| @on-hide |  | 弹窗隐藏时触发 |

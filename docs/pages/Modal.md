# Modal 提示窗


```handlebars
<template>
  <div class="demo-block padding-20">
    <v-button @click.native="openModal">打开 Modal</v-button>
    <v-button @click.native="openModalPlugin">插件形式打开 Modal</v-button>
    <v-button @click.native="openAlert">打开 Alert</v-button>
    <v-button @click.native="openAlertPlugin">插件形式打开 Alert</v-button>
    <v-button @click.native="openConfirm">打开 Confirm</v-button>
    <v-button @click.native="openConfirmPlugin">插件形式打开 Confirm</v-button>
    <v-button @click.native="openPrompt">打开 Prompt</v-button>
    <v-button @click.native="openPromptPlugin">插件形式打开 Prompt</v-button>

    <div v-transfer-dom>
      <v-modal title="标题" v-model="modal">
        <span>这里是内容区域，点击关闭按钮</span>
      </v-modal>
    </div>
    <div v-transfer-dom>
      <v-alert title="标题" v-model="alert" msg="这是一个ALERT弹出窗"></v-alert>
    </div>
    <div v-transfer-dom>
      <v-confirm title="标题" v-model="confirm" msg="这是一个CONFIRM弹出窗"></v-confirm>
    </div>
    <div v-transfer-dom>
      <v-prompt title="标题" @sure="handlerSure" v-model="prompt" msg="请输入你的姓名"></v-prompt>
    </div>

    <br />
    <br />

    <v-divider> 不同类型的alert </v-divider>

    <v-button @click.native="showAlert('info')">Alert info</v-button>
    <v-button @click.native="showAlert('success')">Alert success</v-button>
    <v-button @click.native="showAlert('warning')">Alert warning</v-button>
    <v-button @click.native="showAlert('error')">Alert error</v-button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      alert: false,
      confirm: false,
      prompt: false
    }
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    openAlert() {
      this.alert = true;
    },
    openModalPlugin() {
      this.$vcu.modal.show({
        title: "标题",
        msg: '插件形式打开 Modal'
      })
      setTimeout(() => {
        this.$vcu.modal.hide()
      }, 3000)
    },
    openAlertPlugin() {
      this.$vcu.alert.show({
        title: "标题",
        msg: '插件形式打开 alert'
      })
    },
    showAlert(type) {
      this.$vcu.alert.show({
        title: "标题",
        msg: !type ? '这是内容' : type === 'info' ? '这是普通信息' : type === 'success' ? '成功啦！' : type === 'warning' ? '这是提醒！' : '出错啦！',
        type: type
      })
    },
    openConfirm() {
      this.confirm = true;
    },
    openConfirmPlugin() {
      this.$vcu.confirm.show({
        title: "标题",
        msg: '你确定？'
      })
    },
    openPrompt() {
      this.prompt = true
    },
    handlerSure(input) {
      if (input) {
        this.$vcu.alert.show({
          title: '信息',
          msg: '你输入的是：' + input,
        })
      } else {
        this.$vcu.alert.show({
          title: '信息',
          msg: '你输入的是空的',
        })
      }
    },
    openPromptPlugin() {
      this.$vcu.prompt.show({
        msg: '你的年龄？',
        onSure: this.handlerSure
      })
    }
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Boolean | false | '是否显示, 使用 v-model 绑定变量' | 
| title | String | | '弹窗标题' | 
| msg | String | | '提示内容，作为 slot:default 的默认内容，如果使用 slot:default, 将会失效' | 
| clickOverlayClose | Boolean | false | '点击遮盖层是否关闭' | 
| hideClose | Boolean | false | '是否隐藏关闭按钮' | 
| maskZIndex | String/Number | | '遮盖层层级' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 默认， 分配modal 内容 |
| footer | 分配modal底部，一般用来自定义按钮 |



## alert
| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| value | 是否显示 | Boolean  | true / false | false |
| title | 标题文字 | String | | |
| msg | 内容文字 | String  | | |
| type | icon 类型 | String | 'info', 'success', 'warning', 'error' |  |
| onSure | 点击确定按钮后的回调， @sure 事件监听 | Function | | |


## confirm
| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| value | 是否显示 | Boolean  | true / false | false |
| title | 标题文字 | String | | |
| msg | 内容文字 | String  | | |
| showIcon | 是否显示 icon | Boolean  | true / false | false |
| onSure | 点击确定按钮后的回调， 也可以@sure 事件监听 | Function | | |
| onCancel | 点击取消按钮后的回调，也可以@cancel 事件监听 | Function | | |

## prompt
| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean  | true / false | false |
| title | 标题文字 | String | | |
| msg | 内容文字 | String  | | |
| onSure | 点击确定按钮后的回调， 也可以@sure 事件监听 | Function | | |


### 插件形式

```jsx
this.$vcu.xxx.show()
this.$vcu.xxx.hide()
this.$vcu.xxx.isVisible
```
# Toast 提示窗

> 以插件形式调用时，和template中使用不同，属性名请使用小驼峰式，比如isShowMask而不是`is-show-mask`。

```handlebars
<template>
  <div class="demo-block">
    <div style="padding:15px;">
      <v-button @click.native="showPosition('top')" type="primary">Top</v-button>
      <v-button @click.native="showPosition('middle')" type="primary">Middle</v-button>
      <v-button @click.native="showPosition('bottom')" type="primary">Bottom</v-button>
      <v-button @click.native="showPosition('')" type="primary">Default</v-button>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">基本使用</v-toast>
    </div>
    <v-group>
      <v-switch title="基本使用" v-model="show1"></v-switch>
      <v-switch title="type为text" v-model="show2"></v-switch>
      <v-switch title="type为cancel" v-model="show3"></v-switch>
      <v-switch title="type为warn" v-model="show4"></v-switch>
      <v-switch title="显示时间1s" v-model="show5"></v-switch>
      <v-switch title="很长的文字" v-model="show6"></v-switch>
    </v-group>
    <div v-transfer-dom>
      <v-toast v-model="show1" @on-hide="onHide">基本使用</v-toast>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="show2" type="text">成功啦</v-toast>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="show3" type="cancel">type为cancel</v-toast>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="show4" type="warn">type为警告</v-toast>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="show5" :time="1000">显示时间1s</v-toast>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="show6" type="text" width="20em">Talk is cheap, show me the code.</v-toast>
    </div>
    <v-group title="设置text">
      <v-switch title="type为success" v-model="show7"></v-switch>
      <v-switch title="type为text" v-model="show8"></v-switch>
    </v-group>
    <div v-transfer-dom>
      <v-toast v-model="show7" text="Hello World"></v-toast>
    </div>
    <div v-transfer-dom>
      <v-toast v-model="show8" type="text" text="Hello World"></v-toast>
    </div>

    <v-group title="插件形式调用">
      <v-switch title="default" v-model="show9" @on-change="onChange"></v-switch>
    </v-group>
    <div style="padding:15px;">
      <v-button type="primary" @click.native="$vcu.toast.text('How are you~', 'top')">use text function</v-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showPosition(position) {
      this.position = position
      this.showPositionValue = true
    },
    onHide() {
      console.log('on hide')
    },
    onChange(val) {
      const _this = this
      if (val) {
        this.$vcu.toast.show({
          text: 'Hello World',
          onShow() {
            console.log('Plugin: I\'m showing')
          },
          onHide() {
            console.log('Plugin: I\'m hiding')
            _this.show9 = false
          }
        })
      } else {
        this.$vcu.toast.hide()
      }
    }
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      position: 'default',
      showPositionValue: false
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log(this.$vcu.toast.isVisible())
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | Boolean | false | '是否显示, 使用 v-model 绑定' | 
| time | Number | 2000 | '显示时间' | 
| type | String | success | '类型，可选值 success, warn, cancel, text' | 
| width | String | 7.6em | '宽度' | 
| is-show-mask | Boolean | false | '是否显示遮罩，如果显示，用户将不能点击页面上其他元素' | 
| text | String | | '提示内容，支持 html，和默认slot同样功能' | 
| position | String | default | '显示位置，可选值 default, top, middle, bottom' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 默认slot, 提示内容 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-show |  | 提示弹出时触发 |
| @on-hide |  | 提示隐藏时触发 |

# Input 输入框

> `Input`只能在`Group`中使用

> 如果你想实现在输入框右边按钮切换密码明文，请使用slot=right实现type切换。 

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group title="禁用内置验证及显示成功或者错误样式">
      <v-input title="禁用验证" placeholder="I'm placeholder" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right"></v-input>
    </v-group>
    <div style="padding:15px;">
      <v-button @click.native="iconType = 'success'" type="primary"> set success</v-button>
      <v-button @click.native="iconType = 'error'" type="primary"> set error</v-button>
      <v-button @click.native="iconType = ''" type="primary"> set empty</v-button>
    </div>

    <v-group title="is-type传入function">
      <v-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder"></v-input>
    </v-group>

    <v-group title="mask">
      <v-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></v-input>
      <v-cell title="value" :value="maskValue"></v-cell>
      <v-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></v-input>
    </v-group>

    <v-group title="使用icon代替title">
      <v-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </v-input>
    </v-group>

    <v-group title="max is alias to maxlength">
      <v-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></v-input>
    </v-group>

    <v-group title="debounce = 1000">
      <v-input title='debounce' :debounce="500" @on-change="change" v-model="debounceValue"></v-input>
    </v-group>

    <v-group title="disabled">
      <v-input title='value' text-align="right" disabled v-model="disabledValue"></v-input>
    </v-group>

    <v-group title="set type = tel">
      <v-input title='value' type="tel"></v-input>
    </v-group>

    <v-group title="html title">
      <v-input label-width="4em" :title='`<span style="${style}">hello</span>`' placeholder="I'm placeholder"></v-input>
    </v-group>
    <div style="padding:15px;">
      <v-button @click.native="style = 'color:red;'" type="primary">set red</v-button>
      <v-button @click.native="style = 'color:green'" type="primary">set green</v-button>
      <v-button @click.native="style = 'color:#000'" type="primary">set default</v-button>
    </div>

    <v-group title="Default">
      <v-input title="message" placeholder="I'm placeholder"></v-input>
    </v-group>

    <v-group title="不显示清除按钮">
      <v-input title="message" required placeholder="I'm placeholder" :show-clear="false" autocapitalize="characters"></v-input>
    </v-group>

    <v-group title="focus事件">
      <v-input title="focus-handler" placeholder="focus me!" :show-clear="true" @on-focus="onFocus"></v-input>
    </v-group>

    <v-group title="set is-type=china-name">
      <v-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></v-input>
    </v-group>

    <v-group title="set keyboard=number and is-type=china-mobile">
      <v-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></v-input>
    </v-group>

    <v-group title="set is-type=email">
      <v-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></v-input>
    </v-group>

    <v-group title="set min=2 and max=5">
      <v-input title="2-5个字符" placeholder="" :min="2" :max="5"></v-input>
    </v-group>

    <v-group title="确认输入">
      <v-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></v-input>
      <v-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></v-input>
    </v-group>

    <v-group title="enter事件">
      <v-input title="输入完成后回车" type="text" placeholder="" v-model="enterText" @on-enter="onEnter"></v-input>
    </v-group>

    <v-group title="验证码">
      <v-input title="验证码">
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </v-input>
      <v-input title="发送验证码" class="vcu-vcode">
        <v-button slot="right" type="primary" mini>发送验证码</v-button>
      </v-input>
    </v-group>

    <v-group title="check if value is valid when required===true">
      <v-input title="message" placeholder="I'm placeholder" ref="input01" required></v-input>
      <v-cell title="click to get valid value" :value="'$valid value:' + valid1" @click.native="getValid1"></v-cell>
    </v-group>

    <v-group title="check if value is valid when required===false">
      <v-input title="message" placeholder="I'm placeholder" :required="false" ref="input02" @click.native="getValid2"></v-input>
      <v-cell title="click to get valid value" :value="'$valid value:' + valid2" @click.native="getValid2"></v-cell>
    </v-group>

  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '123465',
      password2: '',
      enterText: '',
      valid1: false,
      valid2: false,
      iconType: '',
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: '',
      maskValue: '13545678910',
      maskValue2: ''
    }
  },
  methods: {
    getValid1() {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2() {
      this.valid2 = this.$refs.input02.valid
    },
    change(val) {
      console.log('on change', val)
    },
    onBlur(val) {
      console.log('on blur', val)
    },
    onFocus(val, $event) {
      console.log('on focus', val, $event)
    },
    onEnter(val) {
      console.log('click enter!', val)
    }
  }
}
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | String | | '表单值，使用v-model绑定' | 
| type | String | text | '即input的type属性，目前支持 `text`,`number`,`email`,`password`,`tel`' | 
| is-type | String/Function | | '内置验证器，支持`email`,`china-name`,`china-mobile`, 同样也支持直接传函数, 需要同步返回一个对象`{valid:true}`或者`{valid:false, msg:错误信息}`' | 
| required | Boolean | false | '是否必值，如果不禁用验证，当没有填写时会在右侧显示错误icon' | 
| title | String | | 'label文字' | 
| placeholder | String | | 'placeholder 提示' | 
| show-clear | Boolean | true | '是否显示清除icon' | 
| min | Number | | '最小输入字符限制' | 
| max | Number | | '最大输入字符限制，等同于`maxlength`，达到限制到不能再输入' | 
| disabled | Boolean | false | '是否禁用填写' | 
| readonly | Boolean | false | '同input的标准属性readonly' | 
| debounce | Number | | '`debounce`用以限制on-change事件触发。如果你需要根据用户输入做`ajax`请求，建议开启以节省无效请求和服务器资源，单位为毫秒' | 
| placeholder-align | String | left | 'placeholder 文字对齐方式' | 
| text-align | String | left | '值对齐方式' | 
| label-width | String | | 'label 宽度，权重比 `group` 的 `labelWidth` 高。不设定时将进行自动宽度计算，但超过15个字符时不会进行宽度设定。' | 
| mask | String | | '(beta) 值格式化，依赖于 `vanilla-masker`，其中 9 表示数字，A 表示大写字母，S 表示数字或者字母' | 
| should-toast-error | Boolean | true | '是否在点击错误图标时用 toast 的形式显示错误' | 

### slots
| 名字 | 说明 |
| --- | --- |
| label | 用于自定义`label`(即 `title`)部分内容，比如使用`icon` |
| restricted-label | 用于自定义`label`部分，和`slot=label`不同的是，该`slot`宽度受到父组件`group`的限制 |
| right | 用以在输入框右边显示内容，比如单位，切换密码显示方式等 |
| right-full-height | 用于放置和 cell 高度的验证码图片 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-blur | (value, $event) | input的blur事件 |
| @on-focus | (value, $event) | input的focus事件 |
| @on-enter | (value, $event) | input输入完成后点击(确认)事件 |
| @on-change | (value) | 输入值变化时触发。如果你使用了`debounce`，那么触发将不会是实时的。 |
| @on-click-error-icon | (error) | 点击错误图标时触发，你可以关闭 `should-toast-error` 然后用这个事件来自定义显示错误的提示内容 |
| @on-click-clear-icon |  | 点击清除按钮时触发 |


### Method 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| focus |  | 手动获得焦点 |
| blur |  | 手动设置 input 失去焦点 |
| reset | (value = '') | 重置输入框值，清除错误信息 |
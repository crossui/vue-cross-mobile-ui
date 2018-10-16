# Checker 选择器

> `Checker` 是比`Radio`或者`Checklist`更加灵活的选择组件，可以自定义需要的布局样式

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-divider>单选，默认不选中任何项</v-divider>
    <div class="box">
      <v-checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item value="1">潘</v-checker-item>
        <v-checker-item value="2">闲</v-checker-item>
        <v-checker-item value="3">邓</v-checker-item>
        <v-checker-item value="4">小</v-checker-item>
        <v-checker-item value="5">驴</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{ demo1 }}</span>
      <br>
    </div>

    <v-divider>radioRequired</v-divider>
    <div class="box">
      <v-checker v-model="demo1Required" radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item value="1">潘</v-checker-item>
        <v-checker-item value="2">闲</v-checker-item>
        <v-checker-item value="3">邓</v-checker-item>
        <v-checker-item value="4">小</v-checker-item>
        <v-checker-item value="5">驴</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{ demo1Required }}</span>
      <br>
    </div>

    <v-divider>单选：object类型</v-divider>
    <div class="box">
      <v-checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo11}}</span>
      <br>
      <br>
      <v-checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo12}}</span>
      <br>
    </div>

    <v-divider>多选：object类型</v-divider>
    <div class="box">
      <v-checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo21}}</span>
      <br>
      <br>
      <v-checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo22}}</span>
      <br>
      <br>
      <v-checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
        <v-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo23}}</span>
      <br>
    </div>

    <v-divider>多选</v-divider>
    <div class="box">
      <v-checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item :value="1">白</v-checker-item>
        <v-checker-item :value="2">富</v-checker-item>
        <v-checker-item :value="3">美</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo1Checkbox}}</span>
      <br>
    </div>

    <v-divider>多选，最多只能选2个</v-divider>
    <div class="box">
      <v-checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <v-checker-item value="1">1</v-checker-item>
        <v-checker-item value="2">2</v-checker-item>
        <v-checker-item value="3">3</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo1CheckboxMax}}</span>
      <br>
    </div>

    <v-divider>默认值 2</v-divider>
    <div class="box">
      <v-checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
        <v-checker-item value="1">1</v-checker-item>
        <v-checker-item value="2">2</v-checker-item>
        <v-checker-item value="3">3</v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo2}}</span>
      <br>
    </div>

    <v-divider>自定义样式</v-divider>
    <div class="box">
      <v-checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
        <v-checker-item value="one">
          <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
        </v-checker-item>
        <v-checker-item value="two">
          <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
        </v-checker-item>
        <v-checker-item value="three">
          <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
        </v-checker-item>
      </v-checker>
      <br>
      <span>当前值为: {{demo3}}</span>
      <br>
    </div>

    <v-divider>Popup 组件中使用</v-divider>
    <v-group>
      <v-cell title="选择颜色" :value="demo4" is-link @click.native="showPopup=true"></v-cell>
    </v-group>
    <div v-transfer-dom>
      <v-popup v-model="showPopup" class="checker-popup">
        <div style="padding:10px 10px 40px 10px;">
          <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
          <v-checker v-model="demo4" default-item-class="demo4-item" selected-item-class="demo4-item-selected" disabled-item-class="demo4-item-disabled">
            <v-checker-item value="花跟叶" @on-item-click="onItemClick">花跟叶</v-checker-item>
            <v-checker-item value="鸟与树" @on-item-click="onItemClick">鸟与树</v-checker-item>
            <v-checker-item value="我和你" @on-item-click="onItemClick">我和你</v-checker-item>
            <v-checker-item value="全套礼品装" disabled @on-item-click="onItemClick">全套礼品装</v-checker-item>
          </v-checker>
        </div>
      </v-popup>
    </div>

    <v-divider>单选常见例子 {{demo5}}</v-divider>
    <v-checker v-model="demo5" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      <v-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</v-checker-item>
    </v-checker>
    <br/>
    <v-divider>多选常见例子 {{demo6}}</v-divider>
    <v-checker v-model="demo6" type="checkbox" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      <v-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{['good', 'nice','awesome'][i - 1]}}</v-checker-item>
    </v-checker>
  </div>
</template>
<script>
export default {
  methods: {
    onItemClick(value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
    }
  },
  data() {
    return {
      items1: [{
        key: '1',
        value: 'A'
      }, {
        key: '2',
        value: 'B'
      }, {
        key: '3',
        value: 'C'
      }],
      demo1: '',
      demo1Required: '',
      demo11: null,
      demo12: { key: '2', value: 'B' },
      demo21: null,
      demo22: [{ key: '2', value: 'B' }],
      demo23: null,
      demo1Checkbox: [2, 1],
      demo1CheckboxMax: ['2', '3'],
      demo2: '2',
      demo3: '',
      demo4: '花跟叶',
      showPopup: false,
      demo5: 1,
      demo6: [2, 3]
    }
  }
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8b8aee;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #ff3b3b;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../../assets/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| default-item-class | String | | '默认状态class' | 
| selected-item-class | String | | '选中样式class' | 
| disabled-item-class | String | | '不可选样式class' | 
| type | String | radio | '类型，单选为radio, 多选为checkbox' | 
| value | String/Array | | '表单值，使用v-model绑定' | 
| max | Number | | '最多可选个数，多选时可用' | 
| radio-required | Boolean | false | '在单选模式下是否必选一个值。设为 true 后点击当前选中项不会取消选中。' | 

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | value值变化时触发 |


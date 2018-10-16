# Calendar 日历

> `calendar`只能在`Group`中使用,除了`title` 和 `value`, 其他`props`和`inline-calendar`完全一致。

> 当绑定值为数组时，日历将为多选模式

```handlebars
<template>
  <div class="demo-block">
    <v-group>
      <v-calendar :readonly="readonly" v-model="demo1" title="一般使用" disable-past placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></v-calendar>
    </v-group>

    <div style="padding:15px;">
      <v-button type="primary" @click.native="readonly = !readonly">切换 readonly</v-button>
    </div>

    <v-group>
      <v-calendar v-model="demo2" title="设置时间为今天" disable-past></v-calendar>
    </v-group>

    <v-group>
      <v-calendar @on-change="onChange" v-model="demo3" title="禁止选择未来时间" disable-future></v-calendar>
    </v-group>

    <v-group>
      <v-calendar @on-change="onChange" v-model="demo4" title="显示 popup 头部" show-popup-header popup-header-title="请选择日期" disable-future></v-calendar>
    </v-group>

    <v-group>
      <v-calendar placeholder="placeholder" @on-change="onChange" v-model="demo5" title="多选" popup-header-title="请选择日期" disable-future></v-calendar>
    </v-group>

    <v-group>
      <v-calendar disable-weekend :display-format="displayFormat" placeholder="请选择日期" @on-change="onChange" v-model="demo6" title="格式化表单值" popup-header-title="请选择日期"></v-calendar>
      <v-cell-box align-items="flex-start">
        <span class="selected-days">value:</span>
        <div>
          <v-badge v-for="day in demo6" :text="day" :key="day" style="margin-right:10px;"></v-badge>
        </div>
      </v-cell-box>
    </v-group>
    <div style="padding:15px;">
      <v-button type="primary" @click.native="demo6 = []">清空值</v-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readonly: false,
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY',
      demo4: 'TODAY',
      demo5: [],
      demo6: [],
      displayFormat(value, type) {
        if (type === 'string') {
          return value
        } else {
          return value.length ? (value.length + ' days') : ''
        }
      }
    }
  },
  methods: {
    log(str) {
      console.log(str)
    },
    onChange(val) {
      console.log('on change', val)
    }
  }
}
</script>

<style scoped>
.selected-days {
  color: #999;
  width: 90px;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | String | | '表单值, v-model 绑定。当值为空时，为单选；当值为[]时，为多选；设置值为'TODAY'可快捷选取当前日期。placeholder只有在值为空或[]时显示。' | 
| title | String | | 'label文字' | 
| placeholder | String | | '占位提示文字' | 
| show-popup-header | Boolean | | '是否显示弹窗头部，当为多选时强制显示，单选时默认不显示' | 
| popup-header-title | String | | '弹窗头部文字' | 
| display-format | Function | | '格式化显示值' | 
| readonly | String | | '是否禁用弹窗选择' | 

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change | (value) | 值改变时触发 |
| @on-show || 弹窗显示时触发 |
| @on-hide || 弹窗关闭时触发 |
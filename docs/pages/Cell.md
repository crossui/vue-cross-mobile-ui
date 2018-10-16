# Cell 单元格

> `Cell` 组件只能在`Group`中使用

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-cell title="我的账号" value="保护中" @click.native="onClick"></v-cell>
      <v-cell title="余额" @click.native="onClick" :is-loading="!money" value="-1024"></v-cell>
      <v-cell title="提现" disabled is-link></v-cell>
    </v-group>

    <v-group title="显示右边箭头">
      <v-cell is-link>
        <span slot="title" style="color:green;">
          <span style="vertical-align:middle;">消息</span>
        </span>
      </v-cell>
      <v-cell title="通知" is-link></v-cell>
      <v-cell title="隐私" is-link></v-cell>
      <v-cell title="通用" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </v-cell>
    </v-group>

    <v-group label-width="5em" title="Align-items">
      <v-cell primary="content" title="default" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></v-cell>
      <v-cell title="flex-start" align-items="flex-start" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></v-cell>
    </v-group>

    <v-group title="折叠">
      <v-cell title="标题一" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'" @click.native="showContent001 = !showContent001"></v-cell>

      <template v-if="showContent001">
        <v-cell-box :border-intent="false" class="sub-item" is-link>content 001</v-cell-box>
        <v-cell-box class="sub-item" is-link>content 001</v-cell-box>
        <v-cell-box class="sub-item" is-link>content 001</v-cell-box>
      </template>

      <v-cell title="标题二" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></v-cell>

      <template v-if="showContent002">
        <v-cell-form-preview :border-intent="false" :list="list">
        </v-cell-form-preview>
      </template>

      <v-cell title="标题三" is-link :border-intent="false" :arrow-direction="showContent003 ? 'up' : 'down'" @click.native="showContent003 = !showContent003"></v-cell>

      <template v-if="showContent003">
        <v-cell-box :border-intent="false" class="sub-item">I'm content 003</v-cell-box>
      </template>

      <v-cell title="动画效果" is-link :border-intent="false" :arrow-direction="showContent004 ? 'up' : 'down'" @click.native="showContent004 = !showContent004"></v-cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>

    </v-group>

    <v-group>
      <v-cell title="通知" value="已开启"></v-cell>
    </v-group>

    <v-group title="使用slot显示复杂内容">
      <v-cell title="slot 内容">
        <div>
          <span style="color: green">你好哇，感谢关注 VcuMobile</span>
        </div>
      </v-cell>
    </v-group>

    <v-group title="当设有 link 属性时，会自动产生箭头效果，无需再设置 is-link">
      <v-cell title="前往Button页面" link="/Basics/Button" inline-desc='link="/Basics/Button"'></v-cell>
      <v-cell title="前往Demo页面" :link="{path:'/'}" inline-desc=':link={path:"/"}'></v-cell>
      <v-cell title="站外链接" link="https://baidu.com" inline-desc='link="https://baidu.com"'></v-cell>
    </v-group>
  </div>
</template>
<script>

export default {
  mounted() {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  methods: {
    onClick() {
      console.log('on click')
    }
  },
  data() {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | | '左边标题文字' | 
| value | String | | '右侧文字，复杂的样式布局请使用slot' | 
| inline-desc | String | | '标题下面文字，一般为说明文字' | 
| link | object/String | | '点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式' | 
| is-link | Boolean | false | '是否为链接，如果是，右侧将会出现指引点击的右箭头' | 
| primary | String | title | '可选值为 ['title', 'content']，对应的div会加上weui_cell_primary类名实现内容宽度自适应' | 
| is-loading | Boolean | false | '是否显示加载图标，适用于异步加载数据的场景' | 
| value-align | String | left | '文字值对齐方式，可选值为 left right。当设为 right 时，primary 值将会设为 content' | 
| border-intent | Boolean | true | '是否显示边框与左边的间隙' | 
| arrow-direction | String | | '右侧箭头方向，可选有 up down' | 
| disabled | Boolean | | '对 label 和箭头(如果使用 is-link )显示不可操作样式' | 
| align-items | String | center | 'align-items 样式值' | 

### slots
| 名字 | 说明 |
| --- | --- |
| icon | 标题左侧的图像位置 |
| after-title | 标题右侧位置 |
| child | cell的直接子元素，因此可以添加一个相对于cell绝对定位的元素 |
| inline-desc | inline-desc 内容，和 prop:inline-desc 功能一样，但是可以使用 html |
| title | title 插槽，方便自定义样式 |
# Previewer 图片预览

> 注意避免使用过大图片，否则可能会出现卡顿黑屏的情况(尤其是在 Android 机子上)

> list的数据示例如图
```json
[{
  src: 'https://placekitten.com/800/400',
  w: 600,
  h: 400
},
{
  src: 'https://placekitten.com/1200/900',
  msrc: 'https://placekitten.com/120/90', // 缩略图
  w: 1200,
  h: 900
}]
```

> 显示特定index的图片，使用ref
```jsx
this.$refs.previewer.show(index)
```
>注意，当你自定义添加按钮时，需要在 photoswipe 选项设置 clickable 元素，否则点击将没有响应
```handlebars
<previewer ref="previewer" :list="previewerList" :options="options">
  <template slot="button-after">
    <span class="previewer-delete-icon-box">
      <img src="../assets/previewer_delete_icon.png" width="22" height="22" class="previewer-delete-icon" @click.prevent.stop="removeImg">
    </span>
  </template>
</previewer>
```
```jsx
options: {
  isClickableElement: function (el) {
    return /previewer-delete-icon/.test(el.className)
  }
}
```


```handlebars
<template>
  <div class="demo-block padding-20">
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
    <div v-transfer-dom>
      <v-previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></v-previewer>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    logIndexChange(arg) {
      console.log(arg)
    },
    show(index) {
      this.$refs.previewer.show(index)
    }
  },
  data() {
    return {
      list: [{
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        w: 800,
        h: 400
      },
      {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        w: 1200,
        h: 900
      }, {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
      }],
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  }
}
</script>
```

> 本组件依赖于 `x-photoswipe`   [官网](http://photoswipe.com/)

## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| list | Array | | '图片列表' | 
| options | Object | | '`photoswipe`的设置' | 

### slots
| 名字 | 说明 |
| --- | --- |
| button-after | 操作按钮之后，可以添加自定义图标 |
| button-before | 操作按钮之前，可以添加自定义图标 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-close |  | 关闭时触发 |
| @on-index-change |  | 切换图片后触发(首次打开不会触发) |


### Method 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| goTo | (index) | 跳转到特定图片 |
| prev |  | 跳转到上一张 |
| next |  | 跳转到下一张 |
| getCurrentIndex |  | 获取当前图片索引 |
# Tab 选项卡

> 如果需要监听`tab-item`的点击事件并取得索引，请使用`on-item-click`事件

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-tab>
      <v-tab-item selected @on-item-click="onItemClick">已发货</v-tab-item>
      <v-tab-item @on-item-click="onItemClick">未发货</v-tab-item>
      <v-tab-item @on-item-click="onItemClick">全部订单</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <v-tab bar-position="top">
      <v-tab-item selected @on-item-click="onItemClick">已发货</v-tab-item>
      <v-tab-item @on-item-click="onItemClick">未发货</v-tab-item>
      <v-tab-item @on-item-click="onItemClick">全部订单</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <v-divider>手动切换</v-divider>
    <v-tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
      <v-tab-item selected>已发货</v-tab-item>
      <v-tab-item>未发货</v-tab-item>
      <v-tab-item>全部订单</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <v-divider>定义bar固定宽度</v-divider>
    <v-tab :line-width="1" custom-bar-width="60px">
      <v-tab-item selected>已发货</v-tab-item>
      <v-tab-item>未发货</v-tab-item>
      <v-tab-item>全部订单</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <v-divider>使用函数定义bar宽度</v-divider>
    <v-tab :line-width="1" :custom-bar-width="getBarWidth">
      <v-tab-item selected>AA</v-tab-item>
      <v-tab-item>AAAA</v-tab-item>
      <v-tab-item>AAAAAAA</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-divider>设置bar颜色</v-divider>
    <v-tab bar-active-color="#668599" :line-width="1">
      <v-tab-item>已发货</v-tab-item>
      <v-tab-item selected>未发货</v-tab-item>
      <v-tab-item>全部订单</v-tab-item>
      <v-tab-item>全部订单</v-tab-item>
      <v-tab-item>全部订单</v-tab-item>
    </v-tab>

    <br/>
    <br/>
    <br/>
    <v-divider>different active class</v-divider>
    <v-tab :animate="false">
      <v-tab-item active-class="active-6-1">已发货</v-tab-item>
      <v-tab-item active-class="active-6-2" selected>未发货</v-tab-item>
      <v-tab-item active-class="active-6-3">全部订单</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-divider>no animation</v-divider>
    <v-tab :animate="false">
      <v-tab-item>已发货</v-tab-item>
      <v-tab-item selected>未发货</v-tab-item>
      <v-tab-item>全部订单</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-divider>disabled</v-divider>
    <v-tab>
      <v-tab-item selected>A</v-tab-item>
      <v-tab-item>B</v-tab-item>
      <v-tab-item disabled>Disabled</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-divider>tab-item badge</v-divider>
    <v-tab>
      <v-tab-item selected badge-label="1">收到的消息</v-tab-item>
      <v-tab-item badge-background="#38C972" badge-color="#fff" badge-label="2">发出的消息</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-divider>scroll</v-divider>
    <v-tab>
      <v-tab-item v-for="n in 8" :key="n" :selected="n===1">已发货{{ n }}</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-divider>scroll threshold</v-divider>
    <v-tab :scroll-threshold="5">
      <v-tab-item v-for="n in 5" :key="n" :selected="n===1">已发货{{ n }}</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <div>
      <v-tab :line-width=2 active-color='#fc378c' v-model="index">
        <v-tab-item :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</v-tab-item>
      </v-tab>
      <v-swiper v-model="index" height="100px" :show-dots="false">
        <v-swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper">{{item}} Container</div>
        </v-swiper-item>
      </v-swiper>
    </div>

    <br/>
    <div class="box">
      <v-button @click.native="index=0" :disabled="index === 0" type="primary">go to 0</v-button>
      <v-button @click.native="index=1" :disabled="index === 1" type="primary">go to 1</v-button>

      <v-button @click.native="addTab" :disabled="list2.length === 5" type="primary">Add tab item</v-button>
      <v-button @click.native="removeTab" :disabled="list2.length <= 2" type="primary">Remove tab item</v-button>
      <v-button @click.native="next" type="primary">Active next current: {{index}}</v-button>
      <v-button @click.native="prev" type="primary">Active prev current: {{index}}</v-button>
    </div>

    <br/>
    <br/>
    <v-tab :line-width="2">
      <v-tab-item :selected="demo3 === item" v-for="(item, index) in list3" :class="{'vcu-1px-r': index===0}" @click="demo3 = item" :key="index">{{item}}</v-tab-item>
    </v-tab>
    <br/>
    <br/>
    <br/>
    <v-sticky top="46px">
      <v-tab :line-width=1>
        <v-tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</v-tab-item>
      </v-tab>
    </v-sticky>
    <br v-for="i in 50">
  </div>
</template>
<script>
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
  data() {
    return {
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods: {
    switchTabItem(index) {
      console.log('on-before-index-change', index)
      this.$vcu.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vcu.loading.hide()
        this.index01 = index
      }, 1000)
    },
    onItemClick(index) {
      console.log('on item click:', index)
    },
    addTab() {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab() {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next() {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
  text-align: center;
  padding-top: 30px;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| line-width | Number | 3 | '线条宽度' | 
| active-color | String | | '选中时文字颜色' | 
| default-color | String | | '默认文字颜色' | 
| disabled-color | String | | '不可点击时文字颜色' | 
| bar-active-color | String | | '设置底部`bar`颜色，该颜色也可以通过less变量`@tab-bar-active-color`设置。' | 
| animate | Boolean | true | '切换时是否需要动画' | 
| custom-bar-width | String/Function | | '设置底部`bar`宽度，默认宽度是整体`tab`宽度平分，比如`50px`。使用函数时参数为当前索引`index`，你可以定义不同`tab-item`对应的bar宽度。' | 
| badge-label | String | | '徽标文字' | 
| badge-background | String | | '徽标背景颜色' | 
| badge-color | String | | '徽标文字颜色' | 
| prevent-default | Boolean | false | '是否禁止自动切换 tab-item' | 
| scroll-threshold | Number | 4 | '滚动阀值，超过可滚动' | 
| bar-position | String | bottom | '边框位置，可以为 bottom 或者 top。仅支持 animate 为 true 的情况。' | 


## TabItem API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| disabled | Boolean | false | '是否不可选' | 
| active-class | String | | '当前项选中时的class' | 


### TabItem Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-item-click | (index) | 当前 tabItem 被点击时触发 |
# Swiper 滑块

> 不要在swiper里嵌套scroller，在web上过于复杂化而且手势会有冲突

> 该组件场景是固定高度的内容列表，不支持为不同 swiper-item 设置不同高度。

> 如果确实需要设置不同高度，可以通过 ref 获取 swiper, 通过 this.$refs.swiper.xheight = '100px' 设置。 切记，需要放在 $nextTick 中执行

```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group-title>THX to: https://github.com/wechatui/v-swiper</v-group-title>
    <v-group-title>list模式下，默认高度为180px, 如果设置aspect-ratio会根据宽度自动计算高度</v-group-title>
    <v-swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></v-swiper>
    <p class="copyright">Image Source: http://www.gratisography.com/</p>
    <p>current index: {{demo01_index}}</p>
    <v-button @click.native="demo01_index = 0">go to 0</v-button>
    <v-button @click.native="demo01_index = 1">go to 1</v-button>
    <v-button @click.native="demo01_index = 2">go to 2</v-button>
    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>设置min-moving-distance为120</v-group-title>
    <v-swiper :list="demo01_list" v-model="demo02_index" :min-moving-distance="120" @on-index-change="demo01_onIndexChange"></v-swiper>
    <br>
    <br>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>设置aspect-ratio, 将自动根据宽度计算高度</v-group-title>
    <v-swiper :list="demo02_list" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></v-swiper>

    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>自动轮播</v-group-title>
    <v-swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></v-swiper>
    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>use v-swiper-item for image list</v-group-title>
    <v-swiper :aspect-ratio="300/800">
      <v-swiper-item class="v-swiper-demo-img" v-for="(item, index) in demo04_list" :key="index"><img :src="item"></v-swiper-item>
    </v-swiper>

    <br>
    <br>

    <v-group-title>set index = 1 with swiper-item</v-group-title>
    <v-swiper :aspect-ratio="300/800" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
      <v-swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
        <img :src="item">
      </v-swiper-item>
    </v-swiper>
    <br>
    {{ swiperItemIndex }}
    <br>
    <v-button @click.native="swiperItemIndex = 0">go to 0</v-button>
    <v-button @click.native="swiperItemIndex = 1">go to 1</v-button>
    <v-button @click.native="swiperItemIndex = 2">go to 2</v-button>

    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>Async setting list data</v-group-title>
    <v-swiper :list="demo05_list" auto height="180px" @on-index-change="demo05_onIndexChange"></v-swiper>
    <p> current index: {{demo05_index}}</p>
    <v-button @click.native="demo05_onLoad(1)" type="primary" style="margin: 10px 0;">Load list1</v-button>
    <v-button @click.native="demo05_onLoad(2)" type="primary" style="margin: 10px 0;">Load list2</v-button>

    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>引入v-swiper-item自定义item内容，用height定义高度</v-group-title>
    <v-swiper auto height="100px">
      <v-swiper-item class="black">
        <h2 class="title fadeInUp animated">它无孔不入</h2>
      </v-swiper-item>
      <v-swiper-item class="black">
        <h2 class="title fadeInUp animated">你无处可藏</h2>
      </v-swiper-item>
      <v-swiper-item class="black">
        <h2 class="title fadeInUp animated">不是它可恶</h2>
      </v-swiper-item>
      <v-swiper-item class="black">
        <h2 class="title fadeInUp animated">而是它不懂你</h2>
      </v-swiper-item>
      <v-swiper-item class="black">
        <h2 class="title fadeInUp animated">我们试图</h2>
      </v-swiper-item>
      <v-swiper-item class="black">
        <h2 class="title fadeInUp animated">做些改变</h2>
      </v-swiper-item>
    </v-swiper>

    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>垂直方向文字滚动</v-group-title>
    <v-swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <v-swiper-item>
        <p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
      </v-swiper-item>
      <v-swiper-item>
        <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
      </v-swiper-item>
      <v-swiper-item>
        <p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
      </v-swiper-item>
      <v-swiper-item>
        <p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
      </v-swiper-item>
      <v-swiper-item>
        <p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
      </v-swiper-item>
      <v-swiper-item>
        <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
      </v-swiper-item>
    </v-swiper>

    <br/>
    <br/>
    <v-divider>华丽的分割线</v-divider>

    <v-group-title>循环模式</v-group-title>
    <v-swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></v-swiper>
    <p>current index: {{demo06_index}}</p>

    <v-group-title>循环模式（只有两个且可点击）</v-group-title>
    <v-swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></v-swiper>
    <p>current index: {{demo07_index}}</p>
  </div>
</template>
<script>

const baseList = [{
  url: 'javascript:',
  img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff', // 404
  title: '送你一次旅行',
  fallbackImg: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff'
}]

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

const only2ClickList = baseList.slice(0, 2).map(item => {
  item.url = 'http://m.baidu.com'
  return item
})

export default {
  methods: {
    onSwiperItemIndexChange(index) {
      console.log('demo item change', index)
    },
    demo01_onIndexChange(index) {
      this.demo01_index = index
    },
    demo05_onIndexChange(index) {
      this.demo05_index = index
    },
    demo05_onLoad(id) {
      this.demo05_list = id === 1 ? baseList : demoList
    },
    demo06_onIndexChange(index) {
      this.demo06_index = index
    },
    demo07_onIndexChange(index) {
      this.demo07_index = index
    }
  },
  data() {
    return {
      demo01_list: baseList,
      demo02_list: demoList,
      demo03_list: demoList,
      demo04_list: imgList,
      demo05_list: [],
      demo06_list: urlList,
      demo07_list: only2ClickList,
      demo01_index: 0,
      demo02_index: 1,
      demo05_index: 0,
      demo06_index: 0,
      demo07_index: 0,
      swiperItemIndex: 1
    }
  }
}
</script>

<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vcu-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| list | String | | '轮播图片列表，如果有自定义样式需求，请使用 `swiper-item`(使用 `swiper-item` 时仅有2个的情况下不支持循环)' | 
| direction | String | horizontal | '方向,可选['horizontal', 'vertical']' | 
| show-dots | Boolean | true | '是否显示提示点' | 
| show-desc-mask | Boolean | true | '是否显示描述半透明遮罩' | 
| dots-position | String | right | '提示点位置' | 
| dots-class | String | | '提示className' | 
| auto | Boolean | false | '是否自动轮播' | 
| loop | Boolean | false | '是否循环' | 
| interval | Number | 3000 | '轮播停留时长' | 
| threshold | Number | 50 | '当滑动超过这个距离时才滑动' | 
| duration | Number | 300 | '切换动画时间' | 
| height | String | 180px | '高度值。如果为100%宽度并且知道宽高比，可以设置`aspect-ratio`自动计算高度' | 
| aspect-ratio | Number | | '用以根据当前可用宽度计算高度值' | 
| min-moving-distance | Number | 0 | '超过这个距离时才滑动' | 


### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-index-change | (currentIndex) | 轮播 index 变化时触发 |
| @on-get-height | (height) | 高度获取后触发 |


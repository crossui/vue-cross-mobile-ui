# Marquee 跑马灯


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-divider>默认</v-divider>
    <v-marquee>
      <v-marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</v-marquee-item>
    </v-marquee>
    <br>
    <v-divider>在 v-cell 中使用</v-divider>
    <v-group>
      <v-cell title="公告">
        <v-marquee>
          <v-marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">JavaScript is the best language {{i}}</v-marquee-item>
        </v-marquee>
      </v-cell>
    </v-group>
    <br>
    <v-divider>异步数据</v-divider>
    <v-marquee>
      <v-marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</v-marquee-item>
    </v-marquee>
  </div>
</template>

<script>

export default {
  mounted() {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick(i) {
      console.log(i)
    }
  },
  data() {
    return {
      asyncCount: 0
    }
  }
}
</script>

<style scoped>
.align-middle {
  text-align: center;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| interval | Number | 2000 | '切换时间间隙' | 
| duration | Number | 300 | '切换动画时间' | 
| direction | String | up | '切换方向，可选['up', 'down']' | 
| item-height | Number | | '条目高度，当默认状态为隐藏时你需要设置值，否则组件渲染时会获取不到正确高度' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | 内容插槽 |

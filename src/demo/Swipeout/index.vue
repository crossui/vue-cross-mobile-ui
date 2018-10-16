<template>
  <div class="demo-block padding-tb-20">
    <div class="vcu-1px-t">

      <v-swipeout>

        <v-swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
          <div slot="right-menu">
            <v-swipeout-button @click.native="onButtonClick('fav')" type="primary">是的</v-swipeout-button>
            <v-swipeout-button @click.native="onButtonClick('delete')" type="warn">正确</v-swipeout-button>
          </div>
          <div slot="content" class="demo-content vcu-1px-t">
            JavaScript 是最好的语言
          </div>
        </v-swipeout-item>

        <v-swipeout-item :threshold=".5" underlay-color="#ccc">
          <div slot="right-menu">
            <v-swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">收藏</v-swipeout-button>
            <v-swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">删除</v-swipeout-button>
          </div>
          <div slot="content" class="demo-content vcu-1px-tb">
            设置滑动阙值为 0.5
          </div>
        </v-swipeout-item>

        <v-swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
          <div slot="right-menu">
            <v-swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">收藏</v-swipeout-button>
            <v-swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">删除</v-swipeout-button>
            <v-swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">忽略</v-swipeout-button>
          </div>

          <div slot="left-menu">
            <v-swipeout-button @click.native="onButtonClick('fav')" type="primary">收藏</v-swipeout-button>
            <v-swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</v-swipeout-button>
          </div>

          <div slot="content" class="demo-content vcu-1px-b">
            now
            <span v-if="disabled">不可操作</span>
            <span v-else="enabled">可操作</span>
          </div>
        </v-swipeout-item>

      </v-swipeout>
    </div>

    <div style="padding:15px;">
      <v-button @click.native="disabled = false" type="primary" :disabled="!disabled">当前可操作</v-button>
      <v-button @click.native="disabled = true" type="warn" :disabled="disabled">当前不可操作</v-button>
      <v-button @click.native="$refs.swipeoutItem.open('left')" type="primary">打开左菜单</v-button>
      <v-button @click.native="$refs.swipeoutItem.open('right')" type="primary">打开右菜单</v-button>
      <v-button @click.native="$refs.swipeoutItem.close()" type="warn">关闭菜单</v-button>
    </div>
    <br>
    <v-group-title>use vcu-1px to style items</v-group-title>
    <v-swipeout class="vcu-1px-tb">
      <v-swipeout-item transition-mode="follow" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <v-swipeout-button type="primary">是的</v-swipeout-button>
          <v-swipeout-button type="warn">正确</v-swipeout-button>
        </div>
        <div slot="content" :class="{'vcu-1px-b': i !== 3, 'vcu-1px-t': i === 1}" style="padding:12px;">JavaScript 是最好的语言</div>
      </v-swipeout-item>
    </v-swipeout>
  </div>
</template>
<script>
export default {
  methods: {
    onButtonClick(type) {
      alert('on button click ' + type)
    },
    handleEvents(type) {
      console.log('event: ', type)
    }
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
</style>
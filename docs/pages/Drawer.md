# Drawer 侧边栏菜单

> `Drawer` 设计是作为公用侧边栏使用，所以不支持直接在单页面里使用，而是配合 `router-view` 来使用。

```handlebars
<template>
  <v-drawer :docked="docked" :position="posList[position]" :open="open" :sidebar-style="sidebarStyle" @open-change="onOpenChange">
    <div class="drawer-content-main">
      <div class="main" id="vcu_view_box_body">
        <v-sticky>
          <v-header>
            {{`${$route.name}`}}
            <v-icon type="more" size="24" slot="right" @click="onOpenChange" v-show="moreShow"></v-icon>
          </v-header>
        </v-sticky>
        <router-view></router-view>
      </div>
    </div>
    <div slot="sidebar">
      <ul class="drawer-sidebar-ul">
        <li v-for="n in 10" :key="n" @click="clickAlert(`list-item-${n}`)">
          {{`list-item-${n}`}}
        </li>
      </ul>
      <v-button type="primary" @click.native="onOpenChange">Open: {{open}}</v-button>
      <v-button type="primary" @click.native="onPositionChange">Position: {{posList[position]}}</v-button>
      <v-button type="primary" @click.native="onDockedChange">Docked: {{docked}}</v-button>
    </div>

  </v-drawer>

</template>
<script>
export default {
  data() {
    return {
      sidebarStyle: {
        'background-color': '#fff',
        'padding': '20px'
      },
      posList: ['left', 'top', 'right', 'bottom'],
      position: 0,
      docked: false,
      open: false
    };
  },
  computed: {
    moreShow() {
      return this.$route.name == 'Drawer' ? true : false
    }
  },
  methods: {
    onOpenChange() {
      this.open = !this.open;
    },
    onPositionChange() {
      this.open = false;
      this.position = ++this.position % 4;
      setTimeout(function (_this) {
        _this.onOpenChange();
      }, 300, this);
    },
    onDockedChange() {
      this.open = false;
      this.docked = !this.docked;
      setTimeout(function (_this) {
        _this.onOpenChange();
      }, 300, this);
    },
    clickAlert(info) {
      alert(info);
    }
  }
}
</script>
<style lang="less">
.demo-block {
  .demo-block__title {
    font-weight: 400;
    font-size: 14px;
    color: rgba(69, 90, 100, 0.6);
    padding: 55px 0 10px;
    &:first-child {
      padding-top: 0px;
    }
  }
  &.padding-tb-20 .demo-block__title {
    padding-left: 20px;
  }
}
</style>


```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| position | String | left | '抽屉所在位置(left,right,top,bottom)' | 
| open | Boolean | false | '抽屉是否展开' | 
| docked | Boolean | | '抽屉是否嵌入文档' | 
| sidebar-style | Object/String | | '侧边栏样式' | 
| overlay-style | Object/String | | '遮罩层样式' | 
| content-style | Object/String | | '抽屉内容样式' | 
| forbid-click | Boolean | false | '禁止背景点击' | 

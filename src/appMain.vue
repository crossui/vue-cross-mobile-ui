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


<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-switch title="基本使用" v-model="show1"></v-switch>
      <v-switch title="安卓风格" v-model="show7"></v-switch>
      <v-switch title="显示取消菜单" v-model="show2"></v-switch>
      <v-switch title="使用数组定义菜单" v-model="show5"></v-switch>
    </v-group>

    <v-group title="点击遮罩区域不自动关闭">
      <v-switch title="基本使用" v-model="show4"></v-switch>
    </v-group>

    <v-group>
      <v-switch title="显示提示文字" v-model="show3"></v-switch>
      <v-switch title="使用 header slot" v-model="show6"></v-switch>
      <v-switch title="不自动关闭" v-model="show8"></v-switch>
    </v-group>

    <v-actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel @on-click-mask="console('on click mask')"></v-actionsheet>

    <v-actionsheet v-model="show1" :menus="menus1" @on-click-menu="click" @on-after-hide="log('after hide')" @on-after-show="log('after show')"></v-actionsheet>

    <v-actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></v-actionsheet>

    <v-actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></v-actionsheet>

    <v-actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click5"></v-actionsheet>

    <v-actionsheet v-model="show6" :menus="menus1">
      <p slot="header" v-html="domhtml"></p>
    </v-actionsheet>

    <v-actionsheet v-model="show7" :menus="menu7" theme="android" @on-click-menu="click" @on-after-hide="log('after hide')" @on-after-show="log('after show')">
    </v-actionsheet>

    <v-toast v-model="showSuccess">删除成功</v-toast>

    <div v-transfer-dom>
      <v-actionsheet v-model="show8" :menus="menus8" @on-click-menu="demo8doClose" :close-on-clicking-mask="false" :close-on-clicking-menu="false">
      </v-actionsheet>
    </div>
  </div>
</template>
<script>
const _html = '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>';
export default {
  data() {
    return {
      domhtml: _html,
      show1: false,
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      },
      show2: false,
      menus2: {
        menu1: '拍照',
        menu2: '从相册选择'
      },
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      menus5: [{
        label: _html,
        type: 'info'
      }, {
        label: 'Primary',
        type: 'primary',
        value: 'primary',
        otherProp: 'hey'
      }, {
        label: 'Warn',
        type: 'warn'
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default'
      }],
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      },
      showSuccess: false,
      menus3: {
        'title.noop': _html,
        delete: '<span style="color:red">Delete</span>'
      },
      menus8: {
        menu1: '点我关闭',
        menu2: '点我关闭'
      }
    }
  },
  methods: {
    log(str) {
      console.log(str)
    },
    demo8doClose() {
      this.$vcu.loading.show({
        text: 'processing'
      })
      setTimeout(() => {
        this.$vcu.loading.hide()
        this.show8 = false
      }, 1000)
    },
    console(msg) {
      console.log(msg)
    },
    click(key) {
      console.log(key)
    },
    click5(key, item) {
      console.log(key, item)
    },
    onDelete() {
      this.showSuccess = true
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom: 15px;
  height: 200px;
}
.popup1 {
  width: 100%;
  height: 100%;
}
</style>
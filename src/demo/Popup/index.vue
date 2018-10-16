<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-switch title="Default popup" v-model="show"></v-switch>
      <v-switch title="Full popup" v-model="show1"></v-switch>
      <v-switch title="Multi popup (first)" v-model="show3"></v-switch>
      <v-switch title="Mask disable" v-model="show5"></v-switch>
      <v-switch title="Popup address" v-model="show6"></v-switch>
      <v-switch title="default max-height=100%" v-model="show12"></v-switch>
      <v-switch title="set max-height=50%" v-model="show13"></v-switch>
    </v-group>

    <v-group>
      <v-switch title="donot force rerender on open" v-model="show15"></v-switch>
      <v-switch title="force rerender on open" v-model="show14"></v-switch>

    </v-group>

    <v-group>
      <v-switch title="scroll top on show" inline-desc="default scrollable div" v-model="show17"></v-switch>
      <v-switch title="scroll top on show" inline-desc="custom scrollable div" v-model="show16"></v-switch>
    </v-group>

    <div v-transfer-dom>
      <v-popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <v-group>
            <v-switch title="Another XSwitcher" v-model="show"></v-switch>
            <v-switch title="Show Toast" v-model="showToast"></v-switch>
          </v-group>
        </div>
      </v-popup>
    </div>

    <v-toast v-model="showToast">You did it!</v-toast>

    <div v-transfer-dom>
      <v-popup v-model="show1" height="100%">
        <div class="popup1">
          <v-group>
            <v-switch title="Another XSwitcher" v-model="show1"></v-switch>
          </v-group>
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show3">
        <div class="popup2">
          <v-group>
            <v-switch title="Multi Popup (first)" v-model="show3"></v-switch>
            <v-switch title="Multi Popup (second)" v-model="show4"></v-switch>
          </v-group>
          this is the first popup
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show4">
        <div class="popup2">
          <v-group>
            <v-switch title="Multi Popup (second)" v-model="show4"></v-switch>
          </v-group>
          this is the second popup
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show5" :hide-on-blur=false>
        <div class="popup2">
          <v-group>
            <v-switch title="Mask disable" v-model="show5"></v-switch>
          </v-group>
          The mask cannot be clicked!
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show6">
        <div class="popup1">
          <v-group>
            <v-switch title="Popup address" v-model="show6"></v-switch>
          </v-group>
          <v-group>
            <v-address :title="title6" v-model="value6" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder" :popup-style="{zIndex: 502}"></v-address>
          </v-group>
        </div>
      </v-popup>
    </div>

    <v-group>
      <v-switch title="transparent background" v-model="show7"></v-switch>
    </v-group>

    <div v-transfer-dom>
      <v-popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <v-group>
            <v-cell title="Product" value="Donate"></v-cell>
            <v-cell title="Total" value="$10.24"></v-cell>
          </v-group>
          <div style="padding:20px 15px;">
            <v-button type="primary">Pay</v-button>
            <v-button @click.native="show7 = false">Cancel</v-button>
          </div>
        </div>
      </v-popup>
    </div>

    <v-group title="set position">
      <v-switch title="left(100% width)" v-model="show8"></v-switch>
      <v-switch title="right" v-model="show9"></v-switch>
      <v-switch title="top(no mask)" v-model="show10"></v-switch>
      <v-switch title="bottom" v-model="show11"></v-switch>
    </v-group>

    <div v-transfer-dom>
      <v-popup v-model="show8" position="left" width="100%">
        <div class="position-horizontal-demo">
          <span class="vcu-close" @click="show8 = false"></span>
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show9" position="right">
        <div style="width:200px;">
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show10" position="top" :show-mask="false">
        <div class="position-vertical-demo">
          I'm on top. Hide in 1s.
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show11" position="bottom">
        <div class="position-vertical-demo">
          I'm on bottom.
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show12" position="bottom">
        <v-group>
          <v-cell v-for="i in 20" :key="i" :title="i"></v-cell>
        </v-group>
        <div style="padding: 15px;">
          <v-button @click.native="show12 = false" plain type="primary"> Close Me </v-button>
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show17" position="bottom" should-scroll-top-on-show>
        <v-group>
          <v-cell v-for="i in 20" :key="i" :title="i"></v-cell>
        </v-group>
        <div style="padding: 15px;">
          <v-button @click.native="show17 = false" plain type="primary"> Close Me </v-button>
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show14" position="bottom" should-rerender-on-show>
        <div>
          <toggle-text @click.native="show14 = false"></toggle-text>
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show15" position="bottom">
        <div>
          <toggle-text @click.native="show15 = false"></toggle-text>
        </div>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show16" position="bottom" should-scroll-top-on-show>
        <toggle-text @click.native="show16 = false" scrollable class="vcu-scrollable"></toggle-text>
      </v-popup>
    </div>

    <div v-transfer-dom>
      <v-popup v-model="show13" position="bottom" max-height="50%">
        <v-group>
          <v-cell v-for="i in 20" :key="i" :title="i"></v-cell>
        </v-group>
        <div style="padding: 15px;">
          <v-button @click.native="show13 = false" plain type="primary"> Close Me </v-button>
        </div>
      </v-popup>
    </div>
  </div>
</template>
<script>
import ChinaAddressData from '../../datas/china_address.json'
import ToggleText from './ToggleText'

export default {
  components: {
    ToggleText
  },
  data() {
    return {
      addressData: ChinaAddressData,
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value6: [],
      show7: false,
      showToast: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false,
      show14: false,
      show15: false,
      show16: false,
      show17: false
    }
  },
  methods: {
    log(str) {
      console.log(str)
    }
  },
  watch: {
    show10(val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.popup0 {
  padding-bottom: 15px;
  height: 200px;
}
.popup1 {
  width: 100%;
  height: 100%;
}
.popup2 {
  padding-bottom: 15px;
  height: 400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vcu-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>
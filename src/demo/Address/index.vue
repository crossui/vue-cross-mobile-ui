<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></v-address>
      <v-cell title="上面value值" :value="value"></v-cell>
    </v-group>
  </div>
</template>
<script>
import ChinaAddressV4Data from '../../datas/china_address_v4.json';
export default {
  data() {
    return {
      title: '默认为空',
      value_0_1: [],
      value: [],
      title2: '设置值',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区'],
      showAddress: false
    }
  },
  methods: {
    doShowAddress() {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange(ids, names) {
      console.log(ids, names)
    },
    changeData() {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels() {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2() {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide(str) {
      console.log('on-hide', str)
    },
    logShow(str) {
      console.log('on-show')
    }
  }
}
</script>
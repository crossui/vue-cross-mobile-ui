<template>
  <div class="demo-block padding-tb-20">
    <v-group label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-cell title="v-cell" value="value" is-link></v-cell>
      <v-cell title="v-cell" value="value" is-link value-align="left"></v-cell>
      <v-input title="上报人" v-model="value1"></v-input>
      <v-input placeholder="I'm placeholder">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </v-input>
        <v-input title="上<i class='vcu-blank-half'></i>报<i class='vcu-blank-half'></i>人" v-model="value1"></v-input>
        <v-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></v-number>
        <v-datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></v-datetime>
        <v-selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></v-selector>
        <v-selector title="隐患类别" placeholder="Placeholder" :options="['工艺技术', '其他']" v-model="value7"></v-selector>
        <v-selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value8"></v-selector>
        <v-input title="隐患部位" placeholder="必填" v-model="value3"></v-input>
        <v-input title="密码" type="password" placeholder="必填" v-model="value4"></v-input>
        <v-popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></v-popup-picker>
        <v-popup-picker title="请选择" placeholder="Required" :data="list" v-model="value6" value-text-align="left"></v-popup-picker>
        <v-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></v-address>
        <v-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></v-textarea>
        <v-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">
          <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </v-textarea>
    </v-group>
    <br>
    <v-group>
      <v-group-title slot="title">I'm a title<span style="float:right;">right</span></v-group-title>
      <v-cell title="v-cell"></v-cell>
    </v-group>
    <br>
    <v-group title="justify" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <v-cell title="哈哈" value="value" is-link></v-cell>
      <v-cell title="哈哈哈哈哈" value="value" is-link value-align="left"></v-cell>
      <v-input title="上报人" v-model="value1"></v-input>
      <v-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></v-number>
      <v-datetime title="时间" v-model="time1" value-text-align="left"></v-datetime>
      <v-selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></v-selector>
      <v-popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></v-popup-picker>
      <v-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></v-address>
      <v-switch title="选择"></v-switch>
      <v-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></v-textarea>
    </v-group>
  </div>
</template>
<script>
import ChinaAddressData from '../../datas/china_address.json'
export default {
  data() {
    return {
      addressData: ChinaAddressData,
      addressValue: ['广东省', '深圳市', '南山区'],
      value1: '张三',
      value2: '工艺技术',
      value3: '',
      value7: '',
      value8: '',
      value4: '',
      time1: '2017-06-01',
      value5: ['A'],
      value6: [],
      list: [['A', 'B', 'C']],
      numberValue: 0
    }
  }
}
</script>
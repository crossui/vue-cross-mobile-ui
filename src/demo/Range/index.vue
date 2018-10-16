<template>
  <div class="demo-block padding-tb-20">
    <v-group title="default v-range">
      <v-cell title="Default" :inline-desc="'value: '+data1" primary="content">
        <v-range v-model="data1" @on-change="onChange"></v-range>
      </v-cell>
      <v-cell title="allow decimals" :inline-desc="'value is: '+data2" primary="content">
        <v-range v-model="data2" decimal></v-range>
      </v-cell>
      <v-cell title="value=20" :inline-desc="'value is: '+data3" primary="content">
        <v-range v-model="data3"></v-range>
      </v-cell>
    </v-group>
    <v-group title="min and max">
      <v-cell title="min=8" :inline-desc="'value is: '+data4" primary="content">
        <v-range v-model="data4" :min="8"></v-range>
      </v-cell>
      <v-cell title="max=88" :inline-desc="'value is: '+data5" primary="content">
        <v-range v-model="data5" :max="88"></v-range>
      </v-cell>
      <v-cell title="min and max" :inline-desc="'value is: '+data6" primary="content">
        <v-range v-model="data6" :min="7" :max="77"></v-range>
      </v-cell>
      <v-cell title="change min and max" primary="content">
        <v-range v-model="dynamiValue" :min="min" :max="max" :step="step"></v-range>
      </v-cell>
      <v-cell title="current value" :value="dynamiValue + ''"></v-cell>
    </v-group>
    <br>
    <div style="margin:0 10px;">
      <v-button type="primary" @click.native="update">update min = {{min}}, max = {{max}} and step = {{step}}</v-button>
    </div>

    <v-group title="Step">
      <v-cell title="step=10" :inline-desc="'valus is: '+data7" primary="content">
        <v-range v-model="data7" :min="7" :max="77" :step="10"></v-range>
      </v-cell>
    </v-group>

    <v-group title="disabled">
      <v-cell title="disabled=true" :inline-desc="'valus is: '+data8" primary="content">
        <v-range v-model="data8" disabled></v-range>
      </v-cell>
      <v-cell title="Opacity" :inline-desc="'valus is: '+data8" primary="content">
        <v-range v-model="data8" disabled :disabled-opacity="0.1"></v-range>
      </v-cell>
    </v-group>

    <v-group title="bar height">
      <v-cell title="Line width" :inline-desc="'value is: '+data9" primary="content">
        <v-range v-model="data9" :v-range-bar-height="4"></v-range>
      </v-cell>
    </v-group>

    <v-group title="custom min and max html">
      <v-cell title="文字大小" :inline-desc="'font size: ' + data10" primary="content">
        <v-range v-model="data10" :min="12" :max="22" min-HTML="<span style='font-size:12px;'>小</span>" max-HTML="<span style='font-size:22px;'>大</span>"></v-range>
      </v-cell>
      <v-cell title="bcontentness" :inline-desc="'value is: ' + data11 + '%'" primary="content">
        <v-range v-model="data11" min-HTML="<span style='font-size:16px;color:#F90;'>☼</span>" max-HTML="<span style='font-size:30px;color:#F90;'>☼</span>"></v-range>
      </v-cell>
    </v-group>

    <v-group title="two way binding">
      <v-cell title="Default" primary="content">
        <v-range v-model="data12"></v-range>
      </v-cell>
      <v-cell title="Default" primary="content">
        <v-range v-model="data12"></v-range>
      </v-cell>
    </v-group>

    <v-group :title="'use v-show ' + 'data: ' + data13">
      <v-cell title="Default" primary="content">
        <v-range :step="10" v-model="data13" v-show="showData13"></v-range>
      </v-cell>
    </v-group>

    <v-group title="touchstart and touchend">
      <v-cell title="Default" primary="content">
        <v-range :step="1" v-model="data14" @on-touchstart="onTouchstart" @on-touchend="onTouchend"></v-range>
      </v-cell>
    </v-group>

  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.showData13 = true
    }, 2000)
  },
  data() {
    return {
      data1: 0,
      data2: 0,
      data3: 20,
      data4: 18,
      data5: 28,
      data6: 37,
      data7: 17,
      data8: 25,
      data9: 50,
      data10: 14,
      data11: 30,
      data12: 0,
      data13: 10,
      data14: 0,
      showData13: false,
      min: 0,
      max: 100,
      step: 1,
      dynamiValue: 0
    }
  },
  methods: {
    onChange(val) {
      console.log('change', val)
    },
    update() {
      this.min = Math.floor(Math.random() * 30)
      this.max = Math.floor(50 + Math.random() * 100)
      this.step = 1 + Math.floor(Math.random() * 10)
    },
    onTouchstart(e) {
      console.log('touchstart')
    },
    onTouchend(e) {
      console.log('touchend')
    }
  }
}
</script>
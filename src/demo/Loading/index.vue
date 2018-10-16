<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-switch title="显示" v-model="show1" @on-change="show1change"></v-switch>
      <v-switch title="无提示文字" v-model="show2" @on-change="show2change"></v-switch>
    </v-group>
    <div v-transfer-dom>
      <v-loading :show="show1" :text="text1"></v-loading>
    </div>
    <div v-transfer-dom>
      <v-loading :show="show2" text=""></v-loading>
    </div>
    <div style="padding: 15px;">
      <v-button @click.native="showLoading" type="primary">显示loading (2s后关闭)</v-button>
    </div>
    <div style="padding: 15px;">
      <v-button @click.native="showDelayLoading" type="primary">延时1s后显示</v-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      text1: 'Processing'
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log(this.$vcu.loading.isVisible())
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    showLoading() {
      this.$vcu.loading.show({
        text: 'Loading'
      })
      setTimeout(() => {
        this.$vcu.loading.hide()
      }, 2000)
    },
    showDelayLoading() {
      this.$vcu.loading.show({
        text: 'Loading',
        delay: 1e3
      })
      setTimeout(() => {
        this.$vcu.loading.hide()
      }, 2000)
    },
    show1change(val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            return
          }
          this.text1 = `${percent}%`
        })
      }
    },
    show2change(val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show2 = false
            return
          }
        })
      }
    }
  }
}

function tick(i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 10)
}
</script>
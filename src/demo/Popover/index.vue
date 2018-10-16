<template>
  <div class="demo-block padding-20" style="text-align:center;">
    <v-popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>上方出现</v-button>
    </v-popover>

    <v-popover placement="bottom" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>下方出现</v-button>
    </v-popover>

    <v-popover placement="left" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>左边出现</v-button>
    </v-popover>

    <v-popover placement="right" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <v-button mini>右边出现</v-button>
    </v-popover>

    <div style="position:fixed;bottom:50px;text-align:center;width:100%;">
      <p>fixed element</p>
      <v-popover placement="right" style="margin: 20px;">
        <div slot="content" class="popover-demo-content">
          hello world
        </div>
        <v-button mini>右边出现</v-button>
      </v-popover>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    onShow() {
      console.log('on show')
    },
    onHide() {
      console.log('on hide')
    }
  }
}
</script>
<style scoped>
.popover-demo-content {
  padding: 5px 10px;
}
</style>
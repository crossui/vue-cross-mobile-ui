<template>
  <div class="demo-block padding-tb-20">
    <v-header>This is the page title.</v-header>
    <br>
    <v-header title="use prop:title"></v-header>
    <br>
    <v-header :left-options="{showBack: false}">do not show Back</v-header>
    <br>
    <v-header :left-options="{backText: ''}">set empty back text</v-header>
    <br>
    <v-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</v-header>
    <br>
    <v-header>with right link<a slot="right">Feedback</a></v-header>
    <br>
    <v-header>long long long long long long long text<a slot="right">Feedback</a></v-header>
    <br>
    <v-header>with left slot<a slot="left">Close</a></v-header>
    <br>
    <v-header>
      <span>overwrite-left</span>
      <v-icon slot="overwrite-left" type="home" size="24" color="#fff" style="position:relative;top:-4px;left:-3px;"></v-icon>
    </v-header>
    <br>
    <v-header style="background-color:#000;">custom background color</v-header>
    <br>
    <v-header title="slot:overwrite-title">
      <div class="overwrite-title-demo" slot="overwrite-title">
        <v-button-tab>
          <v-button-tab-item selected>A</v-button-tab-item>
          <v-button-tab-item>B</v-button-tab-item>
        </v-button-tab>
      </div>
    </v-header>
    <div v-transfer-dom>
      <v-actionsheet :menus="menus" v-model="showMenus" show-cancel></v-actionsheet>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>

<style lang="less">
.overwrite-title-demo {
  margin-top: 5px;
  a.vcu-button-group-current {
    background: blue;
  }
}
</style>
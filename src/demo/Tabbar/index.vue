<template>
  <div class="demo-block padding-tb-20">
    <v-tabbar>
      <v-tabbar-item>
        <img slot="icon" src="../../assets/a.png">
        <span slot="label">Wechat</span>
      </v-tabbar-item>
      <v-tabbar-item show-dot>
        <img slot="icon" src="../../assets/b.png">
        <span slot="label">Message</span>
      </v-tabbar-item>
      <v-tabbar-item selected link="/">
        <img slot="icon" src="../../assets/c.png">
        <span slot="label">Explore</span>
      </v-tabbar-item>
      <v-tabbar-item badge="2">
        <img slot="icon" src="../../assets/d.png">
        <span slot="label">News</span>
      </v-tabbar-item>
    </v-tabbar>
  </div>
</template>

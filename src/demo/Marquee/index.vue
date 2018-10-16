<template>
  <div class="demo-block padding-tb-20">
    <v-divider>默认</v-divider>
    <v-marquee>
      <v-marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</v-marquee-item>
    </v-marquee>
    <br>
    <v-divider>在 v-cell 中使用</v-divider>
    <v-group>
      <v-cell title="公告">
        <v-marquee>
          <v-marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">JavaScript is the best language {{i}}</v-marquee-item>
        </v-marquee>
      </v-cell>
    </v-group>
    <br>
    <v-divider>异步数据</v-divider>
    <v-marquee>
      <v-marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</v-marquee-item>
    </v-marquee>
  </div>
</template>

<script>

export default {
  mounted() {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick(i) {
      console.log(i)
    }
  },
  data() {
    return {
      asyncCount: 0
    }
  }
}
</script>

<style scoped>
.align-middle {
  text-align: center;
}
</style>
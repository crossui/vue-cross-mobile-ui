<template>
  <div class="">
    <v-panel :list="list" type="6">

    </v-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        label: '<i class="vcuicon vcuicon-location"></i> <span>进行中</span>',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '<div>aaaaaa</div><div>bbbbbb</div>',
        url: '/component/cell'
      }, {
        label: '<i class="vcuicon vcuicon-location"></i> <span>未执行</span>',
        title: '标题二',
        desc: '<div>aaaaaa</div><div>bbbbbb</div>',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
</style>

<template>
  <div class="demo-block padding-tb-20">
    <v-divider>带有标题和内容的简单卡片</v-divider>
    <v-card :header="{title: '我的钱包' }">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vcu-1px-r">
          <span>1130</span>
          <br/>
          京豆
        </div>
          <div class="vcu-1px-r">
            <span>15</span>
            <br/>
          京东券
        </div>
            <div class="vcu-1px-r">
              <span>0</span>
              <br />
          京东卡/E卡
        </div>
              <div>
                <span>88</span>
                <br/>
                七天待还
              </div>
              </div>
    </v-card>

    <br>
    <v-divider>带有 footer 的卡片</v-divider>
    <v-card :header="{title: '商品详情' }" :footer="{title: '查看更多',link:'/Displaying/panel'}">
      <p slot="content" class="card-padding">自定义内容</p>
    </v-card>

    <br>
    <v-divider>使用 header slot 和 content slot</v-divider>
    <v-card>
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
        <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="less">
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
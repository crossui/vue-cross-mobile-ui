<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-cell title="我的账号" value="保护中" @click.native="onClick"></v-cell>
      <v-cell title="余额" @click.native="onClick" :is-loading="!money" value="-1024"></v-cell>
      <v-cell title="提现" disabled is-link></v-cell>
    </v-group>

    <v-group title="显示右边箭头">
      <v-cell is-link>
        <span slot="title" style="color:green;">
          <span style="vertical-align:middle;">消息</span>
        </span>
      </v-cell>
      <v-cell title="通知" is-link></v-cell>
      <v-cell title="隐私" is-link></v-cell>
      <v-cell title="通用" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </v-cell>
    </v-group>

    <v-group label-width="5em" title="Align-items">
      <v-cell primary="content" title="default" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></v-cell>
      <v-cell title="flex-start" align-items="flex-start" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></v-cell>
    </v-group>

    <v-group title="折叠">
      <v-cell title="标题一" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'" @click.native="showContent001 = !showContent001"></v-cell>

      <template v-if="showContent001">
        <v-cell-box :border-intent="false" class="sub-item" is-link>content 001</v-cell-box>
        <v-cell-box class="sub-item" is-link>content 001</v-cell-box>
        <v-cell-box class="sub-item" is-link>content 001</v-cell-box>
      </template>

      <v-cell title="标题二" is-link :border-intent="false" :arrow-direction="showContent002 ? 'up' : 'down'" @click.native="showContent002 = !showContent002"></v-cell>

      <template v-if="showContent002">
        <v-cell-form-preview :border-intent="false" :list="list">
        </v-cell-form-preview>
      </template>

      <v-cell title="标题三" is-link :border-intent="false" :arrow-direction="showContent003 ? 'up' : 'down'" @click.native="showContent003 = !showContent003"></v-cell>

      <template v-if="showContent003">
        <v-cell-box :border-intent="false" class="sub-item">I'm content 003</v-cell-box>
      </template>

      <v-cell title="动画效果" is-link :border-intent="false" :arrow-direction="showContent004 ? 'up' : 'down'" @click.native="showContent004 = !showContent004"></v-cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>

    </v-group>

    <v-group>
      <v-cell title="通知" value="已开启"></v-cell>
    </v-group>

    <v-group title="使用slot显示复杂内容">
      <v-cell title="slot 内容">
        <div>
          <span style="color: green">你好哇，感谢关注 VcuMobile</span>
        </div>
      </v-cell>
    </v-group>

    <v-group title="当设有 link 属性时，会自动产生箭头效果，无需再设置 is-link">
      <v-cell title="前往Button页面" link="/Basics/Button" inline-desc='link="/Basics/Button"'></v-cell>
      <v-cell title="前往Demo页面" :link="{path:'/'}" inline-desc=':link={path:"/"}'></v-cell>
      <v-cell title="站外链接" link="https://baidu.com" inline-desc='link="https://baidu.com"'></v-cell>
    </v-group>
  </div>
</template>
<script>

export default {
  mounted() {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  methods: {
    onClick() {
      console.log('on click')
    }
  },
  data() {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
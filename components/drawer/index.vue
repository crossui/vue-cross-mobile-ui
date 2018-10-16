<template>
  <div :class="warpCls" v-bind="$attrs">
    <div :class="`${prefixCls}-sidebar`" :style="sbStyle" ref="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div :class="`${prefixCls}-overlay`" :style="olStyle" @click="overlayClick" ref="overlay"></div>
    <div :class="`${prefixCls}-content`" :style="ctStyle" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>

/**
* this component is forked from: https://github.com/bajian/vue-drawer
*/
const prefixCls = 'vcu-drawer';
// 侧边栏位置列表
const posList = ['top', 'bottom', 'right', 'left'];
export default {
  name: 'VDrawer',
  props: {
    // 侧边栏初始展开状态
    open: {
      type: Boolean,
      default: false
    },
    // 是否嵌入到正常文档流里
    docked: Boolean,
    // 是否禁止背景点击
    forbidClick: {
      type: Boolean,
      default: false
    },
    // 侧边栏展示位置
    position: {
      type: String,
      default: "left",
      validator: function (value) {
        return posList.indexOf(value) !== -1;
      }
    },
    // 侧边栏自定义样式
    sidebarStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 遮罩层自定义样式
    overlayStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 侧边栏内容自定义样式
    contentStyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      prefixCls: prefixCls, // 类名前缀
      sidebarWidth: 0, // 侧边栏宽度
      sidebarHeight: 0 // 侧边栏高度
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.sidebarWidth = this.$refs.sidebar.clientWidth;
      this.sidebarHeight = this.$refs.sidebar.clientHeight;
    })
  },
  computed: {
    isPositionY() {
      return this.position === posList[0] || this.position === posList[1];
    },
    // 元素类集合
    warpCls() {
      return {
        [prefixCls]: true,
        [`${prefixCls}-${this.position}`]: true
      }
    },
    // 侧边栏样式
    sbStyle() {
      const resStyle = this.sidebarStyle;
      let transform = "";
      if (this.open) {
        if (this.isPositionY) {
          transform = 'translateY(0%)';
        } else {
          transform = 'translateX(0%)';
        }
      }
      resStyle.transform = transform;
      resStyle.visibility = this.open ? 'visible' : 'hidden';
      return resStyle;
    },
    // 遮罩层样式
    olStyle() {
      const resStyle = this.overlayStyle;
      resStyle.opacity = this.open ? 1 : 0;
      resStyle.visibility = this.open ? 'visible' : 'hidden';
      return resStyle;
    },
    // 侧边栏内容样式
    ctStyle() {
      const resStyle = this.contentStyle;
      let transform = "";
      if (this.open && this.docked) {
        switch (this.position) {
          case posList[0]: // up
            transform = `translateY(${this.sidebarHeight}px)`;
            break;
          case posList[1]: // down
            transform = `translateY(-${this.sidebarHeight}px)`;
            break;
          case posList[2]: // right
            transform = `translateX(-${this.sidebarWidth}px)`;
            break;
          case posList[3]: // left
          default:
            transform = `translateX(${this.sidebarWidth}px)`;
        }
      } else {
        if (this.isPositionY) {
          transform = 'translateY(0)';
        } else {
          transform = 'translateX(0)';
        }
      }
      resStyle.transform = transform;
      return resStyle;
    }
  },
  methods: {
    // 遮罩层点击事件
    overlayClick() {
      if (this.open && !this.forbidClick) {
        this.$emit('open-change', false, {
          overlayClick: true
        })
      }
    }
  }
}
</script>

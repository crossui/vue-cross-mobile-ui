# 定制主题

> vcuMobile 默认提供了一套 UI 主题，并且可以在一定程度上定制新主题，以满足业务和品牌上的多样化视觉需求。

> vcuMobile 的样式是基于 Less 进行开发的，默认以前缀 .vcu- 作为命名空间，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。

## 变量覆盖（推荐）

如果你的项目使用了 webpack 工程，可以通过变量覆盖的方式来实现主题定制。

首先在项目中先建一个目录，比如 my-theme，然后在 my-theme 下建立一个 less 文件 index.less，并写入下面内容：

```less
@import '~vcu-mobile/src/_style/index.less';

// Here are the variables to cover, such as:
@primary-color: #8c0776;
```

然后在入口文件 main.js 内导入这个 less 文件即可：

```jsx
import Vue from 'vue';
import { default as vcuMobile, Plugins} from 'vcu-mobile';
import '../my-theme/index.less';

Vue.use(vcuMobile);
for (let i = 0; i < Plugins.length; i++) {
    Vue.use(Plugins[i])
}
```




### 默认样式变量

```less
//gobal
@theme-color: #40a9ff;
@opacity-disabled: 0.5;
/* *
*   font
*/

@fontEN: "Helvetica",
"STHeiti STXihei",
"Tohoma",
"Arial",
"sans-serif";
@fontCN: "PingFang SC",
"Hiragino Sans GB",
"Microsoft YaHei";
@fontSans: sans-serif;
@fontDefault: @fontEN,
@fontSans;
// -------- Colors -----------
// color
@colorInfo: #2196f3;
@colorAmber: #ffc107;
@colorPrimary: #1AAD19;
@colorWarn: #E64340;
// link
@linkColorDefault: #586C94;
// background
@bgColorDefault: #EFEFF4;
@bgColorActive: #ECECEC;
// line
@lineColorLight: #E5E5E5;
@lineColorDark: #BCBAB6;
// text
@textColorTitle: #000000;
@textColorTips: #B2B2B2;
@textColorWarn: @colorWarn;
@textColorGray: #999999;
/** 
*   actionsheet
*/

@actionsheet-label-primary-color: #1AAD19;
@actionsheet-label-warn-color: #E64340;
@actionsheet-label-default-color: #000;
@actionsheet-label-disabled-color: #ccc;
/**
* datetime
*/

@datetime-header-item-font-color: @theme-color;
@datetime-header-item-cancel-font-color: #828282;
@datetime-header-item-confirm-font-color: @datetime-header-item-font-color;
/**
* tabbar
*/

@tabbar-text-active-color: #09BB07;
/**
* tab
*/

@tab-text-disabled-color: #ddd;
@tab-text-default-color: #666;
@tab-text-active-color: @theme-color;
@tab-bar-active-color: @theme-color;
/**
* number
*/

@number-button-font-color: @theme-color;
@number-input-font-color: #666;
@number-button-enabled-border-color: #ececec;
@number-square-button-enabled-border-color: @number-button-enabled-border-color;
@number-round-button-enabled-border-color: @number-button-font-color;
@number-button-disabled-border-color: @number-button-enabled-border-color;
@number-round-button-disabled-border-color: @number-button-enabled-border-color;
/**
* checkbox
*/

@checkbox-icon-color-checked: @theme-color;
/**
* check-icon
*/

@check-icon-color-checked: @checkbox-icon-color-checked;
/**
* Cell
*/

@cell-label-color: #000;
@cell-font-size: 17px;
@cell-tips-font-size: 13px;
@cell-default-arrow-color: #C8C8CD;
@cell-disabled-arrow-color: #e2e2e2;
@cell-default-arrow-border-width: 2px;
@cell-default-arrow-width: 6px;
@cell-value-color: #999;
@cell-placeholder-color: #999;
@cell-body-label-color: #000;
@cell-border-color: #eee;
@cell-bg: #FFFFFF;
@cell-gapV: 10px;
@cell-gapH: 15px;
@cell-inner-gapH: .35em;
@cell-height: 44px;
@cell-label-width: 105px;
@cell-line-height: unit((@cell-height - 2 * @cell-gapV) / @cell-font-size); // 高度为44px，减去上下padding的行高
@cell-s-margin-top: unit(20 / @cell-font-size, em);
@cell-box-font-size: 15px;
/**
* dialog
*/

@dialog-button-text-primary-color: @theme-color;
@dialog-button-text-default-color: #353535;
@dialog-button-text-warn-color: #E64340;
@dialog-width: 80%;
@dialog-max-width: 300px;
@dialog-gap-width: 1.6em;
@DialogBackgroundColor: #FFFFFF;
@DialogLineColor: #D5D5D6;
@DialogLinkColor: #D5D5D6;
@DialogLinkActiveBc: #EEEEEE;
@DialogGapWidth: 1.6em;
/**
* Mask
*/

@mask-background: rgba(0, 0, 0, .6);
/**
* Range
*/

@range-disabled-opacity: @opacity-disabled;
@range-bar-default-color: #a9acb1;
@range-bar-active-color: @theme-color;
/**
* Tabbar
*/

@tabbar-index: 100;
/**
* Header
*/

@header-background-color: @theme-color;
@header-title-color: #fff;
@header-text-color: #fff;
@header-arrow-color: #fff;
/**
* Timeline
*/

@timeline-item-bg-color: @theme-color;
/**
* Switch
*/

@switch-checked-bg-color: @theme-color;
@switch-checked-border-color: @theme-color;
@switch-disabled-opacity: 0.6;
@switch-height: 32px;
/**
* Button
*/

@button-global-border-radius: 5px;
@button-global-font-color: #FFFFFF;
@button-global-margin-top: 15px;
@button-global-height: 42px;
@button-global-disabled-font-color: rgba(255, 255, 255, .6);
@button-global-active-font-color: rgba(255, 255, 255, .6);
@button-global-font-size: 18px;
@button-mini-font-size: 13px;
@button-mini-line-height: 2.3;
@button-warn-bg-color: #E64340;
@button-warn-active-color: #CE3C39;
@button-warn-disabled-bg-color: #EC8B89;
@button-default-bg-color: #fff;
@button-default-font-color: #333;
@button-default-active-bg-color: #DEDEDE;
@button-default-disabled-font-color: rgba(0, 0, 0, .3);
@button-default-disabled-bg-color: #F7F7F7;
@button-default-active-font-color: rgba(0, 0, 0, .6);
@button-primary-bg-color: @theme-color;
@button-primary-active-bg-color: darken(@theme-color, 10%);
@button-primary-disabled-bg-color: lighten(@theme-color, 20%);
@button-plain-primary-color: @theme-color;
@button-plain-primary-border-color: @theme-color;
@button-plain-primary-active-color: darken(@theme-color, 10%);
@button-plain-primary-active-border-color: darken(@theme-color, 10%);
@button-plain-default-color: rgba(53, 53, 53, 1);
@button-plain-default-border-color: rgba(53, 53, 53, 1);
@button-plain-default-active-color: rgba(53, 53, 53, .6);
@button-plain-default-active-border-color: rgba(53, 53, 53, .6);
@button-plain-warn-color: rgba(206, 60, 57, 1);
@button-plain-warn-border-color: rgba(206, 60, 57, 1);
@button-plain-warn-active-color: rgba(206, 60, 57, .6);
@button-plain-warn-active-border-color: rgba(206, 60, 57, .6);
@button-cells-margin-top: unit(20 / @cell-font-size, em);
/**
* swipeout
*/

@swipeout-button-primary-bg-color: @button-primary-bg-color;
@swipeout-button-warn-bg-color: @button-warn-bg-color;
@swipeout-button-default-bg-color: #c8c7cd;
@swipeout-content-bg-color: #FFF;
@swipeout-button-font-color: #FFF;
/**
* Badge
*/

@badge-bg-color: #f74c31;
/**
* Popover
*/

@popover-bg-color: @theme-color;
@popover-font-color: #fff;
@popover-border-radius: 3px;
@popover-border-width: 5px;
/**
* Button tab
*/

@button-tab-border-width: 1px;
@button-tab-border-radius: 16px;
@button-tab-border-color: @theme-color;
@button-tab-default-border-color: @button-tab-border-color;
@button-tab-active-border-color: @button-tab-border-color;
@button-tab-default-background-color: #fdfdfd;
@button-tab-active-background-color: @theme-color;
@button-tab-active-font-color: #FFF;
@button-tab-active-text-color: @button-tab-active-font-color;
@button-tab-default-text-color: #999;
@button-tab-height: 30px;
@button-tab-line-height: 31px;
/**
* Swiper
*/

@swiper-indicator-active-color: @theme-color;
/**
* checklist
*/

@checklist-icon-active-color: @theme-color;
/**
* popup-picker
*/

@popup-picker-header-text-color: @theme-color;
@popup-picker-header-bg-color: #fbf9fe;
@popup-picker-header-font-size: 16px;
@popup-picker-header-cancel-text-color: #828282;
/**
* popup
*/

@popup-background-color: #eee;
/**
* popup-header
*/

@popup-header-height: 44px;
@popup-header-bg-color: #fbf9fe;
@popup-header-font-size: 16px;
@popup-header-left-text-color: #828282;
@popup-header-right-text-color: @theme-color;
@popup-header-title-text-color: #222;
@popup-header-left-text-padding: 15px;
@popup-header-right-text-padding: 15px;
/**
* form-preview
*/

@form-preview-button-primary-color: @theme-color;
/**
* sticky
*/

@sticky-zindex: 500;
/**
* group
*/

@group-title-margin-top: .77em;
@group-title-margin-bottom: .3em;
@group-footer-title-margin-top: .3em;
@group-footer-title-margin-bottom: .77em;
/**
* toast
*/

@toast-content-font-size: 16px;
@toast-top: 180px;
@toast-position-top-offset: 10px;
@toast-position-bottom-offset: 10px;
@toast-z-index: 5001;
/**
* icon
*/

@icon-success-color: @theme-color;
/**
* calendar
*/

@calendar-arrow-color: @theme-color;
@calendar-highlight-color: #E59313;
@calendar-selected-bg-color: @theme-color;
@calendar-disabled-font-color: #c0c0c0;
@calendar-today-font-color: @theme-color;
@calendar-date-item-font-size: 16px;
@calendar-bg-color: #fff;
@calendar-each-date-item-size: 26px;
@calendar-each-date-item-line-height: 25px;
@calendar-header-day-item-color: #000;
/**
* week-calendar
*/

@week-calendar-bg: #fff;
@week-calendar-each-date-item-size: 26px;
@week-calendar-each-date-item-line-height: 25px;
@week-calendar-each-date-item-color: #444;
@week-calendar-selected-item-bg-color: @theme-color;
@week-calendar-selected-item-text-color: #fff;
@week-calendar-dot-color: #f74c31;
@week-calendar-header-day-item-color: #000;
/**
* search
*/

@search-cancel-font-color: @theme-color;
@search-bg-color: #EFEFF4;
@search-placeholder-font-color: #9B9B9B;
@radio-checked-icon-color: @theme-color;
@load-more-line-color: #E5E5E5;
@loading-z-index: 5001;
/**
* grid
*/

@grid-border-color: #D9D9D9;
@grid--font-size: 14px;
@grid-icon-size: 28px;
@grid-column-count: 3;
/**
* Msg
*/

@MsgPaddingTop: 36px;
@MsgIconGap: 30px;
@MsgTitleGap: 5px;
@MsgTextGap: 25px;
@MsgOprGap: 25px;
@MsgExtraAreaGap: 15px;
@MsgExtraAreaOfMinHeight: 438px;
/* 
* modal
*/

@modal-z-index: 2000;
@modal_color: #474a4f;
@modal_body_color: #7e848c;
```
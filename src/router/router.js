import Main from '@/appMain.vue';


export const home = {
    path: '/home',
    name: 'home',
    meta: {
        title: '首页'
    },
    component: () =>
        import ('@/demo/home.vue')
};

export const menuRouter = [{
        path: '/Basics',
        name: 'Basics',
        title: '基础组件',
        showInMobile: false,
        component: Main,
        children: [{
                path: 'Button',
                name: 'Button',
                title: 'Button 按钮',
                component: () =>
                    import ('@/demo/Button/index.vue')
            },
            {
                path: 'Icon',
                name: 'Icon',
                title: 'Icon 图标',
                component: () =>
                    import ('@/demo/Icon/index.vue')
            },
            {
                path: 'Group',
                name: 'Group',
                title: 'Group 组',
                component: () =>
                    import ('@/demo/Group/index.vue')
            },
            {
                path: 'Cell',
                name: 'Cell',
                title: 'Cell 单元格',
                component: () =>
                    import ('@/demo/Cell/index.vue')
            },
            {
                path: 'CellBox',
                name: 'CellBox',
                title: 'CellBox 单元组',
                component: () =>
                    import ('@/demo/CellBox/index.vue')
            },
            {
                path: 'CellFormPreview',
                name: 'CellFormPreview',
                title: 'CellFormPreview 预览单元表单',
                component: () =>
                    import ('@/demo/CellFormPreview/index.vue')
            },
        ]
    },
    {
        path: '/Layout',
        name: 'Layout',
        title: '布局',
        showInMobile: false,
        component: Main,
        children: [{
                path: 'Divider',
                name: 'Divider',
                title: 'Divider 分割线',
                component: () =>
                    import ('@/demo/Divider/index.vue')
            },
            {
                path: 'Flexbox',
                name: 'Flexbox',
                title: 'Flexbox 伸缩布局盒',
                component: () =>
                    import ('@/demo/Flexbox/index.vue')
            },
            {
                path: 'Grid',
                name: 'Grid',
                title: 'Grid 栅格',
                component: () =>
                    import ('@/demo/Grid/index.vue')
            }
        ]
    },
    {
        path: '/Form',
        name: 'Form',
        title: '表单',
        showInMobile: false,
        component: Main,
        children: [{
                path: 'Picker',
                name: 'Picker',
                title: 'Picker 联动选择器',
                component: () =>
                    import ('@/demo/Picker/index.vue')
            },
            {
                path: 'Datetime',
                name: 'Datetime',
                title: 'Datetime 日期和时间选择器',
                component: () =>
                    import ('@/demo/Datetime/index.vue')
            },
            {
                path: 'DatetimeRange',
                name: 'DatetimeRange',
                title: 'DatetimeRange 日期时间范围',
                component: () =>
                    import ('@/demo/DatetimeRange/index.vue')
            },
            {
                path: 'InlineCalendar',
                name: 'InlineCalendar',
                title: 'InlineCalendar 内联日历',
                component: () =>
                    import ('@/demo/InlineCalendar/index.vue')
            },
            {
                path: 'Calendar',
                name: 'Calendar',
                title: 'Calendar 日历',
                component: () =>
                    import ('@/demo/Calendar/index.vue')
            },
            {
                path: 'InlineSwitch',
                name: 'InlineSwitch',
                title: 'InlineSwitch 内联开关',
                component: () =>
                    import ('@/demo/InlineSwitch/index.vue')
            },
            {
                path: 'Switch',
                name: 'Switch',
                title: 'Switch 开关',
                component: () =>
                    import ('@/demo/Switch/index.vue')
            },
            {
                path: 'Checklist',
                name: 'Checklist',
                title: 'Checklist 复选框列表',
                component: () =>
                    import ('@/demo/Checklist/index.vue')
            },
            {
                path: 'Radio',
                name: 'Radio',
                title: 'Radio 单选框',
                component: () =>
                    import ('@/demo/Radio/index.vue')
            },
            {
                path: 'CheckIcon',
                name: 'CheckIcon',
                title: 'CheckIcon 复选框图标',
                component: () =>
                    import ('@/demo/CheckIcon/index.vue')
            },
            {
                path: 'Checker',
                name: 'Checker',
                title: 'Checker 选择器',
                component: () =>
                    import ('@/demo/Checker/index.vue')
            },
            {
                path: 'Number',
                name: 'Number',
                title: 'Number 数字选择器',
                component: () =>
                    import ('@/demo/Number/index.vue')
            },
            {
                path: 'InlineNumber',
                name: 'InlineNumber',
                title: 'InlineNumber 内联数字选择器',
                component: () =>
                    import ('@/demo/InlineNumber/index.vue')
            },
            {
                path: 'Rater',
                name: 'Rater',
                title: 'Rater 评价',
                component: () =>
                    import ('@/demo/Rater/index.vue')
            },
            {
                path: 'Range',
                name: 'Range',
                title: 'Range 范围、值域',
                component: () =>
                    import ('@/demo/Range/index.vue')
            },
            {
                path: 'Selector',
                name: 'Selector',
                title: 'Selector 地区选择器',
                component: () =>
                    import ('@/demo/Selector/index.vue')
            },
            {
                path: 'Swipeout',
                name: 'Swipeout',
                title: 'Swipeout 滑出',
                component: () =>
                    import ('@/demo/Swipeout/index.vue')
            },
            {
                path: 'Search',
                name: 'Search',
                title: 'Search 搜索',
                component: () =>
                    import ('@/demo/Search/index.vue')
            },
            {
                path: 'Input',
                name: 'Input',
                title: 'Input 输入框',
                component: () =>
                    import ('@/demo/Input/index.vue')
            },
            {
                path: 'Textarea',
                name: 'Textarea',
                title: 'Textarea 文本框',
                component: () =>
                    import ('@/demo/Textarea/index.vue')
            },
            {
                path: 'PopupPicker',
                name: 'PopupPicker',
                title: 'PopupPicker 选择器弹出',
                component: () =>
                    import ('@/demo/PopupPicker/index.vue')
            },
            {
                path: 'PopupRadio',
                name: 'PopupRadio',
                title: 'PopupRadio 单选框弹出',
                component: () =>
                    import ('@/demo/PopupRadio/index.vue')
            },
            {
                path: 'Address',
                name: 'Address',
                title: 'Address 地址',
                component: () =>
                    import ('@/demo/Address/index.vue')
            },
        ]
    },
    {
        path: '/Navigation',
        name: 'Navigation',
        title: '导航',
        showInMobile: false,
        component: Main,
        children: [{
                path: 'Sticky',
                name: 'Sticky',
                title: 'Sticky 固定元素',
                component: () =>
                    import ('@/demo/Sticky/index.vue')
            },
            {
                path: 'Header',
                name: 'Header',
                title: 'Header 头部',
                component: () =>
                    import ('@/demo/Header/index.vue')
            },
            {
                path: 'Tab',
                name: 'Tab',
                title: 'Tab 选项卡',
                component: () =>
                    import ('@/demo/Tab/index.vue')
            },
            {
                path: 'Tabbar',
                name: 'Tabbar',
                title: 'Tabbar 底部导航',
                component: () =>
                    import ('@/demo/Tabbar/index.vue')
            },
            {
                path: 'ButtonTab',
                name: 'ButtonTab',
                title: 'ButtonTab 按钮选项卡',
                component: () =>
                    import ('@/demo/ButtonTab/index.vue')
            },
            {
                path: 'Drawer',
                name: 'Drawer',
                title: 'Drawer 侧边栏菜单',
                component: () =>
                    import ('@/demo/Drawer/index.vue')
            }
        ]
    },
    {
        path: '/Popups',
        name: 'Popups',
        title: '弹窗',
        showInMobile: false,
        component: Main,
        children: [{
                path: 'Popup',
                name: 'Popup',
                title: 'Popup Swich滑块面板',
                component: () =>
                    import ('@/demo/Popup/index.vue')
            },
            {
                path: 'PopupHeader',
                name: 'PopupHeader',
                title: 'PopupHeader 下拉选择面板',
                component: () =>
                    import ('@/demo/PopupHeader/index.vue')
            },
            {
                path: 'Toast',
                name: 'Toast',
                title: 'Toast 提示窗',
                component: () =>
                    import ('@/demo/Toast/index.vue')
            },
            {
                path: 'Actionsheet',
                name: 'Actionsheet',
                title: 'Actionsheet 底部分享面板',
                component: () =>
                    import ('@/demo/Actionsheet/index.vue')
            },
            {
                path: 'Loading',
                name: 'Loading',
                title: 'Loading loading弹窗',
                component: () =>
                    import ('@/demo/Loading/index.vue')
            },
            {
                path: 'Modal',
                name: 'Modal',
                title: 'Modal 提示窗',
                component: () =>
                    import ('@/demo/Modal/index.vue')
            },
            {
                path: 'Popover',
                name: 'Popover',
                title: 'Popover tips提示窗',
                component: () =>
                    import ('@/demo/Popover/index.vue')
            }
        ]
    },
    {
        path: '/Displaying',
        name: 'Displaying',
        title: '视图',
        showInMobile: false,
        component: Main,
        children: [{
                path: 'Badge',
                name: 'Badge',
                title: 'Badge 上标红点',
                component: () =>
                    import ('@/demo/Badge/index.vue')
            },
            {
                path: 'FormPreview',
                name: 'FormPreview',
                title: 'FormPreview 表单预览',
                component: () =>
                    import ('@/demo/FormPreview/index.vue')
            },
            {
                path: 'Card',
                name: 'Card',
                title: 'Card 卡片视图',
                component: () =>
                    import ('@/demo/Card/index.vue')
            },
            {
                path: 'Panel',
                name: 'Panel',
                title: 'Panel 图文面板',
                component: () =>
                    import ('@/demo/Panel/index.vue')
            },
            {
                path: 'InlineLoading',
                name: 'InlineLoading',
                title: 'InlineLoading 单行loading层',
                component: () =>
                    import ('@/demo/InlineLoading/index.vue')
            },
            {
                path: 'LoadMore',
                name: 'LoadMore',
                title: 'LoadMore 加载更多',
                component: () =>
                    import ('@/demo/LoadMore/index.vue')
            },
            {
                path: 'Msg',
                name: 'Msg',
                title: 'Msg 成功(失败)页面',
                component: () =>
                    import ('@/demo/Msg/index.vue')
            },
            {
                path: 'Swiper',
                name: 'Swiper',
                title: 'Swiper 滑块',
                component: () =>
                    import ('@/demo/Swiper/index.vue')
            },
            {
                path: 'Timeline',
                name: 'Timeline',
                title: 'Timeline 时间轴',
                component: () =>
                    import ('@/demo/Timeline/index.vue')
            },
            {
                path: 'Table',
                name: 'Table',
                title: 'Table 表格',
                component: () =>
                    import ('@/demo/Table/index.vue')
            },
            {
                path: 'Step',
                name: 'Step',
                title: 'Step 步骤',
                component: () =>
                    import ('@/demo/Step/index.vue')
            },
            {
                path: 'Qrcode',
                name: 'Qrcode',
                title: 'Qrcode 二维码',
                component: () =>
                    import ('@/demo/Qrcode/index.vue')
            },
            {
                path: 'Previewer',
                name: 'Previewer',
                title: 'Previewer 图片预览',
                component: () =>
                    import ('@/demo/Previewer/index.vue')
            },
            {
                path: 'Marquee',
                name: 'Marquee',
                title: 'Marquee 跑马灯',
                component: () =>
                    import ('@/demo/Marquee/index.vue')
            },
            {
                path: 'Flow',
                name: 'Flow',
                title: 'Flow 流程进度条',
                component: () =>
                    import ('@/demo/Flow/index.vue')
            },
            {
                path: 'Spinner',
                name: 'Spinner',
                title: 'Spinner loading图标样式',
                component: () =>
                    import ('@/demo/Spinner/index.vue')
            },
        ]
    },
];
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    home,
    ...menuRouter
];
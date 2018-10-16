import Main from '../appMain.vue';

const demoUrlBase = 'http://vcumobile-demo.getvcu.com/#'

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [{
            path: 'getting-started',
            title: '快速上手',
            name: 'getting-started',
            component: () =>
                import ('../pages/getting-started.md')
        },
        {
            path: 'themes',
            title: '定制主题',
            name: 'themes',
            component: () =>
                import ('../pages/themes.md')
        },
        {
            path: 'directives',
            title: '指令 Directives',
            name: 'directives',
            component: () =>
                import ('../pages/v-transfer-dom.md')
        },
        {
            path: 'mores',
            title: '更多组件',
            name: 'mores',
            component: () =>
                import ('../pages/mores.md')
        },
        {
            path: 'test',
            title: '测试',
            name: 'test_index',
            component: () =>
                import ('../pages/test.vue')
        },
    ]
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
                meta: {
                    demourl: `${demoUrlBase}/Basics/Button`
                },
                component: () =>
                    import ('../pages/Button.md')
            },
            {
                path: 'Icon',
                name: 'Icon',
                title: 'Icon 图标',
                meta: {
                    demourl: `${demoUrlBase}/Basics/Icon`
                },
                component: () =>
                    import ('../pages/Icon.md')
            },
            {
                path: 'Group',
                name: 'Group',
                title: 'Group 组',
                meta: {
                    demourl: `${demoUrlBase}/Basics/Group`
                },
                component: () =>
                    import ('../pages/Group.md')
            },
            {
                path: 'Cell',
                name: 'Cell',
                title: 'Cell 单元格',
                meta: {
                    demourl: `${demoUrlBase}/Basics/Cell`
                },
                component: () =>
                    import ('../pages/Cell.md')
            },
            {
                path: 'CellBox',
                name: 'CellBox',
                title: 'CellBox 单元组',
                meta: {
                    demourl: `${demoUrlBase}/Basics/CellBox`
                },
                component: () =>
                    import ('../pages/CellBox.md')
            },
            {
                path: 'CellFormPreview',
                name: 'CellFormPreview',
                title: 'CellFormPreview 预览单元表单',
                meta: {
                    demourl: `${demoUrlBase}/Basics/CellFormPreview`
                },
                component: () =>
                    import ('../pages/CellFormPreview.md')
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
                meta: {
                    demourl: `${demoUrlBase}/Layout/Divider`
                },
                component: () =>
                    import ('../pages/Divider.md')
            },
            {
                path: 'Flexbox',
                name: 'Flexbox',
                title: 'Flexbox 伸缩布局盒',
                meta: {
                    demourl: `${demoUrlBase}/Layout/Flexbox`
                },
                component: () =>
                    import ('../pages/Flexbox.md')
            },
            {
                path: 'Grid',
                name: 'Grid',
                title: 'Grid 栅格',
                meta: {
                    demourl: `${demoUrlBase}/Layout/Grid`
                },
                component: () =>
                    import ('../pages/Grid.md')
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
                meta: {
                    demourl: `${demoUrlBase}/Form/Picker`
                },
                component: () =>
                    import ('../pages/Picker.md')
            },
            {
                path: 'Datetime',
                name: 'Datetime',
                title: 'Datetime 日期和时间选择器',
                meta: {
                    demourl: `${demoUrlBase}/Form/Datetime`
                },
                component: () =>
                    import ('../pages/Datetime.md')
            },
            {
                path: 'DatetimeRange',
                name: 'DatetimeRange',
                title: 'DatetimeRange 日期时间范围',
                meta: {
                    demourl: `${demoUrlBase}/Form/DatetimeRange`
                },
                component: () =>
                    import ('../pages/DatetimeRange.md')
            },
            {
                path: 'InlineCalendar',
                name: 'InlineCalendar',
                title: 'InlineCalendar 内联日历',
                meta: {
                    demourl: `${demoUrlBase}/Form/InlineCalendar`
                },
                component: () =>
                    import ('../pages/InlineCalendar.md')
            },
            {
                path: 'Calendar',
                name: 'Calendar',
                title: 'Calendar 日历',
                meta: {
                    demourl: `${demoUrlBase}/Form/Calendar`
                },
                component: () =>
                    import ('../pages/Calendar.md')
            },
            {
                path: 'InlineSwitch',
                name: 'InlineSwitch',
                title: 'InlineSwitch 内联开关',
                meta: {
                    demourl: `${demoUrlBase}/Form/InlineSwitch`
                },
                component: () =>
                    import ('../pages/InlineSwitch.md')
            },
            {
                path: 'Switch',
                name: 'Switch',
                title: 'Switch 开关',
                meta: {
                    demourl: `${demoUrlBase}/Form/Switch`
                },
                component: () =>
                    import ('../pages/Switch.md')
            },
            {
                path: 'Checklist',
                name: 'Checklist',
                title: 'Checklist 复选框列表',
                meta: {
                    demourl: `${demoUrlBase}/Form/Checklist`
                },
                component: () =>
                    import ('../pages/Checklist.md')
            },
            {
                path: 'Radio',
                name: 'Radio',
                title: 'Radio 单选框',
                meta: {
                    demourl: `${demoUrlBase}/Form/Radio`
                },
                component: () =>
                    import ('../pages/Radio.md')
            },
            {
                path: 'CheckIcon',
                name: 'CheckIcon',
                title: 'CheckIcon 复选框图标',
                meta: {
                    demourl: `${demoUrlBase}/Form/CheckIcon`
                },
                component: () =>
                    import ('../pages/CheckIcon.md')
            },
            {
                path: 'Checker',
                name: 'Checker',
                title: 'Checker 选择器',
                meta: {
                    demourl: `${demoUrlBase}/Form/Checker`
                },
                component: () =>
                    import ('../pages/Checker.md')
            },
            {
                path: 'Number',
                name: 'Number',
                title: 'Number 数字选择器',
                meta: {
                    demourl: `${demoUrlBase}/Form/Number`
                },
                component: () =>
                    import ('../pages/Number.md')
            },
            {
                path: 'InlineNumber',
                name: 'InlineNumber',
                title: 'InlineNumber 内联数字选择器',
                meta: {
                    demourl: `${demoUrlBase}/Form/InlineNumber`
                },
                component: () =>
                    import ('../pages/InlineNumber.md')
            },
            {
                path: 'Rater',
                name: 'Rater',
                title: 'Rater 评价',
                meta: {
                    demourl: `${demoUrlBase}/Form/Rater`
                },
                component: () =>
                    import ('../pages/Rater.md')
            },
            {
                path: 'Range',
                name: 'Range',
                title: 'Range 范围、值域',
                meta: {
                    demourl: `${demoUrlBase}/Form/Range`
                },
                component: () =>
                    import ('../pages/Range.md')
            },
            {
                path: 'Selector',
                name: 'Selector',
                title: 'Selector 地区选择器',
                meta: {
                    demourl: `${demoUrlBase}/Form/Selector`
                },
                component: () =>
                    import ('../pages/Selector.md')
            },
            {
                path: 'Swipeout',
                name: 'Swipeout',
                title: 'Swipeout 滑出',
                meta: {
                    demourl: `${demoUrlBase}/Form/Swipeout`
                },
                component: () =>
                    import ('../pages/Swipeout.md')
            },
            {
                path: 'Search',
                name: 'Search',
                title: 'Search 搜索',
                meta: {
                    demourl: `${demoUrlBase}/Form/Search`
                },
                component: () =>
                    import ('../pages/Search.md')
            },
            {
                path: 'Input',
                name: 'Input',
                title: 'Input 输入框',
                meta: {
                    demourl: `${demoUrlBase}/Form/Input`
                },
                component: () =>
                    import ('../pages/Input.md')
            },
            {
                path: 'Textarea',
                name: 'Textarea',
                title: 'Textarea 文本框',
                meta: {
                    demourl: `${demoUrlBase}/Form/Textarea`
                },
                component: () =>
                    import ('../pages/Textarea.md')
            },
            {
                path: 'PopupPicker',
                name: 'PopupPicker',
                title: 'PopupPicker 选择器弹出',
                meta: {
                    demourl: `${demoUrlBase}/Form/PopupPicker`
                },
                component: () =>
                    import ('../pages/PopupPicker.md')
            },
            {
                path: 'PopupRadio',
                name: 'PopupRadio',
                title: 'PopupRadio 单选框弹出',
                meta: {
                    demourl: `${demoUrlBase}/Form/PopupRadio`
                },
                component: () =>
                    import ('../pages/PopupRadio.md')
            },
            {
                path: 'Address',
                name: 'Address',
                title: 'Address 地址',
                meta: {
                    demourl: `${demoUrlBase}/Form/Address`
                },
                component: () =>
                    import ('../pages/Address.md')
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
                meta: {
                    demourl: `${demoUrlBase}/Navigation/Sticky`
                },
                component: () =>
                    import ('../pages/Sticky.md')
            },
            {
                path: 'Header',
                name: 'Header',
                title: 'Header 头部',
                meta: {
                    demourl: `${demoUrlBase}/Navigation/Header`
                },
                component: () =>
                    import ('../pages/Header.md')
            },
            {
                path: 'Tab',
                name: 'Tab',
                title: 'Tab 选项卡',
                meta: {
                    demourl: `${demoUrlBase}/Navigation/Tab`
                },
                component: () =>
                    import ('../pages/Tab.md')
            },
            {
                path: 'Tabbar',
                name: 'Tabbar',
                title: 'Tabbar 底部导航',
                meta: {
                    demourl: `${demoUrlBase}/Navigation/Tabbar`
                },
                component: () =>
                    import ('../pages/Tabbar.md')
            },
            {
                path: 'ButtonTab',
                name: 'ButtonTab',
                title: 'ButtonTab 按钮选项卡',
                meta: {
                    demourl: `${demoUrlBase}/Navigation/ButtonTab`
                },
                component: () =>
                    import ('../pages/ButtonTab.md')
            },
            {
                path: 'Drawer',
                name: 'Drawer',
                title: 'Drawer 侧边栏菜单',
                meta: {
                    demourl: `${demoUrlBase}/Navigation/Drawer`
                },
                component: () =>
                    import ('../pages/Drawer.md')
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
                meta: {
                    demourl: `${demoUrlBase}/Popups/Popup`
                },
                component: () =>
                    import ('../pages/Popup.md')
            },
            {
                path: 'PopupHeader',
                name: 'PopupHeader',
                title: 'PopupHeader 下拉选择面板',
                meta: {
                    demourl: `${demoUrlBase}/Popups/PopupHeader`
                },
                component: () =>
                    import ('../pages/PopupHeader.md')
            },
            {
                path: 'Toast',
                name: 'Toast',
                title: 'Toast 提示窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Toast`
                },
                component: () =>
                    import ('../pages/Toast.md')
            },
            {
                path: 'Actionsheet',
                name: 'Actionsheet',
                title: 'Actionsheet 底部分享面板',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Actionsheet`
                },
                component: () =>
                    import ('../pages/Actionsheet.md')
            },
            {
                path: 'Loading',
                name: 'Loading',
                title: 'Loading loading弹窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Loading`
                },
                component: () =>
                    import ('../pages/Loading.md')
            },
            /* {
                path: 'Dialog',
                name: 'Dialog',
                title: 'Dialog 自定义弹窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Dialog`
                },
                component: () =>
                    import ('../pages/Dialog.md')
            },
            {
                path: 'Alert',
                name: 'Alert',
                title: 'Alert 提示窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Alert`
                },
                component: () =>
                    import ('../pages/Alert.md')
            },
            {
                path: 'Confirm',
                name: 'Confirm',
                title: 'Confirm 提示窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Confirm`
                },
                component: () =>
                    import ('../pages/Confirm.md')
            }, */

            {
                path: 'Modal',
                name: 'Modal',
                title: 'Modal 提示窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Modal`
                },
                component: () =>
                    import ('../pages/Modal.md')
            },
            {
                path: 'Popover',
                name: 'Popover',
                title: 'Popover tips提示窗',
                meta: {
                    demourl: `${demoUrlBase}/Popups/Popover`
                },
                component: () =>
                    import ('../pages/Popover.md')
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
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Badge`
                },
                component: () =>
                    import ('../pages/Badge.md')
            },
            {
                path: 'FormPreview',
                name: 'FormPreview',
                title: 'FormPreview 表单预览',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/FormPreview`
                },
                component: () =>
                    import ('../pages/FormPreview.md')
            },
            {
                path: 'Card',
                name: 'Card',
                title: 'Card 卡片视图',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Card`
                },
                component: () =>
                    import ('../pages/Card.md')
            },
            {
                path: 'Panel',
                name: 'Panel',
                title: 'Panel 图文面板',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Panel`
                },
                component: () =>
                    import ('../pages/Panel.md')
            },
            {
                path: 'InlineLoading',
                name: 'InlineLoading',
                title: 'InlineLoading 单行loading层',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/InlineLoading`
                },
                component: () =>
                    import ('../pages/InlineLoading.md')
            },
            {
                path: 'LoadMore',
                name: 'LoadMore',
                title: 'LoadMore 加载更多',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/LoadMore`
                },
                component: () =>
                    import ('../pages/LoadMore.md')
            },
            {
                path: 'Msg',
                name: 'Msg',
                title: 'Msg 成功(失败)页面',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Msg`
                },
                component: () =>
                    import ('../pages/Msg.md')
            },
            {
                path: 'Swiper',
                name: 'Swiper',
                title: 'Swiper 滑块',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Swiper`
                },
                component: () =>
                    import ('../pages/Swiper.md')
            },
            {
                path: 'Timeline',
                name: 'Timeline',
                title: 'Timeline 时间轴',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Timeline`
                },
                component: () =>
                    import ('../pages/Timeline.md')
            },
            {
                path: 'Table',
                name: 'Table',
                title: 'Table 表格',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Table`
                },
                component: () =>
                    import ('../pages/Table.md')
            },
            {
                path: 'Step',
                name: 'Step',
                title: 'Step 步骤',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Step`
                },
                component: () =>
                    import ('../pages/Step.md')
            },
            {
                path: 'Qrcode',
                name: 'Qrcode',
                title: 'Qrcode 二维码',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Qrcode`
                },
                component: () =>
                    import ('../pages/Qrcode.md')
            },
            {
                path: 'Previewer',
                name: 'Previewer',
                title: 'Previewer 图片预览',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Previewer`
                },
                component: () =>
                    import ('../pages/Previewer.md')
            },
            {
                path: 'Marquee',
                name: 'Marquee',
                title: 'Marquee 跑马灯',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Marquee`
                },
                component: () =>
                    import ('../pages/Marquee.md')
            },
            {
                path: 'Flow',
                name: 'Flow',
                title: 'Flow 流程进度条',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Flow`
                },
                component: () =>
                    import ('../pages/Flow.md')
            },
            {
                path: 'Spinner',
                name: 'Spinner',
                title: 'Spinner loading图标样式',
                meta: {
                    demourl: `${demoUrlBase}/Displaying/Spinner`
                },
                component: () =>
                    import ('../pages/Spinner.md')
            },
        ]
    },
];
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    otherRouter,
    ...menuRouter
];
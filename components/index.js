// This file is auto gererated by build/build-entry.js
import { default as Button } from './button'

import { default as Icon } from './icon'

import { default as Divider } from './divider'

import { Flexbox, FlexboxItem } from './flexbox'

import { Grid, GridItem } from './grid'

import { default as Sticky } from './sticky'

import { default as ViewBox } from './view-box'

import { default as Cell } from './cell'

import { default as CellBox } from './cell-box'

import { default as CellFormPreview } from './cell-form-preview'

import { default as InlineDesc } from './inline-desc'

import { default as Popup } from './popup'

import { default as PopupHeader } from './popup-header'

import { default as PopupPicker } from './popup-picker'

import { default as PopupRadio } from './popup-radio'

import { default as Group } from './group'

import { default as GroupTitle } from './group-title'

import { default as Picker } from './picker'

import { default as Datetime } from './datetime'

import { default as DatetimeRange } from './datetime-range'

import { default as InlineCalendar } from './inline-calendar'

import { default as Calendar } from './calendar'

import { default as InlineSwitch } from './inline-switch'

import { default as Switch } from './switch'

import { default as Badge } from './badge'

import { default as Tip } from './tip'

import { default as Checklist } from './checklist'

import { default as Radio } from './radio'

import { default as CheckIcon } from './check-icon'

import { Checker, CheckerItem } from './checker'

import { default as FormPreview } from './form-preview'

import { default as Number } from './number'

import { default as InlineNumber } from './inline-number'

import { default as Rater } from './rater'

import { default as Range } from './range'

import { default as Selector } from './selector'

import { Swipeout, SwipeoutItem, SwipeoutButton } from './swipeout'

import { default as Search } from './search'

import { default as Toast } from './toast'

import { default as Input } from './input'

import { default as Textarea } from './textarea'

import { default as Address } from './address'

import { default as Card } from './card'

import { default as Panel } from './panel'

import { default as Actionsheet } from './actionsheet'

import { default as Loading } from './loading'

import { default as InlineLoading } from './inline-loading'

import { default as LoadMore } from './load-more'

import { default as Msg } from './msg'

import { default as Popover } from './popover'

import { default as Header } from './header'

import { Tab, TabItem } from './tab'

import { Swiper, SwiperItem } from './swiper'

import { ButtonTab, ButtonTabItem } from './button-tab'

import { Tabbar, TabbarItem } from './tabbar'

import { default as Drawer } from './drawer'

import { Timeline, TimelineItem } from './timeline'

import { default as Table } from './table'

import { Step, StepItem } from './step'

import { default as Qrcode } from './qrcode'

import { default as Previewer } from './previewer'

import { Marquee, MarqueeItem } from './marquee'

import { Flow, FlowLine, FlowState } from './flow'

import { default as Spinner } from './spinner'

import { Alert, Modal, Confirm, Prompt } from './modal'

//自定义全局指令
import InviewDirective from './directives/inview/index.js'

import TransferDom from './directives/transfer-dom/index.js'

import TransferDomDirective from './directives/transfer-dom/index.js'

import ClickOutsideDirective from './directives/click-outside/index.js'

//全局插件
import ToastPlugin from './plugins/toast/index.js'

import DatetimePlugin from './plugins/datetime/index.js'

import LoadingPlugin from './plugins/loading/index.js'

import AlertPlugin from './plugins/alert/index.js'

import ConfirmPlugin from './plugins/confirm/index.js'

import ModalPlugin from './plugins/modal/index.js'

import PromptPlugin from './plugins/prompt/index.js'

import CloseDialogsPlugin from './plugins/close-dialogs/index.js'



const version = '1.0.0';
const components = [
    Button,
    Icon,
    Divider,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    Sticky,
    ViewBox,
    Cell,
    CellBox,
    CellFormPreview,
    InlineDesc,
    Popup,
    PopupHeader,
    PopupPicker,
    PopupRadio,
    Group,
    GroupTitle,
    Picker,
    Datetime,
    DatetimeRange,
    InlineCalendar,
    Calendar,
    InlineSwitch,
    Switch,
    Badge,
    Tip,
    Checklist,
    Radio,
    CheckIcon,
    Checker,
    CheckerItem,
    FormPreview,
    Number,
    InlineNumber,
    Rater,
    Range,
    Selector,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Search,
    Toast,
    Input,
    Textarea,
    Address,
    Card,
    Panel,
    Actionsheet,
    Loading,
    InlineLoading,
    LoadMore,
    Msg,
    Popover,
    Header,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    ButtonTab,
    ButtonTabItem,
    Tabbar,
    TabbarItem,
    Drawer,
    Timeline,
    TimelineItem,
    Table,
    Step,
    StepItem,
    Qrcode,
    Previewer,
    Marquee,
    MarqueeItem,
    Flow,
    FlowLine,
    FlowState,
    Spinner,
    Alert,
    Confirm,
    Modal,
    Prompt
];

const install = Vue => {
    components.map(component => {
        Vue.component(component.name, component)
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

//全局插件
const Plugins = [
    ToastPlugin,
    DatetimePlugin,
    LoadingPlugin,
    AlertPlugin,
    ConfirmPlugin,
    ModalPlugin,
    PromptPlugin
];

export {
    install,
    version,
    Button,
    Icon,
    Divider,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    Sticky,
    ViewBox,
    Cell,
    CellBox,
    CellFormPreview,
    InlineDesc,
    Popup,
    PopupHeader,
    PopupPicker,
    PopupRadio,
    Group,
    GroupTitle,
    Picker,
    Datetime,
    DatetimeRange,
    InlineCalendar,
    Calendar,
    InlineSwitch,
    Switch,
    Badge,
    Tip,
    Checklist,
    Radio,
    CheckIcon,
    Checker,
    CheckerItem,
    FormPreview,
    Number,
    InlineNumber,
    Rater,
    Range,
    Selector,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Search,
    Toast,
    Input,
    Textarea,
    Address,
    Card,
    Panel,
    Actionsheet,
    Loading,
    InlineLoading,
    LoadMore,
    Msg,
    Popover,
    Header,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    ButtonTab,
    ButtonTabIte,
    Tabbar,
    TabbarItem,
    Drawer,
    Timeline,
    TimelineItem,
    Table,
    Step,
    StepItem,
    Qrcode,
    Previewer,
    Marquee,
    MarqueeItem,
    Flow,
    FlowLine,
    FlowState,
    Spinner,
    Alert,
    Confirm,
    Modal,
    Prompt,

    //自定义全局指令
    InviewDirective,
    TransferDom,
    TransferDomDirective,
    ClickOutsideDirective,
    //全局插件
    Plugins,
    CloseDialogsPlugin,
};

export default {
    install,
    version
};
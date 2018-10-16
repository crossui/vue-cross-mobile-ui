# Button 按钮


```handlebars
    <h2 class="demo-block__title">按钮类型</h2>
    <v-button type="default">default</v-button>
    <v-button type="primary">primary</v-button>
    <v-button type="warn">warn</v-button>

    <h2 class="demo-block__title">链接按钮</h2>
    <v-button type="primary" link="/home">Go to demo list</v-button>
    <v-button type="default" link="BACK">Back</v-button>

    <h2 class="demo-block__title">动作类型</h2>
    <v-button type="primary" action-type="button">submit</v-button>
    <v-button type="warn" action-type="reset">reset</v-button>

    <h2 class="demo-block__title">加载状态</h2>
    <v-button type="default" show-loading>submit</v-button>
    <v-button type="primary" show-loading>submit</v-button>
    <v-button type="warn" show-loading>submit</v-button>

    <h2 class="demo-block__title">朴素按钮</h2>
    <v-button plain>submit</v-button>
    <v-button plain type="primary">primary</v-button>
    <v-button plain type="warn">warn</v-button>

    <h2 class="demo-block__title">按钮尺寸</h2>
    <v-button mini>submit</v-button>
    <v-button mini type="primary">primary</v-button>
    <v-button mini type="warn">Delete</v-button>
    <br>
    <v-button mini plain>submit</v-button>
    <v-button mini plain type="primary">primary</v-button>
    <v-button mini plain type="warn">primary</v-button>

    <h2 class="demo-block__title">自定义按钮</h2>
    <v-button plain type="primary" style="border-radius:99px;">primary</v-button>
    <v-button plain type="primary" class="custom-primary-red">primary</v-button>

    <h2 class="demo-block__title">禁用状态</h2>
    <v-button disabled>disable submit</v-button>
    <v-button type="primary" disabled>disable primary</v-button>
    <v-button type="warn" disabled>disable Delete</v-button>
    <v-button mini disabled>disable mini submit</v-button>
    <v-button mini type="primary" disabled>disable mini primary</v-button>
    <v-button mini type="warn" disabled>disable mini Delete</v-button>
    <v-button plain disabled>disable plain</v-button>
    <v-button plain type="primary" disabled>disable plain primary</v-button>

    <h2 class="demo-block__title">iOS Gradients</h2>
    <v-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</v-button>
    <v-button :gradients="['#A644FF', '#FC5BC4']">iOS Gradients</v-button>
    <v-button :gradients="['#FF2719', '#FF61AD']">iOS Gradients</v-button>
    <v-button :gradients="['#6F1BFE', '#9479DF']">iOS Gradients</v-button>
    <v-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</v-button>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String | default | 按钮类型，可选值为 `default`,`primary`,`warn` | 
| disabled | Boolean | false | 是否不可点击 | 
| text | String | '' | 按钮文字，同默认slot | 
| mini | Boolean | false | 是否为mini类型，即小尺寸的按钮 | 
| plain | Boolean | false | 是否是plain样式，没有背景色 | 
| action-type: | String |  | '`button`的type属性，默认为浏览器默认(submit)，可选为 `submit` `button` `reset`' |
| link | String |  | vue-router 路由, 值为 `BACK` 等同于 `go(-1)` |
| show-loading | Boolean | false | '显示加载图标' | 
| gradients | Array | | '按钮背景渐变，长度必须为2' | 


### slots
| 名字 | 说明 |
| --- | --- |
| default | 按钮文字 |

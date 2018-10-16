# Tabbar 底部导航


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-tabbar>
      <v-tabbar-item>
        <img slot="icon" src="../../assets/a.png">
        <span slot="label">Wechat</span>
      </v-tabbar-item>
      <v-tabbar-item show-dot>
        <img slot="icon" src="../../assets/b.png">
        <span slot="label">Message</span>
      </v-tabbar-item>
      <v-tabbar-item selected link="/">
        <img slot="icon" src="../../assets/c.png">
        <span slot="label">Explore</span>
      </v-tabbar-item>
      <v-tabbar-item badge="2">
        <img slot="icon" src="../../assets/d.png">
        <span slot="label">News</span>
      </v-tabbar-item>
    </v-tabbar>
  </div>
</template>

```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| icon-class | String | | '图标的class名' | 

### slots
| 名字 | 说明 |
| --- | --- |
| default | tabbar主体内容，只允许tabbar-item |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-index-change |  | value 值变化时触发 |


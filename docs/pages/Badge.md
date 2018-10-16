# Badge 上标红点


```handlebars
<template>
  <div class="demo-block">
    <div style="text-align: center">
      <v-badge text="1"></v-badge>
      <v-badge text="123"></v-badge>
    </div>
    <v-group title="在 Cell 组件里使用">
      <v-cell title="红点" is-link>
        <div class="badge-value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <v-badge></v-badge>
        </div>
      </v-cell>
      <v-cell title="个位数" is-link>
        <div class="badge-value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <v-badge text="8"></v-badge>
        </div>
      </v-cell>
      <v-cell title="多位数" is-link>
        <div class="badge-value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <v-badge text="888"></v-badge>
        </div>
      </v-cell>
    </v-group>
  </div>
</template>

<style lang="less">
.badge-value {
  display: inline-block !important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | | '显示的文字' | 

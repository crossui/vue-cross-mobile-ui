# LoadMore 加载更多


```handlebars
<template>
  <div class="demo-block padding-20">
    <v-load-more tip="正在加载"></v-load-more>
    <v-load-more :show-loading="false" tip="暂无数据" background-color="#fbf9fe"></v-load-more>
    <v-load-more :show-loading="false" background-color="#fbf9fe"></v-load-more>
  </div>
</template>

```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show-loading | Boolean | true | '是否显示 loading 图标' | 
| tip | String | | '提示文字，如果没有显示图标也没有显示文字，则显示点' | 

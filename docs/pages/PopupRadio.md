# PopupRadio 单选框弹出


```handlebars
<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-popup-radio title="options" :options="options1" v-model="option1"></v-popup-radio>
    </v-group>

    <v-group>
      <v-popup-radio title="options" :options="options2" v-model="option2" placeholder="placeholder"></v-popup-radio>
    </v-group>

    <v-group>
      <v-popup-radio title="options" :options="options3" v-model="option3">
        <p slot="popup-header" class="vcu-1px-b demo3-slot">Please select</p>
      </v-popup-radio>
    </v-group>

    <v-group>
      <v-popup-radio title="readonly" readonly :options="options3" v-model="option4">
        <p slot="popup-header" class="vcu-1px-b demo3-slot">Please select</p>
      </v-popup-radio>
    </v-group>

    <v-group>
      <v-popup-radio title="slot:each-item" :options="options3" v-model="option5">
        <template slot-scope="props" slot="each-item">
          <p>
            custom item <img src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" class="vcu-radio-icon"> {{ props.label }}
            <br>
            <span style="color:#666;">{{ props.index + 1 }} another line</span>
          </p>
        </template>
      </v-popup-radio>
    </v-group>
  </div>
</template>
<script>

export default {
  data() {
    return {
      option1: 'A',
      options1: ['A', 'B', 'C'],
      option2: '',
      options2: [{
        key: 'A',
        value: 'label A'
      }, {
        key: 'B',
        value: 'label B'
      }],
      option3: 'C',
      options3: ['A', 'B', 'C'],
      option4: 'B',
      option5: 'B'
    }
  }
}
</script>

<style scoped>
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| readonly | String | | '只读样式，类似于 cell' | 

### slots
| 名字 | 说明 |
| --- | --- |
| popup-header | 弹窗顶部 |
| each-item | 自定义每个条目显示内容 |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-show |  | 弹窗显示时触发 |
| @on-hide |  | 弹窗关闭时触发 |

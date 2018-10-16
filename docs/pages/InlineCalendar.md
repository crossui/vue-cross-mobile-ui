# InlineCalendar 内联日历


```handlebars
<template>
  <div class="demo-block">
    <v-inline-calendar ref="calendar" @on-change="onChange" @on-view-change="onViewChange" class="inline-calendar-demo" :show.sync="show" v-model="value" start-date="2016-04-01" end-date="2018-05-30" :range="range" :show-last-month="showLastMonth" :show-next-month="showNextMonth" :highlight-weekend="highlightWeekend" :return-six-rows="return6Rows" :hide-header="hideHeader" :hide-week-list="hideWeekList" :replace-text-list="replaceTextList" :weeks-list="weeksList" :render-function="buildSlotFn" :disable-past="disablePast" :disable-future="disableFuture" :disable-weekend="disableWeekend" :disable-date-function="disableDateFunction">
    </v-inline-calendar>

    <v-group>
      <v-cell title="选中值" :value="value"></v-cell>
      <v-cell title="开始日期" value="2016-04-01"></v-cell>
      <v-cell title="结束日期" value="2018-05-30"></v-cell>
    </v-group>

    <div style="margin: 15px;">
      <v-button type="primary" @click.native="$refs.calendar.switchViewToToday()">switchViewToToday</v-button>
      <v-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2017, 12)">switchViewToMonth(2017, 12)</v-button>
      <v-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2018, 10)">switchViewToMonth(2018, 10)</v-button>
      <v-button type="primary" @click.native="$refs.calendar.switchViewToCurrentValue()">switchViewToCurrentValue</v-button>
    </div>

    <v-group title="控制日期" style="margin-top: 30px;">
      <v-switch v-model="disablePast" title="禁止选择未来的日期"></v-switch>
      <v-switch v-model="disableFuture" title="禁止选择过去的日期"></v-switch>
      <v-switch v-model="disableWeekend" title="禁止选择周末日期"></v-switch>
      <v-switch v-model="showLastMonth" title="显示上个月"></v-switch>
      <v-switch v-model="showNextMonth" title="显示下个月"></v-switch>
      <v-switch v-model="return6Rows" inline-desc="否则，日历的高度会发生改变" title="固定显示6行"></v-switch>
      <v-switch v-model="highlightWeekend" title="高亮周末"></v-switch>
      <v-cell title="选中值" :value="value"></v-cell>
    </v-group>
    <v-group title="控制导航部分">
      <v-switch v-model="hideHeader" title="隐藏日历头部"></v-switch>
      <v-switch v-model="hideWeekList" title="隐藏星期列表"></v-switch>
      <v-switch v-model="changeWeeksList" title="切换星期列表"></v-switch>
    </v-group>
    <v-group title="更换文本">
      <v-switch v-model="replace" title="替换日期文本"></v-switch>
    </v-group>
    <br>
    <div style="margin: 15px;">
      <v-button type="primary" @click.native="value='2020-11-11'"> 设置为 2020-11-11</v-button>
      <v-button type="primary" @click.native="value='2020-11-22'"> 设置为 2020-11-22</v-button>
      <v-button type="primary" @click.native="value='2016-08-09'"> 设置为 2016-08-09</v-button>
      <v-button type="primary" @click.native="value='TODAY'"> 设置为 today</v-button>
      <v-button type="primary" @click.native="value='2016-06-05'"> 设置为 2016-06-05</v-button>
    </div>
    <br>
    <v-group title="自定义日期单元格">
      <v-switch v-model="useCustomFn" inline-desc="在日期单元格中添加自定义内容" title="为带有数字8的日期添加红点"></v-switch>
    </v-group>

    <br>

    <v-divider> 按月份顺序渲染一系列日历 </v-divider>
    <v-group>
      <v-cell title="选中值" :value="listValue"></v-cell>
    </v-group>
    <br>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(val) {
      console.log('on-change', val)
    },
    onViewChange(val, count) {
      console.log('on view change', val, count)
    }
  },
  data() {
    return {
      show: true,
      value: '',
      listValue: '',
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false,
      disableWeekend: false,
      disableDateFunction(date) {
        if (date.formatedDate === '2017-10-16') {
          return true
        }
      }
    }
  },
  watch: {
    replace(val) {
      this.replaceTextList = val ? {
        'TODAY': '今'
      } : {}
    },
    useCustomFn(val) {
      this.buildSlotFn = val ? (line, index, data) => {
        return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>'
      } : () => ''
    },
    changeWeeksList(val) {
      this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
  },
}
</script>

<style lang="less" scoped>
.inline-calendar-demo {
  background: rgba(255, 255, 255, 0.9);
}
</style>
```


## API

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | String/Array | | '当前选中日期，使用v-model绑定。值为字符串(包括空字符串)时表示单选日期，为数组(包括空数组)时表示多选。' | 
| render-month | Array | | '指定渲染日期，如 [2018, 8]' | 
| start-date | String | | '起始日期，格式为 YYYY-MM-dd' | 
| end-date | String | | '结束日期，格式为YYYY-MM-dd' | 
| show-last-month | Boolean | true | '是否显示上个月的日期' | 
| show-next-month | Boolean | true | '是否显示下个月的日期' | 
| highlight-weekend | Boolean | false | '是否高亮周末' | 
| return-six-rows | Boolean | true | '是否总是渲染6行日期' | 
| hide-header | Boolean | false | '是否隐藏日历头部' | 
| hide-week-list | Boolean | false | '是否隐藏星期列表' | 
| replace-text-list | Object | | '替换列表，可以将默认的日期换成文字，比如今天的日期替换成今，{'TODAY':'今'}' | 
| weeks-list | Array | ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] | '星期列表，从周日开始' | 
| render-function | Function | | '用于为特定日期添加额外的html内容，参数为(行index,列index,日期详细属性)' | 
| render-on-value-change | Boolean | true | '当日期变化时是否重新渲染日历，如果是渲染了多个日历的话需要设为false' | 
| disable-past | Boolean | false | '禁止选择过去的日期，该选项可以与 start-date 同时使用' | 
| disable-future | Boolean | false | '禁止选择未来的日期，该选项可以 end-date 同时使用' | 
| marks | Array | | '(beta) 自定义日期标记' | 
| disable-weekend | Boolean | false | '是否禁用周六日' | 
| disable-date-function | Function | | '自定义标记特定日期是否应该禁用，返回 true 表示禁用，false 表示不禁用，不返回表示和原有逻辑一致(这样不影响和 disable-weekend 等禁用属性同时使用)' | 

### slots
| 名字 | 说明 |
| --- | --- |
| each-day | 用以自定义每一天的显示渲染，推荐使用该 slot 来替代 render-function |

### Event 
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| @on-change || 值变化时触发 |
| @on-view-change | (data, index) | 渲染月份变化时触发。初始化时会触发一次，如果不希望处理初始化时的触发，可以检查第二个参数是否为 0 |
| @on-select-single-date | (currentValue) | 单选模式下选中日期时触发 |

### Method
| 名字 | 参数 | 说明 |
| --- | --- | --- |
| getDates || 获取当前日期列表 |
| switchViewToToday || 渲染当天所在月份 |
| switchViewToMonth | (year, month) | 渲染特定年月日期 |
| switchViewToCurrentValue || 渲染当前值所在月份 |
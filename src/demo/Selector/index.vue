<template>
  <div class="demo-block padding-tb-20">
    <v-group :title="'no placeholder, the current value is : ' + defaultValue">
      <v-selector ref="defaultValueRef" title="省份" :options="list" v-model="defaultValue"></v-selector>
      <v-selector ref="defaultValueRef" title="省份" direction="rtl" :options="list" v-model="defaultValue"></v-selector>
    </v-group>

    <div style="padding:15px;">
      <v-button type="primary" @click.native="getValue('defaultValueRef')">get full value</v-button>
    </div>

    <v-group title="with placeholder">
      <v-selector placeholder="请选择省份" v-model="demo01" title="省份" name="district" :options="list" @on-change="onChange"></v-selector>
    </v-group>

    <v-group title="without title">
      <v-selector placeholder="请选择省份" v-model="demo02" :options="list"></v-selector>
    </v-group>

    <v-group title="set value=广西">
      <v-selector v-model="value1" title="省份" :options="plainList" @on-change="onChange"></v-selector>
    </v-group>

    <v-group title="readonly, displays just like a cell">
      <v-selector value="gd" readonly title="省份" :options="list"></v-selector>
    </v-group>

    <v-group title="use plain options">
      <v-selector ref="plainValueRef" value="C" title="v-selector" :options="list1" @on-change="onChange"></v-selector>
    </v-group>

    <div style="padding:15px;">
      <v-button type="primary" @click.native="getValue('plainValueRef')">get full value</v-button>
    </div>

    <v-group :title="'boolean v-selector: ' + value3">
      <v-selector v-model="value3" title="vcu Is Cool" :options="list2"></v-selector>
    </v-group>

    <v-group title="set valueMap for directly using API data" label-width="5em">
      <v-selector ref="valueMapRef" v-model="valueMapValue" :value-map="['idValue', 'idLabel']" title="v-selector" :options="valueMapList" @on-change="onChange"></v-selector>
      <v-cell-box align-items="flex-start">
        <pre>{{ valueMapList }}</pre>
      </v-cell-box>
      <v-cell title="value" :value="valueMapValue"></v-cell>
    </v-group>

    <div style="padding:15px;">
      <v-button type="primary" @click.native="getValue('valueMapRef')">get full value</v-button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      demo01: null,
      demo02: '',
      defaultValue: 'gd',
      plainList: ['广东', '广西'],
      list: [{ key: 'gd', value: '广东' }, { key: 'gx', value: '广西' }],
      list2: [{ key: true, value: '是' }, { key: false, value: '否' }],
      value1: '广西',
      value3: true,
      list1: ['A', 'B', 'C'],
      valueMapValue: 'key01',
      valueMapList: [{
        idValue: 'key01',
        idLabel: 'value01',
        otherProp: 'prop01'
      }, {
        idValue: 'key02',
        idLabel: 'value02',
        otherProp: 'prop02'
      }]
    }
  },
  methods: {
    onChange(val) {
      console.log(val)
    },
    getValue(ref) {
      this.$vcu.alert.show({
        title: 'getFullValue',
        content: this.$refs[ref].getFullValue()
      })
    }
  }
}
</script>
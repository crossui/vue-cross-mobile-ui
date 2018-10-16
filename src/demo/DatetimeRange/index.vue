<template>
  <div class="demo-block padding-tb-20">
    <v-group :title="value[0] + ' ' + value[1] + ':' + value[2]">
      <v-datetime-range title="选择" start-date="2017-01-01" end-date="2017-02-02" format="YYYY年MM月DD日" v-model="value" @on-change="onChange"></v-datetime-range>
    </v-group>
  </div>
</template>
<script>

export default {
  methods: {
    onChange(val) {
      console.log('change', val)
    }
  },
  data() {
    return {
      value: ['2017-01-15', '03', '05']
    }
  }
}
</script>
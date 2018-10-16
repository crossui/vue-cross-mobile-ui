<template>
  <div class="demo-block">
    <v-group>
      <v-cell title="合计" value="￥1024"></v-cell>
      <v-cell-form-preview :list="list"></v-cell-form-preview>
    </v-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    }
  }
}
</script>

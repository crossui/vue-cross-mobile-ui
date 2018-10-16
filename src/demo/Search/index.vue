<template>
  <div class="demo-block">
    <v-search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></v-search>
    <v-group>
      <v-cell title="keyword">{{ value }}</v-cell>
    </v-group>

    <div style="padding:15px;">
      <v-button @click.native="setFocus" type="primary">set focus</v-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    setFocus() {
      this.$refs.search.setFocus()
    },
    resultClick(item) {
      console.info('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit() {
      this.$refs.search.setBlur()
      this.$vcu.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    }
  },
  data() {
    return {
      results: [],
      value: 'test'
    }
  }
}

function getResult(val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
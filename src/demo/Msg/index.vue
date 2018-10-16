<template>
  <div class="demo-block padding-tb-20">
    <v-msg title="操作成功" :description="description" :buttons="buttons" :icon="icon"></v-msg>
  </div>
</template>
<script>
export default {
  methods: {
    changeIcon() {
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'time'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'roundcheckfill'
      }
    }
  },
  data() {
    return {
      description: '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>',
      icon: '',
      buttons: [{
        type: 'primary',
        text: 'Primary button',
        onClick: this.changeIcon.bind(this)
      }, {
        type: 'default',
        text: 'Secondary button',
        link: '/'
      }]
    }
  }
}
</script>
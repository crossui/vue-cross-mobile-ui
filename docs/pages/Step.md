# Step 步骤


```handlebars
<template>
  <div class="demo-block padding-20">
    <div>
      <v-step v-model="step1" background-color='#fbf9fe'>
        <v-step-item title="步骤1" description="step 1"></v-step-item>
        <v-step-item title="步骤2" description="step 2"></v-step-item>
        <v-step-item title="步骤3" description="step 3"></v-step-item>
      </v-step>
    </div>
    <br />
    <br />
    <div>
      <v-step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <v-step-item title="已完成"></v-step-item>
        <v-step-item title="进行中"></v-step-item>
        <v-step-item title="结束"></v-step-item>
      </v-step>
      <div class="btn_wrap">
        <v-button type="primary" @click.native="nextStep">下一步</v-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step1: 1,
      step2: 0
    }
  },
  methods: {
    nextStep() {
      this.step2++
    }
  }
}
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>
```


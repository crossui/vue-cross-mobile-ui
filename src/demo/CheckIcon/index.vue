<template>
  <div class="demo-block padding-20">
    <div style="padding:15px;">
      <v-check-icon :value.sync="demo1"> 同意不？ ({{ demo1 }})</v-check-icon>
      <br>
      <br>
      <v-check-icon :value.sync="demo2" type="plain"> 同意不？ ({{ demo2 }})</v-check-icon>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      demo1: false,
      demo2: true
    }
  }
}
</script>
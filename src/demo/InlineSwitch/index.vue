<template>
  <div class="demo-block">
    <div style=" text-align:center;margin-top:15px; ">
      <v-inline-switch v-model="value "></v-inline-switch>
    </div>
    <v-group>
      <v-switch title="switch " v-model="value "></v-switch>
    </v-group>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-cell v-for="(type, index) in types" :title="type" :key="type" :inline-desc="index === 3 ? 'size=40px' : ''">
        <v-spinner :type="type" :size="index === 3 ? '40px' : ''"></v-spinner>
      </v-cell>
    </v-group>
  </div>
</template>
<script>

export default {
  data() {
    return {
      types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
    }
  }
}
</script>
<template>
  <div class="demo-block padding-tb-20">
    <v-group>
      <v-textarea :max="20" placeholder="提示" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></v-textarea>
    </v-group>
    <v-group title="和input一起使用">
      <v-input placeholder="标题"></v-input>
      <v-textarea :max="200" name="description" placeholder="提示"></v-textarea>
    </v-group>
    <v-group title="不显示计数器">
      <v-textarea :max="200" name="detail" placeholder="提示" :show-counter="false"></v-textarea>
    </v-group>
    <v-group title="自动高度">
      <v-textarea placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></v-textarea>
      <v-textarea title="标题" placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></v-textarea>
    </v-group>
    <v-group title="设置高度为200像素">
      <v-textarea title="标题" :max="200" placeholder="提示" :show-counter="false" :height="200" :rows="8" :cols="30"></v-textarea>
    </v-group>
  </div>
</template>
<script>

export default {
  methods: {
    onEvent(event) {
      console.log('on', event)
    }
  }
}
</script>
<template>
  <div class="demo-block padding-tb-20">
    <div style="text-align:center;">
      <v-inline-number width="50px"></v-inline-number>
    </div>
    <div style="text-align:center;">
      <v-inline-number width="50px" button-style="round"></v-inline-number>
    </div>
    <v-group>
      <v-cell title="在cell中使用">
        <v-inline-number style="display:block;" :min="0" width="50px" button-style="round"></v-inline-number>
      </v-cell>
    </v-group>
  </div>
</template>

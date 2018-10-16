<template>
  <div class="demo-block padding-20">
    <v-flow>
      <v-flow-state state="1" title="Paid" is-done></v-flow-state>
      <v-flow-line is-done></v-flow-line>

      <v-flow-state state="2" is-done>
        <span slot="title">已发货</span>
      </v-flow-state>
      <v-flow-line tip="进行中"></v-flow-line>

      <v-flow-state state="3" title="待收货"></v-flow-state>
      <v-flow-line></v-flow-line>

      <v-flow-state state="4" title="完成"></v-flow-state>
    </v-flow>

    <v-flow>
      <v-flow-state title="Paid" is-done></v-flow-state>
      <v-flow-line is-done :line-span="15"></v-flow-line>

      <v-flow-state title="已发货" is-done></v-flow-state>
      <v-flow-line is-done :line-span="30"></v-flow-line>

      <v-flow-state title="待收货" is-done></v-flow-state>
      <v-flow-line tip="进行中" tip-direction="bottom" :line-span="45" :process-span="60"></v-flow-line>

      <v-flow-state title="完成"></v-flow-state>
    </v-flow>

    <v-flow orientation="vertical" style="height:250px;">
      <v-flow-state state="1" title="Paid" is-done></v-flow-state>
      <v-flow-line is-done></v-flow-line>

      <v-flow-state state="2" title="已发货" is-done></v-flow-state>
      <v-flow-line tip="进行中"></v-flow-line>

      <v-flow-state state="3" title="待收货"></v-flow-state>
      <v-flow-line></v-flow-line>

      <v-flow-state state="4" title="完成"></v-flow-state>
    </v-flow>

    <v-flow orientation="vertical" style="height:200px;">
      <v-flow-state state="1" title="Paid" is-done></v-flow-state>
      <v-flow-line is-done :line-span="15"></v-flow-line>

      <v-flow-state state="2" title="已发货" is-done></v-flow-state>
      <v-flow-line :line-span="30"></v-flow-line>

      <v-flow-state state="3" title="待收货"></v-flow-state>
      <v-flow-line :line-span="45"></v-flow-line>

      <v-flow-state state="4" title="完成"></v-flow-state>
    </v-flow>

  </div>
</template>

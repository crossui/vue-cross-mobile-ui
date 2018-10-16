<template>
  <div class="demo-block padding-tb-20">
    <v-group title="Normal Usage">
      <v-cell title="set default score = 5" inline-desc="total 5 stars if not specified">
        <v-rater v-model="data3"></v-rater>
      </v-cell>
      <v-cell title="change color">
        <v-rater v-model="data3" :max="6" active-color="#04BE02"></v-rater>
      </v-cell>
    </v-group>

    <v-group title="disabled = true">
      <v-cell title="Your history score">
        <v-rater v-model="data4" disabled></v-rater>
      </v-cell>
      <v-cell :title="'Decimal score ' + data41 ">
        <v-rater v-model="data41" active-color="#04BE02" disabled></v-rater>
      </v-cell>
      <v-cell title="custom font-size(15px)">
        <v-rater v-model="data42" active-color="#04BE02" :font-size="15" disabled></v-rater>
      </v-cell>
    </v-group>

    <v-group title="custom star, some symbols like ♥ ❤ are not proper.">
      <v-cell title="loving">
        <v-rater v-model="data4" star="♡" active-color="red" :margin="15"></v-rater>
      </v-cell>
      <v-cell title="Use html">
        <v-rater v-model="data41" star="<span>X</span>" active-color="red" :margin="15"></v-rater>
      </v-cell>
      <v-cell title="Sunshine">
        <v-rater v-model="data5" star="☼" active-color="#FF9900" :margin="4"></v-rater>
      </v-cell>
      <v-cell title="Smilies">
        <v-rater v-model="data5" star="☻" active-color="#FF9900" :margin="4"></v-rater>
      </v-cell>
      <v-cell title="Different stars">
        <v-rater v-model="data5" star="✩" active-color="#FF9900" :margin="4"></v-rater>
      </v-cell>
      <v-cell title="How embarrass">
        <v-rater v-model="data5" star="囧" active-color="#FF9900" :margin="4"></v-rater>
      </v-cell>
    </v-group>

    <v-group title="two way binding">
      <v-cell title="Your history score">
        <v-rater v-model="data6" active-color="#04BE02"></v-rater>
      </v-cell>
      <v-cell title="range" primary="content" :inline-desc="data6 + ''">
        <v-range v-model="data6" :step="1" :min="0" :max="5"></v-range>
      </v-cell>
    </v-group>

    <v-group title="set min">
      <v-cell title="min = 3">
        <v-rater v-model="data7" :min="3"></v-rater>
      </v-cell>
    </v-group>
  </div>
</template>
<script>

export default {
  data() {
    return {
      data1: 0,
      data2: 5,
      data3: '5',
      data4: 3,
      data41: 3.7,
      data42: 3.5,
      data5: 3,
      data6: 3,
      data7: 0
    }
  }
}
</script>
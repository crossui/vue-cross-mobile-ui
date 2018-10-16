<template>
  <div class="vcu-cells_radio" :class="disabled ? 'vcu-radio-disabled' : ''">
    <label class="vcu-cell vcu-cell_radio vcu-check__label" :for="`radio_${uuid}_${index}`" v-for="(one, index) in options">
      <div class="vcu-cell__bd">
        <slot name="each-item" :icon="one.icon" :label="getValue(one)" :index="index" :selected="currentValue === getKey(one)">
          <p>
            <img class="vcu-radio-icon" :src="one.icon" v-show="one && one.icon">
            <span class="vcu-radio-label" :style="currentValue === getKey(one) ? (selectedLabelStyle || '') : ''">{{ one | getValue }}</span>
          </p>
        </slot>
      </div>
      <div class="vcu-cell__ft">
        <input type="radio" class="vcu-check" v-model="currentValue" :id="disabled ? '' : `radio_${uuid}_${index}`" :value="getKey(one)">
        <span class="vcuicon vcu-icon-checked"></span>
      </div>
    </label>
    <div class="vcu-cell" v-show="fillMode">
      <div class="vcu-cell__hd">
        <label for="" class="vcu-label">{{ fillLabel }}</label>
      </div>
      <div class="vcu-cell__bd">
        <input class="vcu-input needsclick" type="text" v-model="fillValue" :placeholder="fillPlaceholder" @blur="isFocus=false" @focus="onFocus()">
      </div>
      <div class="vcu-cell__ft" v-show="value==='' && !isFocus">
        <i class="vcu-icon-warn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '../libs/base'
import { getValue, getKey, getLabel } from '../checklist/object-filter'
import props from './props'

export default {
  name: 'VRadio',
  mixins: [Base],
  filters: {
    getValue,
    getKey
  },
  props: props(),
  created() {
    this.handleChangeEvent = true
  },
  methods: {
    getValue,
    getKey,
    onFocus() {
      this.currentValue = this.fillValue || ''
      this.isFocus = true
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(newVal) {
      var isOption = contains(this.options, newVal)
      if (newVal !== '' && isOption) {
        this.fillValue = ''
      }
      this.$emit('on-change', newVal, getLabel(this.options, newVal))
      this.$emit('input', newVal)
    },
    fillValue(newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal
      }
    }
  },
  data() {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value
    }
  }
}

function contains(a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}
</script>

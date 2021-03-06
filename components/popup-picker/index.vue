<template>
  <div class="vcu-cell-box">
    <div class="vcu-cell vcu-tap-active" :class="{'vcu-cell_access': !disabled}" @click="onClick" v-show="showCell">
      <div class="vcu-cell__hd">
        <slot name="title" label-class="vcu-label" :label-style="labelStyles" :label-title="title">
          <label class="vcu-label" :class="labelClass" :style="labelStyles" v-if="title" v-html="title"></label>
        </slot>
        <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
      </div>
      <div class="vcu-cell-primary vcu-popup-picker-select-box">
        <div class="vcu-popup-picker-select" :style="{textAlign: valueTextAlign}">
          <span class="vcu-popup-picker-value vcu-cell-value" v-if="!displayFormat && !showName && value.length">{{value | array2string}}</span>
          <span class="vcu-popup-picker-value vcu-cell-value" v-if="!displayFormat && showName && value.length">{{value | value2name(data)}}</span>
          <span class="vcu-popup-picker-value vcu-cell-value" v-if="displayFormat && value.length">{{ displayFormat(value, value2name(value, data)) }}</span>
          <span v-if="!value.length && placeholder" v-text="placeholder" class="vcu-popup-picker-placeholder vcu-cell-placeholder"></span>
        </div>
      </div>
      <div class="vcu-cell__ft">
      </div>
    </div>

    <div v-transfer-dom="isTransferDom">
      <popup v-model="showValue" class="vcu-popup-picker" :id="`vcu-popup-picker-${uuid}`" @on-hide="onPopupHide" @on-show="onPopupShow" :popup-style="popupStyle">
        <div class="vcu-popup-picker-container">
          <popup-header :left-text="cancelText || '取消'" :right-text="confirmText || '完成'" @on-click-left="onHide(false)" @on-click-right="onHide(true)" :title="popupTitle"></popup-header>
          <picker :data="data" v-model="tempValue" @on-change="onPickerChange" :columns="columns" :fixed-columns="fixedColumns" :container="'#vcu-popup-picker-'+uuid" :column-width="columnWidth"></picker>
        </div>
      </popup>
    </div>

  </div>
</template>

<script>
import Picker from '../picker'
import Cell from '../cell'
import Popup from '../popup'
import PopupHeader from '../popup-header'
import InlineDesc from '../inline-desc'
import { Flexbox, FlexboxItem } from '../flexbox'
import array2string from '../filters/array2String'
import value2name from '../filters/value2name'
import uuidMixin from '../libs/mixin_uuid'
import TransferDom from '../directives/transfer-dom'

const getObject = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

export default {
  name: 'VPopupPicker',
  directives: {
    TransferDom
  },
  created() {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show
    }
  },
  mixins: [uuidMixin],
  components: {
    Picker,
    Cell,
    Popup,
    PopupHeader,
    Flexbox,
    FlexboxItem,
    InlineDesc
  },
  filters: {
    array2string,
    value2name
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default() {
        return []
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String,
    disabled: Boolean
  },
  computed: {
    labelStyles() {
      return {
        display: 'block',
        width: (this.$parent && (this.$parent.labelWidth || this.$parent.$parent.labelWidth)) || 'auto',
        textAlign: this.$parent && (this.$parent.labelAlign || this.$parent.$parent.labelAlign),
        marginRight: this.$parent && (this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight)
      }
    },
    labelClass() {
      return {
        'vcu-cell-justify': this.$parent && (this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify')
      }
    }
  },
  methods: {
    value2name,
    getNameValues() {
      return value2name(this.currentValue, this.data)
    },
    onClick() {
      if (!this.disabled) {
        this.showValue = true
      }
    },
    onHide(type) {
      this.showValue = false
      if (type) {
        this.closeType = true
        this.currentValue = getObject(this.tempValue)
      }
      if (!type) {
        this.closeType = false
        if (this.value.length > 0) {
          this.tempValue = getObject(this.currentValue)
        }
      }
    },
    onPopupShow() {
      // reset close type to false
      this.closeType = false
      this.$emit('on-show')
    },
    onPopupHide(val) {
      if (this.value.length > 0) {
        this.tempValue = getObject(this.currentValue)
      }
      this.$emit('on-hide', this.closeType)
    },
    onPickerChange(val) {
      if (JSON.stringify(this.currentValue) !== JSON.stringify(val)) {
        // if has value, replace it
        if (this.value.length) {
          const nowData = JSON.stringify(this.data)
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = getObject(val)
          }
          this.currentData = nowData
        } else { // if no value, stay quiet
          // if set to auto update, do update the value
        }
      }
      const _val = getObject(val)
      this.$emit('on-shadow-change', _val, value2name(_val, this.data).split(' '))
    }
  },
  watch: {
    value(val) {
      if (JSON.stringify(val) !== JSON.stringify(this.tempValue)) {
        this.tempValue = getObject(val)
        this.currentValue = getObject(val)
      }
    },
    currentValue(val) {
      this.$emit('input', getObject(val))
      this.$emit('on-change', getObject(val))
    },
    show(val) {
      this.showValue = val
    },
    showValue(val) {
      this.$emit('update:show', val)
    }
  },
  data() {
    return {
      onShowProcess: false,
      tempValue: getObject(this.value),
      closeType: false,
      currentData: JSON.stringify(this.data), // used for detecting if it is after data change
      showValue: false,
      currentValue: this.value
    }
  }
}
</script>

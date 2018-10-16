<template>
  <div class="vcu-selector vcu-cell" :class="{
      'vcu-cell_select': !readonly,
      'vcu-cell_select-after': title
    }">
    <div class="vcu-cell__hd" v-if="title">
      <label :for="`vcu-selector-${uuid}`" class="vcu-label" :class="labelClass" :style="cleanStyle({
          width: $parent.labelWidth,
          textAlign: $parent.labelAlign,
          marginRight: $parent.labelMarginRight
        })" v-html="title"></label>
    </div>
    <div class="vcu-cell__bd" v-if="!readonly">
      <select :id="`vcu-selector-${uuid}`" class="vcu-select" v-model="currentValue" :name="name" :style="cleanStyle({
          direction: direction,
          color: color
        })">
        <option :value="value === null ? 'null' : ''" v-if="showPlaceholder" :selected="isEmptyValue(value) && !!placeholder">{{ placeholder }}</option>
        <!-- <v-no-ssr> -->
        <option disabled v-if="fixIos"></option>
        <!-- </v-no-ssr> -->
        <option :value="one.key" v-for="one in processOptions">{{ direction === 'rtl' ? one.value + '&#x200E;' : one.value }}</option>
      </select>
    </div>
    <div class="vcu-cell__ft vcu-selector-readonly" v-else>
      {{value | findByKey(processOptions)}}
    </div>
  </div>
</template>

<script>
import find from 'array-find'
import uuidMixin from '../mixins/uuid'
import cleanStyle from '../libs/clean-style'

const findByKey = function (key, options) {
  const _rs = find(options, function (item) {
    return item.key === key
  })
  return _rs ? _rs.value : key
}

export default {
  name: 'VSelector',
  mixins: [uuidMixin],
  created() {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value
    }
  },
  beforeMount() {
    this.isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent)
  },
  computed: {
    fixIos() {
      return !this.placeholder && this.isEmptyValue(this.value) && this.isIOS && this.title
    },
    color() {
      return this.showPlaceholder ? '#A9A9A9' : ''
    },
    processOptions() {
      if (!this.options.length) {
        return []
      }

      const isObject = typeof this.options[0] === 'object'

      if (isObject && !this.valueMap) {
        return this.options
      }

      if (isObject && this.valueMap) {
        return this.options.map(item => {
          return {
            key: item[this.valueMap[0]],
            value: item[this.valueMap[1]]
          }
        })
      }

      return this.options.map(function (item) {
        return {
          key: item,
          value: item
        }
      })
    },
    showPlaceholder() {
      if (this.isEmptyValue(this.value) && this.placeholder) {
        return true
      }
      return false
    },
    labelClass() {
      return {
        'vcu-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    }
  },
  methods: {
    isEmptyValue(val) {
      return typeof val === 'undefined' || val === '' || val === null
    },
    cleanStyle,
    getFullValue() {
      if (!this.value) {
        return null
      }
      if (!this.options.length) {
        return null
      }
      if (typeof this.options[0] !== 'object') {
        return this.value
      } else {
        if (!this.valueMap) {
          return this.options.filter(one => one.key === this.value)
        } else {
          return this.options.filter(one => one[this.valueMap[0]] === this.value)
        }
      }
    }
  },
  filters: {
    findByKey
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  },
  props: {
    title: String,
    direction: String,
    options: {
      type: Array,
      required: true
    },
    name: String,
    placeholder: String,
    readonly: Boolean,
    value: [String, Number, Object, Boolean],
    valueMap: {
      type: Array,
      validator(val) {
        if (!val.length || val.length !== 2) {
          return false
        }
        return true
      }
    }
  },
  data() {
    return {
      currentValue: '',
      isIOS: false
    }
  }
}
</script>

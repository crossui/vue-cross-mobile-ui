<template>
  <div class="vcu-cell vcu-cell-form-preview" :class="{'vcu-cell-no-border-intent': !borderIntent}">
    <div class="vcu-form-preview__bd">
      <div class="vcu-form-preview__item" v-for="item in list">
        <label class="vcu-form-preview__label" v-html="item.label"></label>
        <span class="vcu-form-preview__value" v-html="item.value"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCellFormPreview',
  props: {
    list: Array,
    borderIntent: {
      type: Boolean,
      default: true
    }
  }
}
</script>


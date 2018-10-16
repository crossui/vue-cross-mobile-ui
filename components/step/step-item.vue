<template>
  <div class="vcu-step-item" :class=" { 'vcu-step-item-with-tail' : !currentStepLast} ">
    <div :class="'vcu-step-item-tail ' + 'vcu-step-item-tail-' + currentStatus" v-show="!currentStepLast" :style="{right: $parent.gutter}"></div>
    <div :class="'vcu-step-item-head ' + 'vcu-step-item-head-' + currentStatus">
      <div class="vcu-step-item-head-inner">
        <span v-if="!icon && currentStatus!='finish'" class="vcu-step-item-icon">{{currentStepNumber}}</span>
        <span v-else :class="'vcu-step-item-icon ' + 'vcu-step-item-' + iconName">
          <icon type="check" class="vcu-step-item-checked"></icon>
        </span>
      </div>
    </div>
    <div :class="'vcu-step-item-main ' + 'vcu-step-item-main-' + currentStatus" :style="{backgroundColor: $parent.backgroundColor, paddingRight: currentStepLast ? 0 : $parent.gutter}">
      <span class="vcu-step-item-title">{{title}}</span>
      <div class="vcu-step-item-description">{{description}}</div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'v-step-item',
  props: {
    title: String,
    description: String,
    stepNumber: Number,
    stepLast: Boolean,
    icon: String,
    status: String,
    tailWidth: Object
  },
  computed: {
    iconName() {
      return this.icon || 'check'
    }
  },
  created() {
    this.currentStatus = this.status
    this.currentStepLast = this.stepLast
    this.currentStepNumber = this.stepNumber
  },
  data() {
    return {
      currentStatus: '',
      currentStepLast: false,
      currentStepNumber: 0
    }
  },
  components: {
    Icon
  }
}
</script>

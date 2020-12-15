<template>
  <div>
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="handleInput">
  </div>
</template>

<script>
import emitter from '../../../src/mixins/emitter'

export default {
  name: 'LgInput',
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    value: {
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
      
      this.dispatch('LgFormItem', 'validate')
    }
  }
}
</script>

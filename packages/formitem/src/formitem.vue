<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <!-- 显示验证失败的原因 -->
      <p v-if="errMessage">{{ errMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import emitter from '../../../src/mixins/emitter'


export default {
  name: 'LgFormItem',
  inject: ['form'],
  mixins: [emitter],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errMessage: ''
    }
  },
  created () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  mounted () {
    if (this.prop) {
      this.dispatch('LgForm', 'formItemAdd', this)
    }
  },
  methods: {
    validate () {
      return new Promise(resolve => {
        // 没有传递 prop 属性，不需要验证
        if (!this.prop) return

        // 获取需要验证的值
        const value = this.form.model[this.prop]
        // 获取校验规则
        const rules = this.form.rules[this.prop]

        // 定义校验对象: { 需要校验的字段：对应的校验规则 }
        const descriptor = { [this.prop]: rules }
        const validator = new AsyncValidator(descriptor)
        // 返回的是一个 promise 对象，可以直接 return
        // validate() 方法第一个参数是一个校验对象：{ 校验的字段：字段对应的值 }
        validator.validate({ [this.prop]: value }, errors => {
          // 验证失败
          if (errors) {
            resolve(false)
            this.errMessage = errors[0].message
          } else {
            resolve(true)
            this.errMessage = ''
          }
        })
      })
    }
  }
}
</script>

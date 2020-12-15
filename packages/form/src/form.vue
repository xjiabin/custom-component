<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'LgForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  created () {
    // 保存需要校验的字段
    this.fields = []
    this.$on('formItemAdd', item => this.fields.push(item));
  },
  methods: {
    async validate(callback) {
      if (!this.fields.length) return true

      const tasks = this.fields.map(field => field.validate())
      const results = await Promise.all(tasks)

      const ret = results.every(valid => valid)

      callback && callback(ret)
      return ret
    }
  },
}
</script>

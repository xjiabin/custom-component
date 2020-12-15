export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent

      while (parent) {
        if (parent.$options.name === componentName) {
          break
        } else {
          parent = parent.$parent
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}

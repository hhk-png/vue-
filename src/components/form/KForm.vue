<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this // 传递Form给后代，
    }
  },
  props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
  },
  methods: {
    validate(cb) {
      console.log(this.$children.filter(item => item.prop))
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      console.log(tasks)
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
}
</script>

<style>

</style>
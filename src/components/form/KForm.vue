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
      // 
      const tasks = this.$children
        .filter(item => item.prop) // 过滤掉没有prop参数的FormItem
        .map(item => item.validate());
      // 当全部验证成功后才会回调
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
}
</script>

<style>

</style>
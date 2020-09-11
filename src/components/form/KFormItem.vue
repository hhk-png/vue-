<template>
  <div>
    <!-- label -->
    <label v-if="label">
      {{label}}
    </label>
    <!-- input输入框 -->
    <slot></slot>
    <!-- 检验信息 -->
    <p v-if="errorMessage">
      {{errorMessage}}
    </p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  data() {
    return {
      errorMessage: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      // 执行组件校验规则
      // 1.获取校验规则
      const rules = this.form.rules[this.prop];

      // 2.获取数据
      const value = this.form.model[this.prop];

      const desc = {
        [this.prop]: rules
      };
      const schema = new Schema(desc);
      return schema.validate({[this.prop]: value}, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = '';
        }
      })
    }
  }
}
</script>

<style>

</style>
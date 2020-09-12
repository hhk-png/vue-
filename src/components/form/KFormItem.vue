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
// 表单验证
import Schema from 'async-validator'
export default {
  inject: ['form'],
  data() {
    return {
      // 错误信息显示
      errorMessage: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    // 用于取出rules和model的值
    prop: {
      type: String
    }
  },
  mounted() {
    // 监听KInput的validate事件
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    // 实时验证
    validate() {
      // 执行组件校验规则
      // 1.获取校验规则
      const rules = this.form.rules[this.prop];

      // 2.获取数据
      const value = this.form.model[this.prop];

      // 验证规则
      const desc = {
        [this.prop]: rules
      };
      const schema = new Schema(desc);
      // {[this.prop]: value}：验证数据
      // 返回的是一个Promise
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
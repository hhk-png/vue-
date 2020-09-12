<template>
  <div>
    <!-- 
      最小级别的子组件，实现输入框
     -->
    <!-- 自定义组件要实现v-model必须实现:value @input -->
    <!-- $attrs存储的是props之外的部分 -->
    <input :value="value" @click="onInput" v-bind="$attrs">
  </div>
</template>
<script>
export default {
  inheritAttrs: false, // 避免顶层容器继承属性
  props: {
    // 接收从父组件传过来的值，用于内容显示
    value: {
      type: String
    }
  },
  methods: {
    onInput (e) {
      // 通知父组件数值变化
      // 本事件是和父组件的:model绑定在一起的
      this.$emit('input', e.target.value)

      // 通知FormItem校验
      this.$parent.$emit('validate');
    }
  }
}
</script>

<style scoped>

</style>
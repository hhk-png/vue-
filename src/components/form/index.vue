<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginform">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";

export default {
  data() {
    return {
      model: {
        username: "Tom",
        password: "",
      },
      rules: {
        username: [{required: true, message: '用户名必填'}],
        password: [{required: true, message: '密码必填'}]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  methods: {
    onLogin() {
      this.$refs.loginform.validate((isValid) => {
        if (isValid) {
          alert('登录');
        } else {
          alert('失败');
        }
      })
    }
  }
};
</script>

<style>
</style>
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
        <!-- 表单提交时全部验证 -->
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "./KInput";
import KFormItem from "./KFormItem";
import KForm from "./KForm";
import Notice from '../notice/index'
import create from '../../utils'

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
      // 在KFormItem中验证，在KForm中触发各个Item进行验证，
      //  在index内写入回调，显示验证的结果
      let notice;
      this.$refs.loginform.validate((isValid) => {
        if (isValid) {
          // alert('登录');
          notice = create(Notice, {
            title: '成功',
            message: '登录',
            duration: 10000
          });
        } else {
          // alert('失败');
          notice = create(Notice, {
            title: '失败',
            message: '请输入',
            duration: 10000
          });
        }
        notice.show();
      })
    }
  }
};
</script>

<style>
</style>
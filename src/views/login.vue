<template>
  <div class="login">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="rules"
      class="login-box tl"
    >
      <img src="./../assets/images/logo.png" alt="">
      <el-form-item prop="username">
        <el-input
          prefix-icon="iconfont icon-yonghu color-red"
          type="text"
          placeholder="ユーザID"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="iconfont icon-lock1 color-red"
          type="password"
          placeholder="パスワード"
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="font-l" v-on:click="onSubmit('loginForm')">ログイン</el-button>
      </el-form-item>
    </el-form>

    <p class="bottom-font">© 2020-2025 SHISEIDO All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      // 表单验证
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          /* 应当调用登录接口 */
          localStorage.setItem('token','123456789')
          this.$router.push("/pages/Pages");
        } else {
          this.$Message({
            message:'请输入账号密码',
            type: 'error'
        })
          return false;
        }
      });
    },
   
  },
  watch: {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: -60px;
  background: url(./../assets/images/bg-login.png) center bottom 100%;
  .login-box{
    width: 243px;
    left: 53vw;
    top: 355px;
    position: absolute;
    img{
      margin-bottom: 25px;
    }
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  .el-button{
    width: 243px;
    height: 30px;
    line-height: 30px;
    background: rgba(200, 16, 46, 1) 0% 0% no-repeat padding-box;
    border-radius: 22px;
    padding: 0;
    color: #FFF;
    border-color:  rgba(200, 16, 46, 1);
  }

}

.bottom-font {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-19) var(--unnamed-font-family-source-han-sans);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-999999);
  text-align: left;
  font: normal normal normal 14px ;
  letter-spacing: 0px;
  color: #999999;
  opacity: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
}
</style>


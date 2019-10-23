<template>
  <div id="content" class="content">
    <!--头像start-->
    <img class="head" src="../assets/WX1.jpg"/>
    <!--头像end-->

    <!--userName start-->
    <div class="minput">
      <img src="../assets/icon-user.png"/>
      <input v-model="userName" type="text" placeholder="请输入手机号"/>
    </div>
    <!--userName end-->

    <!--password start-->
    <div class="minput">
      <img src="../assets/icon-password.png"/>
      <input v-model="userPassword" type="password" placeholder="请输入密码"/>
    </div>
    <!--password start-->

    <button @click="login">登录</button>

    <span style="display: block;width: 100%;color: #aaa; position: fixed;bottom: 3rem; font-size: medium;">
      王八炖汤，越炖越香
      </span>
  </div>
</template>

<script>
export default{
  name: 'Login',
  data () {
    return {
      ok: false,
      userName: '',
      userPassword: ''
    }
  },
  // 登录验证，成功跳转
  methods: {
    login: function () {
      if (this.userName === 'admin' && this.userPassword === 'admin') {
        this.$router.push({path: '/index'})
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开params路由模板')
    next()
  }
}
</script>

<style scoped  lang="scss">

  body {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 100%;
    text-align: center;
    margin-top: 60px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .minput {
    padding-bottom: 1rem;
  }

  .minput img {
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }

  .minput input{
    padding: 0.1rem 0.1rem;
    border-radius: 8px;
    border: 1px solid #707070;
    height: 2rem;
    color: #707070;
    text-align: center;
  }

  button {
    margin-top: 20px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: #10AEFF;
    border-radius: 8px;
    color: white;
    border: 1px solid #fff;
    font-size: medium;
  }

  .head {
    width: 150px;
    height: 150px;
    margin-bottom: 3rem;
    border-radius: 50%;
  }
</style>

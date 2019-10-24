<template>
  <div id="content" class="content">
    <div id="top">
      <van-nav-bar title="账号资料">
        <van-icon name="arrow-left" slot="left" @click="back"/>
      </van-nav-bar>
    </div>
    <!--头像start-->
    <img class="head" src="../assets/WX1.jpg"/>
    <!--头像end-->

    <!--修改用户名(昵称)-->
    <div class="minput">
      <img src="../assets/icon-user.png"/>
      <input v-model="userName" type="text" placeholder="原有的用户名"/>
    </div>
    <!--结束-->

    <!--修改密码-->
    <div class="minput">
      <img src="../assets/icon-password.png"/>
      <input v-model="userPassword" type="password" placeholder="原有的密码"/>
    </div>
    <!--结束-->

    <!--修改生日-->
    <div class="minput">
      <img src="../../static/icon-birth.png">
      <input v-model="date" type="date" id="date"/>
    </div>
    <!--结束-->

    <!--修改性别-->
    <div class="minput">
      <img src="../../static/icon-sex.png">
      <input v-model="sex" type="text" placeholder="修改性别" @click="change"/>
    </div>
    <!--结束-->

    <!-- 修改省份 -->
    <div class="minput">
      <img src="../../static/icon-home.png">
      <input v-model="home" type="text" placeholder="修改省份" />

    </div>

    <!-- 编写签名 -->
    <div class="minput">
      <img src="../../static/icon-sign.png">
      <input v-model="sign" type="textarea" placeholder="签名ლ(´ڡ`ლ)"/>
    </div>
    <!-- 结束 -->

    <van-button type="info" @click="save" id="btn">我写好啦</van-button>

      <span style="display: block;width: 100%;color: #aaa; position: fixed;bottom: 3rem; font-size: medium; bottom: 25px;">
        退出登录我还没写呢ヽ(°◇° )ノ
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
      userPassword: '',
      date: '',
      sign: '',
      sex: null,
      home: '',
      value1: 0
    }
  },
  methods: {
    // back  为返回上层页面，save先修改个人资料，再返回上层页面
    back: function () {
      this.$router.push({path: '/me'})
    },
    save: function () {
      this.$router.push({path: '/me'})
    },
    // 修改用户性别,点击即弹窗
    change: function () {
      this.$dialog.confirm({
        confirmButtonText: '女生',
        confirmButtonColor: '#f69c9f',
        cancelButtonText: '男生',
        cancelButtonColor: 'Aqua'
      }).then(() => {
        // on confirm
        this.sex = '女'
      }).catch(() => {
        // on cancel
        this.sex = '男'
      })
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

<style scoped="scoped"  lang="scss">

  body {
    margin: 0;
    padding: 0;
  }

  .van-nav-bar__left {
      font-size: 23px;
      top: -3px;
  }

  .content {
    width: 100%;
    text-align: center;
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
    width: 60%;
    padding: 0.1rem 0.1rem;
    border-radius: 8px;
    border: 1px solid #707070;
    height: 2rem;
    color: #707070;
    text-align: center;
  }

  button {
    margin-top: 15px;
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
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
    border-radius: 50%;
  }
  #btn {
    width: 44%;
    font-size: 19px;
    margin-left: 5%;
  }
  #date {
    padding-left: 10%;
    width: 50%;
  }
  #top {
    height: 40px;
    margin-bottom: 10px;
  }

</style>

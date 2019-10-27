<template>
  <div id="content" class="content">
    <!--头像start-->
    <img class="head" src="../assets/WX1.jpg"/>
    <!--头像end-->

    <!--userName start-->
    <div class="minput">
      <img src="../assets/icon-user.png"/>
      <input v-model="phone" type="text" placeholder="请输入手机号"/>
    </div>
	<img class="verifyCode" @click="" >
    <!--userName end-->

    <!--password start-->
    <div class="minput">
      <img src="../assets/icon-password.png"/>
      <input v-model="password" type="password" placeholder="请输入密码"/>
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
      phone: '',
      password: ''
    }
  },
  // 登录验证，成功跳转
methods: {
    login: function () {
		var t = this.$toast.loading({
			mask:true,
			duratrion:0,
			forbidClick:true,
			message:'登录中...'
		});
		this.$axios.get('http://10.150.5.57:8080/TeamApp_User/user/login.action',{
			params:{
				phone:this.phone,
				password:this.password
			}
		}).then(response =>{
			t.clear();
			if(response.data.code == 1){
				this.$toast(response.data.msg);
				localStorage.setItem("com.lanq",this.phone);
				// localStorage.setItem("com.id",response.data.Data.id);
				this.$router.push({'path': '/square'})
			}else if(response.data.code == 0){
				this.$toast(response.data.msg);
			}else if(response.data.code == 2){
				this.$toast(response.data.msg);
			}
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

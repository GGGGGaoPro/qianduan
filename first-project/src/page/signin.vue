<template style="background: url(../../static/0.jpg);">
  <div id="content" class="content">
    <!--头像start-->
    <img class="head" src="../assets/WX1.jpg"/>
    <!--头像end-->

    <!--userName start-->
    <div class="minput">
      <img src="../assets/icon-user.png"/>
      <input v-model="phone" type="text" placeholder="请输入手机号"/>
    </div>
    <!--userName end-->

    <!--password start-->
    <div class="minput">
      <img src="../assets/icon-password.png"/>
      <input v-model="password" type="password" placeholder="请输入密码"/>
    </div>
	
   <div class="safecode">
      <img src="../assets/icon-password.png"/>
      <input type="text" placeholder="区分大小写"/>
	  <!-- v-model="verifyInput" -->
    </div>
	<div class="img1">
		<img class="verifyCode" name="verifyCode" @click="changeCode" src="http://localhost:8080/TeamApp_User/user/getVerifyCode.action"/>
	</div>

    <!--password start-->
    <div class="divbtn">
    <van-button type="info" @click="signin" id="btn">注册</van-button>
    <van-button type="info" to="/login" id="btn">已有账号</van-button>
    </div>
      <span style="display: block;width: 100%;color: #aaa; position: fixed;bottom: 2rem; font-size: medium;">
      饺子就酒，越吃越有
      </span>

  </div>
</template>

<script>
export default{
  name: 'Signin',
  data () {
    return {
      ok: false,
      phone: '',
      password: '',
      // verifyInput:''
    }
  },

  // 注册验证，用户名、手机号未被占用，两次密码输入一致，则成功跳转  跳过登录界面直接跳转至index

  methods: {
    signin(){
      if (this.password !== '' && this.password !== '') {
		  var t = this.$toast.loading({
		  		mask:true,
		  		duratrion:0,
		  		forbidClick:true,
		  		message:'注册中...'
		  	});
		  	this.$axios.get('http://localhost:8080/TeamApp_User/user/save.action',{
		  		params:{
					username:'sdlfj',
		  			phone:this.phone,
		  			password:this.password,
					// verifyInput:this.verifyInput
					// session.getAttribute()
		  		}
		  	}).then(response =>{
		  		t.clear();
		  		if(response.data.code == 1){
		  			this.$toast(response.data.msg);
		  			localStorage.setItem("com.lanq",this.phone);
		  			// localStorage.setItem("com.id",response.data.Data.id);
					this.$router.push({'path': '/S1'})
		  		}else if(response.data.code == 0){
		  			this.$toast(response.data.msg);
		  		}
		  	})
        
		}
	  },
	  changeCode(){
		var src = "http://localhost:8080/TeamApp_User/user/getVerifyCode.action?"+new Date().getTime(); //加时间戳，防止浏览器利用缓存
		$('.verifyCode').attr("src",src);
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
  body { margin: 0; padding: 0;}

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
  .safecode {
	margin-left: -75px;
  }
  
  .safecode input{
	  width: 120px;
	  padding: 0.1rem 0.1rem;
	  border-radius: 8px;
	  border: 1px solid #707070;
	  height: 2rem;
	  color: #707070;
	  text-align: center;
  }
  .safecode img {
	  display: inline-block;
	  width: 1rem;
	  height: 1rem;
  }
  .img1 img {
	position: absolute;
	left: 230px;
	bottom: 130px;
	width: 60px;
	height: 40px;
  }
  .divbtn{
	  margin-top: 0px;
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
  #btn{
    width: 40%;
  }

</style>

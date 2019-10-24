<!-- 评论页面 -->
<template>
  <div>
<van-nav-bar
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"

/>

 <img    class="img2"  src="../assets/4.jpg"       />

  <div class="div1">
   <h4 class="p1">前世和谁许了愿</h4>

  <router-link to="/pinglun"><van-icon style="float: right; margin-top: -35px; margin-right: 40px;" name="more-o" /></router-link>

  </div>
  <div class="div2">
     <img    class="img3"  src="../assets/4.jpg"       />

  </div>
  <div class="div2">
     <textarea style="margin-left:34px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
  </div>

 <img    class="img22"  src="../assets/4.jpg"       />

  <div class="div11">
   <h4 class="p11">你是谁：</h4>
  </div>
  <div class="div22">
     <textarea style="margin-left:34px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
  </div>

  <img    class="img22"  src="../assets/4.jpg"       />

   <div class="div11">
    <h4 class="p11">你是谁：</h4>
   </div>
   <div class="div22">
      <textarea style="margin-left:34px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
   </div>

  </div>
</template>

<script>
export default {
  name: 'pinglun',
  methods: {
    onClickLeft () {
      location.href = 'http://localhost/#/dongtai'
    }
  }
}
</script>

<style scoped>

  .img1{
    width: 100%;
    height: 35%;
  }

  .img2{
    width:40px;
    height: 40px;
    float: left;
    margin-left: 20px;
    border-radius: 40px;
    margin-top: 25px;
  }

  .img22{
    width:30px;
    height: 30px;
    float: left;
    margin-left: 60px;
    border-radius: 40px;
    margin-top: 25px;
  }
  .div1{

    padding-left: 500;
    margin-top: 36px;
  }

  .div11{

    padding-left: 5px;
    margin-top: 30px;
  }
  .p1{
   text-align: left;
   padding-left: 70px;
  padding-top: -30px;
  }

  .p11{
   text-align: left;
   padding-left: 90px;
  padding-top: -40px;
  }
  .img3{

    width:140px;
    height: 140px;
    margin-left: -50px;
  }
  .div3{
    margin-top:30px;
  }

</style>

<!-- 添加 -->

<template>
  <div>

<van-nav-bar
  title="发表动态"
  left-text="返回"
  right-text="发表"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

   <img    class="img2"  src="../assets/4.jpg"       />

   <div class="div1">
    <p class="p1">前世和谁许了愿</p>

   </div>

   <div class="div2">
      <img    class="img3"  src="../assets/4.jpg"       />

   </div>
   <div class="div2">
      <textarea style="margin-left:14px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
   </div>

<!--
<router-link to='/dongtai' >  <van-icon style="float: right; margin-top: -35px; margin-right: 20px;" name="more-o" /> </router-link> -->

  </div>
</template>

<script>
export default {
  name: 'tianjia',
  methods: {
    onClickLeft () {
      location.href = 'http://localhost/#/dongtai'
    },
    onClickRight () {
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
  .div1{

    padding-left: 500;
    margin-top: 36px;
  }
  .p1{
   text-align: left;
   padding-left: 70px;
  padding-top: -30px;
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

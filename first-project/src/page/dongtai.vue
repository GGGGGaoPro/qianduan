<!-- 动态页面 -->
<template>
  <div>
  <img  class="img1"  src="../assets/4.jpg"/>
<van-tabbar >
  <van-tabbar-item to="/forum" icon="arrow-left"></van-tabbar-item>
  <van-tabbar-item to="/tianjia" icon="add-o"></van-tabbar-item>
</van-tabbar>
  <img    class="img2"  src="../assets/4.jpg"       />
  <div class="div1">
   <p class="p1">前世和谁许了愿</p>
   <p class="like"   v-bind:class="{'like':isA ,'cs':!isA}"  @click="bian"   style="position: absolute;left: 255px; top: 346px;"   >&#10084;</p>
  <router-link to="/pinglun"><van-icon style="float: right; margin-top: -35px; margin-right: 20px;" name="more-o" /></router-link>

  </div>
  <div class="div2">
     <img    class="img3"  src="../assets/4.jpg"       />
  </div>
  <div class="div2">
     <textarea style="margin-left:34px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
  </div>
  <img    class="img2"  src="../assets/4.jpg"       />
  <div class="div1">
   <p class="p1">前世和谁许了愿</p>
   <p class="like"   v-bind:class="{'like':isA ,'cs':!isA}"  @click="bian"   style="position: absolute;left: 255px; top: 615px;"   >&#10084;</p>
   <router-link to="/pinglun"><van-icon style="float: right; margin-top: -35px; margin-right: 20px;" name="more-o" /></router-link>
  </div>
  <div class="div2">
     <img    class="img3"  src="../assets/4.jpg"       />
  </div>
  <div class="div2">
     <textarea style="margin-left:34px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
  </div>
  <img    class="img2"  src="../assets/4.jpg" />
  <div class="div1">
   <p class="p1">前世和谁许了愿</p>
   <p class="like"   v-bind:class="{'like':isA ,'cs':!isA}"  @click="bian"   style="position: absolute;left: 255px; top: 883px;"   >&#10084;</p>
  <router-link to='/pinglun' >  <van-icon style="float: right; margin-top: -35px; margin-right: 20px;" name="more-o" /></router-link>
  </div>
  <div class="div2">
     <img    class="img3"  src="../assets/4.jpg"       />
  </div>
  <div class="div2">
     <textarea style="margin-left:34px ; border: 0px solid white;" rows="2" cols="26" > </textarea>
  </div>
  </div>
</template>

<script>
export default {
  name: 'dongtai',
  data: function () {
    return {
      isA: false
    }
  },
  methods: {
    bian: function () {
      this.isA = !this.isA
    }
  }
}

</script>

<style scoped="scoped">
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
    margin-top: 35px;
  }
  .div1{

    padding-left: 500;
    margin-top: 43px;
  }
  .p1{
   text-align: left;
   padding-left: 70px;
  }
  .img3{

    width:140px;
    height: 140px;
    margin-left: -50px;
  }
  .div3{
    margin-top:30px;
  }

  .like{font-size:18px; color:#f00; cursor:pointer;}
  .cs{font-size:18px;  color:#ccc;}
</style>

<!-- 讨论区页面 -->
<template>
<div>
  <van-sticky>
    <van-nav-bar title="讨论区">
      <van-icon> <img id="img2" src="../assets/taolun.jpg"  slot="left"> </van-icon>
      <van-icon name="add-o" slot="right"> </van-icon>
    </van-nav-bar>
    <van-search  placeholder="请输入搜索关键词"  ></van-search>
  </van-sticky>
  <div>
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item><img class="img1" src="../assets/yangsheng.png"></van-swipe-item>
        <van-swipe-item><img class="img1" src="../assets/doudou.png"></van-swipe-item>
        <van-swipe-item><img class="img1" src="../assets/yingyang.jpeg"></van-swipe-item>
        <van-swipe-item><img class="img1" src="../assets/mao.jpg"></van-swipe-item>
      </van-swipe>
  </div>
<h1 style="text-align: left; margin-left:15px;">分类:</h1>

<div id="div_left">

<router-link to='/dongtai' >  <img  class="img4"  src="../assets/4.jpg"/></router-link>
</div>

<div id="div_right">
  <img  class="img4"  src="../assets/4.jpg"/>

</div>

</div>
</template>

<script>
export default {
  name: 'forum',
  data () {
    return {
      activeName: '1'
    }
  }
}
</script>

<style scoped>
 #img2{
   width: 50px; height: 50px; ;
   position: absolute;
  top: -48px;
   margin-left: -5px;
 }

  .img1{
   margin-top:15px;
    width: 288px;
    height:120px;
    text-align: center;

  }
  #p1{
    margin-top: -40px;
    margin-left: 15px;
  }

  .van-nav-bar{
   text-align: left;
    }

    .img4{
     width: 150px;
     height: 150px;
     border-radius: 15px;

    }

    #div_left{
     text-align: center;
           width: 50%;
           height:2000px;
     background-color: antiquewhite;
           float: left;

    }

    #div_right{
      text-align: center;
            width: 50%;
            height:2000px;

            float: left;

    }

    .van-swipe{
      margin-top: -13px;
    }
</style>

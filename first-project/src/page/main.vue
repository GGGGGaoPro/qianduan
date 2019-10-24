<!-- 首页页面 -->

<template>
 <div>

 <van-sticky>

    <div id="div1">
             <div id="div2">

                <van-search

                placeholder="请输入搜索关键词"
                show-action
                shape="round"

              >
                <div slot="action" >搜索</div>
              </van-search>
             </div>
             <div id="div3">
        <router-link to="/laixiaoxi" >   <van-icon name="wap-home-o"  size="33px"/>   </router-link>
             </div>
    </div>

<van-tabs v-model="active" style="margin-top: 3px; border-top: 6px white solid; " v-if="!this.$route.meta.isShow" >
  <van-tab title="关注" to="/guanzhu"></van-tab>
  <van-tab title="发现" ></van-tab>

</van-tabs>

 </van-sticky>
  <div>
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item><img class="img1" src="../assets/jikuaikuai.png"></van-swipe-item>
        <van-swipe-item><img class="img1" src="../assets/yazi.jpg"></van-swipe-item>
        <van-swipe-item><img class="img1" src="../assets/suji.jpg"></van-swipe-item>
        <van-swipe-item><img class="img1" src="../assets/caihuahua.png"></van-swipe-item>
      </van-swipe>
  </div>

<div id="div4">

  <div id="div5"><h3>为您推荐</h3></div>
  <div id="div6"><router-link to='/classify' ><h5>菜谱分类</h5></router-link></div>

</div>

<div id="div_left">
<div v-for="m in msglist">

<div class="div1">
 <router-link to='/zuofa'>
<img class="img3"  :src="`http://10.150.5.120:8080/cover/${m.cover}`"  /></router-link>

<router-link to="/khxx"><img id="img3" :src="`http://10.150.5.120:8080/cover/${m.cover}`" /></router-link>
<p class="like" id='pp'>&#10084;</p>
<router-link to="/khxx"><h6>{{m.bTitle}}</h6></router-link>

</div>
</div>

</div>

 </div>

</template>

<script>

export default {
  name: 'main',
  data () {
    return {
      active: 1,
      msglist: null,
      userlist: null,
      id: 0
    }
  },
  methods: {

  },
  mounted () {
    var t = this.$toast.loading({ // 加载中
      mask: true,
      duration: 0,
      forbidClick: true,
      message: '正在加载...'
    })

    this.$axios.get('http://10.150.5.120:8080/APP2/blog/getall.action', {

      params: {
        fromUserId: 0 // localStorage.getItem('com.lanqiao.user.id')
      }

    }).then(response => {
      t.clear()
      console.log(response.data)
      console.log(response.data[3].uId)

      // console.log(response.data)
      this.msglist = response.data
    })
  }
}

$(function () {
  $('#pp').click(function () {
    $(this).toggleClass('cc')
  })
})
</script>

<style scoped>

  p{
  width: 50px;
  position: relative;
  left: 80px;
  top: -22px;
  }
 h6{
   margin-top: -62px;
   text-align: left;
   margin-left: 35px;
width: 100px;
 }
   #div1{
     width: 100% ;
     height: 43px;

   }
   #div2{
     width: 87% ;
     height: 43px;

     float: left;
   }
   #div3{
     background-color: white;
      padding-top: 9px;
      margin-right: 0px;
   }

.img1{
 margin-top:15px;
  width: 288px;
  height:120px;
  text-align: center;

}

 #div4{
  width: 100%;
  height: 60px;

   }

  #div5{
    height: 100%;
    float: left;
    margin-left: 20px;
    }

    #div6{
   height: 100%;
      float: right;
      margin-right: 20px;

      }

   #div_left{
   text-align: left;
      width: 100%;
      height:2000px;
      background-color: antiquewhite;

      }
/*
    #div_right{
   text-align: center;
       float: left;
        width: 50%;
       height: 2000px;

       } */

       .img2{
         width: 115px;
         height: 115px;
        border-radius: 15px;

       }

       #img3{
         width: 15px;
         height: 15px;
         border-radius: 8px;
         float: left;
          margin-left: 15px;
          margin-bottom: 5px;
          margin-top: 108px;
       }
       .img3{
         width: 140px;
         height: 100px;
         border-radius: 15px;
       margin-top: 5px;
       margin-left: -30px;
       }

.div1{
  width: 48%;
  float: left;
  margin-left: 6px;
}

  .like{ font-size:18px;  color:#ccc; cursor:pointer;}
  .cc{color:#f00;}
</style>

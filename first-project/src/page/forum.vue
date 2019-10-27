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
<div	v-for="(m,i) in msglist">
<div class="div1">
<router-link to='/dongtai' > <img   @click="change($event)"  class="img4"  :src="`http://10.150.5.65:8080/dynaimgpath/${m.dynaCataImg}`" />
<h1 style="display: none;"  >{{m.dynaCataId}}</h1>

<p>{{m.dynaCataName}}</p></router-link>

</div>
</div>
</div>











</div>
</template>

<script>
export default {
  name: 'forum',
  data () {
    return {
      activeName: '1',
      msglist:null,

    }
  },
    methods: {
        change(e){

          console.log($(e.target).next("h1").text())
        

          localStorage.setItem("com.id",$(e.target).next("h1").text())

          console.log($(e.target).attr("src"))
          localStorage.setItem("com.img",$(e.target).attr("src"))

        }

    },
    mounted() {
        var t = this.$toast.loading({ // 加载中
            mask: true,
            duration: 0,
            forbidClick: true,
            message: '正在加载...'
          })

          this.$axios.get('http://10.150.5.65:8080/cosmos/topic/getCata.action', {

            params: {
              fromUserId: 0 // localStorage.getItem('com.lanqiao.user.id')
            }

          }).then(response => {
            t.clear()



            console.log(response.data)


            // console.log(response.data)
            this.msglist = response.data
          })
}
}
</script>

<style scoped>
  p{
    background-color: rgba(255,255,255,0.65);
    margin-left: 9px;
     width: 135px;
     height: 30px;
     border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    position: relative;
    top: -61px;
    color: black;
    font-family: 楷体;
font-size: 22px;
padding-top: 5px;
  }
 #img2{
   width: 50px; height: 50px; ;
   position: absolute;
  top: -48px;
   margin-left: -5px;
 }
.van-swipe-item{
  text-align: center;
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
     width: 135px;
     height: 135px;
     border-radius: 15px;
     margin-top: 10px;
    }

   #div_left{
   text-align: left;
      width: 100%;
      height:2000px;
      background-color: antiquewhite;

      }



    .van-swipe{
      margin-top: -13px;
    }

    .div1{
      width: 48%;
      height: 155px;
      float: left;
      margin-left: 6px;
      text-align: center;
    }
</style>

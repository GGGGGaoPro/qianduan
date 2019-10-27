<template>
  <div>



  <router-link to='/square' ><van-icon class="van" name="arrow-left" size="30px"/></router-link>

  <van-tabbar v-model="active">


      <van-tabbar-item @click="toNotify" icon="home-o"  id="notify" >收藏 </van-tabbar-item>




        <van-tabbar-item ></van-tabbar-item>
           <router-link to="/cdpinglun">  <van-tabbar-item icon="smile-comment-o"  style="margin-top: 14px;" ></van-tabbar-item></router-link>
        <van-tabbar-item ></van-tabbar-item>

  </van-tabbar>
  <router-view/>

<img class="img1" :src="`http://10.150.5.120:8080/cover/${msglist.cover}`"/>

<p style="font-size: 25px; text-align: center;">{{msglist.bTitle}}</p>
<p style="text-align: center;">{{msglist.brower}} &nbsp;收藏</p>


<img    class="img2" :src="`http://10.150.5.120:8080/cover/${msglist.cover}`"/>
<p style="font-size: 20px; margin-top: -40px; margin-left: -80px; text-align: center;">{{msglist.bTitle}}</p>



<input style="background: #FF0000; position: absolute;left: 240px; top: 397px;" type="button" class="div" value="关注我"    />
<h3 style="margin-left: -200px; margin-top: 30px; text-align: center;">介绍:</h3>
<p >{{msglist.bContent}}</p>
<p >{{msglist.bContent}}</p>

<p >{{msglist.bContent}}</p>

<p >{{msglist.bContent}}</p>

<p >{{msglist.bContent}}</p>

<p >{{msglist.bContent}}</p>




  </div>
</template>

<script>
   $(document).ready(function(){
     var onOff=true;
     var div=$(".div")
     div.click(function(){
       if (div.onOff) {
        div.val("关注我")
        div.css({"background":'red'})
        div.onOff = false;
       } else {
         div.css({"background":'#ccc'})
         div.val("已关注")
        div.onOff = true
       }
      })
     })




export default {
  name: 'zuofa',
  data () {
    return {
      active:0,
      msglist:null,

    }
  },
  methods: {
     toNotify(){
             this.$notify({
               message:'收藏成功',
               background:'pink',
               duration: 2000
             })
           }
  },
  created() {
    var t = this.$toast.loading({ // 加载中
      mask: true,
      duration: 0,
      forbidClick: true,
      message: '正在加载...'
    })

    this.$axios.get('http://10.150.5.120:8080/APP2/blog/getall.action', {

      params: {
        fromUserId: 1 // localStorage.getItem('com.lanqiao.user.id')
      }

    }).then(response => {
      t.clear()
      console.log(response.data[0])
      // console.log(response.data)
      this.msglist = response.data[0]
    })
  }

}


</script>

<style scoped>

  p{
    text-align: center;
  }
  .img1{
    width: 100%;
    height: 250px;
  }

  .img2{
    width: 45px;
    height: 45px;
    border-radius: 40px;
margin-top: 15px;
text-align: center;
   margin-left: 28px;
  }

  .van-card{
    height: 308px;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
.van-card__header{
  height: 308px;
  width: 100%;
}

.van-card__thumb{
  height: 100%;
  width: 100%;
}
  .van-image__img{
    width: 100%;
    height: 100%;
  }

  .van-card__title{
    padding-top: 20px ;
        font-size: 25px;
        max-height: 50px;
        line-height: 50px;
  }
  .van{
    position: absolute;
    width: 30px;
    padding: 10px;

  }

</style>

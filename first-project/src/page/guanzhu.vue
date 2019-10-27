<template>
<div>

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


<van-sticky>
<van-tabs v-model="active" style="margin-top: 3px; border-top: 6px white solid; " v-if="!this.$route.meta.isShow" >
    <van-tab title="关注" to="/guanzhu"></van-tab>
    <van-tab title="发现" to="/square"></van-tab>
</van-tabs>
</van-sticky>



<div id="div_left">
    <!-- <template	v-for="m in msglist">
     	<van-card
     	:desc="m.uId"
     	:title="m.bTitle"
     				:thumb="`http://10.150.5.120:8080/cover/${m.cover}`"
     	></van-card> -->

<div	v-for="(m,i) in msglist">


<div class="div1">
 <router-link to='/zuofa'>
<img class="img3"  :src="`http://10.150.5.120:8080/cover/${m.cover}`"  /></router-link>

<router-link to="/khxx"><img id="img3"  :src="`http://10.150.5.120:8080/cover/${m.cover}`" /></router-link>
<p class="like" id='pp'   @click="change($event)">&#10084;</p>
<input :value="`${m.uId}`" type="hidden" id="getId"/>
<router-link to="/khxx"><h6>{{m.bTitle}}</h6></router-link>

</div>
</div>
</div>











  </div>
</template>


<script>
export default {
  name: 'square',
  data () {
    return {
      active: 0,
      msglist: null,
      userlist: null,
      id: 0
    }
  },
  methods: {
      change(e){

          console.log(e.target)
          //var o = this.msglist[index];
          $(e.target).toggleClass('cc')
          this.id=$("#getId").val()
         console.log($("#getId").val())
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
            fromUserId: 0 // localStorage.getItem('com.lanqiao.user.id')
          }

        }).then(response => {
          t.clear()
          console.log(response.data)
          console.log(response.data[3].uId)

          // console.log(response.data)
          this.msglist = response.data
        })




      var z = this.$toast.loading({ // 加载中
          mask: true,
          duration: 0,
          forbidClick: true,
          message: '正在加载...'
        })

        this.$axios.get('http://10.150.5.60:8080/springmvc04/test/save.action', {

          params: {
            blogId: 1 ,// localStorage.getItem('com.lanqiao.user.id')
            userId:id
          }

        }).then(response => {
          z.clear()
          console.log(response.data)


          // console.log(response.data)

        })
  },

  mounted () {

  }










}


</script>

<style scoped>

  #div_left{
  text-align: left;
     width: 100%;
     height:2000px;
     background-color: antiquewhite;

     }
  #div1{
    width: 100% ;
    height: 43px;

  }
  #div2{
    width: 87% ;
    height: 43px;
    background-color: #42B983;
    float: left;
  }
  #div3{
    background-color: white;
     padding-top: 9px;
     margin-right: 0px;
  }


  .div1{
    width: 48%;
    float: left;
    margin-left: 6px;
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

  .like{ font-size:18px;  color:#ccc; cursor:pointer;}
  .cc{color:#f00;}

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
</style>

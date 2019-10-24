<!-- 查看信息 -->
<template>
  <div>
<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft"/>
   <div id="div1">
     {{userlist.username}}
   </div>
  <img   id="img1"    :src="`http://10.150.5.57:8080/images/${userlist.headPic}`" />
  <div id="div2">
  </div>
      <h4 >{{userlist | dataformat}}  </h4>
  </div>
</template>
<script>
export default {
  name: 'ckxx',
  data () {
    return {
      userlist: null
    }
  },
  filters: {
    dataformat () {
      return '女'
    }
  },
  methods: {
    onClickLeft () {
      location.href = 'http://localhost/#/'
    }
  },
  mounted () {
    var u = this.$toast.loading({ // 加载中
      mask: true,
      duration: 0,
      forbidClick: true,
      message: '正在加载...'
    })
    this.$axios.get('http://10.150.5.57:8080/TeamApp_User/user/getById.action', {
      params: {
        userid: 3// localStorage.getItem('com.lanqiao.user.id')
      }
    }).then(response => {
      u.clear()
      console.log(response.data.data)
      this.userlist = response.data.data
    })
  }
}
</script>

<style scoped>
    #div1{
      width: 30%;
      height: 50px;
      float: left;
      text-align: center;
      font-size: 40px;
      font-family: "楷体";
      padding-top: 30px;
      padding-left: 20px;
      }
    #img1{
      margin-left: 50px;
      margin-top: 20px;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      }
</style>

<!-- 做法页面 -->
<template>
  <div>
    <div v-for="m in msglist">
      <router-link to='/' ><van-icon class="van" name="arrow-left" size="30px"/></router-link>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">收藏</van-tabbar-item>
        <van-tabbar-item icon="smile-comment-o" ></van-tabbar-item>
        <van-tabbar-item ></van-tabbar-item>
        <van-tabbar-item ></van-tabbar-item>
      </van-tabbar>
      <router-view/>
      <img class="img1" :src="`http://10.150.5.120:8080/cover/${m.cover}`"/>
      <van-card thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"/>
      <van-card title="商品标题"/>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zuofa',
  data () {
    return {
      active: 0,
      msglist: null
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
    this.$axios.get('http://10.150.5.120:8080/APP2/blog/getall.action',
      {
        params: {
          fromUserId: 1
        }
      }).then(response => {
      t.clear()
      console.log(response.data[0])
      // console.log(response.data)
      this.msglist = response.data
    })
  }
}
</script>

<style scoped="scoped">
  .img1{
    width: 100%;
    height: 350px;
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

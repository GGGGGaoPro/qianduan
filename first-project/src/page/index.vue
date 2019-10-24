<template>
  <div>
    <van-nav-bar title="微信">
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
      <!-- 标题 -->
    <van-search placeholder="搜索" ></van-search>
      <!-- 搜索 -->
      <van-card
        desc="描述信息"
        title="商品标题"
        thumb="https://pic.qqtn.com/up/2017-12/15133953042707517.jpg"
      />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '首页'
    }
  },
  methods: {

  }
}
</script>

<style scoped="scoped">
  .van-card__title{
    line-height: 25px;
    font-size: 20px;
    margin-top: 6px;
    margin-left: 10px;
    margin-bottom: 26px;
  }
  .van-card__desc{
    margin-left: 10px;
    font-size: 16px;
  }
</style>

<!-- 关注页面 -->
<template>
  <div>
    <van-sticky>
      <div id="div1">
        <div id="div2">
          <van-search placeholder="请输入搜索关键词" show-action shape="round">
            <div slot="action" >搜索</div>
              </van-search>
        </div>
            <div id="div3">
              <van-icon name="wap-home-o"  size="33px"/>
            </div>
      </div>
      <van-tabs v-model="active" style="margin-top: 3px; border-top: 6px white solid; " v-if="!this.$route.meta.isShow" >
        <van-tab title="关注" to="/guanzhu"></van-tab>
        <van-tab title="发现" to="/"></van-tab>
      </van-tabs>
    </van-sticky>
  <h1>关注</h1>
  </div>
</template>

<script>
export default {
  name: 'guanzhu',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
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
</style>

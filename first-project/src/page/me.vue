<template>
  <div>
    <div>
      <van-nav-bar>
        <van-icon name="setting-o" slot="right" />
      </van-nav-bar>
      <div id="top">
        <div id="title" @click="change">
          <van-image round width="56px" height="56px" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div id="title-text">
            <h4 style="color: #000000; margin: 9px; font-size: 15px;">用户名</h4>
            <h4 style="color: #999999; margin: 13px 9px 8px 9px; font-size: 14px;">简介</h4>
          </div>
        </div>
      </div>
      <div id="mid">
        <!-- 菜系分类界面 -->
        <van-grid clickable>
          <van-grid-item icon="photo-o" text="菜" url=""/>
          <van-grid-item icon="photo-o" text="系" url=""/>
          <van-grid-item icon="photo-o" text="分" url=""/>
          <van-grid-item icon="photo-o" text="类" url=""/>
        </van-grid>
      </div>
      <div id="float">
        <tabs></tabs>
      </div>
    </div>
  </div>

</template>

<script>
import tabs from '@/components/tabs'
export default {
  name: 'Me',
  components: {
    tabs
  },
  data () {
    return {
      active: 4
    }
  },
  methods: {
    change: function () {
      this.$router.push({path: '/alter'})
    }
  }
}
// 跳转至 修改页面

</script>
<style scoped="scoped">
  body {
    background-color: #F0F0F0;
  }
  .van-nav-bar {
      position: relative;
      height: 36px;
      }
  .van-nav-bar__right {
    top: -6px;
    font-size: 21px;
}
  #top {
    height: 76px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }
  #mid {
    margin-bottom: 10px;
  }
  #float{
    margin-bottom: 45px;
  }
  #title-text{
    float: left;
    top: 10px;
  }
  #title {
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
  }

  .van-image--round {
    float: left;
    margin: 8px;
  }
</style>

<template>
  <div id="app">
    <van-tabbar v-model="active" v-show="!this.$route.meta.isshow">
      <van-tabbar-item icon="chat-o" to="/index">主</van-tabbar-item>
      <van-tabbar-item icon="search" to="/list">通讯录</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <van-tabbar v-model="active" v-show="!this.$route.meta.isshow">
      <van-tabbar-item icon="chat-o" to="/index">主</van-tabbar-item>
      <van-tabbar-item icon="search" to="/list">通讯录</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
    <transition :name="transitionName">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'fold-left',
      active: 0
    }
  },
  watch: {
    '$route' (to, from) {
      // 此时假设从index页面跳转到pointList页面
      console.log(to)
      console.log(from)
      const routeDeep = ['/', '/S1', 'login', '/index', 'me', '/alter']
      const toDepth = routeDeep.indexOf(to.path)
      const fromDepth = routeDeep.indexOf(from.path)
      this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right'
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
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }

  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }
  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
</style>

<!-- 选择喜欢的菜系 -->
<template >
  <div class="body">
    <div id="title-text">
      <p class="p">您中意的菜系</p>
    </div>
    <div id="title">
      <van-button round type="info" size="small" class="bt" :class="{'bt':isA,'bt2':!isA}" @click="change">粤菜</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'S1',
    data () {
      return {
        isA:true
      }
    },
    methods: {
      // 实现点击变色
      change: function () {
        this.isA=!this.isA
      }
    }
  }
</script>

<style scoped='scoped '>
  .body {
    background: url(../assets/bg3.jpg);
    background-size: 100% 100%;
    /* background-size: cover; */
    background-repeat: no-repeat;
    margin: 0px;
    position: fixed;
    height: 100%;
    width: 100%;
    }
    .p {
      font-family: kaiti;
      font-size: 20px;
      font-weight: 300;
      margin-left: 19%;
      margin-top: 20%;
      margin-bottom: 10px;
    }
    .bt {
      min-width: 15%;
      margin-left: 19%;
      font-size: 15px;
      font-weight: 250;
      font-family: kaiti;
      color: #000000;
      background: white;
    }
    .bt2 {
      min-width: 15%;
      margin-left: 19%;
      font-size: 15px;
      font-weight: 250;
      font-family: kaiti;
      color: #000000;
      background: black;
    }
</style>

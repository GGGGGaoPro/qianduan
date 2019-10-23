<!-- 选择喜欢的菜系 -->
<template >
  <div class="body">
    <div id="title-text">
      <p class="p">您中意的菜系</p>
    </div>
    <div id="title">
      <van-button round type="info" size="small" class="bt" :class="{'bt':A,'bt1':!A}" @click="change1">川菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':B,'bt1':!B}" @click="change2">鲁菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':C,'bt1':!C}" @click="change3">粤菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':D,'bt1':!D}" @click="change4">苏菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':E,'bt1':!E}" @click="change5">浙菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':F,'bt1':!F}" @click="change6">闽菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':G,'bt1':!G}" @click="change7">湘菜</van-button>
      <van-button round type="info" size="small" class="bt" :class="{'bt':H,'bt1':!H}" @click="change8">徽菜</van-button>
      <!--<van-button round type="warning" size="small" class="bt" :class="{'bt':isA,'bt2':!isA}" v-for="(c,l) in CXlist" @click="change(l)">{{c.cai}}</van-button>-->
    </div>
    <div id="float-text">
      <p class="p1">最喜欢的口味</p>
    </div>
    <div id="float">
      <van-button round type="info" size="small" class="bt2" :class="{'bt2':K1,'bt3':!K1}" @click="changeK1">酸</van-button>
      <van-button round type="info" size="small" class="bt2" :class="{'bt2':K2,'bt3':!K2}" @click="changeK2">甜</van-button>
      <van-button round type="info" size="small" class="bt2" :class="{'bt2':K3,'bt3':!K3}" @click="changeK3">苦</van-button>
      <van-button round type="info" size="small" class="bt2" :class="{'bt2':K4,'bt3':!K4}" @click="changeK4">辣</van-button>
      <van-button round type="info" size="small" class="bt2" :class="{'bt2':K5,'bt3':!K5}" @click="changeK5">咸</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'S1',
  data () {
    return {
      // A~H为菜系
      // K1~5为口味
      A: true,
      B: true,
      C: true,
      D: true,
      E: true,
      F: true,
      G: true,
      H: true,
      K1: true,
      K2: true,
      K3: true,
      K4: true,
      K5: true
    }
  },
  methods: {
    // 实现点击变色
    change1 () {
      this.A = !this.A
    },
    change2 () {
      this.B = !this.B
    },
    change3 () {
      this.C = !this.C
    },
    change4 () {
      this.D = !this.D
    },
    change5 () {
      this.E = !this.E
    },
    change6 () {
      this.F = !this.F
    },
    change7 () {
      this.G = !this.G
    },
    change8 () {
      this.H = !this.H
    },
    changeK1 () {
      this.K1 = !this.K1
    },
    changeK2 () {
      this.K2 = !this.K2
    },
    changeK3 () {
      this.K3 = !this.K3
    },
    changeK4 () {
      this.K4 = !this.K4
    },
    changeK5 () {
      this.K5 = !this.K5
    }
  }
}
</script>
<style scoped='scoped '>
  .body {
    background: url(../assets/bg3.jpg);
    /* background-size: cover;   */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0px;
    position: fixed;
    height: 100%;
    width: 100%;
    }
    #title {
      margin-left: 19%;
      margin-right: 2%;
    }
    #float {
      margin-left: 19%;
    }
    .p {
      font-family: kaiti;
      font-size: 21px;
      font-weight: 300;
      margin-left: 19%;
      margin-top: 24%;
      margin-bottom: 10px;
    }
    .p1 {
      font-family: kaiti;
      font-size: 21px;
      font-weight: 300;
      margin-left: 19%;
      margin-top: 7%;
      margin-bottom: 10px;
    }
    .bt {
      min-width: 15%;
      margin-right: 9%;
      margin-bottom: 10px;
      font-size: 17px;
      font-weight: 250;
      font-family: kaiti;
      color: #000000;
      background: white;
    }
    .bt1 {
      min-width: 15%;
      margin-right: 9%;
      margin-bottom: 10px;
      font-size: 17px;
      font-weight: 250;
      font-family: kaiti;
      color: #000000;
      background: linear-gradient(45deg,rgba(254,172,94,0.3),rgba(199,121,208,0.3),rgba(75,192,200,0.3));
    }
    .bt2 {
      min-width: 15%;
      margin-right: 7%;
      margin-bottom: 10px;
      font-size: 17px;
      font-weight: 250;
      font-family: kaiti;
      color: #000000;
      background: white;
    }
    .bt3 {
      min-width: 15%;
      margin-right: 7%;
      margin-bottom: 10px;
      font-size: 17px;
      font-weight: 250;
      font-family: kaiti;
      color: #000000;
      background: linear-gradient(45deg,rgba(254,172,94,0.25),rgba(199,121,208,0.25),rgba(75,192,200,0.25));
    }

</style>

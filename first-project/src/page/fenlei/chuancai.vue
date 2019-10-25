<template>
  <div>
    <van-nav-bar title="川菜">
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <van-search placeholder="请输入搜索关键字"></van-search>
    <div id="hengkuang">
      <div id="heng">
        <div id="kong"></div>
        <img src="../../assets/img2/001.jpg" id="tu"></img>
        <div id="jianxi"></div>
        <img src="../../assets/img2/002.jpg" id="tu"></img>
      </div>
      <div id="zi">
        <a href="youmendaxia.vue">毛血旺</a>
        <h2>
          <p class="like" @click="change($event)">&#10084;</p>
        </h2>
        <a href="youmendaxia.vue">水煮肉片</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
      </div>
    </div>

    <div id="hengkuang">
      <div id="heng">
        <div id="kong"></div>
        <img src="../../assets/img2/003.jpg" id="tu"></img>
        <div id="jianxi"></div>
        <img src="../../assets/img2/004.jpg" id="tu"></img>
      </div>
      <div id="zi">
        <a href="youmendaxia.vue">宫保鸡丁</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
        <a href="youmendaxia.vue"> 鱼香肉丝</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
      </div>
    </div>

    <div id="hengkuang">
      <div id="heng">
        <div id="kong"></div>
        <img src="../../assets/img2/005.jpg" id="tu"></img>
        <div id="jianxi"></div>
        <img src="../../assets/img2/006.jpg" id="tu"></img>
      </div>
      <div id="zi">
        <a href="youmendaxia.vue">麻婆豆腐</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
        <a href="youmendaxia.vue"> 回锅肉</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
      </div>
    </div>

    <div id="hengkuang">
      <div id="heng">
        <div id="kong"></div>
        <img src="../../assets/img2/007.jpg" id="tu"></img>
        <div id="jianxi"></div>
        <img src="../../assets/img2/008.jpg" id="tu"></img>
      </div>
      <div id="zi">
        <a href="youmendaxia.vue">夫妻肺片</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
        <a href="youmendaxia.vue">东坡肘子</a>
        <h2>
          <p class="like">&#10084;</p>
        </h2>
      </div>
    </div>

  </div>
</template>

<script>

  export default {

    data: function () {
    },
    methods:{
       change($event){
          $(event.target).toggleClass('cs');
          console.log(event.target)
       }
    }

  }
</script>

<style scoped>
  h2 {
    float: left;
  }
  .cs {
    color:#FF0000;
  }
  #kong {
    float: left;
    width: 30px;
    height: 150px;
  }

  #zi {
    /* float: left; */
    width: 100%;
    height: 30px;
  }

  #zi a {
    float: left;
    margin-left: 60px;
  }

  #zi .like {
    font-size: 18px;
    color: darkgrey;
    cursor: pointer;
    margin: -18px 0 -17px 9px;
  }

  #jianxi {
    float: left;
    width: 20px;
    height: 150px;
  }

  #hengkuang {
    float: left;
    width: 100%;
    height: 150px;
  }

  #heng {
    float: left;
    width: 100%;
    height: 120px;

  }

  #tu {
    float: left;
    width: 120px;
    height: 120px;
  }
</style>

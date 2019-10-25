<!-- 分类页面 -->
<template>
		<div id="yemian">
		<van-nav-bar title="分类">
			  <van-icon name="plus" slot="right" />
		</van-nav-bar>
		<van-search placeholder="请输入搜索关键字"></van-search>
    <div id="heng">
  <van-button color="linear-gradient(to right,#6B8E23, #2E8B57)" id="cai">菜系</van-button>
<van-button color="#6B8E23" plain id="caixi" to="/chuancai">川菜</van-button>
<van-button color="#6B8E23" plain id="caixi" to="/lucai">鲁菜 </van-button>
<van-button color="#6B8E23" plain id="caixi" to="/xiangcai">&nbsp;&nbsp;湘菜&nbsp;&nbsp;</van-button>
<van-button color="#6B8E23" plain id="caixi" to="/mincai">闽菜</van-button>
<van-button color="#6B8E23" plain id="caixi" to="/zhecai">浙菜</van-button>
<van-button color="#6B8E23" plain id="caixi" to="/yuecai">粤菜</van-button>
<van-button color="#6B8E23" plain id="caixi" to="/sucai">&nbsp;&nbsp;苏菜&nbsp;&nbsp; </van-button>
<van-button color="#6B8E23" plain id="caixi" to="/huicai">徽菜</van-button>
    </div>
    <div id="heng">
      <van-button  color="linear-gradient(to right,#6B8E23, #2E8B57)"id="cai">一日三餐</van-button>
    <van-button color="#6B8E23" plain id="caixi">早餐</van-button>
    <van-button color="#6B8E23" plain id="caixi">午餐</van-button>
    <van-button color="#6B8E23" plain id="caixi">下午茶</van-button>
    <van-button color="#6B8E23" plain id="caixi">晚餐</van-button>
    <van-button color="#6B8E23" plain id="caixi">宵夜</van-button>
    <van-button color="#6B8E23" plain id="caixi">小吃</van-button>
    <van-button color="#6B8E23" plain id="caixi">小零食</van-button>
    <van-button color="#6B8E23" plain id="caixi">其他</van-button>
        </div>
        <div id="heng">
          <van-button  color="linear-gradient(to right,#6B8E23, #2E8B57)"id="cai">食材</van-button>
        <van-button color="#6B8E23" plain id="caixi">肉类</van-button>
        <van-button color="#6B8E23" plain id="caixi">蛋奶</van-button>
        <van-button color="#6B8E23" plain id="caixi">豆制品</van-button>
        <van-button color="#6B8E23" plain id="caixi">鱼类</van-button>
        <van-button color="#6B8E23" plain id="caixi">海鲜</van-button>
        <van-button color="#6B8E23" plain id="caixi">水果</van-button>
        <van-button color="#6B8E23" plain id="caixi">烟熏卤</van-button>
        <van-button color="#6B8E23" plain id="caixi">干货</van-button>
            </div>
            <div id="heng">
              <van-button  color="linear-gradient(to right,#6B8E23, #2E8B57)"id="cai">主食</van-button>
            <van-button color="#6B8E23" plain id="caixi">米饭</van-button>
            <van-button color="#6B8E23" plain id="caixi">面条</van-button>
            <van-button color="#6B8E23" plain id="caixi">&nbsp;&nbsp;糕点&nbsp;&nbsp;</van-button>
            <van-button color="#6B8E23" plain id="caixi">包子</van-button>
            <van-button color="#6B8E23" plain id="caixi">饺子</van-button>
            <van-button color="#6B8E23" plain id="caixi">饼类</van-button>
            <van-button color="#6B8E23" plain id="caixi">&nbsp;&nbsp;粥类&nbsp;&nbsp;</van-button>
            <van-button color="#6B8E23" plain id="caixi">其他</van-button>

                </div>

               <!-- <van-grid>
                  <van-grid-item  text="文字" >
                       <template slots="icon">
                         <img src="../assets/tubiao01.png" style="width: 28;height: 28;" />
                       </template>
                  </van-grid-item>
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                  <van-grid-item icon="photo-o" text="文字" />
                </van-grid> -->
</div>
</template>
<style scoped>
 #yemian{
    background: url(../assets/img/bg-1.jpg);
    /* background-size: cover;   */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0px;
    position: fixed;
    height: 100%;
    width: 100%;
    }
       #heng{
         float: left;

         height: 100px;
       }

       #cai{
          width: 22%;
          height: 89px;
         float: left;

       }
       #caixi{
         float: left;
       font-size: 12px;
       }
       /* #caidan{
         width: 30px;
         height: 100px;
        float: left;
        text-align: center;
         font-size:5px;
         letter-spacing:2px
       } */
</style>


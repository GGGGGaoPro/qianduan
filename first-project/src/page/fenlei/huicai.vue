<template>

<div>
 <h2><p class="like">&#10084;</p></h2>

    </div>

</template>

<script>


 $(document).ready(function(){
     //鼠标点击动画
     $('p').click(function(e) {
        $(".like").click(function () {
		    $(this).toggleClass('cs');
         e = e || window.event;
         xponit = e.pageX || e.clientX + document.p.scroolLeft;
         yponit = e.pageY || e.clientY + document.p.scrollTop;
         console.log("xponit",xponit);
         console.log("yponit",yponit);
         var elment = "<div class='pointanim' style='position:absolute;top:"+yponit+"px;left:"+xponit+"px;color:red;text-align:center;font-size:20px;'>+1</div>";
         $(this).append(elment);
         $(".pointanim").animate({opacity:'0.5',top:'0'},1000,remove)

     });
     // 回调函数
     function remove(){
          $(".pointanim").remove();
     }

		        })
 })

</script>

<style>
  h1,h2{
          width:18px;
          height:18px;
          text-align:center;
          margin:200px auto;
      }
      .like{ font-size:18px;  color:#ccc; cursor:pointer;}
      .cs{color:#f00;}
</style>

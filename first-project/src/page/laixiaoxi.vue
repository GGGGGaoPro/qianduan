<!-- 来消息页面 -->
<template>
<div>
      <p class="like" id='pp'>&#10084;</p>
      <p class="like" id='pp'>&#10084;</p>
      <p class="like" id='pp'>&#10084;</p>
</div>
</template>

<script>
$(function () {
  $('.like').click(function () {
    $(this).toggleClass('cs')
  })
})
export default {
  name: 'laixiaoxi'
}
</script>

<style>
  .like{ font-size:18px;  color:#ccc; cursor:pointer;}
  .cs{color:#f00;}
</style>

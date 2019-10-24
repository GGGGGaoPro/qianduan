<!-- 分类页面 -->
<template>
<div>
  <van-nav-bar title="分类">
    <van-icon name="add-o" slot="right"> </van-icon>
  </van-nav-bar>
  <van-search  placeholder="请输入搜索关键词"  ></van-search>
</div>
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
      msg: '分类'
    }
  }
}
</script>

<style>
</style>

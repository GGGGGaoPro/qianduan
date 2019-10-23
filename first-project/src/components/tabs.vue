<template>
  <van-tabs v-model="active" color="#10AEFF" @change="tabChange" sticky>
    <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab">
      <van-list
        v-model="loading"
        :finished="finished"
        :finished-text="finishedText"
        @load="onLoad">
        <double-card :colSpan="colSpan" :doubleCardItems="doubleCardItems"></double-card>
      </van-list>
    </van-tab>
  </van-tabs>
</template>

<script>
import {Tab, Tabs, List} from 'vant'
import doubleCard from '@/components/double-card'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    doubleCard
  },
  data () {
    return {
      tabs: [
        '动态',
        '关注',
        '粉丝'
      ],
      loading: false,
      finished: false,
      colSpan: 24,
      doubleCardItems: [
        {
          title: '何东来',
          desc: '大聪明',
          path: '/static/WX1.jpg'
        },
        {
          title: '李涛',
          desc: '大傻涛',
          path: '/static/WX2.jpg'
        }
      ],
      finishedText: '没有更多了o(╯□╰)o',
      active: 0
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          this.doubleCardItems.push({
            title: `菜品${i}`,

            desc: `菜品介绍${i}`,
            path: `/static/${i}.jpg`
          })
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.doubleCardItems.length >= 8) {
          this.finished = true
        }
      }, 500)
      // 延时
    },
    tabChange (active) {
      // 切换显示数据
      console.log(active)
    }
  }
}
</script>

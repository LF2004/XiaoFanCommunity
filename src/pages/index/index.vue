<script setup lang="ts">
import {ref} from 'vue'
import Home from "@/pages/index/components/Home.vue";

import Job from "@/pages/index/components/Job.vue";

import Information from "@/pages/index/components/Information.vue";

import IndexSkeleton from "@/components/skeleton/IndexSkeleton.vue"; // 导入首页骨架屏

import {onLoad} from "@dcloudio/uni-app";
import { userThemeColorValStore } from "@/stores";
const userThemeColorVal = userThemeColorValStore()

// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()
import {userMannerInfoStore, chanePlateIndexStore} from "@/stores"

const userInfoMannerStatusStore = userMannerInfoStore()
const userChanePlateIndexStore = chanePlateIndexStore()
// tabs 数据
const orderTabs = ref([
  {hometate: 0, title: '首页', component: Home},
  {hometate: 1, title: '求职', component: Job},
  {hometate: 2, title: '官方消息', component: Information},
])

// 高亮下标
const activeIndex = ref(0)

const changePlate = (index: number) => {
  activeIndex.value = index
  userChanePlateIndexStore.setPlateIndex({
    plateIndex: index,
    plateIndexName: orderTabs.value[index].title
  })
}

const isShowSkeleton = ref(false)

const addBenDiTotaos = () => {
	uni.createPushMessage({
		title:'有新朋友给你发信息了快来看看',
		content:'你好',
		sound:'system',
		icon:'/static/image/logo.png',
		success:(res) => {
			console.log(res);
		}
	})
}

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];

onLoad(async () => {
  uni.setStorageSync('selectPageIndex', {
    plateIndex: 0,
    pageUrl: "/pages/index/index"
  })
  isShowSkeleton.value = true
  await Promise.all([
    // getHomeBannerData(),
    // getHomeCategoryMutliData(),
    // getHomeHotMutil(),
  ]).then(() => {
    setTimeout(() => {
      isShowSkeleton.value = false
    }, 500)
  })
})

</script>

<template>
  <IndexSkeleton v-if="isShowSkeleton"/>
  <div class="warrper" :style="{'margin-top': safeAreaInsets.top + 'px'}">
    <div class="index-header" >
      <navigator url="/pages/login/login">
        <div class="index-header-my-avatar">
          <image class="user-avarat" :src="userInfoMannerStatusStore?.UserInfoManner.avatar"
                 v-if="userInfoMannerStatusStore?.UserInfoManner"/>
          <span class="iconfont" style="color:#dddddd;font-size: 28px;margin-left: -2px" v-else>&#xe62c;</span>
          <span v-if="userInfoMannerStatusStore?.UserInfoManner"
                style="display: block">{{ userInfoMannerStatusStore?.UserInfoManner.nickName }}</span>
        </div>
      </navigator>
      <navigator url="/pages/search/index" class="search-post" >
        <uni-search-bar placeholder="搜索帖子" cancelText=" "></uni-search-bar>
      </navigator>
      <navigator url="/pages/message/index" class="message-post">
      <div class="index-header-my-avatar">
        <uni-badge :text="3" absolute="rightTop">
          <span class="iconfont" style="color:#000;font-size: 24px;margin-left: -2px">&#xe61c;</span>
        </uni-badge>

      </div>
      </navigator>
    </div>
    <view class="classify-tab">
      <!-- tabs -->
      <view class="tabs">
        <text
            class="item"
            v-for="(item, index) in orderTabs"
            :key="item.title"
            @tap="changePlate(index)"
            :class="activeIndex === index ? 'tabs-select' : 'item'"
        >
          {{ item.title }}
        </text>
      </view>
      <!-- 滑动容器 -->
      <swiper
          class="swiper"
          :current="activeIndex"
          @change="activeIndex = $event.detail.current"
      >
        <!-- 滑动项 -->
        <swiper-item v-for="item,index in orderTabs" :key="item.title">
          <scroll-view scroll-y class="home">
            <component :is="item.component" v-if="index === activeIndex"></component>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
    <FanTabBar :slectTab="activeIndex"/>
  </div>
</template>


<style lang="scss" scoped>

.index-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .user-avarat {
    width: 28px;
    height: 28px;
    border-radius: 100%;
  }

  .search-post {
    width: 80%;
  }
}

.tabs-select {
  color: v-bind(ThemeMainTextColorVal) !important;
  font-weight: bold;
  border-bottom: 3px solid v-bind(ThemeMainBgColorVal);
}

page {
  height: 100%;
  overflow: hidden;
}

.classify-tab {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 10px;
}

// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60 rpx;
  margin: 0 10 rpx;
  background-color: #fff;
  box-shadow: 0 4 rpx 6 rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 20 rpx;
    font-size: 28 rpx;
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 12%;
    height: 6 rpx;
    padding: 0 50 rpx;
    background-color: #ff0304;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}

// swiper
.swiper {
  height: 100vh;
  background-color: #ffffff;
  margin-top: 1rem;
}


.home {
  .card {
    min-height: 100 rpx;
    padding: 20 rpx;
    margin: 20 rpx 20 rpx 0;
    border-radius: 10 rpx;
    background-color: #fff;

    &:last-child {
      padding-bottom: 40 rpx;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28 rpx;
    color: #999;
    margin-bottom: 15 rpx;

    .date {
      color: #666;
      flex: 1;
    }

    .primary {
      color: #ff9240;
    }

    .icon-delete {
      line-height: 1;
      margin-left: 10 rpx;
      padding-left: 10 rpx;
      border-left: 1 rpx solid #e3e3e3;
    }
  }

  .goods {
    display: flex;
    margin-bottom: 20 rpx;

    .cover {
      width: 170 rpx;
      height: 170 rpx;
      margin-right: 20 rpx;
      border-radius: 10 rpx;
      overflow: hidden;
      position: relative;
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6 rpx 4 rpx 6 rpx 8 rpx;
      font-size: 24 rpx;
      color: #fff;
      border-radius: 10 rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      height: 80 rpx;
      font-size: 30 rpx;
      color: #444;
    }

    .type {
      line-height: 1.8;
      padding: 0 15 rpx;
      margin-top: 10 rpx;
      font-size: 24 rpx;
      align-self: flex-start;
      border-radius: 4 rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22 rpx;
      color: #333;
    }
  }

  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20 rpx 0;
    text-align: right;
    color: #999;
    font-size: 28 rpx;
    border-bottom: 1 rpx solid #eee;

    .quantity {
      font-size: 24 rpx;
      margin-right: 16 rpx;
    }

    .amount {
      color: #444;
      margin-left: 6 rpx;
    }

    .symbol {
      font-size: 20 rpx;
    }
  }

  .action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20 rpx;

    .button {
      border: 1 rpx solid #ccc;
      width: 180 rpx;
      height: 60 rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20 rpx;
      border-radius: 60 rpx;
      font-size: 26 rpx;
    }

    .secondary {
      color: #ff0304;
      border-color: #ff0304;

    }

    .primary {
      color: #fff;
      background-color: #ff0304;
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28 rpx;
    color: #666;
    padding: 20 rpx 0;
  }
}
</style>

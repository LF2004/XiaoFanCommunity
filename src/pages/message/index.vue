<template>
  <div class="message-page">
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
  </div>
  <FanTabBar/>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Chat from "@/pages/message/components/Chat.vue";
import Notice from "@/pages/message/components/Notice.vue";
import FanTabBar from "@/components/FanTabBar.vue";


import {onLoad} from "@dcloudio/uni-app";
import {userThemeColorValStore} from "@/stores";

const userThemeColorVal = userThemeColorValStore()

// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()
import {userMannerInfoStore, chanePlateIndexStore} from "@/stores"


const userInfoMannerStatusStore = userMannerInfoStore()
const userChanePlateIndexStore = chanePlateIndexStore()
// tabs 数据
const orderTabs = ref([
  {hometate: 0, title: '聊天', component: Chat},
  {hometate: 1, title: '通知', component: Notice}
])

// 高亮下标
const activeIndex = ref(0)

const changePlate = (index: number) => {
  activeIndex.value = index
}

const isShowSkeleton = ref(false)


const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];

onLoad(async () => {

})

</script>

<style scoped lang="scss">
.message-page {
  width: 100vw;
  height: 100vh;
  background: #f5f6f8;
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
}

.tabs-select {
  color: v-bind(ThemeMainTextColorVal) !important;
  font-weight: bold;
  border-bottom: 3px solid v-bind(ThemeMainBgColorVal);
}
</style>

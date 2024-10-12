<template>
  <div class="tabBar-list">
    <div
        class="item"
        :style="item.isSelected  ? {'color':  userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'] } : '' "
        v-for="(item, index) in tabBarList"
        :key="index"
    >
      <!-- 使用 v-html 渲染图标，但注意 XSS 风险 -->
      <span v-html="item.icon"  @click="changeTabBar(index)"></span>
      <span style="margin-top: -3px">{{ item.name }}</span>
    </div>
  </div>

  <FanPopup ref="popup" title="文章">
    <div class="tabBar-list-popup-warp">
      <div class="operate-list">
        <div class="operate-list-item" @click="goToPubliish()">
          <span class="operate-list-item-icon iconfont" style="color: #ffffff;font-size: 24px" :style="{'background-color':userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color']  }">&#xe878;</span>
          <span class="operate-list-item-text">帖子</span>
        </div>
        <div class="operate-list-item">
          <span class="operate-list-item-icon iconfont" style="color: #ffffff;font-size: 24px" :style="{'background-color':userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color']  }">&#xe62d;</span>
          <span class="operate-list-item-text">图片</span>
        </div>
        <div class="operate-list-item">
          <span class="operate-list-item-icon iconfont" style="color: #ffffff;font-size: 24px" :style="{'background-color':userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color']  }">&#xe750;</span>
          <span class="operate-list-item-text">视频</span>
        </div>
      </div>

      <div class="operate-list-item-disclaimer">
        <text class="operate-list-item-disclaimer-text">1. 在本APP中发布内容则代表您接受本社区的服务条款以及用户协议</text>
        <text class="operate-list-item-disclaimer-text">2. 帖子：图文混搭、图片：仅发布图片、视频：仅发布视频</text>
      </div>
    </div>
  </FanPopup>

  <FanPopup ref="WorkplacePopup" :is-show-close-btn="false">
    <div class="tabBar-list-WorkplacePopup-warp">
      <div class="tabBar-list-WorkplacePopup-warp-plate">
        <div class="tabBar-list-WorkplacePopup-warp-plate-one-item" :style="{'background': gradientBgColorVal }">
          <h2 class="tabBar-list-WorkplacePopup-warp-plate-one-item-title">发表动态</h2>
          <span class="tabBar-list-WorkplacePopup-warp-plate-one-item-text">与社区网友交流</span>
          <span class="iconfont">&#xe66d;</span>
        </div>

        <div class="tabBar-list-WorkplacePopup-warp-plate-one-item">
          <h2 class="tabBar-list-WorkplacePopup-warp-plate-one-item-title">发表动态</h2>
          <span class="tabBar-list-WorkplacePopup-warp-plate-one-item-text">与社区网友交流</span>
          <span class="iconfont">&#xe616;</span>
        </div>
      </div>
      <div class="tabBar-list-WorkplacePopup-warp-plate-footer">
        <div class="tabBar-list-WorkplacePopup-warp-plate-footer-item">
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-icon iconfont" :style="{'color': ThemeMainBgColorVal}">&#xe60e;</span>
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-text">发视频</span>
        </div>
        <div class="tabBar-list-WorkplacePopup-warp-plate-footer-item">
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-icon iconfont" :style="{'color': ThemeMainBgColorVal}">&#xe650;</span>
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-text">发文章</span>
        </div>
        <div class="tabBar-list-WorkplacePopup-warp-plate-footer-item">
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-icon iconfont" :style="{'color': ThemeMainBgColorVal}">&#xe60f;</span>
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-text">发话题</span>
        </div>
        <div class="tabBar-list-WorkplacePopup-warp-plate-footer-item">
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-icon iconfont" :style="{'color': ThemeMainBgColorVal}">&#xe76f;</span>
          <span class="tabBar-list-WorkplacePopup-warp-plate-footer-item-text">发位置</span>
        </div>
      </div>
    </div>
  </FanPopup>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import type FanPopup from "@/components/FanPopup.vue";

import { chanePlateIndexStore,userThemeColorValStore } from "@/stores"
import {onShow} from "@dcloudio/uni-app";

const userChanePlateIndexStore = chanePlateIndexStore()

const userThemeColorVal = userThemeColorValStore()

const type = defineProps(['slectTab'])

const popup = ref<InstanceType<typeof FanPopup>>()

const WorkplacePopup = ref<InstanceType<typeof FanPopup>>()

const changeTabBar = (index: number) => {
  // 存储选中的索引
  if(index !== 1) {
    // 将当前项的isSelected设置为true
    tabBarList.value[index].isSelected = true;
    uni.setStorageSync('selectPageIndex', {
      plateIndex: index,
      pageUrl: tabBarList.value[index].path
    })
    userChanePlateIndexStore.setPlateIndex(0)
  }
  // uniapp获取当前页面信息
  var pages = getCurrentPages();
  if(userChanePlateIndexStore.plateIndex.plateIndexName == '求职'){
    WorkplacePopup.value.open()
  }else if('/' + pages[pages.length - 1].route !== tabBarList.value[index].path) {
    popup.value.open()
  }



  // 根据页面堆栈信息进行页面跳转当在当前页面再点击当前页面不做跳转 比如现在是首页我点了首页页面还是跳转了这样是不对的帮我修改
  if('/' + pages[pages.length - 1].route ===  tabBarList.value[index].path) {

  }else {
    uni.navigateTo({
      url: tabBarList.value[index].path,
      success: () => {

      },
      fail: () => {

      }
    })
  }




};

// 获取本地存储选中的selectPageIndex进行默认修改 其它的全部改成false
const getSelectPageIndex = () => {
  const selectPageIndex = uni.getStorageSync('selectPageIndex').plateIndex;
  // 除changeTabBar[selectPageIndex]以为的都要改成false
  tabBarList.value.forEach((item, index) => {
    if (index === selectPageIndex) {
      item.isSelected = true;
    } else {
      item.isSelected = false;
    }
  });
};

const tabBarList = ref([
  {
    name: '首页',
    isSelected: true,
    icon: `<span class="iconfont tabBar-color" style="font-size: 24px">&#xe614;</span>`,
    path: '/pages/index/index'
  },
  {
    name: ' ',
    isSelected: true,
    icon: `<span class="iconfont tabBar-color" style="font-size: 35px">&#xe600;</span>`,
    path: ''
  },
  {
    name: '我的',
    isSelected: false,
    icon: `<span class="iconfont tabBar-color" style="font-size: 24px">&#xe6b1;</span>`,
    path: '/pages/my/my'
  }
]);

const goToPubliish = () => {
  uni.navigateTo({
    url: '/pages/publish/index'
  })
}

// ... 加载颜色值的逻辑保持不变
const colorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color']
const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];
const unimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const gradientBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-gradient-bg'];
onMounted(() => {


  getSelectPageIndex()
});
</script>

<style lang="scss" scoped>

.tabBar-list-popup-warp {
  width: 90%;
  height: auto;
  margin: 10px auto;

  .operate-list {
    width: 80%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .operate-list-item {
      display: flex;
      height: 70px;
      flex-direction: column;
      justify-content: space-between;

      .operate-list-item-text {
        padding-left: 5px;
      }

      .operate-list-item-icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
        display: block;
        text-align: center;
        border-radius: 100%;
      }


    }
  }

  .operate-list-item-disclaimer {
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--xiaofan-remind-color-text);
  }
}

.tabBar-list-WorkplacePopup-warp{
  width: 100%;
  height: auto;
  margin: 10px auto;
  .tabBar-list-WorkplacePopup-warp-plate{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .tabBar-list-WorkplacePopup-warp-plate-one-item{
      position: relative;
      width: 45%;
      height: 100px;
      border-radius: 10px;
      padding-left: 10px;
      overflow: hidden;
      .iconfont{
        position: absolute;
        top: -10px;
        right: 0;
        color: #ffffff;
        font-size: 50px;
        opacity: .2;
      }
      .tabBar-list-WorkplacePopup-warp-plate-one-item-title{
        margin-top: 20px;
        font-size: 1.2rem;
        color: #ffffff;
      }
      .tabBar-list-WorkplacePopup-warp-plate-one-item-text{
        color: #ffffff;
        opacity: .7;
      }
    }
    .tabBar-list-WorkplacePopup-warp-plate-one-item:last-child{
      background: linear-gradient(90deg, #00d8b1, #00d2b2);
    }
  }

  .tabBar-list-WorkplacePopup-warp-plate-footer{
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabBar-list-WorkplacePopup-warp-plate-footer-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .tabBar-list-WorkplacePopup-warp-plate-footer-item-icon{
        font-size: 24px;
      }
    }
  }
}

tabBar-list-item {
  color: var(--xiaofan-tabbar-color-unselected);
}

.item:nth-child(2) {
  color:  v-bind(colorVal);
}


.tabBar-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ffffff;
  z-index: 999;
  border-top: 1px solid v-bind(unimportantBgColorVal);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .item {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 100%;
    font-size: 12px;
  }
}
</style>

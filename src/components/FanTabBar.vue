<template>

  <div class="tabBar-list">
    <div
        class="item"
        @click="changeTabBar(index)"
        :class="item.isSelected  ? 'tabBar-list-item-selceted' : 'tabBar-list-item' "
        v-for="(item, index) in tabBarList"
        :key="index"
    >
      <!-- 使用 v-html 渲染图标，但注意 XSS 风险 -->
      <span v-html="item.icon"></span>
      <span style="margin-top: -3px">{{ item.name }}</span>
    </div>
  </div>

  <FanPopup ref="popup" title="文章">
    <div class="tabBar-list-popup-warp">
      <div class="operate-list">
        <div class="operate-list-item">
          <span class="operate-list-item-icon iconfont" style="color: #ffffff;font-size: 24px">&#xe878;</span>
          <span class="operate-list-item-text">帖子</span>
        </div>
        <div class="operate-list-item">
          <span class="operate-list-item-icon iconfont" style="color: #ffffff;font-size: 24px">&#xe62d;</span>
          <span class="operate-list-item-text">图片</span>
        </div>
        <div class="operate-list-item">
          <span class="operate-list-item-icon iconfont" style="color: #ffffff;font-size: 24px">&#xe750;</span>
          <span class="operate-list-item-text">视频</span>
        </div>
      </div>

      <div class="operate-list-item-disclaimer">
        <text class="operate-list-item-disclaimer-text">1. 在本APP中发布内容则代表您接受本社区的服务条款以及用户协议</text>
        <text class="operate-list-item-disclaimer-text">2. 帖子：图文混搭、图片：仅发布图片、视频：仅发布视频</text>
      </div>
    </div>
  </FanPopup>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import type FanPopup from "@/components/FanPopup.vue";

const type = defineProps(['slectTab'])

const popup = ref<InstanceType<typeof FanPopup>>()


const changeTabBar = (index: number) => {
  // 重置所有项的isSelected为false
  tabBarList.value.forEach(item => {
    item.isSelected = false;
  });

  // 将当前项的isSelected设置为true
  tabBarList.value[index].isSelected = true;
  // 存储选中的索引
  uni.setStorageSync('selectPageIndex', index);
  if (index === 1) {
    popup.value.open()
  }
  uni.navigateTo({
    url: tabBarList.value[index].path,
    success: () => {

    },
    fail: () => {
      if (tabBarList.value[index].path) {
        uni.reLaunch({url: tabBarList.value[index].path})
      }
    }
  })
};


// 获取本地存储选中的selectPageIndex进行默认修改 其它的全部改成false
const getSelectPageIndex = () => {
  const selectPageIndex = uni.getStorageSync('selectPageIndex');
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


onMounted(() => {
  // ... 加载颜色值的逻辑保持不变
  const rootStyle = getComputedStyle(document.documentElement);
  const mainBgColor = rootStyle.getPropertyValue('--xiaofan-bg-main-color');
  const mainTextColor = rootStyle.getPropertyValue('--xiaofan-bg-main-color-text');

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
        background: var(--xiaofan-bg-unimportant-color);
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

tabBar-list-item {
  color: var(--xiaofan-tabbar-color-unselected);
}

.item:nth-child(2) {
  color: var(--xiaofan-tabbar-color-selected);
}

.tabBar-list-item-selceted {
  /* 默认样式 */
  color: var(--xiaofan-tabbar-color-selected); /* 使用 CSS 变量设置默认颜色 */
}

.tabBar-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ffffff;
  z-index: 999;
  border-top: 1px solid var(--xiaofan-bg-unimportant-color);
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

<template>
  <div class="home-container">
    <!-- 首页轮播图 -->
    <div class="swiper-text">{{ swiperIndex + 1 }}/{{ swiperList.length }}</div>

    <div class="home-swiper">
      <swiper :autoplay="true" style="height: 100%" :interval="3000" :duration="1000"
              @change="updateCurrenSwiperIndex">
        <swiper-item v-for="(item,index) in swiperList" :key="index">
          <image :src="item.imgUrl" class="swiper-img" />
        </swiper-item>
      </swiper>
    </div>

    <div class="announcement">
      <uni-notice-bar :speed="120" :background-color="mainColorVal.mainBgColor" :color="mainColorVal.mainTextColor"
                      show-icon scrollable text="小帆社区正在建设，请关注最新动态！"  style="border-radius: 10px"/>
    </div>
    <scroll-view class="scroll-view" style="height: 140%" scroll-y="true" scroll-with-animation="true">
      <div class="invitation-card-list">
        <div class="invitation-card-list-item" hover-class="none"
                   v-for="item,index in 3">
          <div class="user-info">
            <image src="@/static/image/avatar.jpg" class="user-avarat" />
            <div class="user-info-text">
              <div class="user-name">小帆<span class="user-level">LV1</span></div>
              <div class="user-desc-item">
                <div class="user-desc-item-text">02-25</div>
                <div class="user-desc-item-num">官方消息</div>
              </div>
            </div>
            <span class="iconfont" style="font-size: 28px">&#xe623;</span>
          </div>

          <div class="invitation-card-content">
            <navigator hover-class="none" :url="`/pages/postdetails/postdetails?postId=${index}`">
              <div class="invitation-card-content-header">
                <div class="invitation-card-content-title">小帆社区正在建设，请关注最新动态！</div>
                <div class="invitation-card-content-tag"><span class="Top"><span class="iconfont" style="font-size: 14px">&#xe615;</span></span>置顶
                </div>
              </div>

              <div class="invitation-card-content-text">
                我是小帆社区的管理员，小帆社区于2024年6月20日开发，小帆社区正在建设，请关注最新动态！我是小帆社区的管理员，小帆社区于2024年6月20日开发，小帆社区正在建设，请关注最新动态！
              </div>

              <div class="Illustrated">
                <image class="Illustrated-img" src="@/static/image/avatar.jpg" />
                <image class="Illustrated-img" src="@/static/image/avatar.jpg" />
                <image class="Illustrated-img" src="@/static/image/avatar.jpg" />
              </div>
            </navigator>

            <div class="invitation-type">
              <div class="invitation-type-item">#原创</div>
              <div class="invitation-type-item">#热门</div>
              <div class="invitation-type-item">#独家</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>

  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import { userThemeColorValStore } from "@/stores";
const userThemeColorVal = userThemeColorValStore()
import {onShow} from "@dcloudio/uni-app";

const swiperIndex = ref(0)

const swiperList = ref([
  {
    imgUrl: '/static/image/swiperImg/swiper1.png'
  },
  {
    imgUrl: '/static/image/swiperImg/swiper2.png'
  },
  {
    imgUrl: '/static/image/swiperImg/swiper2.jpg'
  },
  {
    imgUrl: '/static/image/swiperImg/swiper3.jpg'
  },
  {
    imgUrl: '/static/image/swiperImg/swiper4.png'
  }
])
const mainColorVal = reactive({
  mainBgColor: '',
  mainTextColor: ''
})

const updateCurrenSwiperIndex = (e: any) => {
  swiperIndex.value = e.detail.current
}


const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];

onShow(() => {
  const unimportantBgColor = ThemeUnimportantBgColorVal;

  const mainTextColor = ThemeMainTextColorVal;

  mainColorVal.mainBgColor = unimportantBgColor;
  mainColorVal.mainTextColor = mainTextColor;
})
</script>

<style lang="scss" scoped>

.home-swiper {
  height: 220px;

  .swiper-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}


.swiper-text {
  width: 40px;
  text-align: center;
  color: var(--xiaofan-bg-default-color-text);
  background: v-bind(ThemeMainBgColorVal);
  border-radius: 10px 0 10px 0;
  position: absolute;
  position: 50%;
  top: 23%;
  right: 1%;
  z-index: 9;
}

.home-container {
  position: relative;
  height: 100vh;
}

.announcement {
  position: relative;
  width: 90%;
  margin: 30px auto;
  border-radius: 10px;

  .tz-text {
    position: absolute;
    z-index: 0;
    top: 30%;
    right: 0;
  }
}

.invitation-card-list {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  .invitation-card-list-item {
    width: 100%;
    height: auto;
    margin-top: 20px;

    .user-info {
      display: grid;
      grid-template-columns: 60px 1fr 30px;
      width: 100%;
      height: auto;

      .user-info-text {
        .user-name {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .user-level {
          position: relative;
          top: -4px;
          left: 5px;
          padding: 2px;
          text-align: center;
          color: #fff;
          background: #16d231;
          border-radius: 5px;
          font-size: .6rem;
        }

        .user-desc-item {
          width: 50%;
          display: flex;
          justify-content: space-between;
          color: var(--xiaofan-bg-unimportant-color-text);
        }
      }

      .user-avarat {
        width: 50px;
        height: 50px;
        border-radius: 100%;
      }
    }

    .invitation-card-content {
      position: relative;
      width: 100%;
      height: auto;

      .invitation-card-content-header {
        display: flex;

        .invitation-card-content-title {
          width: 80%;
          font-weight: bold;
          font-size: 1.2rem;
        }
      }

      .invitation-card-content-tag {
        position: absolute;
        display: flex;
        top: 5px;
        right: 0;
        color: #aa98ec;
        text-align: center;

        .Top {
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: #eff3fe;
        }
      }

      .invitation-card-content-text {
        width: 100%;
        height: 50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .Illustrated {
        display: flex;
        margin-left: -5px;
        .Illustrated-img {
          width: 120px;
          height: 100px;
          margin-left: 5px;
        }
      }

      .invitation-type {
        display: flex;
        margin-top: 10px;
        transform: translateX(-10px);

        .invitation-type-item {
          margin-left: 10px;
          background: v-bind(ThemeUnimportantBgColorVal);
          padding: 6px;
          color: v-bind(ThemeMainTextColorVal);
          border-radius: 15px;
        }
      }
    }
  }
}
</style>

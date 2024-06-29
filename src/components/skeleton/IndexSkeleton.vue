<template>
  <div class="index-header" :style="{'margin-top': safeAreaInsets.top + 'px'}">
    <div class="index-header-my-avatar"></div>
    <input type="text" class="search-post"/>
    <div class="index-header-my-avatar">
    </div>
  </div>
  <view class="classify-tab">
    <!-- tabs -->
    <view class="tabs"></view>
    <!-- 滑动容器 -->
    <div class="swiper ">
      <!-- 滑动项 -->
      <swiper-item>
        <scroll-view scroll-y class="home">
          <div class="home-container">
            <div class="home-swiper">
            </div>
            <div class="announcement"></div>
            <scroll-view class="scroll-view" style="height: 140%" scroll-y="true" scroll-with-animation="true">
              <div class="invitation-card-list">
                <div class="invitation-card-list-item" hover-class="none"
                     v-for="item,index in 5">
                  <div class="user-info">
                    <div class="user-avarat"></div>
                    <div class="user-info-text">
                      <div class="user-name"><span class="user-level"></span></div>
                      <div class="user-desc-item"></div>
                    </div>

                  </div>

                  <div class="invitation-card-content">
                      <div class="invitation-card-content-header">
                        <div class="invitation-card-content-title"></div>
                        <div class="invitation-card-content-tag"></div>
                      </div>

                      <div class="invitation-card-content-text"></div>

                      <div class="Illustrated">
                        <div class="Illustrated-img"></div>
                        <div class="Illustrated-img"></div>
                        <div class="Illustrated-img"></div>
                      </div>

                    <div class="invitation-type">
                      <div class="invitation-type-item"></div>
                      <div class="invitation-type-item"></div>
                      <div class="invitation-type-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </scroll-view>

          </div>
        </scroll-view>
      </swiper-item>
    </div>
  </view>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import Home from "@/pages/index/components/Home.vue";
import Job from "@/pages/index/components/Job.vue";
import Information from "@/pages/index/components/Information.vue";
// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()


// tabs 数据
const orderTabs = ref([
  {hometate: 0, title: '首页', component: Home},
  {hometate: 1, title: '求职', component: Job},
  {hometate: 2, title: '官方消息',component: Information},
])

// 高亮下标
const activeIndex = ref(0)
onMounted(() => {
  const elements = document.body.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('open-skeleton');
  }
})
</script>

<style lang="scss" scoped>
@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0 50%
  }
}
.open-skeleton {
  transition: all .2s ease-in-out;
  animation: skeleton-loading 1.4s linear infinite;
  background-size: 400% 100% !important;
}

.index-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .search-post {
    background: var(--xiaofan-skeleton-bg);
    width: 80%;
    border-radius: 25px;
    margin-top: 20px;
  }
}

.tabs-select {
  color: var(--xiaofan-bg-main-color-text) !important;
  font-weight: bold;
  border-bottom: 3px solid var(--xiaofan-bg-main-color);
}

page {
  height: 100%;
  overflow: hidden;
}
.index-header-my-avatar{
  width: 24px;
  height: 24px;
  margin-top: 20px;
  background: var(--xiaofan-skeleton-bg);
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
  width: 100%;
  height: 40px;
  justify-content: space-around;
  line-height: 60 rpx;
  margin: 0 10 rpx;
  background: var(--xiaofan-skeleton-bg);
  position: relative;
  z-index: 9;
}

// swiper
.swiper {
  height: 100vh;
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


.home-swiper {
  height: 220px;
  background: var(--xiaofan-skeleton-bg);

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
  background: var(--xiaofan-bg-main-color);
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
  height: 50px;
  margin: 30px auto;
  border-radius: 10px;
  background: var(--xiaofan-skeleton-bg);

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
      margin-bottom: 10px;

      .user-info-text {
        .user-name {
          height: 20px;
          background: var(--xiaofan-skeleton-bg);
        }

        .user-desc-item {
          width: 50%;
          height: 10px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          background: var(--xiaofan-skeleton-bg);
        }
      }

      .user-avarat {
        width: 50px;
        height: 50px;
        background: var(--xiaofan-skeleton-bg);
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
          height: 60px;
          background: var(--xiaofan-skeleton-bg);
        }
      }

      .invitation-card-content-tag {
        position: absolute;
        display: flex;
        top: 10px;
        width: 52px;
        height: 24px;
        right: 0;
        color: #aa98ec;
        background: var(--xiaofan-skeleton-bg);
        text-align: center;

        .Top {
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: var(--xiaofan-skeleton-bg);
        }
      }

      .invitation-card-content-text {
        width: 100%;
        height: 50px;
        margin-top: 10px;
        background: var(--xiaofan-skeleton-bg);
      }

      .Illustrated {
        display: flex;
        margin-left: -5px;
        .Illustrated-img {
          width: 120px;
          height: 100px;
          margin-top: 5px;
          background: var(--xiaofan-skeleton-bg);
          margin-left: 5px;
        }
      }

      .invitation-type {
        display: flex;
        margin-top: 10px;
        transform: translateX(-10px);

        .invitation-type-item {
          width: 50px;
          height: 36px;
          margin-left: 10px;
          background: var(--xiaofan-skeleton-bg);
          padding: 6px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>


<template>
  <div class="warrper" style="background: #fff;margin-top: 50px" :class="{'warrper-leave':isShowLive}">
    <div class="postdetails-wapper" :style="{'margin-top': safeAreaInsets.top + 'px'}">
      <div class="postdetails-wapper-header">
        <div class="postdetails-wapper-header-back" :style="{'margin-top': safeAreaInsets + 20 + 'px'}">
          <uni-icons @click="backInOuterHome" type="left" style="font-weight: bold" color="#000000"
                     size="28"></uni-icons>
          <span class="iconfont" style="transform: translateX(-20px);font-size: 28px;color: #000000">&#xe623;</span>
        </div>
      </div>
      <scroll-view class="scroll-view" style="height: 140%" scroll-y="true" scroll-with-animation="true">
        <div class="postdetails-wapper-content">
          <div class="postdetails-wapper-content-title">{{ postdetailsVal.title }}</div>
          <div class="postdetails-wapper-content-text">
            <div class="postdetails-wapper-content-text-info">
              <p class="postdetails-time"><span class="iconfont">&#xe62e;</span>xx小时前</p>
              <p class="postdetails-views"><span class="iconfont">&#xe7a5;</span>xx</p>
            </div>
            <div class="postdetails-type">
              <p class="postdetails-type-title">{{ postdetailsVal.selectTabName }}</p>
            </div>
          </div>

          <div class="postdetails-user">
            <div class="info">
              <div class="postdetails-user-avatar">
                <image src="@/static/image/avatar.jpg" />
              </div>
              <div class="postdetails-user-info">
                <p class="postdetails-user-name">xx<span class="user-level">LV.1</span></p>
                <p class="postdetails-user-time">xxxxxxxxxx</p>
              </div>
              <button class="concern">未关注</button>
            </div>
          </div>

          <div class="postdetails-main-content" v-html="postdetailsVal.content ? postdetailsVal.content : postdetailsVal2.html "></div>
        </div>
      </scroll-view>
    </div>

    <div class="postdetails-wapper-footer">
      <div class="postdetails-wapper-footer-wrapper">
        <span class="icon-edit iconfont">&#xe60b;</span>
        <input class="edit-postdetails" type="text" placeholder="说点什么"/>
        <div class="postdetails-wapper-footer-list">
          <div class="postdetails-wapper-footer-list-item">
            <span class="iconfont">&#xe611;</span>
            <span class="postdetails-wapper-footer-list-item-text">发电</span>
          </div>
          <div class="postdetails-wapper-footer-list-item">
            <span class="iconfont">&#xe612;</span>
            <span class="postdetails-wapper-footer-list-item-text">0</span>
          </div>
          <div class="postdetails-wapper-footer-list-item">
            <span class="iconfont">&#xe62a;</span>
            <span class="postdetails-wapper-footer-list-item-text">0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue"
// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()

import { userThemeColorValStore } from "@/stores"

const userThemeColorVal = userThemeColorValStore()

const isShowLive = ref(false)

const backInOuterHome = async () => {
  // isShowLive.value = true
  await uni.navigateBack()
}

const postdetailsVal = ref(uni.getStorageSync('preview-postdetails'))
const postdetailsVal2 = ref(uni.getStorageSync('edit-content'))
const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];
</script>

<style lang="scss" scoped>
@keyframes TransitionAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.warrper-leave {
  animation: TransitionAnimation .5s forwards;
}

.postdetails-wapper {
  width: 100vw;
  height: 100vh;
  background-color: #fffff;

  .postdetails-wapper-header {
    position: fixed;
    background: #ffffff;
    width: 100%;
    top: 0;
    height: 80px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    z-index: 999;
    justify-content: space-between;
    border-bottom: 1px solid var(--xiaofan-bg-unimportant-color);

    .postdetails-wapper-header-back {
      display: flex;
      width: 100%;

      justify-content: space-between;
    }
  }

  .postdetails-wapper-content {
    width: 90%;
    height: auto;
    margin: 60px auto;

    .postdetails-wapper-content-title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .postdetails-wapper-content-text {
      display: flex;
      justify-content: space-between;
      color: var(--xiaofan-remind-color-text);

      .postdetails-wapper-content-text-info {
        width: 40%;
        display: flex;
        justify-content: space-between;
      }
    }

    .postdetails-user {
      width: 100%;
      height: 100px;
      background: #fff5f4;
      margin-top: 20px;
      display: flex;
      border-radius: 10px;

      .info {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;

        .postdetails-user-info {
          margin-left: 20px;

          .postdetails-user-name {
            font-weight: bold;

            .user-level {
              display: inline-block;
              transform: translate(20%, -20%);
              width: 30px;
              height: 15px;
              color: #ae9ce4;
              font-size: 8px;
              text-align: center;
              border-radius: 10px;
              border: 3px solid #ae9ce4;
            }
          }

          .postdetails-user-time {
            color: var(--xiaofan-remind-color-text);
          }
        }

        .concern {
          margin-left: 30px;
          width: 90px;
          height: 40px;
          border-radius: 25px;
          background: v-bind(ThemeMainBgColorVal);
          color: #ffffff;
        }
      }

      .postdetails-user-avatar {
        width: 60px;
        height: 60px;

        image {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
    }

    .postdetails-main-content {
      width: 100%;
      height: auto;
      margin: 20px auto;
    }
  }
}

.postdetails-wapper-footer {
  width: 100vw;
  height: 50px;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .postdetails-wapper-footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 10px auto;

    .icon-edit {
      display: block;
      position: absolute;
      top: 25%;
      left: 7%;
    }

    .edit-postdetails {
      width: 50%;
      height: 30px;
      border-radius: 25px;
      padding-left: 30px;
      background: #f9f9f9;
      margin-top: -10px;
    }

    .postdetails-wapper-footer-list {
      display: flex;
      width: 30%;
      justify-content: space-between;

      .postdetails-wapper-footer-list-item {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-top: -10px;

        .iconfont {
          font-size: 20px;
          font-weight: bold;
        }

        .postdetails-wapper-footer-list-item-text {
          font-size: 12px;
          color: var(--xiaofan-remind-color-text);
        }
      }
    }
  }
}
</style>

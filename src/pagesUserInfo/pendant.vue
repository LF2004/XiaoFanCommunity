<template>
  <div class="pendant-box">
    <div class="pendant-header" :style="{'margin-top': safeAreaInsets.top + 'px'}">
      <uni-icons @click="backOutToPage" type="left" style="font-weight: bold"
                 size="24"></uni-icons>

      <div class="pendant-header-type">
        <div class="pendant-header-type-item pendant-header-type-item-select">
          <div class="pendant-header-type-item-title">
            <span class="pendant-header-type-item-title-text">头像挂件</span>
          </div>
        </div>
        <div class="pendant-header-type-item">
          <div class="pendant-header-type-item-title">
            <span class="pendant-header-type-item-title-text">评论装扮</span>
          </div>
        </div>
      </div>


    </div>
    <div class="pendant-header-box">
      <div class="my-info">
        <div class="info-content">
            <image src="@/static/image/avatar.jpg" class="user-avatar" />
            <image src="@/static/image/pendant2.png" class="user-pendant" />
        </div>
      </div>

      <div class="pendant-info">
        <text>「奇缘趣饰」原神二周年头像挂件</text>
        <text class="pendant-info-text">通过小帆币兑换中心兑换获得</text>
      </div>

      <button class="pendant-save-btn">保存</button>
    </div>

    <div class="pendant-list">
      <div class="pendant-list-item">
        <div class="content">
          <image src="@/static/image/avatar.jpg" class="user-avatar" />
          <image src="@/static/image/pendant1.png" class="user-pendant" />
        </div>
        <div>
          <text class="pendant-list-item-text">「奇缘趣饰」原神二周年头像挂件</text>
        </div>
      </div>
      <div class="pendant-list-item">
        <div class="content">
          <image src="@/static/image/avatar.jpg" class="user-avatar" />
          <image src="@/static/image/pendant2.png" class="user-pendant" />
        </div>
        <div>
          <text class="pendant-list-item-text">「奇缘趣饰」原神二周年头像挂件</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()
import {userThemeColorValStore} from "@/stores";

const backOutToPage = () => {
  uni.navigateBack()
}

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
</script>

<style scoped lang="scss">
.pendant-box{
  width: 100%;
  height: 100%;

  .pendant-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background: #f6f7f9;

    .pendant-header-type{
      width: 45%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;

      .pendant-header-type-item-title-text{
        color: #767779;
      }

      .pendant-header-type-item-select{
        font-weight: bold;
        border-bottom: 3px solid v-bind(ThemeMainBgColorVal);
        .pendant-header-type-item-title-text{
          color: #222325;
        }
      }
    }


  }
  .pendant-header-box{
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    background: #f6f7f9;
    .my-info {
      position: relative;
      left: 30%;
      width: 90%;
      margin: 80px auto;
      height: auto;

      .info-content {
        display: flex;
        width: 100%;
        height: auto;

        .user-avatar {
          width: 120px;
          height: 120px;
          border-radius: 100%;
          margin-right: 20px;
        }

        .user-pendant {
          position: absolute;
          left: -8px;
          top: -6px;
          width: 135px;
          height: 135px;
        }

        .info-text {
          width: 100%;

          .user-name {
            display: flex;
            align-items: center;
          }
        }
      }

      .user-signature {
        width: 100%;
        margin: 20px auto;
      }

      .user-personality-tags {
        width: 100%;
        margin: 0 auto;

        .user-personality-tags-list {
          display: flex;
          width: 100%;
          height: auto;
          transform: translateX(-10px);

          .user-personality-tags-list-item {
            width: auto;
            background: rgba(255, 255, 255, .3);
            margin-left: 10px;
            padding: 4px;
            border-radius: 5px;
            color: #ffffff;
            font-size: .8rem;
          }
        }
      }

      .user-fs {
        width: 100%;
        margin: 20px auto;
        display: flex;
        transform: translateX(-15px);

        .user-fs-item {
          display: flex;
          margin-left: 15px;

          .user-fs-item-num {
            font-weight: bold;
            font-size: 1rem;
            margin-right: 3px;
          }
        }
      }
    }

    .pendant-info{
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 20%;
      text-align: center;
      width: 100%;
      font-size: 18px;
      .pendant-info-text{
        font-size: 14px;
        color: #77787c;
      }
    }
    .pendant-save-btn{
      float: right;
      width: 100px;
      height: 40px;
      color: #ffffff;
      background: v-bind(ThemeMainBgColorVal);
      margin-right: 40px;

    }
  }

  .pendant-list{
    position: absolute;
    top: 45%;
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 25px;
    .pendant-list-item{
      display: flex;
      flex-direction: column;
      width: 130px;
      height: 165px;

      .pendant-list-item-text{
        text-align: center;
        font-size: 14px;
        color: #767779;
      }

      .user-avatar{
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 100%;
      }
      .user-pendant{
        position: relative;
        left: -8px;
        top: -10px;
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>

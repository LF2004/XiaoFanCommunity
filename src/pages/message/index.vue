<template>
  <FanHeader/>
  <div class="message-page">
   <div class="message-page-classify-container">
     <div class="message-page-classify">
       <div class="message-page-classify-item">
         <span class="iconfont" style="color: #45d7a6;">&#xe61a;</span>
         <text class="message-page-classify-item-title">收到回复</text>
       </div>
       <div class="message-page-classify-item">
         <span class="iconfont" :style="{'color': ThemeMainBgColorVal}">&#xe8c6;</span>
         <text class="message-page-classify-item-title">收到喜欢</text>
       </div>
       <div class="message-page-classify-item">
         <span class="iconfont" style="color: #3fc5f0;">&#xe634;</span>
         <text class="message-page-classify-item-title">新增粉丝</text>
       </div>
     </div>
   </div>
    <scroll-view class="scroll-view" style="height: 600px" scroll-y="true" scroll-with-animation="true">
    <div class="message-list">
      <div class="message-list-item" v-for="item,index in 20" @click="goToChatPage(index)">
        <div class="user-avatar">
          <image src="@/static/image/avatar.jpg" class="avatar-img"/>
        </div>

       <div class="message-user">
         <div class="user-info">
           <div class="user-info-name"><text class="name-text">王道计算机教育</text></div>
           <div class="user-message"><text class="message-text">[自动回复]你好受打击啊是撒打算的</text></div>
         </div>

         <div class="user-send">
           <div class="send-time">
             <text class="time-text">08-28</text>
             <div class="message-tx"></div>
           </div>
         </div>
       </div>
      </div>
    </div>
    </scroll-view>
  </div>
  <FanTabBar/>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import {onLoad} from "@dcloudio/uni-app";

import {userThemeColorValStore} from "@/stores";

// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];

const goToChatPage = (uid:number) => {
  uni.navigateTo({
    url: `/pages/chat/index?id=${uid}`,
  })
}

onLoad(async () => {

})

</script>

<style scoped lang="scss">
.message-page {
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  .message-page-classify-container{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #e7e7e7;
    .message-page-classify{
      display: flex;
      width: 80%;
      margin: 40px auto;
      justify-content: space-between;
      .message-page-classify-item{
        display: flex;
        flex-direction: column;
        .iconfont{
          display: inline-block;
          padding: 10px;
          background: #f7f9f8;
          border-radius: 10px;
          text-align: center;
          font-size: 28px;
        }
        .message-page-classify-item-title{
          padding-top: 5px;
          color: #9e9e9e;
        }
      }

    }
  }

  .message-list{
    width: 95%;
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 20px auto;
    transform: translateY(-10px);
    .message-list-item{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .user-avatar{
        width: 50px;
        height: 50px;

        .avatar-img{
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      .message-user{
        display: flex;
        padding: 10px;
        transform: translateY(-10px);
        border-bottom: 1px solid #e7e7e7;
        .name-text{
          font-size: 20px;
        }
        .user-message{
          padding-top: 5px;
        }
        .message-text{
          color: #c5c3c3;
          padding-top: 10px;

        }
        .time-text{
          color: #cccccc;
          font-size: 14px;
        }

        .user-send{
          position: relative;
        }

        .message-tx{
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background: #f85a55;
          bottom: 20%;
          right: 0;

        }
      }
    }
  }

}
</style>

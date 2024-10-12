<template>
  <div class="Job-wrapper ">
    <scroll-view class="scroll-view" style="height: 140%" scroll-y="true" scroll-with-animation="true">
      <div class="Today-search open-skeleton">
        <div class="Today-search-wapper ">
          <div class="Today-search-title open-skeleton"></div>
          <div class="Today-search-list">
            <div class="Today-search-list-item open-skeleton" v-for="item,index in 3"><span
                class="Today-search-list-item-heat open-skeleton"></span>
            </div>
            <button class="Today-search-list-item-more open-skeleton"></button>
          </div>
        </div>
      </div>

      <div class="topic-wrapper">
        <div class="topic-wrapper-title">
        </div>

        <div class="topic-wrapper-content">
          <div class="topic-wrapper-content-item open-skeleton" v-for="item,index in 2">
            <div class="topic-wrapper-content-item-text-info">
              <span class="topic-wrapper-content-item-text-info-title"></span>
              <span class="topic-wrapper-content-item-text-info-dep"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="user-message " v-for="item,index in 3">
        <div class="user-message-info open-skeleton">

        </div>
        <div class="user-message-send open-skeleton">

        </div>

        <div class="user-operate open-skeleton">
          <div class="user-operate-item">

          </div>
          <div class="user-operate-item">

          </div>
          <div class="user-operate-item">

          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";

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
.Job-wrapper {
  position: relative;
  width: 100vw;
  height: 250vh;
  margin-top: 20px;
  background: #f0f1f5;

  .Today-search {
    width: 100%;
    background: #ffffff;
    padding: 1px;
    transform: translateY(50px);

    .Today-search-wapper {
      width: 90%;
      height: auto;
      margin: 20px auto;

      .Today-search-title {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        background: var(--xiaofan-skeleton-bg);

        .Today-search-title-span {
          width: 30px;
          height: 25px;
          position: absolute;
          top: 11%;
          left: 23%;
          display: block;
          border-radius: 5px;
          font-size: 1.2rem;
          padding-left: 4px;
          font-style: normal;
          background: v-bind(ThemeMainBgColorVal);
          color: #ffffff;
          transform: Skew(160deg);

        }
      }
    }

    .Today-search-list-item {
      width: 91%;
      height: 30px;
      margin-left: 30px;
      margin-top: 10px;
      background: var(--xiaofan-skeleton-bg);
    }

    .Today-search-list-item-more {
      width: 40%;
      height: 40px;
      margin-top: 20px;
      border-radius: 25px;
      font-size: 1rem;
      background: var(--xiaofan-skeleton-bg);
      color: #ffffff;
    }

    .Today-search-list-item-heat {
      position: absolute;
      display: block;
      width: 20px;
      height: 20px;
      margin-left: -30px;
      background: var(--xiaofan-skeleton-bg);
      color: #ffffff;
      padding: -1px;
      border-radius: 0 0 5px 5px;
      text-align: center;
    }

  }

  .topic-wrapper {
    width: 95%;
    height: auto;
    margin: 80px auto;
    background: #ffffff;
    border-radius: 10px;
    padding: 1px;

    .topic-wrapper-title {
      display: flex;
      width: 90%;
      margin: 0 auto;
      transform: translateY(20px);
      justify-content: space-between;
      background: var(--xiaofan-skeleton-bg);

      .topic-wrapper-title-text {
        color: #041833;
      }

      .topic-wrapper-title-more {
        color: var(--xiaofan-remind-color-text);
      }
    }

    .topic-wrapper-content-item {
      display: flex;
      width: 90%;
      height: 70px !important;
      margin: 20px auto;
      height: auto;
      background: var(--xiaofan-skeleton-bg);

      .topic-wrapper-content-icon {
        font-size: 2rem;
        color: v-bind(ThemeMainBgColorVal);
      }

      .topic-wrapper-content-item-text-info {
        padding-left: 10px;
        display: flex;
        flex-direction: column;

        .topic-wrapper-content-item-text-info-title {
          font-size: 1.2rem;
        }

        .topic-wrapper-content-item-text-info-dep {
          color: var(--xiaofan-remind-color-text);
          font-size: .8rem;
        }
      }
    }
  }

  .user-message {
    width: 90%;
    height: auto;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 10px;
    padding: 5px;
    margin-top: 20px;


    .user-message-info {
      position: relative;
      width: 90%;
      height: 60px;
      margin: 0 auto;
      margin-bottom: 20px;
      transform: translateY(10px);
      display: flex;
      background: var(--xiaofan-skeleton-bg);

      .user-message-info-avatar {
        width: 50px;
        height: 50px;
        margin-right: 10px;

        .user-message-info-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      .user-message-info-title {
        display: flex;
        flex-direction: column;

        .user-message-info-title-text {
          font-size: 1.1rem;

        }

        .user-message-info-title-occupation {
          color: var(--xiaofan-remind-color-text);

        }
      }

      .user-message-operate {
        position: absolute;
        right: 0;

        .user-message-operate-icon {
          color: var(--xiaofan-remind-color-text);
        }
      }
    }

    .user-message-send {
      width: 90%;
      height: 100px;
      margin: 10px auto;
      background: var(--xiaofan-skeleton-bg);

      .user-message-send-type {
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        margin-top: 10px;

        .user-message-send-type-item {
          margin: 10px 0 0 10px;
          background: v-bind(ThemeUnimportantBgColorVal);
          color: v-bind(ThemeMainBgColorVal);
          padding: 0 10px 0 10px;
          font-size: .8rem;
          border-radius: 25px;
        }
      }
    }

    .user-operate {
      width: 90%;
      height: 40px;
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--xiaofan-skeleton-bg);

      .user-operate-item {
        font-size: 18px;
        text-align: center;

        .user-operate-item-text {
          font-size: 1rem;
          padding-left: 5px;
        }

        .user-operate-item-icon {
          font-size: 1.5rem;
        }
      }
    }
  }
}

.commnets-popup-list {
  width: 90%;
  max-height: 600px;
  margin: 20px auto;
  .comments-main{
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    .comments-main-content-text{
      margin-bottom: 10px;
    }
    .user-level-info{
      background: #007aff;
      text-align: center;
      color: #ffffff;
      border-radius: 5px;
      transform: scale(0.6);
      margin-top: 5px;
    }
    .comments-main-content-name{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .main-name{
        font-size: 12px;
        color: #464646;
      }
      .bubble-img{
        width: 160px;
        height: 40px;
        margin-left: 12%;
      }
    }
    .comments-main-avatar{
      position: relative;
      display: flex;
      flex-direction: column;
      margin-right: 10px;

      .comments-main-avatar-img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
      .comments-main-avatar-pendant{
        position: absolute;
        left: -10px;
        top: -5%;
        width: 60px;
        height: 60px;
        border-radius: 100%;
      }
    }
    .send-tiem {
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .send-time-text {
        color: #c5c3c3;
        padding-right: 10px;
      }

      .like {
        color: #c5c3c3;
      }
    }
  }

  .comments-main::before{
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: -5%;
    width: 111%;
    height: 20px;
    background: #f8f8f8;
  }

  .commnets-popup-list-item{
    display: flex;
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding-bottom: 10px;
    .user-avatar{
      position: relative;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      .user-avarat-img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
      .user-pendant-img {
        position: absolute;
        left: -10px;
        top: -20%;
        width: 60px;
        height: 60px;
        border-radius: 100%;
      }
      .user-level-info{
        background: #007aff;
        text-align: center;
        color: #ffffff;
        border-radius: 5px;
        transform: scale(0.6);
      }
    }
    .user-name{
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #464646;
      margin-bottom: 10px;

      .bubble-img {
        width: 160px;
        height: 40px;
        margin-left: 12%;
      }
    }
    .send-tiem {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin: 10px 0 10px 0;

      .send-time-text {
        color: #c5c3c3;
        padding-right: 10px;
      }

      .like {
        color: #c5c3c3;
      }
    }

    .comments-user-list-info-item-reply{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 10px;
      height: auto;
      background: #f8f8f8;
      padding: 10px;
      border-radius: 10px;

      .reply-user-name-text{
        color: #666666;
      }
      .reply-user-content{
        padding-left: 10px;
      }
    }
  }
}
</style>

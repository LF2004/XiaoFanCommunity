<template>
  <JobSkeleton v-if="isShowSkeleton"/>
  <div class="Job-wrapper" v-else>
    <scroll-view class="scroll-view" style="height: 140%" scroll-y="true" scroll-with-animation="true">
      <div class="Today-search">
        <div class="Today-search-wapper">
          <div class="Today-search-title">今日热<span class="Today-search-title-span">榜</span></div>
          <div class="Today-search-list">
            <div class="Today-search-list-item" v-for="item,index in TodayHotList"><span
                class="Today-search-list-item-heat">{{ index + 1 }}</span>{{ item.title }}
            </div>
            <button class="Today-search-list-item-more" @click="ViewMore">查看更多
              <uni-icons type="right" color="#ffffff" size="18"></uni-icons>
            </button>
          </div>
        </div>
      </div>

      <div class="topic-wrapper">
        <div class="topic-wrapper-title">
          <h3 class="topic-wrapper-title-text">话题</h3>
          <div class="topic-wrapper-title-more">全部
            <uni-icons type="right" :color="ThemeMainBgColorVal" size="16"></uni-icons>
          </div>
        </div>

        <div class="topic-wrapper-content">
          <div class="topic-wrapper-content-item" v-for="item,index in 2" @click="goTopicDetails(index)">
            <span class="topic-wrapper-content-icon iconfont">&#xe8b1;</span>
            <div class="topic-wrapper-content-item-text-info">
              <span class="topic-wrapper-content-item-text-info-title">这届上班族为什么睡不着</span>
              <span class="topic-wrapper-content-item-text-info-dep">3月21日是世界睡眠日，中国社会科学院研究所发...</span>
            </div>
          </div>
        </div>
      </div>

      <div class="user-message" v-for="item,index in 3">
        <div class="user-message-info">
          <div class="user-message-info-avatar">
            <image src="@/static/image/avatar.jpg" class="user-message-info-avatar-img" />
          </div>
          <div class="user-message-info-title">
            <span class="user-message-info-title-text">小帆程序员</span>
            <span class="user-message-info-title-occupation">程序员</span>
          </div>
          <div class="user-message-operate"><span class="user-message-operate-icon iconfont">&#xe670;</span></div>
        </div>
        <div class="user-message-send">
          <div class="user-message-send-message">互联网大厂都在裁员，美团是不是也快了，工资拖了两个月没发了。。。</div>
          <div class="user-message-send-type">
            <div class="user-message-send-type-item"><span class="topic-wrapper-content-icon iconfont">&#xe8b1;</span>互联网裁员浪潮
            </div>
            <div class="user-message-send-type-item"><span class="topic-wrapper-content-icon iconfont">&#xe8b1;</span>互联网裁员浪潮
            </div>
          </div>
        </div>

        <div class="user-operate">
          <div class="user-operate-item">
            <span class="user-operate-item-icon iconfont">&#xe601;</span>
            <span class="user-operate-item-text"></span>
          </div>
          <div class="user-operate-item" @click="OpenAllComments">
            <span class="user-operate-item-icon iconfont">&#xe891;</span>
            <span class="user-operate-item-text">12</span>
          </div>
          <div class="user-operate-item">
            <span class="user-operate-item-icon iconfont">&#xe62a;</span>
            <span class="user-operate-item-text">56</span>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>

  <FanPopup ref="CommentsPopup" :title="'全部回复'">
    <scroll-view scroll-y="true" scroll-with-animation="true">
      <div class="commnets-popup-list">
        <div class="comments-main">
          <div class="comments-main-avatar">
            <image src="@/static/image/avatar.jpg" class="comments-main-avatar-img"/>
            <image src="@/static/image/pendant/pendant4.png" class="comments-main-avatar-pendant"/>
            <div class="user-level-info">
              <text class="user-level-info-text">LV.1</text>
            </div>
          </div>
          <div class="comments-main-content">
            <div class="comments-main-content-name">
              <text class="main-name">我是神里凌华的狗</text>
              <image src="@/static/image/bubble/bubble3.png" class="bubble-img"/>
            </div>
            <div class="comments-main-content-text">
              我才四百多，你比我还狠我是为了雷电将军，还有十天就可以了!你还早呢我才四百多，你比我还狠我是为了雷电将军，还有十天就可以了!你还早呢
            </div>
            <div class="send-tiem">
              <div>
                <text class="send-time-text">15分钟前 - 湖南</text>
                <text class="reply-btn">回复</text>
              </div>

              <div class="like">
                <span class="iconfont">&#xe62a;</span>
                <text>1</text>
              </div>
            </div>
          </div>
        </div>
        <div class="commnets-popup-list-item" v-for="item,index in 10">
          <div class="user-avatar">
            <image src="@/static/image/my_avatar.jpg" class="user-avarat-img"/>
            <image src="@/static/image/pendant/pendant4.png" class="user-pendant-img"/>
            <div class="user-level-info">
              <text class="user-level-info-text">LV.1</text>
            </div>
          </div>
          <div class="comments-user-list-info-item-content">
            <div class="user-name">
              <text class="name-text">我是神里凌华的狗</text>
              <image src="@/static/image/bubble/bubble3.png" class="bubble-img"/>
            </div>
            <div class="user-send-content">
              我才四百多，你比我还狠我是为了雷电将军，还有十天就可以了!你还早呢我才四百多，你比我还狠我是为了雷电将军，还有十天就可以了!你还早呢
            </div>

            <div class="send-tiem">
              <div>
                <text class="send-time-text">15分钟前 - 湖南</text>
                <text class="reply-btn">回复</text>
              </div>

              <div class="like">
                <span class="iconfont">&#xe62a;</span>
                <text>1</text>
              </div>
            </div>

            <div class="comments-user-list-info-item-reply">
              <div class="reply-user-info">
                <div class="reply-user-name">
                  <text class="reply-user-name-text">我是神里凌华的狗:</text>
                  <text class="reply-user-content">测试回复的内容</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </FanPopup>
</template>

<script lang="ts" setup>
import JobSkeleton from "@/components/skeleton/JobSkeleton.vue";
import {ref} from "vue";
import {userThemeColorValStore} from "@/stores";
import type FanPopup from "@/components/FanPopup.vue";
import {onLoad} from "@dcloudio/uni-app";

const userThemeColorVal = userThemeColorValStore()

const CommentsPopup = ref<InstanceType<typeof FanPopup>>()

const OpenAllComments = () => {
  CommentsPopup.value?.open()
}

const TodayHotList = ref([
  {
    id: 1,
    title: '**中兴，要求2年经验，必须加班'
  },
  {
    id: 2,
    title: '腾讯校招三年，已润，知无不言'
  },
  {
    id: 3,
    title: '华为od与浙江大华，选哪个，感觉都是坑'
  }
])

const ViewMore = () => {
  TodayHotList.value.push(TodayHotList.value[0])
}

const goTopicDetails = (id: string) => {
  uni.navigateTo({
    url: '/pages/postdetails/topicdetails?id=' + id,
    animationType:'pop-in',
    animationDuration: 2000
  })
}

const isShowSkeleton = ref(false)


onLoad(async () => {
  isShowSkeleton.value = true
  await Promise.all([
    // getHomeBannerData(),
    // getHomeCategoryMutliData(),
    // getHomeHotMutil(),
  ]).then(() => {
    setTimeout(() => {
      isShowSkeleton.value = false
    }, 2000)
  })
})

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];
</script>

<style lang="scss" scoped>

.Today-search-list-item:nth-child(1) .Today-search-list-item-heat {
  background: #ff0000 !important;
}

.Today-search-list-item:nth-child(2) .Today-search-list-item-heat {
  background: #ff8921 !important;
}

.Today-search-list-item:nth-child(3) .Today-search-list-item-heat {
  background: #ffc266 !important;
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
        position: relative;
        color: #041833;
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 10px;

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
      margin-left: 30px;
      margin-top: 10px;
    }

    .Today-search-list-item-more {
      width: 40%;
      margin-top: 20px;
      border-radius: 25px;
      font-size: 1rem;
      background: v-bind(ThemeMainBgColorVal);
      color: #ffffff;
    }

    .Today-search-list-item-heat {
      position: absolute;
      display: block;
      width: 20px;
      height: 20px;
      margin-left: -30px;
      background: #dddddd;
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
      margin: 20px auto;
      height: auto;

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
      margin: 0 auto;
      margin-bottom: 20px;
      transform: translateY(10px);
      display: flex;

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
      margin: 10px auto;

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
      width: 80%;
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

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

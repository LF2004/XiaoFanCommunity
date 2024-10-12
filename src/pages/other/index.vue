<template>
  <scroll-view class="scroll-view" style="height: 140%" scroll-y="true" scroll-with-animation="true" @scroll="isShowHeaderSty">
    <div class="my-container warrper" @scroll="isShowHeaderSty">

      <div class="my-header" :style="{ 'background-color': `rgba(0,0,0,${headerRransparencyVal})` }">
        <div class="my-header-icon">
          <div class="header-left">
            <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#ffffff"
                       size="24"></uni-icons>
          </div>
          <div class="header-right">
            <span class="iconfont header-icon" @click="openPopup">&#xe613;</span>
          </div>
        </div>
        <div class="my-header-content" v-if="isShowMyAvatar">
          <image src="@/static/image/avatar.jpg" class="user-avatar" />
          <h4>{{limitMaxName(userName)}}</h4>
        </div>

      </div>
      <div class="my-container-top">


        <div class="my-info">
          <div class="info-content">
            <navigator url="/pagesUserInfo/avatar">
              <image src="@/static/image/avatar.jpg" class="user-avatar" />
              <image src="@/static/image/pendant2.png" class="user-pendant" />
            </navigator>
            <div class="info-text">
              <div class="user-name"><h3 class="name">{{ limitMaxName(userName) }}</h3><span class="iconfont edit-icon"
                                                                                             @click="edit">&#xe622;</span>
              </div>
              <div class="user-id" style="opacity: .8"><p>账号Id：114514</p></div>
              <div class="user-ip" style="opacity: .8">IP：湖南</div>
            </div>
          </div>

          <div class="user-signature">没有未来的未来不是我想要的未来！没有未来的未来不是我想要的未来！</div>

          <div class="user-personality-tags">
            <ul class="user-personality-tags-list">
              <li class="user-personality-tags-list-item">二刺螈</li>
              <li class="user-personality-tags-list-item">动漫迷</li>
              <li class="user-personality-tags-list-item">原神</li>
            </ul>
          </div>

          <div class="user-fs">
            <div class="user-fs-item">
              <div class="user-fs-item-num">1.2w</div>
              <div class="user-fs-item-title">粉丝</div>
            </div>
            <div class="user-fs-item">
              <div class="user-fs-item-num">100</div>
              <div class="user-fs-item-title">关注</div>
            </div>
            <div class="user-fs-item">
              <div class="user-fs-item-num">100w</div>
              <div class="user-fs-item-title">获赞</div>
            </div>
          </div>
        </div>

        <image src="@/static/image/my_bg.jpg" class="user-bg" />
      </div>
      <div class="my-container-bottom">
        <view class="classify-tab">
          <!-- tabs -->
          <view class="tabs">
            <text
                class="item"
                v-for="(item, index) in postTypeTabs"
                :key="item.title"
                @tap="activeIndex = index"
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
            <swiper-item v-for="item,index in postTypeTabs" :key="item.title">
              <scroll-view scroll-y >
                <component :is="item.component" v-if="index === activeIndex"></component>
              </scroll-view>
            </swiper-item>
          </swiper>
        </view>
      </div>
    </div>
  </scroll-view>


  <div class="operate-box">
    <div class="operate-box-div">
      <div class="operate-box-btn" :class="!isConcernStatus ? 'operate-box-btn-select' : 'operate-box-btn' "  @click="ChangeOperate(1)">聊天</div>
      <div class=" operate-box-btn operate-box-btn-select" :class="!isConcernStatus ? 'operate-box-btn-select-gz' : 'operate-box-btn'" @click="ChangeOperate(2)">{{ !isConcernStatus ? '已关注' : '+ 关注' }}</div>
    </div>
  </div>



  <FanPopup ref="popup" title="管理" :is-show-close-btn="false">
    <div class="popup-warp">
      <div class="popup-warp-item">
        <span class="iconfont">&#xe724;</span>
        <text class="popup-warp-item-text">拉黑</text>
      </div>
      <div class="popup-warp-item">
        <span class="iconfont">&#xe624;</span>
        <text class="popup-warp-item-text">举报</text>
      </div>
    </div>
    <div class="popup-warp-btn" @click="popup.close()">取消</div>
  </FanPopup>
</template>

<script lang="ts" setup>
import {ref,onMounted,onUnmounted} from "vue";

// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()

import type FanPopup from "@/components/FanPopup.vue";

import Post from "@/pages/my/components/Post.vue";

import Comments from "@/pages/my/components/Comments.vue";

import Collection from "@/pages/my/components/Collection.vue";

import {userThemeColorValStore} from "@/stores";

const userName = ref('小帆鸭~小帆鸭~小帆鸭~小帆鸭~小帆鸭~')

const limitMaxName = (name: string) => {
  if (name.length > 10) {
    return name.substring(0, 12) + '...'
  } else {
    return name
  }
}

const edit = () => {
  alert('编辑')
}

const isConcernStatus = ref(true)

const ChangeOperate = (type:number) => {
  if(type === 1){
    uni.showModal({
      title: '提示',
      content: '确认要聊天吗?',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  } else if(isConcernStatus.value === false) {
    uni.showModal({
      title: '提示',
      content: '确认要取消关注吗?',
      success: function (res) {
        if (res.confirm) {
         isConcernStatus.value = true
        }
      }
    });
  }else {
    isConcernStatus.value = false
  }
}

const isAddHeaderSty = ref(false)

const isShowMyAvatar = ref(false)

const headerRransparencyVal = ref(0)

const isShowHeaderSty = (e:any) => {
  if(Math.floor(e.detail.scrollTop) >= 40) {
    isAddHeaderSty.value = true
  }else {
    isAddHeaderSty.value = false
  }
  if(Math.floor(e.detail.scrollTop) >= 100) {
    isShowMyAvatar.value = true
  }else {
    isShowMyAvatar.value = false
  }


  headerRransparencyVal.value = Math.min(Math.floor(e.detail.scrollTop) / 100 / 2,0.6)
}
const popup = ref<InstanceType<typeof FanPopup>>()

const openPopup = () => {
  popup.value.open()
}

// 高亮下标
const activeIndex = ref(0)

// tabs 数据
const postTypeTabs = ref([
  {mytate: 0, title: '发布', component: Post},
  {mytate: 1, title: '评论', component: Comments},
  {mytate: 2, title: '收藏', component: Collection},
])

const backOutToPage = () => {
  uni.navigateBack()
}

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];
</script>

<style lang="scss" scoped>

.tabs-select {
  color: v-bind(ThemeMainTextColorVal) !important;
  font-weight: bold;
  font-size: 18px !important;
  border-bottom: 3px solid v-bind(ThemeMainBgColorVal);
}

.classify-tab{
  width: 90%;
  height: auto;
  margin: 20px auto;
}

// tabs
.tabs {
  display: flex;
  z-index: 9;
  transform: translateX(-30px);

  .item {
    text-align: center;
    padding: 20 rpx;
    font-size: 28 rpx;
    color: #c5c3c3;
    margin-left: 30px;
  }

}

// swiper
.swiper {
  height: 100vh;
  background-color: #ffffff;
  margin-top: 1rem;
}

.popup-warp{
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 20px;
  border-radius: 15px 15px 0 0;
  .popup-warp-item{
    display: flex;
    flex-direction: column;

    .iconfont{
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #f8f8f8;
      text-align: center;
      margin-bottom: 10px;
    }

    .popup-warp-item-text{
      padding-left: 5px;
      color: #c5c3c3;
    }

  }
  .popup-warp-btn{
    width: 100%;
    height: 40px;
    background: #f8f8f8;
    border: none !important;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }
}

.my-setting{
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  background: #ffffff;
  justify-content: space-around;
  .my-setting-item{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .iconfont{
      display: block;
      width: 40px;
      height: 40px;
      font-size: 30px;
      background: #f6f6f6;
      border-radius: 100%;
    }
    h4{
      color: #777777;
      font-size: .8rem;
    }
  }
}
.iconfont {
  font-size: 28px;
}

.my-container {
  width: 100vw;
  height: 100vh;
  .my-header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    height: 80px;

    .my-header-content{
      display: flex;
      align-items: center;
      position: absolute;
      top: 45%;
      left: 15%;
      .user-avatar{
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 10px;
      }
      h4{
        color: #ffffff;
      }
    }

    .my-header-icon{
      width: 90%;
      margin-top: 30px;
      display: flex;
      margin-left: 15px;
      justify-content: space-between;
      align-items: center;
    }

    .header-icon {
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      color: #ffffff;
    }

    .header-right .header-icon {
      margin-left: 20px;
    }
  }
  .my-container-top {
    position: relative;
    width: 100%;
    height: auto;
    color: #ffffff;

    .user-bg {
      position: absolute;
      top: -40%;
      width: 100%;
      height: 100vh;
      z-index: -1;
    }



    .my-info {
      position: relative;
      width: 90%;
      margin: 100px auto;
      height: auto;

      .info-content {
        display: flex;
        width: 100%;
        height: auto;

        .user-avatar {
          width: 60px;
          height: 60px;
          border-radius: 100%;
          margin-right: 20px;
        }

        .user-pendant {
          position: absolute;
          left: -7px;
          top: -5px;
          width: 70px;
          height: 70px;
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
  }

  .my-container-bottom {
    width: 100%;
    background: #ffffff;
    border-radius: 25px 25px 0 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    overflow: hidden;


    .my-container-bottom-features {
      height: auto;
      margin: 0 auto;
      margin: 20px;
      display: flex;
      overflow: scroll;

      .my-container-bottom-features-item {
        background: #f6f7f9;
        margin-left: 10px;
        text-align: center;
        border-radius: 10px;
        flex-shrink: 0;

        h4 {
          font-size: 14px;
        }

        p {
          font-size: 12px;
          padding: 5px;
        }

        .iconfont {
          font-size: 20px;
        }

        .my-container-bottom-features-item-text-info {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

}

.operate-box{
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  padding: 15px;
  border-top: 1px solid #e7e7e7;
  .operate-box-div{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .operate-box-btn{
      width: 35%;
      transition: .3s;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 10px;
      color: v-bind(ThemeMainTextColorVal);
      border: 1px solid v-bind(ThemeMainBgColorVal);
    }
    .operate-box-btn-select{
      width: 60% !important;
      background: v-bind(ThemeMainBgColorVal);
      color: #ffffff;
    }
    .operate-box-btn-select-gz{
      width: 35% !important;
      background: #f8f8f8;
      color: #c5c3c3;
      border: none !important;
    }
  }
}

</style>

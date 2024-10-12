<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"/>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <!--    <count-to :startVal="0" :endVal="3000.22" :decimals="2" :duration="3000"></count-to>-->
    <uni-section title="基础卡片" type="line">
      <uni-card :is-shadow="false">
        <text class="uni-body">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
      </uni-card>
    </uni-section>

    <video id="myVideo" src="https://xiaofanya.oss-cn-beijing.aliyuncs.com/learn3.mp4"
           @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>

    <button @click="saveUserToken()">保存登录信息</button>

    <navigator url="/pages/login/login" hover-class="none">
      <button>登录</button>
    </navigator>

    <div class="like-div">
      <h1 class="link-num" :style="{'transform': likeStatus ? 'translateY(-100%)' : 'translateY(0%)'}">{{likeNewNum}}</h1>
      <h1 class="link-num" :style="{'transform': likeStatus ? 'translateY(-100%)' : 'translateY(0%)'}">{{likeOldNum}}</h1>
    </div>

    <button @click="like(),likeStatus = !likeStatus">点赞动画</button>
    <button @click="closeDingTime">关闭定时器</button>

    <button @click="getLocation">获取当前位置</button>
  </view>
</template>

<script setup lang="ts">
import {ref} from 'vue'


import {userMannerInfoStore} from '@/stores'

const userMannerStore = userMannerInfoStore()

const title = ref('Hello')

const likeNewNum = ref(100)
const likeOldNum = ref(likeNewNum.value +1)

const likeStatus = ref(false)

const like = () => {
  // if (likeStatus.value) {
  //   likeNewNum.value++
  // } else {
  //   likeNewNum.value--
  // }
  likeNewNum.value++
  likeOldNum.value = likeNewNum.value

  // 获取最新点赞数
}

const saveUserToken = () => {
  userMannerStore?.setUserInfoManner({
    userId: '123',
    userName: 'test',
    avatar:'/static/image/avatar.jpg',
    userToken: 'test'
  })
}
const intervalId = ref();
// intervalId.value = setInterval(async () => {
//   console.log('11')
// },1000)
//
// const closeDingTime = () => {
//   clearInterval(intervalId.value)
// }

const getLocation = () => {
  uni.getLocation({
    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
    success: function (res) {
      const latitude = res.latitude;
      const longitude = res.longitude;
      uni.openLocation({
        latitude: latitude,
        longitude: longitude,
        success: function () {
          console.log('success');
        }
      });
    }
  });
}

const  danmuList = ref([{
  text: '第 1s 出现的弹幕',
  color: '#ff0000',
  time: 1
},
  {
    text: '第 3s 出现的弹幕',
    color: '#ff00ff',
    time: 3
  },
  {
    text: '第 10s 出现的弹幕',
    color: '#ff00ff',
    time: 10
  }
])
</script>

<style>

.old_count{
  transform: translateY(-100%);
}

.new_count{
  position: unset;
  transform: translateY(-100%);
}

.like-div {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 20px;
  overflow: hidden;
}

.link-num {
  transition: .3s;
  font-size: 16px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200 rpx;
  width: 200 rpx;
  margin-top: 200 rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50 rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36 rpx;
  color: #8f8f94;
}
</style>

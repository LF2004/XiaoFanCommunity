<template>
  <div class="home-container">
    <!-- 首页轮播图 -->
    <div class="swiper-text">{{ swiperIndex + 1 }}/{{ swiperList.length }}</div>

    <div class="home-swiper">
      <swiper :autoplay="true" style="height: 100%" :interval="3000" :duration="1000"
              @change="updateCurrenSwiperIndex">
        <swiper-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.imgUrl" class="swiper-img">
        </swiper-item>
      </swiper>
    </div>

    <div class="announcement">
      <uni-notice-bar :speed="120" :background-color="mainColorVal.mainBgColor" :color="mainColorVal.mainTextColor" show-icon scrollable text="小帆社区正在建设，请关注最新动态！"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {onShow} from "@dcloudio/uni-app";

const swiperIndex = ref(0)

const swiperList = ref([
  {
    imgUrl: './static/image/swiperImg/swiper1.jpg'
  },
  {
    imgUrl: './static/image/swiperImg/swiper2.jpg'
  },
  {
    imgUrl: './static/image/swiperImg/swiper3.jpg'
  },
  {
    imgUrl: './static/image/swiperImg/swiper4.png'
  }
])

const mainColorVal = reactive({
  mainBgColor:'',
  mainTextColor:''
})

const updateCurrenSwiperIndex = (e: any) => {
  swiperIndex.value = e.detail.current
}

onShow(() => {
  const rootStyle = getComputedStyle(document.documentElement);

  const mainBgColor = rootStyle.getPropertyValue('----xiaofan-bg-unimportant-color');

  const mainTextColor = rootStyle.getPropertyValue('--xiaofan-bg-main-color-text');

  mainColorVal.mainBgColor = mainBgColor;
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
  margin: 30px auto;
  border-radius: 10px;
  background: var(--xiaofan-bg-unimportant-color);
  color: var(--xiaofan-bg-main-color-text);

  .tz-text {
    position: absolute;
    z-index: 0;
    top: 30%;
    right: 0;
  }
}
</style>

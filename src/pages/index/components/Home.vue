<template>
  <div class="home-container">
    <!-- 首页轮播图 -->
    <div class="swiper-text">{{ swiperIndex + 1 }}/{{ swiperList.length }}</div>

    <div class="home-swiper">
      <swiper :autoplay="true" style="height: 100%" :interval="3000" :duration="1000"
              @change="updateCurrenSwiperIndex">
        <swiper-item v-for="(item,index) in swiperList" :key="index">
          <image :src="item.imgUrl" class="swiper-img"/>
        </swiper-item>
      </swiper>
    </div>

    <div class="announcement">
      <uni-notice-bar :speed="120" :background-color="mainColorVal.mainBgColor" :color="mainColorVal.mainTextColor"
                      show-icon scrollable text="小帆社区正在建设，请关注最新动态！" style="border-radius: 10px"/>
    </div>

    <scroll-view class="scroll-view" scroll-y="true" scroll-with-animation="true">
      <div class="invitation-card-list" v-if="false">
        <div class="invitation-card-list-item" hover-class="none"
             v-for="item,index in 3">
          <div class="user-info">
            <navigator hover-class="none" :url="`/pages/other/index`">
              <image src="@/static/image/avatar.jpg" class="user-avarat"/>
            </navigator>
            <navigator hover-class="none" :url="`/pages/other/index`">
              <div class="user-info-text">
                <div class="user-name">小帆<span class="user-level">LV1</span></div>
                <div class="user-desc-item">
                  <div class="user-desc-item-text">02-25</div>
                  <div class="user-desc-item-num">官方消息</div>
                </div>
              </div>
            </navigator>
            <span class="iconfont" style="font-size: 28px">&#xe623;</span>
          </div>

          <div class="invitation-card-content">
            <navigator hover-class="none" :url="`/pages/postdetails/postdetails?postId=${index}`">
              <div class="invitation-card-content-header">
                <div class="invitation-card-content-title">小帆社区正在建设，请关注最新动态！</div>
                <div class="invitation-card-content-tag"><span class="Top"><span class="iconfont"
                                                                                 style="font-size: 14px">&#xe615;</span></span>置顶
                </div>
              </div>

              <div class="invitation-card-content-text">
                我是小帆社区的管理员，小帆社区于2024年6月20日开发，小帆社区正在建设，请关注最新动态！我是小帆社区的管理员，小帆社区于2024年6月20日开发，小帆社区正在建设，请关注最新动态！
              </div>

              <div class="Illustrated">
                <image class="Illustrated-img" src="@/static/image/avatar.jpg"/>
                <image class="Illustrated-img" src="@/static/image/avatar.jpg"/>
                <image class="Illustrated-img" src="@/static/image/avatar.jpg"/>
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

      <div class="invitation-card-list-waterfall" v-else>
        <div class="invitation-card-list-waterfall-list">
          <div class="invitation-card-list-waterfall-item" v-for="item,index in postLeftList" :key="item.postId" @click="goToPostDetails(item.postId)">
            <div class="invitation-card-list-waterfall-item-content">
              <image :style="{ height: `${item.cut}px` }" class="invitation-card-list-waterfall-item-content-img"
                     :src="item.postImg"/>
              <div class="invitation-card-list-waterfall-item-send-content">{{ item.postContent }}</div>
              <div class="invitation-card-list-waterfall-item-user">
                <div class="info">
                  <image class="invitation-card-list-waterfall-item-user-avatar" :src="item.userAvatar"/>
                  <div class="invitation-card-list-waterfall-item-user-name">{{ item.userName }}</div>
                  <div class="invitation-card-list-waterfall-item-user-level">
                    <svg t="1728438054549" class="level" viewBox="0 0 2487 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="7849" width="256" height="256">
                      <path
                          d="M517.580043 0.028055C238.277442-2.872714 2.900769 219.657697 0 512.635351c3.315164 285.104139 227.503158 511.778506 513.021692 511.36411s508.048946-225.845575 510.949715-506.805759C1026.043384 220.900883 788.594734 2.514428 517.580043 0.028055z m-53.871421 695.355734a39.367577 39.367577 0 0 1-22.37736 8.702307H233.304695l-7.45912-1.243187a40.196368 40.196368 0 0 1-21.548568-9.945493c-6.215933-6.215933-9.945493-15.747031-11.18868-28.178897V351.435482l1.243186-8.287911a40.196368 40.196368 0 0 1 9.531098-18.233404 36.466808 36.466808 0 0 1 28.178898-12.017471 40.196368 40.196368 0 0 1 29.422084 11.603075 46.826697 46.826697 0 0 1 10.774284 26.521315v289.248095h168.658989l6.630329 0.828791a37.709995 37.709995 0 0 1 15.747031 7.873516 29.007689 29.007689 0 0 1 10.359889 23.20615 27.764502 27.764502 0 0 1-9.945493 23.206151z m320.327761-321.985343l-2.486374 6.630329-2.486373 6.630329-95.310977 251.538099-4.972746 14.089449-4.972747 13.260658-3.72956 8.287911a95.310977 95.310977 0 0 1-8.287911 14.503844 51.385048 51.385048 0 0 1-17.819009 16.161426 55.529004 55.529004 0 0 1-27.350106 6.215934 52.628235 52.628235 0 0 1-45.169115-22.37736 147.110421 147.110421 0 0 1-12.017471-22.791755l-4.972747-13.260658-4.972746-14.089449L455.835106 388.731081l-2.486373-6.630328-2.486373-6.630329-2.486374-6.630329-2.071977-7.45912a90.752626 90.752626 0 0 1-1.657583-12.846262 33.56604 33.56604 0 0 1 11.18868-24.449337 36.466808 36.466808 0 0 1 27.350107-11.18868c13.675053 0 23.206151 4.143956 29.007688 12.431866a123.075479 123.075479 0 0 1 13.675053 28.593293l3.72956 10.359889 89.095044 257.754033 89.095043-259.826011 2.900769-7.45912 2.486373-6.630329a92.824603 92.824603 0 0 1 5.387143-14.089448 34.809226 34.809226 0 0 1 11.603075-14.503845 31.494062 31.494062 0 0 1 21.962964-6.630328 36.881204 36.881204 0 0 1 18.6478 4.972746 38.124391 38.124391 0 0 1 13.675053 13.260658 33.56604 33.56604 0 0 1 4.972747 16.990217 46.826697 46.826697 0 0 1-1.657582 12.431867 75.005595 75.005595 0 0 1-3.72956 12.846262z m38.538786 337.317979a33.151644 33.151644 0 1 1 33.151644-33.151644 33.151644 33.151644 0 0 1-33.151644 33.151644z"
                          fill="#FFC565" p-id="7850"></path>
                      <path
                          d="M2340.920468 109.842876h-1400.656963c98.626141 104.013283 159.956683 245.736562 158.713496 407.765222a588.027287 588.027287 0 0 1-157.055913 396.576542h1398.99938a146.28163 146.28163 0 0 0 146.28163-146.281629V256.124505a146.28163 146.28163 0 0 0-146.28163-146.281629z"
                          fill="#FFC565" p-id="7851"></path>
                    </svg>
                    <span class="level-text">{{ item.user_level }}</span>
                  </div>
                </div>
                <div class="like">
                  <uni-icons type="heart" size="16"></uni-icons>
                  <span class="like-num">{{ item.like_num }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="invitation-card-list-waterfall-list">
          <div class="invitation-card-list-waterfall-item" v-for="item,index in postRightList" :key="item.postId" @click="goToPostDetails(item.postId)"
          >
            <div class="invitation-card-list-waterfall-item-content">
              <image :style="{ height: `${item.cut}px` }" class="invitation-card-list-waterfall-item-content-img"
                     :src="item.postImg"/>
              <div class="invitation-card-list-waterfall-item-send-content">{{ item.postContent }}</div>
              <div class="invitation-card-list-waterfall-item-user">
                <div class="info">
                  <image class="invitation-card-list-waterfall-item-user-avatar" :src="item.userAvatar"/>
                  <div class="invitation-card-list-waterfall-item-user-name">{{ item.userName }}</div>
                  <div class="invitation-card-list-waterfall-item-user-level">
                    <svg t="1728438054549" class="level" viewBox="0 0 2487 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="7849" width="256" height="256">
                      <path
                          d="M517.580043 0.028055C238.277442-2.872714 2.900769 219.657697 0 512.635351c3.315164 285.104139 227.503158 511.778506 513.021692 511.36411s508.048946-225.845575 510.949715-506.805759C1026.043384 220.900883 788.594734 2.514428 517.580043 0.028055z m-53.871421 695.355734a39.367577 39.367577 0 0 1-22.37736 8.702307H233.304695l-7.45912-1.243187a40.196368 40.196368 0 0 1-21.548568-9.945493c-6.215933-6.215933-9.945493-15.747031-11.18868-28.178897V351.435482l1.243186-8.287911a40.196368 40.196368 0 0 1 9.531098-18.233404 36.466808 36.466808 0 0 1 28.178898-12.017471 40.196368 40.196368 0 0 1 29.422084 11.603075 46.826697 46.826697 0 0 1 10.774284 26.521315v289.248095h168.658989l6.630329 0.828791a37.709995 37.709995 0 0 1 15.747031 7.873516 29.007689 29.007689 0 0 1 10.359889 23.20615 27.764502 27.764502 0 0 1-9.945493 23.206151z m320.327761-321.985343l-2.486374 6.630329-2.486373 6.630329-95.310977 251.538099-4.972746 14.089449-4.972747 13.260658-3.72956 8.287911a95.310977 95.310977 0 0 1-8.287911 14.503844 51.385048 51.385048 0 0 1-17.819009 16.161426 55.529004 55.529004 0 0 1-27.350106 6.215934 52.628235 52.628235 0 0 1-45.169115-22.37736 147.110421 147.110421 0 0 1-12.017471-22.791755l-4.972747-13.260658-4.972746-14.089449L455.835106 388.731081l-2.486373-6.630328-2.486373-6.630329-2.486374-6.630329-2.071977-7.45912a90.752626 90.752626 0 0 1-1.657583-12.846262 33.56604 33.56604 0 0 1 11.18868-24.449337 36.466808 36.466808 0 0 1 27.350107-11.18868c13.675053 0 23.206151 4.143956 29.007688 12.431866a123.075479 123.075479 0 0 1 13.675053 28.593293l3.72956 10.359889 89.095044 257.754033 89.095043-259.826011 2.900769-7.45912 2.486373-6.630329a92.824603 92.824603 0 0 1 5.387143-14.089448 34.809226 34.809226 0 0 1 11.603075-14.503845 31.494062 31.494062 0 0 1 21.962964-6.630328 36.881204 36.881204 0 0 1 18.6478 4.972746 38.124391 38.124391 0 0 1 13.675053 13.260658 33.56604 33.56604 0 0 1 4.972747 16.990217 46.826697 46.826697 0 0 1-1.657582 12.431867 75.005595 75.005595 0 0 1-3.72956 12.846262z m38.538786 337.317979a33.151644 33.151644 0 1 1 33.151644-33.151644 33.151644 33.151644 0 0 1-33.151644 33.151644z"
                          :fill="item.level_bg" p-id="7850"></path>
                      <path
                          d="M2340.920468 109.842876h-1400.656963c98.626141 104.013283 159.956683 245.736562 158.713496 407.765222a588.027287 588.027287 0 0 1-157.055913 396.576542h1398.99938a146.28163 146.28163 0 0 0 146.28163-146.281629V256.124505a146.28163 146.28163 0 0 0-146.28163-146.281629z"
                          :fill="item.level_bg" p-id="7851"></path>
                    </svg>
                    <span class="level-text">{{ item.user_level }}</span>
                  </div>
                </div>
                <div class="like">
                  <uni-icons type="heart" size="16"></uni-icons>
                  <span class="like-num">{{ item.like_num }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>

  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, onMounted} from "vue";
import {userThemeColorValStore} from "@/stores";

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

const postList = ref([
  {
    postId: '1',
    userId: 1,
    userName: '小帆',
    userAvatar: '/src/static/image/avatar.jpg',
    postImg: 'https://pic.linfeng.tech/test/20241006/7581a8fc5e55448f97ec73f5d0449921.jpg',
    cut: 0,
    postContent: '测试发布消息',
    user_level: 1,
    level_bg: '#FFC565',
    like_num: 0,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '2',
    userId: 2,
    userName: '吻メ尔之眸',
    userAvatar: 'https://pic.linfeng.tech/test/20240112/5c4ad8cbb1354805a63f5b480a40d535.jpg',
    postImg: 'https://pic.linfeng.tech/test/20241007/a27a67d10e284271b0d5016569f42d60.jpg',
    cut: 0,
    postContent: '做自己剧本里的主角',
    user_level: 3,
    level_bg: '#657aff',
    like_num: 10,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '3',
    userId: 3,
    userName: '仔仔',
    userAvatar: 'https://pic.linfeng.tech/test/20240927/3546b5f87503434eb39200067baf80e6.jpg',
    postImg: 'https://pic.linfeng.tech/test/20240925/cb5c39a0d52d4eada73ed8685a0e74df.jpg',
    cut: 0,
    postContent: '小苏打饼',
    user_level: 1,
    level_bg: '#FFC565',
    like_num: 210,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '4',
    userId: 4,
    userName: 'momo',
    userAvatar: 'https://pic.linfeng.tech/test/20240606/97bea15216434f6ca970c39139f939f8.jpeg',
    postImg: 'https://pic.linfeng.tech/test/20240920/a0a3d16c54974fcfa228902f95c00e32.jpg',
    cut: 0,
    postContent: '闪闪发光',
    user_level: 1,
    level_bg: '#FFC565',
    like_num: 210,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '5',
    userId: 5,
    userName: 'umi',
    userAvatar: 'https://pic.linfeng.tech/test/20240226/259c7c23152e499fb8d89a54b28e98b4.jpg',
    postImg: 'https://pic.linfeng.tech/test/20241008/683a4e6c4aca463b9d4de664dad1c013.jpg',
    cut: 0,
    postContent: '国庆假期已结束',
    user_level: 1,
    level_bg: '#FFC565',
    like_num: 210,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '6',
    userId: 6,
    userName: 'kiss rain',
    userAvatar: 'https://pic.linfeng.tech/test/20230505/fa5d8ba8fc87480b985557cf5385cc35.jpg',
    postImg: 'https://pic.linfeng.tech/test/20240930/9b4556e565564029ab50630f02dc68c6.jpg',
    cut: 0,
    postContent: '星星请你永远闪耀',
    user_level: 2,
    level_bg: '#65ff9b',
    like_num: 221,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '7',
    userId: 7,
    userName: '人间事',
    userAvatar: 'https://pic.linfeng.tech/test/20240103/f607c7f6669c4ed9a63819fd8ba7aedd.jpg',
    postImg: 'https://pic.linfeng.tech/test/20241007/3a26e4630fef4fc7bdab65ff6c9b6cba.jpg',
    cut: 0,
    postContent: '国庆假期旅游去',
    user_level: 3,
    level_bg: '#657aff',
    like_num: 10,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '8',
    userId: 7,
    userName: '吻メ尔之眸',
    userAvatar: 'https://pic.linfeng.tech/test/20240112/5c4ad8cbb1354805a63f5b480a40d535.jpg',
    postImg: 'https://pic.linfeng.tech/test/20240920/a0a3d16c54974fcfa228902f95c00e32.jpg',
    cut: 0,
    postContent: '做自己剧本里的主角',
    user_level: 3,
    level_bg: '#657aff',
    like_num: 10,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '9',
    userId: 7,
    userName: '不1mo阿莹',
    userAvatar: 'https://pic.linfeng.tech/test/20230907/cb28bca7848d485a9a74fa6a047f3aec.jpg',
    postImg: 'https://pic.linfeng.tech/test/20241009/54a7a67094154241a2fc9548addf45d5.jpg',
    cut: 0,
    postContent: '可爱鲨鲨头像 ​',
    user_level: 3,
    level_bg: '#657aff',
    like_num: 120,
    send_time: '2024-10-09 10:00:00'
  },
  {
    postId: '10',
    userId: 7,
    userName: '吻メ尔之眸',
    userAvatar: 'https://pic.linfeng.tech/test/20240112/5c4ad8cbb1354805a63f5b480a40d535.jpg',
    postImg: 'https://pic.linfeng.tech/test/20240920/a0a3d16c54974fcfa228902f95c00e32.jpg',
    cut: 0,
    postContent: '做自己剧本里的主角',
    user_level: 3,
    level_bg: '#657aff',
    like_num: 10,
    send_time: '2024-10-09 10:00:00'
  },

])

const postLeftList = ref(postList.value.slice(0, 5));
const postRightList = ref(postList.value.slice(5, 10));


const imageCache: any = ref({});

const loadImages = async () => {
  for (const post of postList.value) {
    if (!imageCache.value[post.postImg]) {
      await onImageLoad(post.postImg, post.postId);
    } else {
      post.cut = imageCache.value[post.postImg];
    }
  }
};


const onImageLoad = (img: string, postId: string) => {
  uni.getImageInfo({
    src: img,
    success: (res) => {
      let height = 0;
      console.log(res.height)
      // 修改后的条件判断逻辑
      if (res.height < 600 || (res.height >= 600 && res.height <= 690)) {
        height = 184;
      } else if (res.height > 920 && res.height <= 1100) {
        height = 276;
      } else if (res.height > 690 && res.height <= 1200) {
        height = 242;
      } else if (res.height > 1200 && res.height <= 2000) {
        height = 328;
      } else if (res.height > 2000) {
        height = 246;
      }

      const post = postList.value.find(v => v.postId === postId);
      if (post) {
        post.cut = height;
        imageCache.value[img] = height;
      } else {
        console.error(`未找到 postId: ${postId}`);
      }
    },
    fail: (err) => {
      console.error('获取图片信息失败:', err);
    }
  });
};

const goToPostDetails = (postId:string) => {
  uni.navigateTo({
    url: '/pages/postdetails/postdetails?postId=' + postId
  })
}


onMounted(() => {
  loadImages();
})

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
.scroll-view {
  height: auto;
  padding-bottom: 100px;
}

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

.invitation-card-list-waterfall {
  width: 100%;
  background: #f7f7f7;
  height: auto;
  display: flex;
  padding-bottom: 100px;

  .invitation-card-list-waterfall-list {
    width: 95%;
    margin: 0 auto;
    flex-wrap: wrap;

    .invitation-card-list-waterfall-item {
      background: #fff;
      box-shadow: 0 1px 10px hsla(0, 0%, 74.1%, .2);
      width: 184px;
      margin: 5px 0;
      box-sizing: border-box;
      border-radius: 6px;
      padding-bottom: 10px;
      transition: .3s;
      /* 添加以下样式 */
      align-self: start; /* 确保元素顶部对齐 */

      .invitation-card-list-waterfall-item-content {
        .invitation-card-list-waterfall-item-content-img {
          width: 100%;
          display: block;
          height: auto;
          border-radius: 6px 6px 0 0;
          max-height: 364px;
        }

        .invitation-card-list-waterfall-item-send-content {
          font-size: 16px;
          height: 36px;
          white-space: nowrap;
          overflow: hidden;
          padding: 5px;
          text-overflow: ellipsis;
        }

        .invitation-card-list-waterfall-item-user {
          width: 95%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;

          .info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .invitation-card-list-waterfall-item-user-avatar {
              width: 21px;
              height: 21px;
              border-radius: 10px;
              margin-right: 10px;
            }

            .invitation-card-list-waterfall-item-user-name {
              font-size: 10px;
              font-weight: 600;
              max-width: 72px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-right: 10px;
            }

            .invitation-card-list-waterfall-item-user-level {
              display: flex;
              position: relative;

              .level {

                width: 30px;
                height: 15px;
              }

              .level-text {
                display: inline-block;
                position: absolute;
                font-size: 8px;
                color: #ffffff;
                right: 20%;
                top: 2px;
              }
            }
          }

          .like {
            display: flex;
            justify-content: space-between;
            width: 15%;
            align-items: center;
            margin-right: 8px;

            .like-num {
              font-size: 12px;
              color: #999;

            }
          }
        }
      }
    }

  }
  .invitation-card-list-waterfall-list:first-child{
    margin-left: 6px;
  }
  .invitation-card-list-waterfall-list:first-child .invitation-card-list-waterfall-item {
    margin-top: 10px;
  }

}
</style>

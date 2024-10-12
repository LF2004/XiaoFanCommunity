<template>
  <div class="header-container" :style="{'border-bottom': isShowBorder ? '1px solid #e7e7e7' : 'none'}">
    <div class="header-container-header" :style="{'margin-top': safeAreaInsets.top  + 'px'}">
      <div class="header-container-header-item">
        <div class="header-back">
          <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#666666"
                     size="24"></uni-icons>
        </div>
        <text class="header-title" :style="{'transform': `translateX(${isTitleCenter ? '150%' : '0'})`}">{{title}}</text>
      </div>
      <div class="header-container-header-item">
        <span class="iconfont" style="transform: translateX(-10px);"
              v-for="item,index in icon"
              :style="{'margin-left': index === 0 ? '0' : '20px','font-size': iconSize + 'px','color':iconColor }"
              @click="goToOtherPage(index)"
              v-html="item"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()

defineProps({
  title: {
    type: String,
    default: '消息'
  },
  icon:{
    type: Array,
    default: []
  },
  iconSize:{
    type: Number,
    default: 18
  },
  isShowBorder:{
    type: Boolean,
    default: true
  },
  isTitleCenter:{
    type: Boolean,
    default: false
  },
  iconColor:{
    type:String,
    default:'#666666'
  },
  goToUrl:{
    type: Array,
  }
})

const backOutToPage = () => {
  uni.navigateBack()
}

const goToOtherPage = () => {
  uni.navigateTo({
    url:``
  })
}
</script>

<style scoped lang="scss">
.header-container{
  position: fixed;
  top:0;
  background: #ffffff;
  height: auto;
  //border-bottom: 1px solid #e7e7e7;
  width: 100%;
  z-index: 999;

  .header-container-header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;
    .header-container-header-item{
      display: flex;
      align-items: center;
    }

    .header-title{
      padding-left: 15px;
    }
  }
}
</style>

<template>
  <div class="recording-box">
    <div class="recording-box-header">
      <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#666666"
                 size="24"></uni-icons>
      <text class="recording-box-header-title">明细查询</text>
    </div>

    <div class="recording-box-tab">
      <div class="recording-box-tab-list">
        <div
            :class="SelectTapIndex === index ? 'recording-box-tab-item-selected' : 'recording-box-tab-item' "
            v-for="item,index in ['获取记录', '消耗记录']"
            @click="SelectTapIndex = index"
        >
          <text class="recording-box-tab-item-text">{{ item }}</text>
        </div>
      </div>
    </div>

    <scroll-view class="scroll-view" scroll-y="true" scroll-with-animation="true">
    <div class="recording-list">
      <div class="recording-list-item" v-for="item in 15">
        <div class="recording-list-item-left">
          <text class="recording-list-item-left-name">浏览3个帖子</text>
          <text class="recording-list-item-left-text">小帆币任务</text>
        </div>
        <div class="recording-list-item-right">
          <div class="recording-list-item-right-info">
            <text class="recording-list-item-left-num">+20</text>
            <text class="recording-list-item-left-name">小帆币</text>
          </div>
          <text class="recording-list-item-left-time">2024-09-11 11:10</text>
        </div>
      </div>
    </div>
    </scroll-view>
  </div>
</template>

<script lang="ts" setup>
import {userThemeColorValStore} from "@/stores";
import {ref} from "vue";

const SelectTapIndex = ref(0)

const backOutToPage = () => {
 uni.navigateBack()
}

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
</script>

<style lang="scss" scoped>
.scroll-view{
  height: 850px;
}
.recording-box{
  width: 100vw;
  height: auto;
  background: #fff;
  .recording-box-header{
    position: absolute;
    z-index: 9999;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 10px 0;
    text-align: center;
    background: #ffffff;
    .recording-box-header-title{
      padding-left: 35%;
    }
  }

  .recording-box-tab{
    position: absolute;
    z-index: 9999;
    background: #ffffff;
    top: 6%;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    .recording-box-tab-list{
      width: 40%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .recording-box-tab-item{
        color: #858585;
      }
      .recording-box-tab-item-selected{
        color: black !important;
        border-bottom: 3px solid v-bind(ThemeMainBgColorVal);
      }
    }
  }

  .recording-list{
    position: absolute;
    top: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    .recording-list-item{
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e7e7e7;
      .recording-list-item-left{
        display: flex;
        flex-direction: column;
        .recording-list-item-left-text{
          color: #858585;
          font-size: 14px;
        }
      }
      .recording-list-item-right{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #858585;
        .recording-list-item-left-num{
          color: v-bind(ThemeMainBgColorVal);
          padding-right: 5px;
        }
      }
    }
  }
}
</style>

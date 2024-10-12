<template>
  <div class="edit-box">
    <FanHeader title="修改信息" :isTitleCenter="true" class="edit-box-header" :isShowBorder="false"/>

    <div class="edit-region">
      <div class="edit-my-avatar">
        <image src="@/static/image/my_avatar.jpg" class="edit-box-avatar"/>
        <image src="@/static/image/pendant/pendant15.png" class="edit-box-pendant"/>
        <navigator url="pendant">
          <div class="edit-dress">更换个性装扮 ></div>
        </navigator>
      </div>

      <div class="edit-my-info">
        <div class="edit-my-info-item" @click="goToEditSavePage(1)">
          <label class="edit-my-info-item-title">昵称</label>
          <text class="edit-my-info-item-text">是小帆鸭~</text>
          <uni-icons type="right" size="14"></uni-icons>
        </div>
        <div class="edit-my-info-item">
          <label class="edit-my-info-item-title">性别</label>
          <text class="edit-my-info-item-text">男</text>
          <uni-icons type="right" size="14"></uni-icons>
        </div>
        <div class="edit-my-info-item" @click="goToEditSavePage(2)">
          <label class="edit-my-info-item-title">个性签名</label>
          <text class="edit-my-info-item-text">测试个性签名内容~</text>
          <uni-icons type="right" size="14"></uni-icons>
        </div>
        <div class="edit-my-info-item" @click="GoToLaberSelect">
          <label class="edit-my-info-item-title">标签</label>
          <text class="edit-my-info-item-text">测试标签1、测试标签2、测试标签3</text>
          <uni-icons type="right" size="14"></uni-icons>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue';

const goToEditSavePage = (type: number) => {
  if (type === 1) {
    uni.navigateTo({
      url: `editsave?type=1`
    })
  } else {
    uni.navigateTo({
      url: `editsave?type=2`
    })
  }
}
const GoToLaberSelect = () => {
  uni.navigateTo({
    url: 'personalitylabel'
  })
}

</script>

<style scoped lang="scss">


.edit-box {
  width: 100vw;
  height: 100vh;
  background-color: #f6f7f9;

  .edit-box-header {
    background: #f6f7f9;
  }

  .edit-region {
    position: absolute;
    top: 8%;
    width: 100%;
    height: auto;
    background: #ffffff;

    .edit-my-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 20px;

      .edit-box-avatar {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }

      .edit-box-pendant {
        position: absolute;
        top: -5%;
        left: 34%;
        width: 130px;
        height: 130px;
      }
    }

    .edit-dress {
      position: absolute;
      right: 0;
      top: 20px;
      font-size: 14px;
      background: #f6f7f9;
      padding: 10px;
      border: none !important;
    }

    .edit-my-info {
      width: 90%;
      margin: 0 auto;

      // 最后一个item不加下边框
      .edit-my-info-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .edit-my-info-item-title {
          color: #c5c3c3;
          padding-right: 10px;
          flex: 1;
          font-size: 14px;
        }

        .edit-my-info-item-text {
          flex: 3;
          font-size: 14px;
        }
      }

      .edit-my-info-item:not(:last-child) {
        border-bottom: 1px solid #e7e7e7;
      }
    }
  }
}
</style>

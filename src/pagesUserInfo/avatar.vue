<template>
  <div class="page">
    <div class="avatar-warrper">
      <div class="avatar-warrper-container">
        <span class="iconfont header-icon" @click="goToMy">&#xe60c;</span>
        <image src="@/static/image/avatar.jpg" class="avatar-img" />
      </div>
    </div>
    <div class="user-cz">
      <navigator url="/pagesUserInfo/pendant">
      <button class="cz-btn">更换头像挂件</button>
      </navigator>
      <button class="cz-btn">修改头像</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,onUnmounted } from "vue";
const isAddCloseAnimation = ref(false);

const goToMy = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page{
  width: 100vw;
  height:100vh;
}


.avatar-warrper {

  width: 100vw;
  height: 100vh;
  background: #1b1c20;

  .avatar-warrper-container {
    width: 90%;
    margin: 0 auto;
    transform: translateY(50px);

    .header-icon {
      color: #ffffff;
      font-size: 28px;
    }

    .avatar-img {
      position: absolute;
      left: 8%;
      top: 300%;
      width: 300px;
      height: 300px;
      border-radius: 100%;
    }

  }

}

.user-cz {
  width: 90%;
  position: absolute;
  left: 5%;
  bottom: 5%;

  .cz-btn {
    background: #202427;
    color: #c8cccf;
  }
}
</style>

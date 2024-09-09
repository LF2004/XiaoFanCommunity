<template>
  <div class="post-container">
    <div class="post-list">
      <div class="post-item" v-for="item in 5">
        <div class="author-info">
          <image src="@/static/image/my_avatar.jpg" class="author-img"/>
          <image src="@/static/image/pendant/pendant13.png" class="author-pendant" />
        </div>
        <div class="post-item-header">
          <div class="post-item-header-left">
            <text class="post-item-header-left-text">是小帆鸭~</text>
            <text class="post-item-header-left-text f-1">4小时前·测试</text>
          </div>
        </div>
        <div class="post-item-title">
          <text class="post-item-title-text">测试标题</text>
        </div>
        <div class="post-item-content">
          <text class="post-item-content-text">测试内容</text>
          <image src="@/static/image/swiperImg/swiper2.png" class="post-img"/>
          <text class="post-item-content-type">测试类型</text>
        </div>

        <div class="post-bottom-operate">
          <div class="post-bottom-operate-item">
            <span class="iconfont post-bottom-operate-item-icon">&#xe687;</span>
            <text class="post-bottom-operate-item-text">3</text>
          </div>
          <div class="post-bottom-operate-item">
            <span class="iconfont post-bottom-operate-item-icon">&#xe7c0;</span>
            <text class="post-bottom-operate-item-text">1</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.post-container {
  width: 100%;
  height: 100vh;

  .post-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    transform: translateY(-10px);

    .post-item {
      position: relative;
      width: 100%;
      height: auto;
      margin-top: 20px;
      background: #ffffff;
      border-bottom: 10px solid #f6f7f9;

      .author-info{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .author-img{
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
        .author-pendant{
          width: 50px;
          height: 50px;
          position: absolute;
          top: -2.5%;
          left: -1%;
          border-radius: 100%;
        }
      }

      .post-item-header {
        position: absolute;
        left: 15%;
        top: 0;
        width: 150px;
        height: 20px;
        margin-bottom: 20px;
        .post-item-header-left{
          display: flex;
          flex-direction: column;
        }
        .f-1{
          color: #c5c3c3;
        }

        .post-item-header-left-text {
          font-size: 14px;
        }

        .iconfont {
          font-size: 20px;
        }
      }

      .post-item-title {
        width: 100%;
        height: auto;

        .post-item-title-text {
          font-size: 20px;
        }
      }

      .post-item-content {
        width: 100%;
        height: auto;

        .post-img {
          width: 100%;
          height: 200px;
          border-radius: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .post-item-content-text {
          font-size: 16px;
          color: #c5c3c3;
        }

        .post-item-content-type {
          background: #f5f5f5;
          color: #888888;
          padding: 5px;
        }
      }

      .post-bottom-operate {
        width: 100%;
        margin: 20px auto;
        display: flex;
        justify-content: flex-end;

        .post-bottom-operate-item {
          color: #c5c3c3;
          margin-right: 10px;
          .post-bottom-operate-item-icon {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="post-container">
    <div class="post-list">
      <div class="post-item" v-for="item in 5">
        <div class="post-item-header">
         <div class="post-item-header-left">
           <text class="post-item-header-left-text">9月1日·小帆</text>
         </div>
          <div class="post-item-header-right"><span class="iconfont">&#xe613;</span></div>
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
            <span class="iconfont post-bottom-operate-item-icon">&#xe8a1;</span>
            <text class="post-bottom-operate-item-text">点赞</text>
          </div>
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
.post-container{
  width: 100%;
  height: 100vh;
  .post-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    transform: translateY(-10px);
    .post-item{
      position: relative;
      width: 100%;
      height: auto;
      margin-top: 20px;
      background: #ffffff;
      border-bottom: 10px solid #f6f7f9;

      .post-item-header{
        display: flex;
        justify-content: space-between;
        color: #c5c3c3;
        .post-item-header-left-text{
          font-size: 14px;
        }
        .iconfont{
          font-size: 20px;
        }
      }

      .post-item-title{
        width: 100%;
        height: auto;
        .post-item-title-text{
          font-size: 20px;
        }
      }
      .post-item-content{
        width: 100%;
        height: auto;
        .post-img{
          width: 100%;
          height: 200px;
          border-radius: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .post-item-content-text{
          font-size: 16px;
          color: #c5c3c3;
        }

        .post-item-content-type{
          background: #f5f5f5;
          color: #888888;
          padding: 5px;
        }
      }

      .post-bottom-operate{
        width: 80%;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        .post-bottom-operate-item{
          color: #c5c3c3;
          .post-bottom-operate-item-icon{
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>

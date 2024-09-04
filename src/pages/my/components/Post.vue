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
          <image src="@/static/image/avatar.jpg" class="post-img"/>
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
      width: 100%;
      height: auto;
      margin-top: 20px;
      background: #ffffff;
      padding-bottom: 10px;
      border-bottom: 5px solid #f6f7f9;
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
          border-radius: 10px;
          margin-top: 10px;
        }
        .post-item-content-text{
          font-size: 16px;
          color: #c5c3c3;
        }
      }
    }
  }
}
</style>

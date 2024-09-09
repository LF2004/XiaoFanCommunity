<template>
  <div class="comment-container">
    <div class="comment-list">
      <div class="comment-item" v-for="item in 3">
        <div class="comment-item-header">
          <div class="comment-item-header-left">
            <text class="comment-item-header-left-text">9月1日·小帆</text>
          </div>
        </div>
        <div class="comment-item-title">
          <text class="comment-item-title-text">测试评论</text>
        </div>

        <div class="comment-item-content">
          <text class="comment-item-content-text">回复评论:test</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.comment-container {
  width: 100%;
  height: 100vh;

  .comment-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    transform: translateY(-10px);

    .comment-item {
      width: 100%;
      height: auto;
      margin-top: 20px;
      background: #ffffff;
      padding-bottom: 10px;
      border-bottom: 1px solid #f6f7f9;

      .comment-item-header {
        display: flex;
        justify-content: space-between;
        color: #c5c3c3;

        .comment-item-header-left-text {
          font-size: 14px;
        }

        .iconfont {
          font-size: 20px;
        }
      }

      .comment-item-title {
        width: 100%;
        height: auto;

        .comment-item-title-text {
          font-size: 20px;
        }
      }

      .comment-item-content{
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        background: #f6f7f9;
        color: #c5c3c3;
      }
    }
  }
}
</style>

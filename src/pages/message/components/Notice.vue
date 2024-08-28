<template xmlns="http://www.w3.org/1999/html">
  <div class="notice-page">
    <div class="notice-list-container">
      <div class="notice-list">
        <div class="notice-item">
          <span class="iconfont" style="color:#279beb;font-size: 32px;margin-left: -2px">&#xe687;</span>
          <div class="notice-item-text">
            <text>评论和@</text>
          </div>
        </div>
        <div class="notice-item" style="background: #ffefd1">
          <span class="iconfont" style="color:#fca316;font-size: 32px;margin-left: -2px">&#xe626;</span>
          <div class="notice-item-text">
            <text>新增关注</text>
          </div>
        </div>
        <div class="notice-item" style="background: #dcfeff">
          <span class="iconfont" style="color:#000;font-size: 32px;margin-left: -2px">&#xe7c0;</span>
          <div class="notice-item-text">
            <text>收到的赞</text>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.notice-page {
  width: 100vw;
  height: 100vh;
  background: #f6f7f9;
  .notice-list-container{
    width: 100%;
    height: auto;
    background: #ffffff;
    padding-bottom: 20px;
  }
  .notice-list {
    width: 90%;
    height: auto;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;

    .notice-item {
      width: 50px;
      height: 50px;
      background: #d5effc;
      border-radius: 100%;
      text-align: center;

      .notice-item-text{
        width: 130%;
        margin-top: 10px;
        margin-left: -5px;
        text-align: center;
      }
    }
  }
}
</style>

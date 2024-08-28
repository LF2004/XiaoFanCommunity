<template>
  <div class="page" >
    <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
                    @cancel="back" @clear="clear" bgColor="#ffffff" placeholder="娇兰x原神" :style="{'margin-top': safeAreaInsets.top + 'px'}">
    </uni-search-bar>

    <div class="search-type">
      <h3 class="history-search-list-title">历史搜索</h3>
      <div class="history-search-list">
        <div class="history-search-list-item" v-for="item,index in 5">我的历史搜索</div>
      </div>

      <h3 class="hot-search-list-title">热搜</h3>
      <div class="hot-search-list">
        <div class="hot-search-list-item" v-for="item,index in 5">欢夏!邪龙?童话国!</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {safeAreaInsets} = uni.getSystemInfoSync()
const back = () => {
  uni.navigateBack();
}
</script>

<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100vh;
  background: #eff3f6;


  .search-type {
    width: 100%;
    margin-top: 30px;
    background: #ffffff;

    .history-search-list-title {
      padding: 5px 0 0 15px;
      transform: translateY(10px);
    }

    .history-search-list {
      width: 100%;
      height: auto;
      margin: 0 auto;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .history-search-list-item {
        height: 40px;
        background: #f8f8f8;
        padding: 10px;
        margin-top: 20px;
      }
    }

    .hot-search-list-title {
      padding: 5px 0 0 15px;
    }

    .hot-search-list {
      width: 100%;
      height: auto;
      margin: 0 auto;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .hot-search-list-item {
        padding: 10px;

      }
    }
  }
}

</style>

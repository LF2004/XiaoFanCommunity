<template>
  <div class="exchange-detail-box">
    <FanHeader :title="''" :icon="['','']" :isShowBorder="false"/>
    <div class="gift-show">
      <image src="@/static/image/pendant/pendant9.png" class="gift-img"/>
    </div>

    <div class="gift-description">
     <div class="gift-description-box">
       <div class="gift-description-left">
         <image src="@/static/image/xiaofan_currency.png" class="unit-img"/>
         <text class="exchange-currency-gift-value">1000</text>
         <text class="exchange-currency-gift-unit">小帆币</text>
       </div>
       <div class="gift-description-right">
         <text class="exchange-currency-gift-stock">库存1200</text>
       </div>
     </div>
      <text class="gift-name">【挂件】公主连结佩可莉姆 (永久)</text>
    </div>

    <div class="gift-detail-info">
      <div class="gift-detail-info-item">
        <text class="gift-detail-info-title">商品描述:</text>
        <text class="gift-detail-info-content">【挂件】公主连结佩可莉姆</text>
      </div>
      <div class="gift-detail-info-item">
        <text class="gift-detail-info-title">兑换次数:</text>
        <text class="gift-detail-info-content">每位用户仅可兑换一次哦~</text>
      </div>
      <div class="gift-detail-info-item">
        <text class="gift-detail-info-title">礼品领取:</text>
        <text class="gift-detail-info-content">兑换后头像挂件可在 [我的]-[个人主页]-[编辑] 中进行更换 小伙伴们快去佩戴吧~</text>
      </div>
    </div>

    <div class="exchange-detail-btn">
      <button class="exchange-detail-btn-item">立即兑换</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {userThemeColorValStore} from "@/stores";

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
</script>

<style lang="scss" scoped>
.exchange-detail-box{
  width: 100vw;
  height: 100vh;
  background: #f6f7f9;

  .gift-show{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    background: #ffffff;
    border-bottom: 1px solid #e7e7e7;

    .gift-img{
      width: 200px;
      height: 200px;
    }
  }
  .gift-description{
    width: 100%;
    height: auto;
    padding: 20px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    .gift-description-box{
      display: flex;
      justify-content: space-between;
    }

    .gift-name{
      padding-top: 10px;
    }

    .gift-description-left{
      display: flex;
      align-items: center;
      .unit-img{
        width: 30px;
        height: 30px;
      }
      .exchange-currency-gift-value{
        font-size: 28px;
        color: #fbb11b;
        padding-right: 5px;
      }
      .exchange-currency-gift-unit{
        color: #858585;
        padding-top: 5px;
        font-size: 12px;
      }
    }

    .gift-description-right{
      .exchange-currency-gift-stock{
        color: #858585;
        font-size: 12px;
      }
    }
  }

  .gift-detail-info{
    width: 100%;
    margin-top: 20px;
    height: auto;
    background: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .gift-detail-info-item{
      margin-top: 5px;
      .gift-detail-info-content{
        color: #858585;
        padding-left: 5px;
      }
    }
  }

  .exchange-detail-btn{
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px;
    border-top: 1px solid #e7e7e7;
    background: #ffffff;
    .exchange-detail-btn-item{
      width: 90%;
      color: #ffffff;
      background: v-bind(ThemeMainBgColorVal);
    }
  }
}
</style>

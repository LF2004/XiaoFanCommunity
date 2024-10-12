<template>
  <div class="exchange-box">

    <div class="exchange-box-header">
      <div class="exchange-box-header-box">
        <div class="exchange-box-header-item">
          <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#666666"
                     size="24"></uni-icons>
        </div>
        <div class="exchange-box-header-item">兑换中心</div>
        <navigator url="/pages/exchangeCentent/recording">
        <div class="exchange-box-header-item">明细</div>
        </navigator>
      </div>
      <div class="exchange-currency-info">
        <div class="exchange-currency-info-item">
          <div class="exchange-currency-info-item-icon">
            <image src="@/static/image/xiaofan_currency.png" class="exchange-currency-info-item-icon"/>
          </div>
          <div class="exchange-currency-info-item-value">1000</div>
        </div>
        <div class="exchange-currency-info-item">
          <div class="exchange-currency-info-item-icon">
            <image src="@/static/image/png_icon/icon_purse.png" class="exchange-currency-info-item-icon"/>
          </div>
          <div class="exchange-currency-info-item-value">获取小帆币</div>
        </div>
      </div>
    </div>


    <scroll-view style="height: 850px;padding-bottom: 20px" scroll-y="true" scroll-with-animation="true">
      <div class="exchange-currency-gift-list">
        <navigator url="/pages/exchangeCentent/detail" class="exchange-currency-gift-list-item"
                   v-for="item,index in ExchangeCurrencyGiftList">
          <div class="exchange-currency-gift-img">
            <image :src="item.img"
                   :class="item.type === '挂件' ? 'exchange-currency-gift-img' : 'exchange-currency-gift-img-zb' "/>
          </div>
          <div class="exchange-currency-gift-list-item-title">【{{ item.type }}】{{ item.name }}</div>
          <div class="exchange-currency-gift-list-item-value">
            <div class="exchange-currency-gift-list-item-value-item-title main-title">{{ item.need_coin }}
              <text class="f-title">小帆币</text>
            </div>
            <div class="exchange-currency-gift-list-item-value-item-title f-title" style="padding-top: 3px">
              库存{{ item.stock }}
            </div>
          </div>
        </navigator>
      </div>
    </scroll-view>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";

const backOutToPage = () => {
  uni.navigateBack()
}

const ExchangeCurrencyGiftList = ref([
  {
    id: 1,
    name: '原神二周年头像挂件',
    type: '挂件',
    need_coin: 100,
    stock: 1200,
    img: '/static/image/pendant1.png'
  },
  {
    id: 2,
    name: '原神芙宁娜像挂件',
    type: '挂件',
    need_coin: 240,
    stock: 300,
    img: '/static/image/pendant2.png'
  },
  {
    id: 3,
    name: '是天选之人',
    type: '挂件',
    need_coin: 100,
    stock: 43,
    img: '/static/image/pendant/pendant1.png'
  },
  {
    id: 4,
    name: '圣诞节麋鹿',
    type: '挂件',
    need_coin: 150,
    stock: 400,
    img: '/static/image/pendant/pendant2.png'
  },
  {
    id: 5,
    name: '中野一花',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant3.png'
  },
  {
    id: 6,
    name: '快把我哥带走',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant4.png'
  },
  {
    id: 7,
    name: '发呆鸭',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant17.png'
  },
  {
    id: 8,
    name: '米游姬-天使之翼',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant6.png'
  },
  {
    id: 9,
    name: '米游姬-雪娘',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant7.png'
  },
  {
    id: 10,
    name: '中野五月',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant8.png'
  },
  {
    id: 11,
    name: '公主连结佩可莉姆',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant9.png'
  },
  {
    id: 12,
    name: '圣诞节快乐',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant10.png'
  },
  {
    id: 13,
    name: '中野三玖',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant11.png'
  },
  {
    id: 14,
    name: '中野四叶',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant12.png'
  },
  {
    id: 15,
    name: '绝世秃顶',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant13.png'
  },
  {
    id: 16,
    name: '中野二乃',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant14.png'
  },
  {
    id: 17,
    name: '我是天才',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant15.png'
  },
  {
    id: 18,
    name: '主角标配',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant16.png'
  },
  {
    id: 19,
    name: '夏日救星',
    type: '挂件',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/pendant/pendant18.png'
  },
  {
    id: 20,
    name: '龙女妙变',
    type: '装扮',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/bubble/bubble1.png'
  },
  {
    id: 21,
    name: '帕姆评论装扮',
    type: '装扮',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/bubble/bubble2.png'
  },
  {
    id: 22,
    name: '「 2233幻星集」评论装扮',
    type: '装扮',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/bubble/bubble3.png'
  },
  {
    id: 23,
    name: '装扮小姐姐·樱花物语',
    type: '装扮',
    need_coin: 3000,
    stock: 200,
    img: '/static/image/bubble/bubble4.png'
  },
])
</script>

<style lang="scss" scoped>
.exchange-box {
  width: 100vw;
  height: auto;
  background: #f6f7f9;

  .exchange-box-header {
    position: fixed;
    top: 0;
    width: 100%;
    background: #ffffff;
    padding-bottom: 100px;
    z-index: 1;

    .exchange-box-header-box {
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .exchange-currency-info {
    position: relative;
    top: 50px;
    z-index: 999;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .exchange-currency-info-item {
      display: flex;
      align-items: center;
      background: #f6f7f9;
      height: 50px;
      padding: 10px;
      border-radius: 10px;

      .exchange-currency-info-item-icon {
        width: 40px;
        height: 40px;
      }
    }

    .exchange-currency-info-item:first-child {
      width: 55%;

      .exchange-currency-info-item-value {
        font-size: 24px;
        font-weight: bold;
        color: #fbe945;
        padding-left: 10px;
      }
    }

    .exchange-currency-info-item:last-child {
      width: 40%;
    }
  }

  .exchange-currency-gift-list {
    position: relative;
    width: 90%;
    top: 120px;
    margin: 100px auto;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;


    .exchange-currency-gift-list-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: auto;
      background: #ffffff;
      border-radius: 15px;
      padding-bottom: 10px;
      min-height: 150px;

      .exchange-currency-gift-img {
        width: 100px;
        height: 100px;
        margin: 5% 0 0 13%;
        transform: translateY(-5px);
      }

      .exchange-currency-gift-list-item-title {
        width: 95%;
        margin: 0 auto;
      }

      .exchange-currency-gift-img-zb {
        width: 140px;
        height: 40px;
        margin: 20% 0 5% -10%;
      }

      .exchange-currency-gift-list-item-value {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .main-title {
        color: #fbb11b;
      }

      .f-title {
        color: #858585 !important;
        font-size: 12px;
      }
    }
  }
}
</style>

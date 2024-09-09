<template>
  <div class="pendant-box">
    <div class="pendant-header" :style="{'margin-top': safeAreaInsets.top + 'px'}">
      <uni-icons @click="backOutToPage" type="left" style="font-weight: bold"
                 size="24"></uni-icons>

      <div class="pendant-header-type">
        <div class="pendant-header-type-item"
             v-for="item,index in ['头像挂件','评论装扮']"
             :class="item == SelectPendantType ? 'pendant-header-type-item-select' : ''"
             @click="SelectPendantType = item"
        >
          <div class="pendant-header-type-item-title">
            <span class="pendant-header-type-item-title-text">{{ item }}</span>
          </div>
        </div>
      </div>


    </div>

    <div class="user-avatar-preview" v-if="SelectPendantType == '头像挂件' ">
      <div class="user-avatar-preview-img">
        <image src="@/static/image/my_avatar.jpg" mode="aspectFill" :class="SelectPendantType == '头像挂件' ? 'user-avatar-preview-img' : 'bubble-preview-img' " />
        <image :src="SelectPendant?.img" mode="aspectFill" class="user-avatar-preview-img-pendant" v-if="SelectPendantType == '头像挂件' ? 'pendant-select' : ''"/>
      </div>

      <div class="user-avatar-preview-text">
        <span class="user-avatar-preview-name">{{ SelectPendant?.name ? SelectPendant.name : '无' }}</span>
        <span class="user-avatar-preview-illustrate">{{ SelectPendant?.illustrate ? SelectPendant.illustrate : '快来装扮头像挂件吧' }}</span>
      </div>

      <div class="user-avatar-preview-btn">
        <button class="pendant-save-btn">保存</button>
      </div>
    </div>
    <div class="user-avatar-preview" v-else>
      <div class="bubble-preview-img">
        <image :src="SelectBubble?.img" mode="aspectFill" class="bubble-preview-img" />
      </div>

      <div class="user-avatar-preview-text">
        <span class="user-avatar-preview-name">{{ SelectBubble?.name ? SelectBubble.name : '无' }}</span>
        <span class="user-avatar-preview-illustrate">{{ SelectBubble?.illustrate ? SelectPendant?.illustrate : '快来装扮评论挂件吧' }}</span>
      </div>

      <div class="user-avatar-preview-btn">
        <button class="pendant-save-btn">保存</button>
      </div>
    </div>

    <scroll-view class="pendant-scroll-view"  scroll-y="true" scroll-with-animation="true" v-if="SelectPendantType == '头像挂件' ">
    <div class="pendant-list">
      <div class="pendant-list-item"
           v-for="item,index in PendantList"
           :class="SelectPendantId === item.id ? 'pendant-select' : '' "
           @click="GetSelectPendant(item.id,1)"
      >
        <div class="pendant-list-item-img">
          <image src="@/static/image/avatar.jpg" mode="aspectFill" class="user-avatar-preview-img" />
          <image :src="item.img" mode="aspectFill" class="user-avatar-preview-img-pendant" />
        </div>
        <div class="pendant-list-item-text">
          <span class="pendant-list-item-text-name">{{item.name}}</span>
        </div>
      </div>
    </div>
    </scroll-view>
    <scroll-view class="pendant-scroll-view"  scroll-y="true" scroll-with-animation="true" v-else>
      <div class="bubble-list">
        <div class="bubble-list-item"
             v-for="item,index in BubbleList"
             :class="SelectBubbleId === item.id ? 'pendant-select' : '' "
             @click="GetSelectPendant(item.id)"
        >
          <div class="bubble-list-item-img">
            <image :src="item.img" mode="aspectFill" class="user-avatar-preview-img" />
          </div>
          <div class="bubble-list-item-text">
            <span class="bubble-list-item-text-name">{{item.name}}</span>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script setup lang="ts">

// 获取屏幕边界到安全区域距离
import {ref} from "vue";

const {safeAreaInsets} = uni.getSystemInfoSync()
import {userThemeColorValStore} from "@/stores";

const backOutToPage = () => {
  uni.navigateBack()
}

const SelectPendantId = ref(0)

const SelectBubbleId = ref(0)

const SelectPendant = ref()

const SelectBubble = ref()

const SelectPendantType = ref('头像挂件')

const PendantList = ref([
  {
    id: 1,
    name: '「奇缘趣饰」原神二周年头像挂件',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant1.png'
  },
  {
    id: 2,
    name: '「奇缘趣饰」原神芙宁娜像挂件',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant2.png'
  },
  {
    id: 3,
    name: '是天选之人',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant1.png'
  },
  {
    id: 4,
    name: '圣诞节麋鹿',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant2.png'
  },
  {
    id: 5,
    name: '中野一花',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant3.png'
  },
  {
    id: 6,
    name: '快把我哥带走',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant4.png'
  },
  {
    id: 7,
    name: '发呆鸭',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant17.png'
  },
  {
    id: 8,
    name: '米游姬-天使之翼',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant6.png'
  },
  {
    id: 9,
    name: '米游姬-雪娘',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant7.png'
  },
  {
    id: 10,
    name: '中野五月',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant8.png'
  },
  {
    id: 11,
    name: '公主连结佩可莉姆',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant9.png'
  },
  {
    id: 12,
    name: '圣诞节快乐',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant10.png'
  },
  {
    id: 13,
    name: '中野三玖',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant11.png'
  },
  {
    id: 14,
    name: '中野四叶',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant12.png'
  },
  {
    id: 15,
    name: '绝世秃顶',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant13.png'
  },
  {
    id: 16,
    name: '中野二乃',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant14.png'
  },
  {
    id: 17,
    name: '我是天才',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant15.png'
  },
  {
    id: 18,
    name: '主角标配',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant16.png'
  },
  {
    id: 19,
    name: '夏日救星',
    illustrate:'通过小帆币兑换中心兑换获得',
    img: '/static/image/pendant/pendant18.png'
  },
])

const BubbleList = ref([
    {
      id: 1,
      name: '原神「龙女妙变」',
      illustrate:'通过小帆币兑换中心兑换获得',
      img: '/static/image/bubble/bubble1.png'
    },
    {
      id: 2,
      name: '「帕姆」评论装扮',
      illustrate:'通过小帆币兑换中心兑换获得',
      img: '/static/image/bubble/bubble2.png'
    },
    {
      id: 3,
      name: '「 2233幻星集」评论装扮',
      illustrate:'通过小帆币兑换中心兑换获得',
      img: '/static/image/bubble/bubble3.png'
    },
    {
      id: 4,
      name: '装扮小姐姐·樱花物语',
      illustrate:'通过小帆币兑换中心兑换获得',
      img: '/static/image/bubble/bubble4.png'
    },
])

const GetSelectPendant = (id:number,type:number) => {
  if(type){
    SelectPendantId.value = id
    SelectPendant.value = PendantList.value.find(v => v.id === id)
  }else {
    SelectBubbleId.value = id
    SelectBubble.value = BubbleList.value.find(v => v.id === id)
  }

}

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
</script>

<style scoped lang="scss">
.pendant-select{
  background: v-bind(ThemeUnimportantBgColorVal) !important;
  border: 1px solid v-bind(ThemeMainBgColorVal);
}
.pendant-box{
  width: 100vw;
  height: 100vh;
  background: #f6f7f9;
  .pendant-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;

    .pendant-header-type{
      width: 45%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;

      .pendant-header-type-item-title-text{
        color: #767779;
      }

      .pendant-header-type-item-select{
        font-weight: bold;
        border-bottom: 3px solid v-bind(ThemeMainBgColorVal);
        .pendant-header-type-item-title-text{
          color: #222325;
        }
      }
    }


  }

  .user-avatar-preview {
    margin: 30px auto;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    .user-avatar-preview-img{
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    .bubble-preview-img{
      position: relative;
      width: 80%;
      height: 40px;
      left: 20px;
    }



    .user-avatar-preview-img-pendant {
      width: 150px;
      height: 150px;
      position: absolute;
      left: -25px;
      top: -35px;
    }

    .user-avatar-preview-text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: 20px;

      .user-avatar-preview-illustrate{
        font-size: 14px;
        color: #75767a;
      }
    }

    .user-avatar-preview-btn{
      width: 100%;
      .pendant-save-btn{
        width: 100px;
        float: right;
        background: v-bind(ThemeMainBgColorVal);
        color: #ffffff;
        border-radius: 12px;
      }
    }
  }
  .pendant-scroll-view{
    height: 650px;
    padding-bottom: 100px;
  }

  .pendant-list{
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 20px;
    background: #ffffff;
    border-radius: 15px 15px 0 0;

    .pendant-list-item{
      position: relative;
      width: 100px;
      height: 100px;
      //background: #eaf7ff;
      background: #f5f5f5;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      .pendant-list-item-text{
        position: absolute;
        bottom: -25%;
        width: 120px;

        .pendant-list-item-text-name{
            width: 130px;
            height: 20px;
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
        }
      }


      .pendant-list-item-img{
        width: 80%;
        height: 80%;
        .user-avatar-preview-img{
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
        .user-avatar-preview-img-pendant{
          position: relative;
          left: -15%;
          top: -130%;
          width: 130%;
          height: 130%;
          border-radius: 100%;
        }
      }
    }
  }

  .bubble-list{
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 20px;
    background: #ffffff;
    border-radius: 15px 15px 0 0;

    .bubble-list-item{
      position: relative;
      width: 100px;
      height: 50px;
      //background: #eaf7ff;
      background: #f5f5f5;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      .bubble-list-item-text{
        position: absolute;
        bottom: -60%;
        width: 120px;

        .bubble-list-item-text-name{
          width: 130px;
          height: 20px;
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          text-align: center;
        }
      }


      .bubble-list-item-img{
        width: 80%;
        height: 80%;
        .user-avatar-preview-img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

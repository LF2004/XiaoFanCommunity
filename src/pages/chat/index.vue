<template>
  <FanHeader :title="uid" :icon="['&#xe602;']" :iconSize="30"/>
  <div class="chat-container">
    <div class="user-send-message" :class="item.uid === myUid ? 'user-send-my-message' : 'user-send-message' " v-for="item,itemIndex in UserMsgList">
      <div class="send-time">{{ item.sendTime }}</div>
      <div class="user-send-content">
        <div class="user-avatar">
          <image src="@/static/image/avatar.jpg" class="avatar"/>
        </div>
        <div class="user-msg" v-if="item.type === 0">{{ item.content }}</div>
        <div class="user-msg" v-else><image :src="item.content" style="width: 200px;height: 200px"/></div>
      </div>
    </div>
  </div>

  <div class="send-message">
    <div class="user-send-cz">
      <span class="iconfont" style="font-size: 34px">&#xe651;</span>
            <div class="send-input">
              <textarea placeholder="发个消息聊聊呗~" auto-height maxlength="1024" class="send-msg-inp" v-model="SendMsgVal"/>
              <span class="iconfont icon-bq" style="font-size: 24px;color: #acadaf" >&#xe644;</span>
            </div>
      <button class="send-msg-btn" :style="{'background':SendMsgVal.length > 0 ? ThemeMainBgColorVal : 'none','color':SendMsgVal.length > 0 ? '#ffffff' : '#acadaf'}" @click="sendMsg">发送</button>
    </div>
  </div>
</template>
<script setup lang="ts">
// 获取页面参数
import {ref,onMounted} from "vue";
import {userThemeColorValStore} from "@/stores";

const userThemeColorVal = userThemeColorValStore()

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];

const query = defineProps<{
  id: string
}>()
const uid = ref(query.id)

const myUid = ref(2)


const SendMsgVal = ref('')

const UserMsgList = ref([
  {
    uid: 1,
    content: '大一',
    avatar: '/static/image/avatar.jpg',
    type: 0,
    sendTime: '2023-3-2 23:50'
  },
  {
    uid: 1,
    content: '大佬😢',
    avatar: '/static/image/avatar.jpg',
    type: 0,
    sendTime: '2023-3-2 23:50'
  },
  {
    uid: 1,
    content: '/static/image/start_bg/start1.png',
    avatar: 'https://img2.imgtp.com/2024/03/07/2J5sHuCp.jpg',
    type: 1,
    sendTime: '2023-3-2 23:50'
  },
  {
    uid: 2,
    content: '仁坤',
    avatar: '/static/image/my_avatar.jpg',
    type: 0,
    sendTime: '2023-3-2 23:55'
  },
  {
    uid: 1,
    content: '[自动回复]我们已互相关注，开始聊天吧~',
    avatar: '/static/image/avatar.jpg',
    type: 0,
    sendTime: '2024-8-29 13:50'
  },
])

const sendMsg = () => {
  let sendItemMsg = {
    uid: myUid.value,
    content: SendMsgVal.value,
    avatar: '/static/image/my_avatar.jpg',
    type: 0,
    sendTime: Date().split(" ")[4]
  }
  UserMsgList.value.push(sendItemMsg)
  SendMsgVal.value = ''
  // 发送完消息自动滚动到底部
  setTimeout(() => {
    uni.pageScrollTo({
      scrollTop: 100000,
      duration: 200
    });
  },100)

}

</script>


<style lang="scss" scoped>
.chat-container {
  width: 100vw;
  height: auto;
  margin-top: 50px;
  padding-bottom: 80px;
  background: #f2f3f5;

  .user-send-message {
    width: 100%;
    margin: 0 auto;

    .send-time {
      text-align: center;
      color: #acadaf;
      padding: 10px;
      font-size: 12px;
    }

    .user-send-content {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      padding: 20px;

      .avatar {
        width: 45px;
        height: 45px;
        margin-right: 25px;
        border-radius: 100%;
      }

      .user-msg {
        background: #ffffff;
        padding: 10px;
        font-size: 14px;
        border-radius: 0 25px 25px 15px;
        box-shadow: 2px 5px 5px v-bind(ThemeUnimportantBgColorVal);
      }
    }

  }

  .user-send-my-message{
    width: 100%;
    margin: 0 auto;
    .send-time {
      text-align: center;
      color: #acadaf;
      padding: 10px;
      font-size: 12px;
    }
    .user-send-content{
      width: 100%;
      display: flex;
      padding: 20px;
      flex-direction: row-reverse;
      align-items: center;

      .avatar {
        width: 45px;
        height: 45px;
        margin-left: 25px;
        border-radius: 100%;
      }

      .user-msg {
        background: #ffffff;
        padding: 10px;
        font-size: 14px;
        border-radius: 25px 5px 15px 25px;
        background: v-bind(ThemeUnimportantBgColorVal);
        color: v-bind(ThemeMainBgColorVal);
        box-shadow: 2px 5px 5px v-bind(ThemeMainBgColorVal);
      }
    }
  }
}

.send-message{
  position: fixed;
  bottom: 0;
  background: #ffffff;
  width: 100%;

  .user-send-cz{
    width: 95%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .send-input{
      position: relative;
      display: flex;
      align-items: center;
      .send-msg-inp{
        max-width: 240px;
        min-height: 20px;
        background: #f2f3f5;
        height: auto;
        padding: 10px;
        margin-left: 10px;
        border-radius: 25px;
      }

      .icon-bq{
        position: absolute;
        right: 3%;
      }
    }
  }

  .send-msg-btn{
    background: #f2f3f5;
    border: none;
    border-radius: 15px;
    color: #acadaf;
  }
}

</style>

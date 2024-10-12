<template>
  <div class="edit-save-box" v-if="query.type == 1">
    <div class="edit-save-box-header">
      <div>
        <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#666666" size="24"></uni-icons>
      </div>
      <div class="edit-save-box-header-title">
        <text class="edit-save-box-header-title-text">昵称</text>
      </div>
      <div class="header-save">

        <button :class="!UserInpNickNameVal.length >= 1 ? 'header-save-btn-disabled' : 'header-save-btn' " :disabled="UserInpNickNameVal.length >= 1">保存
        </button>
      </div>
    </div>

    <div class="name-deit-box">
      <input type="text" v-model="UserInpNickNameVal" placeholder="开始取一个有趣的名字吧~" maxlength="20" class="name-inp"/>
      <uni-icons type="clear" size="24" color="#c1c4cb"></uni-icons>
      <text style="color: #c1c4cb">{{UserInpNickNameVal.length}}/20</text>
    </div>

    <div class="name-deit-inform">
      <uni-icons type="info-filled" size="24" color="#c3c3c9" class="inform-icon"></uni-icons>
      <text class="name-deit-inform-title">修改昵称需要消耗100米游币，30天内允许修改3次</text>
    </div>
  </div>

  <div class="edit-save-box" v-else>
    <div class="edit-save-box-header">
      <div>
        <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#666666" size="24"></uni-icons>
      </div>
      <div class="edit-save-box-header-title">
        <text class="edit-save-box-header-title-text">个性签名</text>
      </div>
      <div class="header-save">

        <button :class="!UserInpSignVal.length >= 1 ? 'header-save-btn-disabled' : 'header-save-btn' " :disabled="UserInpSignVal.length >= 1">保存
        </button>
      </div>
    </div>

    <div class="personality-sign-box">
      <textarea type="text" v-model="UserInpSignVal" placeholder="来介绍一下你自己吧~" maxlength="48" class="personality-sign-inp"/>
      <text class="personality-sign-inp-val">{{UserInpSignVal.length}}/48</text>
    </div>

    <div class="name-deit-inform">
      <uni-icons type="info-filled" size="24" color="#c3c3c9" class="inform-icon"></uni-icons>
      <text class="name-deit-inform-title">每7天可以修改一次签名</text>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {userThemeColorValStore} from "@/stores";

const userThemeColorVal = userThemeColorValStore()

const query = defineProps<{
  type: string
}>()

const UserInpNickNameVal = ref('')

const UserInpSignVal = ref('')

const backOutToPage = () => {
  uni.navigateBack()
}

const isSaveStatus = ref(false)

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const unimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
</script>

<style lang="scss" scoped>
.edit-save-box {
  width: 100vw;
  height: 100vh;
  background: #ffffff;

  .edit-save-box-header {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .edit-save-box-header-title-text {
      font-size: 18px;
    }

    .header-save {
      text-align: center;
      padding: 10px;

      .header-save-btn {
        width: 100%;
        height: 40px;
        background: v-bind(ThemeMainBgColorVal);
        color: #ffffff;
        border-radius: 5px;
      }

      .header-save-btn-disabled {
        color: #ffffff !important;
        height: 40px;
        background: v-bind(unimportantBgColorVal) !important;
      }
    }
  }

  .name-deit-box{
    width: 95%;
    height: 40px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f7f9;
    border-radius: 10px;
    padding-right: 20px;
    .name-inp{
      width: 250px;
      padding-left: 20px;
      font-size: 14px;
    }
  }

  .name-deit-inform{
    width: 95%;
    margin: -15px auto;
    color: #9794a7;
    display: flex;
    align-items: center;
    .inform-icon{
      padding-right: 5px;
    }
    .name-deit-inform-title{
      font-size: 14px;
    }
  }

  .personality-sign-box{
    position: relative;
    width: 95%;
    margin: 20px auto;
    display: flex;
    max-height: 130px;
    align-items: center;
    justify-content: space-between;
    background: #f6f7f9;
    border-radius: 10px;
    padding: 10px;
    .personality-sign-inp{
      width: 100%;
      padding-top: 20px;
    }
    .personality-sign-inp-val{
      position: absolute;
      bottom: 10%;
      right: 5%;
      color: #c1c4cb;
    }
  }
}
</style>

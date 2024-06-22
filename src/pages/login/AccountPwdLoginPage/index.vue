<template>
  <div class="phone-login-container">
    <div class="phone-login-container-title">
      <h2 class="phone-login-container-title-significant">账号登录</h2>
      <h4 class="phone-login-container-title-subtitle">手机号号注册的用户账号默认是手机号</h4>
    </div>

    <div class="login-form">
      <div class="login-form-inp phone">
        <h4>账号</h4>
        <input class="inp" type="text" placeholder="请输入账号" />
      </div>
      <div class="login-form-inp yzm">
        <h4>密码</h4>
        <input class="inp" type="text" placeholder="请输入验密码" />
      </div>


      <div class="login-operate">
        <button class="btn login-btn">立即登录</button>
        <button class="btn register-btn">注册账号</button>
        <div class="user-agreement-div">
          <checkbox :color="CheckboxBgColor" :checked="isAgreeUserAgreement" />
          <span class="user-agreement">我已阅读并同意</span>
          <span class="user-agreement title">《用户服务协议》</span>
        </div>
      </div>

      <div class="other-login">
        <h4 class="other-login-title">其它登录方式</h4>

        <div class="other-login-btn-style">
          <div class="other-login-btn" @click="userLoginMannerStatusStore.setLoginManner(0)"><uni-icons type="locked-filled" size="24"></uni-icons>手机号登录</div>
          <div class="other-login-btn"><span class="iconfont" style="color:#06b4fd;font-size: 28px;margin-left: -2px">&#xe607;</span></div>
          <div class="other-login-btn" @click="userLoginMannerStatusStore.setLoginManner(2)"><span class="iconfont" style="color:#f8be32;font-size: 28px;margin-left: -2px">&#xe85a;</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// document.documentElement.style.setProperty('--xiaofan-bg-main-color', '#e64340');

import { userLoginMannerStatus } from "@/stores"

import {ref} from "vue"
import {onShow} from "@dcloudio/uni-app";
const userLoginMannerStatusStore = userLoginMannerStatus()


const CheckboxBgColor = ref('')

const isAgreeUserAgreement = ref(false)

const sendCodeCountdown = ref(10)

const isDisabledCodeCountdown = ref(false)

const sendCode = () => {
  uni.showToast({
    title: '验证码已发送',
    icon: 'none',
    duration: 2000
  })
  isDisabledCodeCountdown.value = true
  setInterval(() => {
    if(sendCodeCountdown.value > 0){
      sendCodeCountdown.value--
    }else{
      sendCodeCountdown.value = 10
      isDisabledCodeCountdown.value = false
    }
  },1000)
}

onShow(() => {
  const rootStyle = getComputedStyle(document.documentElement);

  const mainColor = rootStyle.getPropertyValue('--xiaofan-bg-main-color');

  CheckboxBgColor.value = mainColor;
})
</script>

<style lang="scss" scoped>

.btnDisabled{
  border: 1px solid var(--xiaofan-bg-unimportant-color-text)!important;
  color: var(--xiaofan-bg-unimportant-color-text)!important;
}

.phone-login-container{
  width: 80%;
  height: 80%;
  margin: 0 auto;
  transform: translateY(10%);

  .phone-login-container-title{
    .phone-login-container-title-significant{
      font-size: 1.5rem;
    }
    .phone-login-container-title-subtitle{
      font-size: 0.8rem;
      color: #c2c1c1;
    }
  }

  .login-form{
    width: 100%;
    margin: 20% auto;

    .login-form-inp{
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid var(--xiaofan-bg-unimportant-color-text);
      .inp{
        width: 40%;
        transform: translateX(40%);
        color: var(--xiaofan-bg-unimportant-color-text);
      }
      .getCode-btn{
        background: none;
        border-radius: 25px;
        font-size: .7rem;
        margin-left: 12%;
        color: var(--xiaofan-bg-main-color-text);
        border: 2px solid var(--xiaofan-bg-main-color);
      }
    }
  }

  .no-shou-yzm{
    text-align: right;
    font-size: .8rem;
    padding-top: .5rem;
    color: var(--xiaofan-remind-color-text);
  }

  .login-operate{
    .btn{
      margin-top: 1rem;
      border-radius: 25px;
      border: none;
    }
    .login-btn{
      background: var(--xiaofan-bg-main-color);
      color: var(--xiaofan-bg-default-color-text);
    }
    .register-btn{
      background: none;
      color: var(--xiaofan-bg-main-color);
      border: 2px solid var(--xiaofan-bg-main-color);
    }

    .user-agreement-div{
      width: 90%;
      margin: 5% auto;
      .user-agreement{
        color: var(--xiaofan-remind-color-text);
      }
      .title{
        color: var(--xiaofan-bg-main-color-text);
      }
    }
  }

  .other-login{
    width: 100%;
    margin: 20% auto;
    height: auto;
    .other-login-title{
      position: relative;
      text-align: center;
      font-size: .8rem;
      z-index: 99;
    }
    .other-login-title::before{
      z-index: -1;
      position: absolute;
      left: -5%;
      top: 40%;
      content: '';
      display: block;
      width: 40%;
      height: 1px;
      background: var(--xiaofan-bg-unimportant-color-text);
    }
    .other-login-title::after{
      z-index: -1;
      position: absolute;
      top: 40%;
      right: -5%;
      content: '';
      display: block;
      width: 40%;
      height: 1px;
      background: var(--xiaofan-bg-unimportant-color-text);
    }
    .other-login-btn-style{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 10%;
      .other-login-btn:first-child{
        width: 120px;
        text-align: center;
        border-radius: 25px;
      }
      .other-login-btn{
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 100%;
        border: 1px solid var(--xiaofan-remind-color-text);
      }
    }
  }
}
</style>

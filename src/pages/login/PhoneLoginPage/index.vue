<template>
  <div class="phone-login-container">
    <div class="phone-login-container-title">
      <h2 class="phone-login-container-title-significant">手机号登录</h2>
      <h4 class="phone-login-container-title-subtitle">未注册的手机号验证请先注册账号</h4>
    </div>
    {{ userInfo }}
    <div class="login-form">
      <div class="login-form-inp phone">
        <h4>手机号</h4>
        <input class="inp" type="text" placeholder="请输入手机号"/>
      </div>
      <div class="login-form-inp yzm">
        <h4>验证码</h4>
        <input class="inp" type="text" placeholder="请输入验证码"/>
        <button class="getCode-btn" @click="sendCode" :disabled="isDisabledCodeCountdown"
                :class="isDisabledCodeCountdown ? 'btnDisabled' : 'getCode-btn' ">
          {{ isDisabledCodeCountdown ? `重新获取(${sendCodeCountdown})` : '获取验证码' }}
        </button>
      </div>

      <h4 class="no-shou-yzm">收不到验证码?</h4>

      <div class="login-operate">
        <button class="btn login-btn" @click="login">立即登录</button>
        <button class="btn register-btn">注册账号</button>
        <div class="user-agreement-div">
          <checkbox :color="CheckboxBgColor" :checked="isAgreeUserAgreement"/>
          <span class="user-agreement">我已阅读并同意</span>
          <span class="user-agreement title">《用户服务协议》</span>
        </div>
      </div>

      <div class="other-login">
        <h4 class="other-login-title">其它登录方式</h4>

        <div class="other-login-btn-style">
          <div class="other-login-btn" @click="userLoginMannerStatusStore.setLoginManner(1)">
            <uni-icons type="locked-filled" size="24"></uni-icons>
            密码登录
          </div>
          <div class="other-login-btn" @click="zfbLogin"><span class="iconfont"
                                                               style="color:#06b4fd;font-size: 28px;margin-left: -2px">&#xe607;</span>
          </div>
          <div class="other-login-btn" @click="userLoginMannerStatusStore.setLoginManner(2)"><span
              class="iconfont" style="color:#f8be32;font-size: 28px;margin-left: -2px">&#xe85a;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="quitLogin">退出登录</button>
</template>

<script lang="ts" setup>
import {userMannerInfoStore, userLoginMannerStatus, userThemeColorValStore} from "@/stores"

import {useRouter} from 'vue-router';

import {ref} from "vue"

import {onShow} from "@dcloudio/uni-app";

import {alipayLogin} from "@/api/alipay_login"

const router = useRouter();

const userInfoMannerStatusStore = userMannerInfoStore()
const userLoginMannerStatusStore = userLoginMannerStatus()
const userThemeColorVal = userThemeColorValStore()

const userInfo = ref()

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
    if (sendCodeCountdown.value > 0) {
      sendCodeCountdown.value--
    } else {
      sendCodeCountdown.value = 10
      isDisabledCodeCountdown.value = false
    }
  }, 1000)
}

const PwdLogin = () => {
  uni.setStorageSync('loginType', 1)
}

const quitLogin = () => {
  userInfoMannerStatusStore.clearUserInfoManner()
}


const zfbLogin = () => {
  let guid = ''
  for (let i = 1; i <= 32; i++) {
    const n = Math.floor(Math.random() * 16.0).toString(16)
    guid += n
  }

  uni.setStorageSync('guid', guid)

  let storage_guid = uni.getStorageSync('guid')
  uni.request({
    method: 'POST',
    url: 'http://192.168.31.219:9000/api/Alipay/saveToken',
    data: {
      aplipay_auth_code: storage_guid
    },
    success: (res: any) => {
      console.log(res.data)
    }
  })


  // let url = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021003191605675&scope=auth_user&redirect_uri=http://172.20.10.2:5173/pages/alipayLogin/index?alipay_code=${storage_guid}&state=init`
  // let scheme = `alipays://platformapi/startapp?appId=20000067&url=${encodeURIComponent(url)}`
  // // 判断用户是否为电脑端
  // let platform = uni.getSystemInfoSync().platform;//获取平台判断
  // if (platform == 'android') {
  //   plus.runtime.openURL(scheme)
  // } else if (platform == 'ios') {
  //   plus.runtime.launchApplication({
  //     action: scheme
  //   })
  // }

  let backUrl = `http://192.168.31.219:5173/pages/alipayLogin/index?alipay_code=${storage_guid}`;
  let aplipayAuthUrl = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm';//授权地址，可前端写死，也可后端返回
  let appid = '2021003191605675'; //商户的APPID
  let url = aplipayAuthUrl + '?app_id=' + appid + '&scope=auth_user&redirect_uri=' + backUrl
  url=encodeURIComponent(url);

  plus.runtime.openURL(
      'alipays://platformapi/startapp?appId=20000067&url=' + url, //这里的appId=20000067是固定的，不需要改
      res => {
        //这里写打开URL地址失败后的处理
        uni.showModal({
          content: '本机未检测到对应客户端，是否打开浏览器访问页面？',
          success: function (res) {
            if (res.confirm) {
              //plus.runtime.openURL();
            }
          }
        });
      },
      'com.eg.android.AlipayGphone'
  );

  getAlipayLoginState();
}

const intervalId = ref()

const getAlipayLoginState = () => {
  const alipay_code = uni.getStorageSync('guid');

  // 调用setInterval并保存返回的定时器ID
  intervalId.value = setInterval(async () => {
    const res: any = await alipayLogin(alipay_code);
    if (res.code === 200) {
      await clearInterval(intervalId.value);
      uni.showToast({
        title: '登录成功',
        icon: 'none',
        duration: 2000
      });

      await userInfoMannerStatusStore.setUserInfoManner(res)
      if(res.code === 200) {
        uni.redirectTo({
          url: '/pages/index/index',
        })
      }
    }
    if (res.code === 202) {
      uni.showToast({
        title: res.msg,
        icon: 'error',
        duration: 2000
      });
      await clearInterval(intervalId.value);
    }
  }, 1000);
}


const login = () => {
  uni.showToast({
    title: '登录成功',
    icon: 'none',
    duration: 2000
  })

  uni.setStorageSync('selectPageIndex', 0)
  uni.redirectTo({
    url: '/pages/index/index',
  })
}

const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];
const unimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];


CheckboxBgColor.value = ThemeMainBgColorVal;

onShow(() => {
})
</script>

<style lang="scss" scoped>

::v-deep.uni-checkbox-input{
  border: 1px solid v-bind(ThemeMainBgColorVal) !important;
  border-radius: 25px!important;
}
.btnDisabled {
  border: 1px solid v-bind(ThemeUnimportantBgColorVal) !important;
  color: v-bind(ThemeUnimportantBgColorVal) !important;
}

.phone-login-container {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  transform: translateY(10%);

  .phone-login-container-title {
    .phone-login-container-title-significant {
      font-size: 1.5rem;
    }

    .phone-login-container-title-subtitle {
      font-size: 0.8rem;
      color: #c2c1c1;
    }
  }

  .login-form {
    width: 100%;
    margin: 20% auto;

    .login-form-inp {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid var(--xiaofan-bg-unimportant-color-text);

      .inp {
        width: 40%;
        transform: translateX(40%);
        color: var(--xiaofan-bg-unimportant-color-text);
      }

      .getCode-btn {
        background: none;
        border-radius: 25px;
        font-size: .7rem;
        margin-left: 12%;
        color: v-bind(ThemeMainTextColorVal);
        border: 2px solid v-bind(ThemeMainBgColorVal);
      }
    }
  }

  .no-shou-yzm {
    text-align: right;
    font-size: .8rem;
    padding-top: .5rem;
    color: var(--xiaofan-remind-color-text);
  }

  .login-operate {
    .btn {
      margin-top: .5rem;
      border-radius: 25px;
      border: none;
    }

    .login-btn {
      background: v-bind(ThemeMainBgColorVal);
      color: #ffffff;
    }

    .register-btn {
      background: none;
      color: v-bind(ThemeMainBgColorVal);
      border: 2px solid v-bind(ThemeMainBgColorVal);
    }

    .user-agreement-div {
      width: 90%;
      margin: 5% auto;

      .user-agreement {
        color: var(--xiaofan-remind-color-text);
      }

      .title {
        color: v-bind(ThemeMainTextColorVal);
      }
    }
  }

  .other-login {
    width: 100%;
    margin: 20% auto;
    height: auto;

    .other-login-title {
      position: relative;
      text-align: center;
      font-size: .8rem;
      z-index: 99;
    }

    .other-login-title::before {
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

    .other-login-title::after {
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

    .other-login-btn-style {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 10%;

      .other-login-btn:first-child {
        width: 120px;
        text-align: center;
        border-radius: 25px;
      }

      .other-login-btn {
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

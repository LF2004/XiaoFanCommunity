<template>
  <div class="login-container">
    <PhoneLoginPage  v-if="userLoginMannerStatusStore?.LoginManner == 0"/>
    <AccountPwdLoginPage v-if="userLoginMannerStatusStore?.LoginManner == 1"/>
    <EmailLoginPage v-if="userLoginMannerStatusStore?.LoginManner == 2"/>
  </div>
</template>

<script setup lang="ts">
import PhoneLoginPage from "@/pages/login/PhoneLoginPage/index.vue"

import AccountPwdLoginPage from "@/pages/login/AccountPwdLoginPage/index.vue"

import EmailLoginPage from "@/pages/login/EmailLoginPage/index.vue"


import { userLoginMannerStatus } from "@/stores"
import {ref} from "vue";

const userLoginMannerStatusStore = userLoginMannerStatus()

// 设置默认登录方式
const loginType = ref(0)

const getLoginType = (type:number) => {
  loginType.value = type
}
</script>

<style lang="scss" scoped>
.login-container{
  width: 100vw;
  height: 100vh;
}
</style>

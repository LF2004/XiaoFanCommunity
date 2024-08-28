<template>
  <image :src="imgBgSrc" class="bg" :class="openMoveStatus ? 'openMove' : 'bg' " />
</template>

<script setup lang="ts">
import { ref } from "vue";

// 判断是否是早中晚
const imgBgSrc = ref('')
const hour = new Date().getHours()
if(hour >= 6 && hour < 12){
  imgBgSrc.value = '/static/image/start_bg/start1.png'
}else if(hour >= 12 && hour < 18){
  imgBgSrc.value = '/static/image/start_bg/start2.png'
}else{
  imgBgSrc.value = '/static/image/start_bg/start3.png'
}

const openMoveStatus = ref(false)

setTimeout(() =>{
  openMoveStatus.value = true
},2500)

setTimeout(() =>{
  uni.setStorageSync('selectPageIndex', 0)
  uni.reLaunch({
    url: '/pages/index/index'
  })
},3000)
</script>

<style scoped lang="scss">
.bg{
  width: 100vw;
  height: 100vh;
  transition: .3s;
}
.openMove{
  opacity: 0;
}
</style>

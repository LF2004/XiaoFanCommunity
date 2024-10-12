<template xmlns="http://www.w3.org/1999/html">
  <div class="publish-container">
    <div class="publish-container-header" :style="{'margin-top': safeAreaInsets.top  + 'px'}">
      <div class="publish-container-header-box">
        <div class="publish-container-header-left"><span class="iconfont" style="font-size: 34px"
                                                         @click="back">&#xe60c;</span></div>
        <div class="publish-container-header-right">
          <text class="title">草稿箱</text>
          <button class="publish-btn">发布</button>
        </div>
      </div>
    </div>

    <div class="publish-container-edit">
      <div class="publish-container-edit-title">
        <input type="text" placeholder="标题 (必填)" class="publish-container-edit-title-inp" maxlength="30"
               v-model="EditFormParams.title"
               @blur="isAddBorder = false"
               @focus="isAddBorder = true"
        />
        <div class="addBorderStyle" :style="{'width': isAddBorder ? '100%' : '0%'}"></div>
        <text class="word-count">{{ EditFormParams.title.length }}/30</text>
      </div>
      <div class="publish-container-edit-body">
        <FanEditor ref="EditorComponentRef"
                   class="publish-container-edit-body-inp"
                   placeholder="请尽情发挥吧..."
        />
        <div class="preview-btn">
          <button class="preview" :disabled="useEditorStore.editor.length === 0 || EditFormParams.title.length === 0" @click="preview">预览</button>
          <text class="word-count">{{ useEditorStore.editor.length }}/{{ EditFormParams.wordCountSize }}</text>
        </div>
      </div>
    </div>

    <div class="publish-container-type-select">
      <div class="publish-container-type-select-type-box">
        <div class="publish-container-type-select-type-box-title">
          <text>参与话题</text>
          <span class="iconfont" style="font-size: 12px">&#xe627;</span>
        </div>
        <scroll-view class="scroll-view" scroll-x="true" scroll-with-animation="true">
          <div class="publish-personality-tags" v-if="true">
            <ul class="publish-personality-tags-list">
              <li class="publish-personality-tags-list-item" style="background: #f0f1f3;color: #86878b"
                  v-for="item in 10">二刺螈
              </li>
            </ul>
          </div>
          <div class="publish-personality-tags" v-else>
            <ul class="publish-personality-tags-list">
              <li class="publish-personality-tags-list-item" v-for="item in 10">二刺螈</li>
            </ul>
          </div>
        </scroll-view>
      </div>
    </div>

    <div class="publish-container-edit-style-change">
      <div class="publish-container-edit-style-change-item" @click="UploadImg">
        <span class="iconfont">&#xe651;</span>
      </div>
      <div class="publish-container-edit-style-change-item">
        <span class="iconfont">&#xe603;</span>
      </div>
      <div class="publish-container-edit-style-change-item" @click="PreviewAt">
        <span class="iconfont">&#xe6e3;</span>
      </div>
      <div class="publish-container-edit-style-change-item" @click="PreviewFontColorSelect">
        <span class="iconfont">&#xe8e2;</span>
      </div>
    </div>

    <FanPopup ref="PreviewAtRef" title="选择你想@的人" :isTitleCenter="true">
      <div class="Preview-at-container">
        <div class="Preview-at-container-header">
          <uni-search-bar @confirm="search" :focus="true" v-model="EditFormParams.SearchUserName" @blur="blur" @focus="focus" @input="input"
                          @cancel="cancel" cancelButton="none" placeholder="搜索用户">
          </uni-search-bar>
        </div>
        <scroll-view class="scroll-view" scroll-y="true" scroll-with-animation="true">
          <div class="Preview-at-container-user-list">
            <div class="Preview-at-container-user-list-item" v-for="item in AtUserList" @click="SelectAtUser(item)">
              <div class="Preview-at-container-user-list-item-avatar">
                <image :src="item.avatar" class="avatar-img"/>
              </div>
              <div class="Preview-at-container-user-list-item-info">
                <text>{{ item.name }}</text>
              </div>
            </div>
          </div>
        </scroll-view>
      </div>
    </FanPopup>

    <FanPopup ref="FontColorSelectRef" title="文字颜色" :isTitleCenter="true">
      <div class="font-color-select-container">
        <div class="font-color-select-container-item"
             v-for="(item, index) in EditFormParams.SelectTextColor"
             :style="{ 'background': item}" @click="EditFormParams.SeleteTextColorVal = item,ChangeTextColor()"
        ><div class="font-color-select-container-item-selected" :style="{ 'border': item === EditFormParams.SeleteTextColorVal ? `1px solid ${EditFormParams.SeleteTextColorVal }` : ''}"></div></div>
      </div>
    </FanPopup>
  </div>

</template>

<script setup lang="ts">


import {onMounted, reactive, ref, watch, watchEffect} from "vue";

import {userThemeColorValStore,EditortorStore} from "@/stores";

const useEditorStore = EditortorStore()





import type FanPopup from "@/components/FanPopup.vue";
import type FanEditor from "@/components/FanEditor.vue";

const popup = ref<InstanceType<typeof FanPopup>>()

// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()

const userThemeColorVal = userThemeColorValStore()

const EditFormParams = reactive({
  title: '',
  ShowContent: '',
  wordCountSize: 5000,
  SearchUserName: '',
  InputTextValLength: 0,
  SelectTextColor: ['#000000','#06c431','#33f6b4','#ef0682','#ef2424','#ef2497'],
  SeleteTextColorVal: '#000000',
})

const isAddBorder = ref(false)

const delCleanString = (str: string) => {
  // 去除 HTML 标签
  str = str.replace(/<[^>]*>/g, '');


  return str.length;
}

const back = () => {
  uni.navigateBack()
}

const preview = () => {
  uni.setStorageSync('preview-postdetails', {
    title: EditFormParams.title,
    // content: state.editor.getHTML(),
    selectTabName: '原神纳塔',
  })
  uni.navigateTo({
    url: '/pages/preview/index'
  })
}

const AtUserList = ref([
  {
    uid:1,
    name: '小帆',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.qdjInXk8yLx80vZ1jKV4LwAAAA?rs=1&pid=ImgDetMain'
  },
  {
    uid:2,
    name: '测试',
    avatar: 'https://pic2.zhimg.com/50/v2-8cba332bc211fdcf4ffc37fca5de2122_hd.jpg?source=1940ef5c'
  },
  {
    uid:3,
    name: '我是神里凌华的狗',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.RflybHV9HB56n-caXTlpngHaHa?rs=1&pid=ImgDetMain'
  },
])

const PreviewAtRef = ref<InstanceType<typeof FanPopup>>()

const FontColorSelectRef = ref<InstanceType<typeof FanPopup>>()



const isShowPlaceholder = ref(true);



const PreviewAt = () => {
  PreviewAtRef.value.open()
}

const PreviewFontColorSelect = () => {
  FontColorSelectRef.value.open()
}

const EditorComponentRef = ref<InstanceType<typeof FanEditor>>()


const SelectAtUser = (user: any) =>{
  EditorComponentRef.value.insertText(user.name);
  PreviewAtRef.value.close()
}

const ChangeTextColor = () =>{
  EditorComponentRef.value.SetiUpTextColor(EditFormParams.SeleteTextColorVal)
  FontColorSelectRef.value.close()
}

const UploadImg = () => {
  EditorComponentRef.value.insertImg()
}






const ThemeMainBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color'];
const ThemeUnimportantBgColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-unimportant-color'];
const ThemeMainTextColorVal = userThemeColorVal.themeColorVal['--xiaofan-bg-main-color-text'];


</script>

<style scoped lang="scss">

.ql-editor.ql-blank::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-family: normal !important;
  pointer-events: none;
  position: absolute;
}
.preview{
  position: absolute;
  right: 26%;
  bottom: 19.5%;
  background: v-bind(ThemeMainBgColorVal);
  color: #ffffff;
  width: 60px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  margin-right: 10px;
}

.preview-body{
  position: absolute;
  top: 0;
}
.preview-btn{
  position: relative;
  right: -5%;
  transform: translateY(40px);

}

.font-color-select-container{
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
  margin-top: 20px;
  .font-color-select-container-item{
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  .font-color-select-container-item-selected{
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    z-index: -1;
    top: -16%;
    left: -16%;
    //border: 1px solid #007aff;
    background: #ffffff;
  }
}

.addBorderStyle {
  position: absolute;
  bottom: 0;
  width: 0%;
  height: 1px;
  background: v-bind(ThemeMainBgColorVal);
  transition: .3s;
}

.focused {
  border-color: #0f7fec;
  box-shadow: 0 0 5px rgba(15, 127, 236, 0.5);
}
.publish-container {
  width: 100vw;
  height: auto;

  .publish-container-header {
    width: 100%;
    height: 50px;
    background: #f8f8f8;
    border-bottom: 2px solid #f0f0f0;

    .publish-container-header-box {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .publish-container-header-right {
        display: flex;
        align-items: center;

        .title {
          padding-right: 15px;
          color: #8b8b8b;
        }

        .publish-btn {
          width: 70px;
          height: 30px;
          font-size: 14px;
          color: #8b8b8b;
          line-height: 30px;
          border: 1px solid #c4c4c4;
        }
      }
    }
  }

  .publish-container-edit {
    width: 100vw;
    height: auto;
    margin: 30px auto;

    .publish-container-edit-title {
      position: relative;
      display: flex;
      width: 95%;
      margin: 0 auto;
      padding-bottom: 10px;
      border-bottom: 1px solid #f0f0f0;

      .publish-container-edit-title-inp {
        width: 90%;
        margin: 0 auto;
        font-size: 20px;
        caret-color: v-bind(ThemeMainBgColorVal);
      }

      .word-count {
        transform: translateX(-10px);
        color: #8b8b8b;
      }
    }

    .publish-container-edit-body {
      position: relative;
      width: 95%;
      padding-right: 20px;
      margin: 20px auto;

      .publish-container-edit-body-inp {
        position: relative;
        width: 100%;
        height: auto;
        min-height: 500px;
      }

      .word-count {
        position: absolute;
        bottom: 20%;
        right: 6%;
        color: #8b8b8b;
      }
    }
  }

  .publish-container-type-select {
    position: relative;
    bottom: -50px;
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;

    .publish-container-type-select-type-box {
      display: flex;

      .publish-container-type-select-type-box-title {
        width: 120px;
      }

      .publish-personality-tags {
        width: 100%;
        margin: 0 auto;


        .publish-personality-tags-list {
          position: absolute;
          display: flex;
          width: 600px;
          height: auto;


          .publish-personality-tags-list-item {
            width: auto;
            background: v-bind(ThemeUnimportantBgColorVal);
            margin-left: 10px;
            transform: translateX(-10px);
            padding: 4px;
            border-radius: 5px;
            color: v-bind(ThemeMainTextColorVal);
            font-size: .8rem;
          }
        }
      }
    }
  }

  .publish-container-edit-style-change {
    display: flex;
    position: relative;
    bottom: -70px;
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;


    .publish-container-edit-style-change-item{
      margin-left: 30px;
      transform: translateX(-30px);
      .iconfont{
        font-size: 24px;
        font-weight: bold;
        color: #4b4b4b;
      }
    }
  }

  .Preview-at-container{
    width: 100%;
    height: auto;
    .Preview-at-container-user-list{
      display: flex;
      max-height: 600px;
      flex-direction: column;

      .Preview-at-container-user-list-item{
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        margin-top: 20px;
        .Preview-at-container-user-list-item-avatar{
          width: 40px;
          height: 40px;
          .avatar-img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
          }
        }
        .Preview-at-container-user-list-item-info{
          padding-left: 10px;
        }
      }
    }
  }
}
</style>

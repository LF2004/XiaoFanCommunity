<template>
  <div class="edit-save-box">
    <div class="edit-save-box-header">
      <div>
        <uni-icons @click="backOutToPage" type="left" style="font-weight: bold" color="#666666" size="24"></uni-icons>
      </div>
      <div class="edit-save-box-header-title">
        <text class="edit-save-box-header-title-text">个性标签</text>
      </div>
      <div></div>
      <div class="header-save">
        <button
            :class="!SelctPersonalityLabe.SelectChild.length >= 1 ? 'header-save-btn-disabled' : 'header-save-btn' "
            :disabled="!SelctPersonalityLabe.SelectChild.length >= 1"
            @click="SavePersonalityLabel"
        >保存
        </button>
      </div>
    </div>

    <div class="personalitylabel-box">
      <div class="personalitylabel-box-div">
        <div class="personalitylabel-box-item" v-for="itme in SelctPersonalityLabe.SelectChild">
          <text>{{ itme.name }}</text>
          <uni-icons type="closeempty" size="14" style="margin-left: 10px" @click="SelctPersonalityLabe.SelectChild.splice(index, 1)"></uni-icons>
        </div>
      </div>
    </div>

    <div class="personalitylabel-div">
      <div class="personalitylabel-div-tab">
        <div class="personalitylabel-div-tab-item"
             :class="SelectTapIndex === item.parentId ? 'personalitylabel-div-tab-item-select' : ''"
             v-for="item,index in PersonalityLabelList"
             @click="SelectTapIndex = item.parentId,GetSelectPersonalityLabe()"
        >{{ item.name }}</div>
      </div>
      <div class="personalitylabel-div-container">
        <div class="personalitylabel-div-container-title">
          <text class="personalitylabel-div-container-title-text">{{ PersonalityLabelList[SelectTapIndex - 1].name }}</text>
        </div>
        <div class="personalitylabel-div-container-list">
          <div :class="SelctPersonalityLabe.SelectChild.includes(label) ? 'personalitylabel-div-container-item-select' : 'personalitylabel-div-container-item'" v-for="label,index in SelectPersonalityLabeList" @click="SelectPersonalityLabeChild(label)">{{ label.name }}</div>
        </div>
      </div>
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

const SelectTapIndex = ref(1)

const SelctPersonalityLabe = ref({
  slectParentId: 1,
  SelectChild: [],
})

const PersonalityLabelList = ref([
  {
    name: '游戏',
    parentId: 1,
    child: [
        {
          name: '原神',
          parentId: 1,
          id: 1,
        },
        {
          name: '王者荣耀',
          parentId: 1,
          id: 2,
        },
        {
          name: '第五人格',
          parentId: 1,
          id: 3,
        },
        {
          name: '和平精英',
          parentId: 1,
          id: 4,
        },
        {
          name: '星穷铁道',
          parentId: 1,
          id: 5,
        },
    ]
  },
  {
    name: '性格',
    parentId: 2,
    child: [
      {
        name: '开朗',
        parentId: 2,
        id: 1,
      },
      {
        name: '内向',
        parentId: 2,
        id: 2,
      },
      {
        name: '乐观',
        parentId: 2,
        id: 3,
      },
      {
        name: '积极',
        parentId: 2,
        id: 4,
      },
      {
        name: '活泼',
        parentId: 2,
        id: 5,
      },
      {
        name: '幽默',
        parentId: 2,
        id: 6,
      },
    ]
  },
  {
    name: '求职',
    parentId: 3,
    child: [
      {
        name: 'Web前端开发',
        parentId: 3,
        id: 1,
      },
      {
        name: 'Java开发',
        parentId: 3,
        id: 2,
      },
      {
        name: 'Python数据分析',
        parentId: 3,
        id: 3,
      },
      {
        name: '文档工程师',
        parentId: 3,
        id: 4,
      },
      {
        name: 'Java架构师',
        parentId: 3,
        id: 5,
      },
    ]
  },
])

const SelectPersonalityLabeList = ref()

const GetSelectPersonalityLabe = () => {
  SelectPersonalityLabeList.value = PersonalityLabelList.value.find(v => v.parentId === SelectTapIndex.value).child || PersonalityLabelList.value[0].child
}
GetSelectPersonalityLabe()

const SelectPersonalityLabeChild = (label: any) => {

  if(SelctPersonalityLabe.value.SelectChild.includes(label)) {
    SelctPersonalityLabe.value.SelectChild.splice(SelctPersonalityLabe.value.SelectChild.indexOf(label), 1)
  }
  if(SelctPersonalityLabe.value.SelectChild.length < 3) {
    SelctPersonalityLabe.value.SelectChild.push(label)
  }else {
    uni.showToast({
      title: '最多选择3个标签',
      icon: 'none',
      duration: 2000
    })
  }
}

const SavePersonalityLabel = () => {
  uni.showToast({
    title: '保存成功',
    icon: 'none',
    duration: 2000
  })
  console.log(SelctPersonalityLabe.value.SelectChild)
}

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
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      padding: 10px;
      background: #ffffff;
      margin: 0 auto;

      .header-save-btn {
        width: 90%;
        height: 40px;
        margin: 0 auto;
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

  .personalitylabel-box{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e7e7e7;
    .personalitylabel-box-div{
      width: 90%;
      margin: 10px auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .personalitylabel-box-item{
      background: #f0f2f5;
      border-radius: 5px;
      text-align: center;
      background: v-bind(unimportantBgColorVal);
      border: 2px solid v-bind(ThemeMainBgColorVal);
      animation: personalitylabel-move 0.5s ease forwards;
    }
  }

  @keyframes personalitylabel-move {
    0%{
      opacity: 0;
      transform: translateX(-20px);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }


  .personalitylabel-div{
    position: relative;
    width: 100%;
    height: auto;
    background: #f6f7f9;
    .personalitylabel-div-tab{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .personalitylabel-div-tab-item{
        width: 120px;
        height: 40px;
        line-height: 40px;
        //background: #ffffff;
        text-align: center;
        color: #767779;
      }
      .personalitylabel-div-tab-item-select{
        background: #ffffff;
        color: v-bind(ThemeMainBgColorVal);
        border-radius: 0 0 5px 0;
      }
    }

    .personalitylabel-div-container{
      position: absolute;
      width: 100%;
      height: 80vh;
      top: 0;
      left: 30%;
      background-color: #ffffff;
      padding-left: 10px;
      .personalitylabel-div-container-title{
        width: 100%;
        background: #ffffff;
        padding-bottom: 20px;
        display: flex;
        .personalitylabel-div-container-title-text{
          transform: translateY(10px);
          color: #c5c3c3;
          font-size: 14px;
        }
      }
      .personalitylabel-div-container-list{
        width: 60%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .personalitylabel-div-container-item{
          border-radius: 5px;
          padding: 7px;
          text-align: center;
          background: #f6f7f9;
          width: 120px;
        }
        .personalitylabel-div-container-item-select{
          border-radius: 5px;
          padding: 5px;
          text-align: center;
          background: v-bind(unimportantBgColorVal);
          border: 2px solid v-bind(ThemeMainBgColorVal);
          width: 120px;
        }
      }
    }
  }
}
</style>

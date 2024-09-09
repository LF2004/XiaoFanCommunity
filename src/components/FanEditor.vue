<template>
  <editor @focus="modeShow" :style="{ 'height': editorHeight + 'px' }" @statuschange="selected"
          class="publish-container-edit-body-inp" :placeholder="placeholder" show-img-size show-img-toolbar
          @ready="onEditorReady" @input="SaveEditContent"></editor>

</template>

<script lang="ts" setup>

import { ref } from "vue";

import { EditortorStore } from "@/stores";

const useEditorStore = EditortorStore()

const editorCtx:any = ref('')

const onEditorReady = () => {
  uni.createSelectorQuery().in(this).select('.publish-container-edit-body-inp').fields({
    context: true
  }, res => {
    editorCtx.value = res.context
    res.context.setContents({
      html: '<div></div>'
    })
  }).exec()
}

const addBold = () => { //字体加粗
  editorCtx.value.format('bold', 'bold')
}

const insertImg = () => { //插入图片
  uni.chooseImage({
    success: res => {
      uni.showLoading({
        title: 'loading...'
      })
      //在这里先把封面截图保存到服务器拿到服务器存储地址放在这里
      for (let i = 0; i < res.tempFilePaths.length; i++) {
        editorCtx.value.insertImage({
          src: res.tempFilePaths[i],
          width: '50%',
          extClass: 'editor-img',
          height: 'auto',
        })
      }
      console.log(res)
      uni.hideLoading()
    }
  })

}

// 获取编辑器内容
const getCtx = () => {
  editorCtx.value.getContents({
    success: function(data:any) {
      console.log(data, '编辑器内容')
    }
  })
}

// 保存编辑器内容
const SaveEditContent = () => {
  editorCtx.value.getContents({
    success: function (data: any) {
      useEditorStore.setEditor(data.text.replace(/\n/g, ''))
      uni.setStorageSync('edit-content', {
        text: data.text,
        html: data.html
      })
    }
  })
}

// 自定义插入内容
const insertText = (data:any) => {
  editorCtx.value.format('color', '#0593f9')
  editorCtx.value.insertText({
    text: popos.AtPersonIsCarryAtSymbol ? '@' + data : data
  })
  editorCtx.value.format('color', '#0593f9')
  useEditorStore.setLoadAtPersons(data)

  editorCtx.value.format('color', '#000')
}

const SetiUpTextColor = (color:string) => {
  editorCtx.value.format('color', color)
}




const popos = defineProps({
  placeholder: {
    type: String,
    default: '请输入内容吧...'
  },
  IsSetUpCache:{
    type: Boolean,
    default: false
  },
  AtPersonIsCarryAtSymbol: {
    type: Boolean,
    default: true
  },
})

// 页面刷新调用clearEditor
if(!popos.IsSetUpCache){
  useEditorStore.clearEditor()
  useEditorStore.clearLoadAtPersons()
}

defineExpose({
  editorCtx,
  addBold,
  insertImg,
  insertText,
  SetiUpTextColor,
  getCtx
})
</script>

<style lang="scss" scoped>
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

.editor-img{
  width: 80% !important;

}
</style>

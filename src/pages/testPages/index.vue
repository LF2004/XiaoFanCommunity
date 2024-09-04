<template>
  <div>
    <div>
      <input
          type="color"
          @input="onColor"
          :value="state.editor.getAttributes('textStyle').color"
      />
      <label @click="getHTML">获取Html</label>
      <label @click="getJSON">获取Json</label>
      <label @click="setHTML">设置Html</label>
      <label @click="setJSON">设置Json</label>
      <label @click="insertContent">插入内容</label>
      <label @click="UploadImg">插入图片</label>
    </div>
    <text class="uni-input-placeholder ts-text" v-if="isShowPlaceholder">请尽情发挥把...</text>
    <editor-content :editor="state.editor" class="editor-sty"/>

    <div>
      <code>
        {{ state.result }}
      </code>
    </div>
  </div>
</template>
<script setup lang="ts">
/*
 tiptap 中文文档
 https://www.itxst.com/tiptap/tutorial.html
*/
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import {Editor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";



const state = reactive({
  editor: new Editor({
    content: "",
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "请输入内容",
      }),
      TextStyle,
      Image,
      Color.configure({
        types: ["textStyle"],
      }),
    ],
    autofocus: true,
    editable: true,
    injectCSS: false,
  }),
  result: "",
});

const isShowPlaceholder = ref(true);

//设置颜色
const onColor = ($event: any) => {
  // debugger;
  state.editor.chain().focus().setColor($event.detail.value).run();
};

// 监听内容变化
state.editor.on('transaction', (transaction) => {
  if(state.editor.getText().length !== 0) {
    isShowPlaceholder.value = false
  }else {
    isShowPlaceholder.value = true
  }
});

//获取Html
const getHTML = () => {
  state.result = state.editor.getHTML();
};
//获取Json
const setHTML = () => {
  state.editor.commands.setContent("<p> new 新的内容 </p>", false);
};
//设置Html
const getJSON = () => {
  state.result = JSON.stringify(state.editor.getJSON());
};

// 插入内容到编辑器
const insertContent = () => {
  const textToInsert = `<span style="color: #0f7fec">@那个</span>`;
  state.editor.chain().insertContent(textToInsert).run();
};

const UploadImg = () => {
  uni.chooseImage({
    count: 6, //默认9
    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album'], //从相册选择
    success: function (res) {
      let imgList = res.tempFilePaths;
      console.log(res.tempFiles)
      for(let i = 0; i < imgList.length; i++) {
        let textToInsert = `<image style="width: 100%;height: 300px;margin-top: 20px" src="${imgList[i]}" />`;
        state.editor.chain().insertContent(textToInsert).run();
      }
    }
  });
}

//设置Json
const setJSON = () => {
  let doc = {
    type: "doc",
    content: [
      {type: "paragraph", content: [{type: "text", text: "Tiptap JSON"}]},
    ],
  };
  state.editor.commands.setContent(doc, false);
};
</script>
<style scoped>
.editor-sty{
  width: 95%;
  margin: 0 auto;
}
.ts-text{
  position: absolute;
  top: -20px;
  left: 2%;
}
</style>

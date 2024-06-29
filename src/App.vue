<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import {useThemeColor} from "@/hooks/changThemeColor";
import {onMounted} from "vue";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {

});
onMounted(() => {
  useThemeColor()
})
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import "@/static/font-icon/iconfont.css";
</style>

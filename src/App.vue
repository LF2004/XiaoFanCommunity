<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

	import { onMounted, onUnmounted } from "vue";

	uni.onPushMessage((res) => {
		console.log("收到推送消息：", res.data) //监听推送消息
		uni.showToast({
			title:res,
		})
	})

	// uni-app客户端获取push客户端标记
	uni.getPushClientId({
		success: (res) => {
			let push_clientid = res.cid
			console.log('客户端推送标识:', push_clientid)
		},
		fail(err) {
			console.log(err)
		}
	})



	onHide(() => {
		console.log("App Hide");
	});
</script>
<style lang="scss">
	@import "@/static/font-icon/iconfont.css";
</style>

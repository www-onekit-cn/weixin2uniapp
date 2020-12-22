<template>
	<navigator :class="['onekit-navigator',onekitClass]" :style="onekitStyle" :id="onekitId" :url="url" :open-type="openType"
	 :hover-class="hoverClass" :hover-start-time="hoverStartTime" :hover-stay-time="hoverStayTime" :hover-stop-propagation="hoverStopPropagation">
		<slot />
	</navigator>
</template>

<script>
	export default {
		props: {
			onekitClass: {
				type: String,
				default: ""
			},
			onekitStyle: {
				type: String,
				default: ""
			},
			onekitId:{
				type:String,
				defaul:''
			},
			// 在哪个目标上发生跳转，默认当前小程序
			target: {
				type: String,
				default: "self"
			},
			// 当前小程序内的跳转链接
			url: {
				type: String,
			},
			redirect: {
				type: Boolean
			},
			// 跳转方式
			openType: {
				type: String,
				default: "navigate",
			},
			// 当 open-type 为 'navigateBack' 时有效，表示回退的层数
			delta: {
				type: Number,
				default: 1,
			},
			//当target="miniProgram"时有效，要打开的小程序 appId
			appId: {
				type: String,
			},
			path: {
				type: String,
			},
			extraData: {
				type: Object,
			},
			version: {
				type: String,
				default: "release",
			},
			hoverClass: {
				type: String
			},
			hoverStartTime: {
				type: Number,
				default: 50,
			},
			hoverStayTime: {
				type: Number,
				default: 600,
			},
			hoverStopPropagation: {
				type: Boolean,
				default: false,
			},
			// 这里定义了 headerText 属性，属性值可以在组件使用时指定
			headerText: {
				type: String,
				default: "默认值",
			},
		}
	}
</script>

<style>
</style>

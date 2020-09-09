<template>
	<scroll-view :id="onekitId" :class="['onekit-scroll-view',onekitClass]" :style="onekitStyle" :scroll-x="scrollX" :scroll-y="scrollY"
	 :upper-threshold="upperThreshold" :lower-threshold="lowerThreshold" :scroll-top="scrollTop" :scroll-left="scrollLeft"
	 :scroll-into-view="scrollIntoView" :scroll-with-animation="scrollWithAnimation" :enable-back-to-top="enableBackToTop"
	 :enable-flex="enableFlex" :scroll-anchoring="scrollAnchoring" :refresher-enabled="refresherEnabled"
	 :refresher-threshold="refresherThreshold" :refresher-default-style="refresherDefaultStyle" :refresher-background="refresherBackground"
	 :refresher-triggered="refresherTriggered" @scrolltoupper="scroll_scrolltoupper" @scrolltolower="scroll_scrolltolower"
	 @scroll="scroll_scroll" @refresherpulling="scroll_refresherpulling" @refresherrefresh="scroll_refresherrefresh"
	 @refresherrestore="scroll_refresherrestore" @refresherabort="scroll_refresherabort">
		<slot></slot>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			onekitClass:{
				type:String,
				default:''
			},
			onekitStyle:{
				type:String,
				defaul:''
			},
			onekitId:{
				type:String,
				defaul:''
			},
			scrollX: {
				type: Boolean,
				default: false
			},
			scrolly: {
				type: Boolean,
				default: false
			},
			upperThreshold: {
				type: Number || String,
				default: 50
			},
			lowerThreshold: {
				type: Number || String,
				default: 50,
			},
			scrollTop: {
				type: Number || String,
				default: ''
			},
			scrollLeft: {
				type: Number || String,
				default: ''
			},
			scrollIntoView: {
				type: String,
				default: ''
			},
			scrollWithAnimation: {
				type: Boolean,
				default: false
			},
			enableBackToTop: {
				type: Boolean,
				default: false
			},
			enableFlex: {
				type: Boolean,
				default: false
			},
			scrollAnchoring: {
				type: Boolean,
				default: false
			},

			refresherEnabled: {
				type: Boolean,
				default: false
			},
			refresherThreshold: {
				type: Number,
				default: 45
			},
			refresherDefaultStyle: {
				type: String,
				default: 'black'
			},
			refresherBackground: {
				type: String,
				default: '#FFF'
			},
			refresherTriggered: {
				type: Boolean,
				default: false
			},
		},
		methods: {
			scroll_scrolltoupper: function(e) {
				this.$emit('scrolltoupper', e.details)
			},
			scroll_scrolltolower: function(e) {
				this.$emit('scrolltolower', e)
			},
			scroll_scroll: function(e) {
				this.$emit('scroll', e)
			},
			scroll_refresherpulling: function(e) {
				this.$emit('refresherpulling', e)
			},
			scroll_refresherrefresh: function(e) {
				this.$emit('refresherrefresh', e)
			},
			scroll_refresherrestore: function(e) {
				this.$emit('refresherrestore', e)
			},
			scroll_refresherabort: function(e) {
				this.$emit('refresherabort', e)
			},
		},
	}
</script>
<style>
</style>

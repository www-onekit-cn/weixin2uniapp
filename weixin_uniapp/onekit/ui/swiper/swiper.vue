<template>
	<swiper
	:indicator-dots="indicatorDots"
	:indicator-color="indicatorColor"
	:indicator-active-color="indicatorActiveColor"
	:autoplay="autoplay"
	:current="current"
	:interval="interval"
	:duration="duration"
	:circular="circular"
	:vertical="vertical"
	:previous-margin="previousMargin"
	:next-margin="nextMargin"
	:display-multiple-items="displayMultipleItems"
	:skip-hidden-item-layout="skipHiddenItemLayout"
	:easing-function="easingFunction"
	@change="swiper_change"
	@transition="swiper_transition"
	@animationfinish="swiper_animationfinish"
	>
		<slot></slot>I
	</swiper>
</template>

<script>
	export default {
		props: {
			indicatorDots: {
				type: Boolean,
				default: false
			},
			indicatorColor: {
				type: Color,
				default: 'gba(0, 0, 0, .3)'
			},
			indicatorActiveColor: {
				type: String,
				default: '#000000'
			},
			autoplay: {
				type: Boolean,
				default: false
			},
			current: {
				type: Number,
				default: 0
			},
			interval: {
				type: Number,
				default: 5000
			},
			duration: {
				type: Number,
				default: 500
			},
			circular: {
				type: Boolean,
				default: false
			},
			vertical: {
				type: Boolean,
				default: false
			},
			previousMargin: {
				type: String,
				default: '0px'
			},
			nextMargin: {
				type: String,
				default: '0px'
			},
			displayMultipleItems: {
				type: Number,
				default: 1
			},
			skipHiddenItemLayout: {
				type: Boolean,
				default: false
			},
			easingFunction: {
				type: String,
				default: 'default'
			}

		},
		methods: {
			swiper_change:function(e){
				this.$emit('change')
			}
			swiper_transition:function(e){
				this.$emit('transition')
			}
			swiper_animationfinish:function(e){
				this.$emit('animationfinish')
			}
		}
	}
</script>

<style>
</style>

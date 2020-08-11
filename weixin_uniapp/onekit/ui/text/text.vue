<template>
	<view>
		<text
			:selectable="selectable"
			:space="space"
			:decode="decode"
		>
		<slot />
		</text>
	</view>
</template>

<script>
	export default {
		props: {
			selectable:{
				type:Boolean,
				default: false
			},
			disabled:{
				type:String,
				default: ''
			},
			disabled:{
				type:Boolean,
				default: false
			},
		}
	}
</script>

<style>

</style>

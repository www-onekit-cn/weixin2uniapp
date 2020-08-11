<template>
	<view>
		<icon
			:type="type"
			:size="size"
			:color="color"
		></icon>
	</view>
</template>

<script>
	export default {
		props:{
			type:{
				type:String,
				default: ""
			},
			size:{
				type:Number/String,
				default: 23/""
			},
			color:{
				type:String,
				default: ""
			}
		}
	}
</script>

<style>

</style>

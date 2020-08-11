<template>
	<swiper>
		<swiper-item
		item-id="itemId"
		>
		<slot></slot>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props:{
			itemId:{
				type:String,
				default:''
			},
		},
		methods:{}
	}
</script>

<style>
</style>

<template>
	<swiper>
		<swiper-item
		:class="['onekit-swiper-item',onekitClass]"
		:style="onekitStyle"
		item-id="itemId"
		>
		<slot></slot>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props:{
			onekitClass:{
				type:String,
				default:''
			},
			onekitStyle:{
				type:String,
				defaul:''
			},
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

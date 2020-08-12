<template>
	<swiper>
		<swiper-item
		:class="['onekit-swiper-item',class_]"
		:style="style_"
		item-id="itemId"
		>
		<slot></slot>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props:{
			class_:{
				type:String,
				default:''
			},
			style_:{
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

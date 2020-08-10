<template>
	<view>
		<checkbox
		:value = "value"
		:disabled = "disabled"
		:checked = "checked"
		:color = "color"
		>
		</checkbox>
	</view>
</template>

<script>
	export default {
		props: {
			value:{
				type:String,
				default: ""
			},
			disabled:{
				type:Boolean,
				default:false
			},
			checked:[Boolean,String],
			color:{
				type:String,
				default:"#09BB07"
			}
		}
	}
</script>

<style>

</style>

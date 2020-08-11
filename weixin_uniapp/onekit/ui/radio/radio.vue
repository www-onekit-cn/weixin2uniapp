<template>
	<radio
		:value="value"
		:checked="checked"
		:disabled="disabled"
		:color="color"
	
	>
		<slot/>
	</radio>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{
			value:{
				type:String,
				default:"",
			},
			checked:{
				type:Boolean,
				default:false,
			},
			disabled:{
				type:Boolean,
				default:false,
			},
			color:{
				type:String,
				default:"",
			},
		}
	}
</script>

<style>
</style>

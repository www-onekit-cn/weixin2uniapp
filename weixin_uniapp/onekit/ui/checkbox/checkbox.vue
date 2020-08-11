<template>

	<checkbox
		:value="value"
		:disabled="disabled"
		:checked="checked"
		:color="color"
	>
		<slot/>
	</checkbox>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{
			value:{
				type:String,
				default: ""
			},
			disabled:{
				type:Boolean,

				default: false
			},
			checked:{
				type:String,
				default: "false"
			},
			color:{
				type:String,
				default: "#09BB07"
			},
		}
	}
	
</script>

<style>


</style>

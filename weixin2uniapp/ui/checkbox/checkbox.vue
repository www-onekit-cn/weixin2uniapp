<template>
	<checkbox
		:class="['onekit-checkbox',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
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
		props:{
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
			value:{
				type:String,
				default: ""
			},
			disabled:{
				type:Boolean|String,
				default: false
			},
			checked:{
				type:Boolean|String,
				default:false
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

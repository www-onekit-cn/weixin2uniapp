<template>
	<checkbox
		:class="['onekit-checkbox',class_]"
		:style="style_"
		:id="id_"
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
			class_:{
				type:String,
				default:''
			},
			style_:{
				type:String,
				defaul:''
			},
			id_:{
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

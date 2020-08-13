<template>
	<label
		:class="['onekit-label',class_]"
		:style="style_"
		:id="id_"
		:for="onekitFor"
	>
	<slot/>
	</label>
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
			onekitFor:{
				type:String,
				default:"",
			}
		}
	}
</script>

<style>
</style>

<template>
	<label
		:class="['onekit-label',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:for="onekitFor"
	>
	<slot/>
	</label>
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
			onekitFor:{
				type:String,
				default:"",
			}
		}
	}
</script>

<style>
</style>

<template>
	<label
		:class="['onekit-label',onekitClass]"
		:style="onekitStyle"
		:id="id_"
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

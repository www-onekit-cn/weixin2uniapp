<template>
	<label
		:for="onekitFor"
	>
	<slot/>
	</label>
</template>

<script>
	export default{
		props:{
			onekitFor:{
				type:String,
				default:"",
			}
		}
	}
</script>

<style>
</style>

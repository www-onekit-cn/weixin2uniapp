<template>
	<checkbox-group
		:class="['onekit-checkbox-group',onekitClass]"
		:style="onekitStyle"
		:id="id_"
		@change="checkbox_change"
	
	>
		<slot/>
	</checkbox-group>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
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
		},
		methods:{
			checkbox_change(e){
			        this.$emit('change',e)
			       }, 
		},
		
	}
</script>

<style>
</style>

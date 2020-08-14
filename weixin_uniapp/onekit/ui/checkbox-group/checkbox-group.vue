<template>
	<checkbox-group
		:class="['onekit-checkbox-group',class_]"
		:style="style_"
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

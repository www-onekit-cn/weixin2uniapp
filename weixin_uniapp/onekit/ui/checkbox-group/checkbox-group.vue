<template>
	<checkbox-group
		:class="['onekit-checkbox-group',class_]"
		:style="style_"
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
		},
		methods:{
			checkbox_change(e){
			        console.log("checkbox_change",e)
			        this.$emit('change',e.details)
			       }, 
		},
		
	}
</script>

<style>
</style>

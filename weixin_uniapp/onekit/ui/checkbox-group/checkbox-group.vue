<template>
	<checkbox-group
		@change="checkbox_change"
	
	>
		<slot/>
	</checkbox-group>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{
			
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

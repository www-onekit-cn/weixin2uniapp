<template>
	<radio-group
		@change="radio_group_change"
	
	>
		<slot/>
	</radio-group>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		methods:{
			radio_group_change(e){
			        console.log("radio_group_change",e)
			        this.$emit('change',e.details)
			       }, 
		},
	}
</script>

<style>
</style>

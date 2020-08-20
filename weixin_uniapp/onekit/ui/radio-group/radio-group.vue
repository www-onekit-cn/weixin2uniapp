<template>
	<radio-group
		:class="['onekit-radio-group',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		@change="radio_group_change"
	
	>
		<slot/>
	</radio-group>
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
			onekitId:{
				type:String,
				defaul:''
			},
		},
		methods:{
			radio_group_change(e){
			        this.$emit('change',e)
			       }, 
		},
	}
</script>

<style>
</style>

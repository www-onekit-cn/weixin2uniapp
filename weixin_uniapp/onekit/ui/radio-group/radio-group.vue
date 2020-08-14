<template>
	<radio-group
		:class="['onekit-radio-group',class_]"
		:style="style_"
		:id="id_"
		@change="radio_group_change"
	
	>
		<slot/>
	</radio-group>
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
			radio_group_change(e){
			        this.$emit('change',e)
			       }, 
		},
	}
</script>

<style>
</style>

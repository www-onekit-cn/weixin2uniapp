<template>
	
		<switch
			:class="['onekit-switch',class_]"
			:style="style_"
			:checked="checked"
			:disabled="disabled"
			:type="type"
			:color="color"
			@change="switch_change"
		>
		<slot/>
		</switch>

</template>

<script>
	export default {
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
				checked:{
					type:Boolean,
					default: false
				},
				disabled:{
					type: Boolean,
					default: false
				},
				type:{
					type: String,
					default: "switch"
				},
				color:{
					type: String,
					default: "#04BE02"
				}
			},
		methods: {
		  	switch_change(e){
		  	        console.log("switch change success",e)
		  	        this.$emit('change',e.details)
		  	}, 
		}
	}
</script>

<style>

</style>

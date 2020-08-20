<template>
	
		<switch
			:class="['onekit-switch',onekitClass]"
			:style="onekitStyle"
			:id="onekitId"
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
				checked:{
					type:Boolean,
					default: null
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
		  	        this.$emit('change',e)
		  	}, 
		}
	}
</script>

<style>

</style>

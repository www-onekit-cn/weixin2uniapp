<template>
	<picker
		:class="['onekit-picker',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:disabled="disabled"
		:mode="mode"
		:range="range"
		:range-key="rangeKey"	
		:value="value"
		:start="start"
		:end="end"
		:fields="fields"
		:custom-item="customItem"
		@cancel="picker_cancel"
		@change="picker_change"
	
	
	
	
	>
		<slot/>
	</picker>
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
				disabled:{
					type:Boolean,
					default:false,
				},
				mode:{
					type:String,
					default:"selector",
				},
				range:{
					type:Array,
				},
				rangeKey:{
					type:String,
					default:"",
				},
				value:{
					type:Number|String,
					default:0,
				},
				start:{
					type:String,
					default:"",
				},
				end:{
					type:String,
					default:"",
				},
				fields:{
					type:String,
					default:"day",
				},
				customItem:{
					type:String,
					default:"",
				},
		},
		methods:{
				picker_cancel(e){
				        this.$emit('cancel',e)
				       }, 
				picker_change(e){
				        this.$emit('change',e)
				       }, 
				
		}
	}
</script>

<style>
</style>

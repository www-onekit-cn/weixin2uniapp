<template>
	<slider
		:class="['onekit-slider',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:min="min"
		:max="max"
		:step="step"
		:disabled="disabled"
		:value="value"
		:activeColor="activeColor"
		:backgroundColor="backgroundColor"
		:block-size="blockSize"
		:block-color="blockColor"
		:show-value="showValue"
		@change="slider_change"
		@changing="slider_changing"
	>
		<slot/>
	</slider>
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
			min:{
				type:Number,
				default: 0
			},
			max:{
				type:Number,
				default: 100
			},
			step:{
				type:Number,
				default: 1
			},
			disabled:{
				type:Boolean,
				default: false
			},
			value:{
				type:Number,
				default: 0
			},
			activeColor:{
				type:String,
				default: "#1aad19"
			},
			backgroundColor:{
				type:String,
				default: "#e9e9e9"
			},
			blockSize:{
				type:Number,
				default: 28
			},
			blockColor:{
				type:String,
				default: "#ffffff	"
			},
			showValue:{
				type:Boolean,
				default: false
			},
		},
		methods:{
				slider_change(e){
				        this.$emit('change',e)
				       }, 
				slider_changing(e){
				        this.$emit('changing',e)
				       }, 
		}
	}
</script>

<style>
</style>

<template>
	<slider
		:class="['onekit-slider',class_]"
		:style="style_"
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
			class_:{
				type:String,
				default:''
			},
			style_:{
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
				        console.log("slider_change",e)
				        this.$emit('change',e.details)
				       }, 
				slider_changing(e){
				        console.log("slider_changing",e)
				        this.$emit('changing',e.details)
				       }, 
		}
	}
</script>

<style>
</style>

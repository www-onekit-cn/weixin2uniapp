<template>
	<navigation-bar
		:title="title"
		:loading="loading"
		:front-color="frontColor"
		:background-color="backgroundColor"
		:color-animation-duration="colorAnimationDuration"
		:color-animation-timing-func="colorAnimationTimingFunc"
	></navigation-bar>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:""
			},
			loading:{
				type:Boolean,
				default:false
			},
			frontColor:{
				type:String,
				default:""
			},
			backgroundColor:{
				type:String,
				default:""
			},
			colorAnimationDuration:{
				type:Number,
				default:0
			},
			colorAnimationTimingFunc:{
				type:String,
				default:"linear"
			}
		}
	}
</script>

<style>

</style>

<template>
		<view
		:hover-class="hoverClass"
		:hover-stop-propagation="hoverStopPropagation"
		:hover-start-time="hoverStartTime"
		:hover-stay-time="hoverStayTime"
		@click="view_click"
		@tap="view_tap"
		>
		<slot></slot>
		</view>
</template>

<script>
export default{
	props:{
		hoverClass:{
			type:String,
			default: "none"
		},
		hoverStopPropagation:{
			type:Boolean,
			default:false
		},
		hoverStartTime:{
			type:Number,
			default:50
		},
		hoverStayTime:{
			type:Number,
			default:400
		}
		
	},
	methods:{
		view_click:function(e){
			console.log("image load success",e)
			this.$emit('tap',e.details)
		}
	}
}
</script>

<style>
</style>

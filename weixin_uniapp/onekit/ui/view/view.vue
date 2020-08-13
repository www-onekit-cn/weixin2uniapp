<template>
		<view
		:class="['onekit-view',class_]"
		:style="style_"
		:id="id_"
		:hover-class="hoverClass"
		:hover-stop-propagation="hoverStopPropagation"
		:hover-start-time="hoverStartTime"
		:hover-stay-time="hoverStayTime"
		@tap="view_tap"
		>
		<slot></slot>
		</view>
</template>

<script>
export default{
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
		// view_click:function(e){
		// 	this.$emit('click',e.details)
		// },
		view_tap:function(e){
			//console.log("image load success",e)
			this.$emit('tap',e.details)
		},
	}
}
</script>

<style>
</style>

<template>
		<audio
		:class="['onekit-audio',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:src="src"
        :loop="loop"
        :controls="controls"
        :poster="poster"
		>
		<slot></slot>
		</audio>
</template>

<script>
import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-audio",
    mixins:[weixin_behavior, onekit_behavior],
	props:{
		
		"src":{
			type:String,
			defaul:''
		},
		"loop":{
			type:Boolean,
			defaul:false
		},
		"controls":{
			type:Boolean,
			defaul:false
		},
		"poster":{
			type:String,
			defaul:''
		},
		
	},
	methods:{
		// view_click:function(e){
		// 	this.$emit('click',e.details)
		// },
		// view_click:function(e){
		// 	//console.log("image load success",e)
		// 	this.$emit('tap',e.details)
		// },
	}
}
</script>

<style>
</style>

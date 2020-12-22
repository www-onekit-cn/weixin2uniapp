<template>
		<div
		:class="['onekit-canvas',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-canvas",
    mixins:[weixin_behavior, onekit_behavior],
	props:{
		"type":{
			type:String,
			defaul:""
		},
		"canvas-id":{
			type:String,
			defaul:""
		},
		"disable-scroll	":{
			type:Boolean,
			defaul:false
		},
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>

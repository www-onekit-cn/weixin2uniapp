<template>
		<div
		:class="['onekit-camera',onekitClass]"
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
    name: "onekit-camera",
    mixins:[weixin_behavior, onekit_behavior],
	props:{
		"mode":{
			type:String,
			defaul:"normal"
		},
		"resolution	":{
			type:String,
			defaul:"medium"
		},
		"device-position":{
			type:String,
			defaul:"back"
		},
		"flash":{
			type:String,
			defaul:"auto"
		},
		"frame-size":{
			type:String,
			defaul:"medium"
		},
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>

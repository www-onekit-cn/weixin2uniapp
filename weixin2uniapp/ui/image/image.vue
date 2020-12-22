<template>
		<image
		:class="['onekit-image',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		:src="computedSrc"
		>
		</image>
</template>

<script>
import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-image",
    mixins:[weixin_behavior, onekit_behavior],
	props:{
		src:{type:String}
	},
	computed:{
		computedSrc(){
			return this.src;
		}
	},
	methods:{
		
	}
}
</script>

<style>
</style>

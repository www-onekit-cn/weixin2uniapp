<template>
		<div
		:class="['onekit-live-pusher',onekitClass]"
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
    name: "onekit-live-pusher",
    mixins:[weixin_behavior, onekit_behavior],
		props:{
		
			
		},
		methods:{
			
	}
}
</script>

<style>
</style>

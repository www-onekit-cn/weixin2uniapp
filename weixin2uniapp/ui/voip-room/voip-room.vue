<template>
		<view
		:class="['onekit-voip-room',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</view>
</template>

<script>
import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-voip-room",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>

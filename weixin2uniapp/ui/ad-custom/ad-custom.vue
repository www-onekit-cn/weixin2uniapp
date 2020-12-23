<template>
  <view
  :class="['onekit-ad-custom',onekitClass]"
  :style="onekitStyle"
  :id="onekitId"

  :adpid="unitId"

  @load="adCustom_load"
  @error="adCustom_error"
  >
    <slot></slot>
  </view>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-ad-custom",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      "unit-id": {
        type: String,
        defaul: ""
      },
      "ad-intervals": {//做不了
        type: Number,
        defaul: null
      },
    },
    methods: {
      adCustom_load(e){
		  	this.$emit('load',e)
      }, 
      adCustom_error(e){
		  	this.$emit('error',e)
      }, 
    }
  }
</script>

<style>
</style>
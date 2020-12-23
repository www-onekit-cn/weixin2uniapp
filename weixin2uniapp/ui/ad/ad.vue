<template>
  <ad
  :class="['onekit-ad',onekitClass]"
  :style="onekitStyle"
  :id="onekitId"
  
  :unit-id="unitId"
  :ad-intervals="adIntervals"

  @load="ad_load"
  @error="ad_error"
  @close="ad_close">
    <slot></slot>
  </ad>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-ad",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      unitId: {
        type: String,
        defaul: ""
      },
      adIntervals: {
        type: Number,
        defaul: null
      },
      adType: {//做不了
        type: String,
        defaul: "banner"
      },
      adTheme: {//做不了
        type: String,
        defaul: "white"
      },
    },
    methods: {
      ad_load(e){
		  	this.$emit('load',e)
      }, 
      ad_error(e){
		  	this.$emit('error',e)
      }, 
      ad_close(e){
		  	this.$emit('close',e)
		  }, 
    }
  }
</script>

<style>
</style>
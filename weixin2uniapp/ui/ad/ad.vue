<template>
  <div
       :class="['onekit-ad',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-ad",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      "unit-id": {
        type: String,
        defaul: ""
      },
      "ad-intervals": {
        type: Number,
        defaul: ""
      },
      "ad-type": {
        type: String,
        defaul: "banner"
      },
      "ad-theme": {
        type: String,
        defaul: "white"
      },

    },
    methods: {

    }
  }
</script>

<style>
</style>
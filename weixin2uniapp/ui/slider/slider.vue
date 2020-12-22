<template>
  <div
       :class="['onekit-slider',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-slider",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'indicator-dots': {
        type: Boolean,
        default: false,
        required: false
      }

    },
    methods: {

    }
  }
</script>

<style>
</style>
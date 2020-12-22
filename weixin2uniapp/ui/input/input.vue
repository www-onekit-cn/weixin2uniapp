<template>
  <input
         :class="['onekit-input',onekitClass]"
         :style="onekitStyle"
         :id="onekitId" />
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-input",
    mixins: [weixin_behavior, onekit_behavior],
    props: {


    },
    methods: {

    }
  }
</script>

<style>
</style>
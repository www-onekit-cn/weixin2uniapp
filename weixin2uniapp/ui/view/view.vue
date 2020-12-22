<template>
  <div :class="['onekit-view',onekitClass]" :style="onekitStyle" :id="onekitId" :hover-class="hoverClass"
       :hover-stop-propagation="hoverStopPropagation" :hover-start-time="hoverStartTime" :hover-stay-time="hoverStayTime"
       @mousedown="ui_mousedown"
       @click="ui_click">
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from '../../behaviors/weixin_behavior'
  import onekit_behavior from '../../behaviors/onekit_behavior'
  export default {
    name: "onekit-view",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      hoverClass: {
        type: String,
        default: "none"
      },
      hoverStopPropagation: {
        type: Boolean,
        default: false
      },
      hoverStartTime: {
        type: Number,
        default: 50
      },
      hoverStayTime: {
        type: Number,
        default: 400
      }

    },
    methods: {}
  }
</script>

<style>
</style>
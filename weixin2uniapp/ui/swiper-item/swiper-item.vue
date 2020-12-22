<template>
  <div
       :class="['onekit-swiper-item',onekitClass]"
       :style="[onekitStyle,itemStyle,{width: `${$parent.width}px`}]"
       :id="onekitId">
    <slot></slot>
  </div>
</template>


<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-swiper-item",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      return {
        itemStyle: ''
      }
    },
    props: {
      'item-id': {
        type: String,
        default: '',
        required: false
      },
      'skip-hidden-item-layout': {
        type: Boolean,
        default: false,
        required: false
      },
      'color': {
        type: String,
        default: 'pink',
        required: false
      }
    },
    async mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .onekit-swiper-item {
    height: 100px;
    /* float: left; */
    display: inline-block;
    background: pink;
  }
</style>
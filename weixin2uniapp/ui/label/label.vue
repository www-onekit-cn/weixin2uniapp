<template>
  <label
         :class="['onekit-lable',onekitClass]"
         :style="onekitStyle"
         :id="onekitId"
         @click="label_click()">
    <slot></slot>
  </label>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-label",
    mixins: [weixin_behavior, onekit_behavior],
    props: {


    },
    methods: {
      label_click() {

        if (this.$children[1].handleSwitch) {
          this.$children[1].handleSwitch()
        } else {
          console.log('没有该事件')
        }

      }
    },
    async mounted() {
      if (this.$children.map(item => {
          // eslint-disable-next-line no-prototype-builtins
          item.hasOwnProperty('handleSwitch')
        })) {
        console.log('ok')
      }
    }
  }
</script>

<style>
</style>
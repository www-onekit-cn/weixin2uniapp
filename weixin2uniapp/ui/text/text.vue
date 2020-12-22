<template>
  <div
       :class="['onekit-text',onekitClass,
						this.userSelect? 'iselect': '']"
       :style="onekitStyle"
       :id="onekitId" v-html="html">
    <slot v-if="false"></slot>
  </div>
</template>

<script>
  import STRING  from '../../../node_modules/oneutil/STRING'
  import weixin_behavior from '../../behaviors/weixin_behavior'
  import onekit_behavior from '../../behaviors/onekit_behavior'
  export default {
    name: "onekit-text",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      'user-select': {
        type: Boolean,
        default: false,
        required: false,
      },
      'space': {
        type: String,
        default: null,
        required: false,
      },
      'decode': {
        type: Boolean,
        default: false,
        required: false
      }

    },
    computed: {
      html() {
        var temp = this.$slots.default[0].text;

        if (this.space) {
          temp = STRING.replace(temp, ' ', `&${this.space};`)
        }
        if (!this.decode) {
          temp = temp.replace(/&amp;/g, "&amp;&amp;");
          temp = temp.replace(/&lt;/g, "&amp;&lt;");
          temp = temp.replace(/&gt;/g, "&amp;&gt;");
          temp = temp.replace(/&nbsp;/g, "&amp;nbsp;");
          temp = temp.replace(/&#39;/g, "&amp;&#39;");
          temp = temp.replace(/&quot;/g, "&amp;&quot;");
        }

        return temp
      }

    }
  }
</script>

<style>
  .iselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
  }
</style>
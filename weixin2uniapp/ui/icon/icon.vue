<template>
  <i
     :class="['onekit-icon',typeClass,'iconfont icon-search','iconfont icon-clear']"
     :style="onekitStyle"
     :id="onekitId"></i>
</template>

<script>
  import weixin_behavior from '../../behaviors/weixin_behavior'
  import onekit_behavior from '../../behaviors/onekit_behavior'
  export default {
    name: "onekit-icon",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      type: {
        type: String,
        required: true,
      },
      size: {
        type: [Number, String],
        required: false,
        default: 23,
      },
      color: {
        type: String,
        required: false,
      },
    },
    watch: {
      size(value) {
        this.sizeUpdate(value)
      },
      color(value) {
        this.colorUpdate(value)
      }
    },
    computed: {
      typeClass() {
        return `weui_icon_${this.type}`;
      },
    },
    mounted() {
      this.sizeUpdate(this.size)
      this.colorUpdate(this.color)
    },
    methods: {
      colorUpdate(color) {
        if (!color) {
          switch (this.type) {
            case "success":
            case "success_no_circle":
            case "download":
            case "info_circle":
              color = "#20BF64";
              break;

            case "info":
            case "waiting":
              color = "#24B0FC";
              break;

            case "warn":
            case "cancel":
              color = "#F75355";
              break;

            case "circle":
            case "search":
            case "clear":
              color = "#B2B2B2";
              break;

            default:
              throw new Error(this.type);
          }
        }
        this.$el.style.setProperty("--icon-color", color);
      },
      sizeUpdate(size) {
        this.$el.style.setProperty("--icon-size", `${size}px`);
      },
    }
  };
</script>
<style scoped>
  .onekit-icon::before {
    font-size: var(--icon-size);
    color: var(--icon-color);
  }
</style>
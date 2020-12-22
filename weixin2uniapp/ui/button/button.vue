<template>
  <button
          class="onekit-button"
          :class="[typeClass, disabled ? 'weui_btn_disabled' : '', mini ? 'weui_btn_mini' : '']"
          @click="button_click($event)">
    <slot></slot>
  </button>
</template>

<script>
  import weixin_behavior from '../../behaviors/weixin_behavior'
  import onekit_behavior from '../../behaviors/onekit_behavior'
  export default {
    mixins: [weixin_behavior, onekit_behavior],
    name: 'onekit-button',
    props: {
      type: {
        type: String,
        default: 'primary',
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      },
      mini: {
        type: Boolean,
        default: false,
        required: false
      },
      plain: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    methods: {
      clickHandler($event) {
        if (!this.disabled) {
          this.$emit('click', $event)
        }
      }
    },
    computed: {
      typeClass() {
        return `weui_btn${this.plain ? '_plain' : ''}_${this.type}`;
      },
      disabledClass() {
        if (this.plain && this.disabled) {
          return 'weui-btn_plain-disabled'
        } else if (this.disabled) {
          return 'weui-btn_disabled'
        } else {
          return ''
        }
      }
    }
  }
</script>
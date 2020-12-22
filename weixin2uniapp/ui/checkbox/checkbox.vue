<template>
  <label
         :class="['onekit-checkbox',onekitClass,]"
         :style="{onekitStyle,color:'red'}"
         :id="onekitId"
         @click.stop="handleClick">
    <input class="input_check_box"
           type="checkbox"
           :style="{color:(disabled? '#999':color),
           '--bgcolor':(disabled ? '#ccc' : '#fff'),
           '--discolor':(disabled? '#ccc' : '#fff')}"
           :value="model"
           :disabled="disabled"
           :checked="checked"
           v-bind="$attrs">

    <slot></slot>
  </label>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-checkbox",
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      "value": {
        type: String,
        default: ""
      },
      "disabled": {
        type: Boolean,
        default: false
      },
      "checked": {
        type: Boolean,
        default: false
      },
      "color": {
        type: String,
        default: "#09BB07"
      },

    },
    model: {
      prop: "propValue",
      event: "select"
    },
    computed: {
      isGroup() {
        return this.$parent.$options._componentTag === "fat-checkbox-group";
      },
      isDisabled() {
        return this.$parent.disabled || this.disabled;
      },
      isChecked() {
        const { isGroup, model } = this;
        if (!isGroup) return model;
        const {
          value,
          $parent: { value: selectItems }
        } = this;
        return selectItems.some(item => item === value);
      },
      model: {
        get() {
          return this.isGroup ? this.$parent.value : this.propValue;
        },
        set(newValue) {
          const { isGroup, isChecked } = this;
          if (isGroup) {
            isChecked
              ?
              this.$parent.deleteItem(newValue) :
              this.$parent.selectItem(newValue);
          } else {
            this.$emit("select", newValue);
          }
        }
      }
    },
    methods: {
      handleClick() {
        const { isDisabled, isGroup, model, value } = this;
        if (!isDisabled) {
          this.model = isGroup ? value : !model;
        }
      }
    }
  }
</script>

<style>
  .input_check_box {
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 18px;
    margin-right: 2px;
    position: relative;
  }

  .input_check_box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: var(--bgcolor);
    width: 100%;
    height: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }

  .input_check_box:checked::before {
    content: "\2713";
    background-color: var(--discolor);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    border-radius: 2xp;
  }
</style>
<template>
  <div class="weui_progress">
    <div class="weui_progress_bar"
         :style="{height: strokeWidth + 'px',
                  background: backgroudColor}">
      <div class="weui_progress_inner_bar"
           :style="{width: width + '%',
                    borderRadius: borderRadius + 'px',
                    height: strokeWidth + 'px',
                    background: bgcolor,
                    transition:`width ${speed}s`}"
           @click="ui_click(activeColor)">
      </div>
    </div>
    <a class="onekit_progress-count"
       v-if="showInfo"
       href="javascript:;"
       :style="{fontSize : fontSize + 'px'}"
       >
    {{ percent }}%
    </a>
    <a v-if="hasCancelButton" href="javascript:;" class="weui_progress_opr" @click="callEvent('weui-progress-cancel')">
    <i class="weui_icon_cancel"></i>
  </a>
  </div>
</template>

<script>
  export default {
    name: "onekit-progress",
    data() {
      return {
        bgcolor: JSON.parse(JSON.stringify(this.color)),
        bgActiveColor: this.activeColor,
        width: this.percent,
        speed: this.duration / 10,
        isAnimation: this.active
      }
    },
    props: {
      'percent': {
        type: [Number, String],
        required: true,
        validator(value) {
          return value >= 0 && value <= 100;
        },
        default: 0
      },
      'showInfo': {
        type: Boolean,
        default: false,
        requred: false,
      },
      'borderRadius': {
        type: [Number, String],
        required: false,
        validator(value) {
          return value >= 0 && value <= 100
        }
      },
      'fontSize': {
        type: [Number, String],
        default: 16,
        required: false,
      },
      'strokeWidth': {
        type: [Number, String],
        default: 6,
        required: false,
      },
      'color': {
        type: [String],
        default: '#09BB07',
        required: false
      },
      'activeColor': {
        type: String,
        default: '#09BB07',
        required: false
      },
      'backgroudColor': {
        type: String,
        default: '#EBEBEB',
        required: false
      },
      'active': {
        type: Boolean,
        default: false,
        required: false
      },
      'active-mode': {
        type: String,
        // default: backwards,
        required: false,
      },
      'duration': {
        type: [Number, String],
        default: 0,
        required: false
      },
      'bindactiveend': {
        type: Function,
        required: false
      },
      hasCancelButton: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {

    },
    async mounted() {
      await this._ui_progress_animation()
    },
    methods: {
      callEvent(event) {
        this.$emit(event);
      },
      ui_click(active) {
        this.bgcolor === active ? this.bgcolor = this.color : this.bgcolor = active
      },
      _ui_progress_animation() {
        if (this.isAnimation) {
          this.width = 0
          new Promise((resolve) => {
            setTimeout(() => {
              this.width += this.percent
            }, this.speed)
            resolve('continue')
          }).then(() => {
            setTimeout(() => {
              this.bindactiveend()
            }, this.speed * 1000)
          })
        }
      }
    }
  }
</script>

<style scpoed>
  .onekit_progress-count {
    color: #000;
    font-weight: bolder;
    padding: 0px 4px;
  }
</style>
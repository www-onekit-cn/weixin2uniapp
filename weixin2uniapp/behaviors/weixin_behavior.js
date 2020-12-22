/* eslint-disable vue/custom-event-name-casing */
export default {
  props: {
  },
  methods: {
    ui_mousedown() {
      this.$emit("Touchstart");
    },
    ui_mousemove() {
      this.$emit("Touchmove");
    },
    /*ui_mousecanvas() {
      this.$emit("Touchcancel");
    },*/
    ui_mouseup() {
      this.$emit("Touchend");
    },
    ui_click() {
      this.$emit("Tap");
    },
    /* ui_longPress() {
       this.$emit("Longpress");
     },*/
    ui_longclick() {
      this.$emit("Longtap");
    },
  }
}


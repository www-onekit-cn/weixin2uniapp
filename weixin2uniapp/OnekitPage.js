import Vue from "vue";
let APP_JSON;
export default function(PAGE_JSON, object) {
  let result = {
    data() {
      return {};
    },
    created() {
      APP_JSON = Vue.prototype.APP_JSON;
      Vue.prototype.CURRENT = this
      this.data = this.$data;
      if (this["onLoad"]) {
        const query = this.$route.query
        this.eventChannelID = query.eventChannelID
        delete query["eventChannelID"]
        this["onLoad"]({ query });
      }
    },
    destroy() {
      if (this["onUnload"]) {
        this["onUnload"]();
      }
    },
    mounted() {
      let WINDOW_JSON = {
        navigationBarBackgroundColor: "#000000",
        navigationBarTextStyle: "white",
        navigationStyle: "default",
        backgroundColor: "#000000",
        backgroundTextStyle: "dark",
      };
      if (APP_JSON.window) {
        for (let key of Object.keys(APP_JSON.window)) {
          WINDOW_JSON[key] = APP_JSON.window[key];
        }
      }
      if (typeof(PAGE_JSON) != "undefined") {
        for (let key in PAGE_JSON) {
          if (!PAGE_JSON[key]) {
            continue;
          }
          let item = PAGE_JSON[key];
          switch (key) {
            case "backgroundColorTop":
              break;
            case "backgroundColorBottom":
              break;
            case "enablePullDownRefresh":
              break;
            case "onReachBottomDistance":
              break;
            case "pageOrientation":
              break;
            default:
              WINDOW_JSON[key] = item;
              break;
          }
        }
      }
      this.$emit('updatewindowjson', {WINDOW_JSON});
      if (this["onReady"]) {
        this["onReady"]();
      }
    },
    beforeRouteEnter(to, from, next) {
      Vue.prototype.CURRENT = this
      next(vm => {
        if (vm["onShow"]) {
          vm["onShow"]();
        }
      });
    },
    beforeRouteLeave(to, from, next) {
      next(vm => {
        if (vm["onHide"]) {
          vm["onHide"]();
        }
      });
    },
    methods: {
      setData(data) {
        let that = this;
        this.$nextTick(() => {
          for (let k of Object.keys(data)) {
            that[k] = data[k];
          }
        });
      },
      getOpenerEventChannel() {
        return Vue.prototype.$EventBus[this.eventChannelID];
      }
    },
    components: {}

  };
  if (object) {
    if (object.data) {
      result.data = () => {
        return object.data;
      };
    }
    for (let key of Object.keys(object)) {
      let obj = object[key];
      switch (key) {
        case "data":
          break;
        case "usingComponents":
          for (let uc of obj) {
            result.components[uc] = () => import(`@/${uc}.vue`);
          }
          break;
        case "onShareAppMessage":
          break;
        default:
          result.methods[key] = obj;
          break;
      }
    }
  }
  return result;
}
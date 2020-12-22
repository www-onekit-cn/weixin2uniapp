
import Vue from 'vue'

let APP_JSON

export default function (UC_JSON, object) {
  const result = {
    data() {
      return {}
    },
    created() {
      APP_JSON = Vue.prototype.APP_JSON
      this.data = this.$data
      if (this.onLoad) {
        this.onLoad()
      }
    },
    destroy() {
      if (this.onUnload) {
        this.onUnload()
      }
    },
    mounted() {
      // console.log( this.$route.fullPath);
      const WINDOW_JSON = {
        navigationBarBackgroundColor: '#000000',
        navigationBarTextStyle: 'white',
        navigationStyle: 'default',
        backgroundColor: '#000000',
        backgroundTextStyle: 'dark',
      }
      if (APP_JSON.window) {
        for (const key of Object.keys(APP_JSON.window)) {
          WINDOW_JSON[key] = APP_JSON.window[key]
        }
      }
      // let path = this.$route.fullPath;
      for (const key of Object.keys(UC_JSON)) {
        const item = UC_JSON[key]
        switch (key) {
          case 'backgroundColorTop':
            break
          case 'backgroundColorBottom':
            break
          case 'enablePullDownRefresh':
            break
          case 'onReachBottomDistance':
            break
          case 'pageOrientation':
            break
          default:
            WINDOW_JSON[key] = item
            break
        }
      }
      // console.log(WINDOW_JSON)
      this.$emit('update-window', {WINDOW_JSON})
      if (this.onReady) {
        this.onReady()
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (vm.onShow) {
          vm.onShow()
        }
      })
    },
    beforeRouteLeave(to, from, next) {
      next(vm => {
        if (vm.onHide) {
          vm.onHide()
        }
      })
    },
    methods: {
      setData(data) {
        const that = this
        this.$nextTick(() => {
          for (const k of Object.keys(data)) {
            that[k] = data[k]
          }
        })
      }
    },
    components: {}
  }
  if (object) {
    if (object.data) {
      result.data = () => object.data
    }
    for (const key of Object.keys(object)) {
      const obj = object[key]
      switch (key) {
        case 'data':
          break
        case 'usingComponents':
          for (const uc of obj) {
            result.components[uc] = () => import(`@/${uc}.vue`)
          }
          break
        case 'onShareAppMessage':
          break
        default:
          result.methods[key] = obj
          break
      }
    }
  }
  return result
}

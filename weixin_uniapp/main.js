import Vue from 'vue'
import App from './onekit/page/App'

Vue.config.productionTip = false

App.mpType = 'app'
for(const ui of ["page","ad", "audio","button","camera","canvas","checkbox","checkbox-group","cover-image","cover-view",
  "editor","form","functional-page-navigator","image",
  "icon","map","input","label","live-player","live-pusher","map","movable-area","movable-view","navigator","navigation-bar","page-meta",
  "open-data","page","picker","picker-view","picker-view-column","progress",
  "radio","radio-group","rich-text","scroll-view","slider","swiper","swiper-item","switch",
  "text","textarea","video","view","web-view" ]){
  Vue.component(`onekit-${ui}`,()=>import(`@/onekit/ui/${ui}/${ui}.vue`));
}
const app = new Vue({
    ...App
})
app.$mount()
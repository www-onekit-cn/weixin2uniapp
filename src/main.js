import Vue from 'vue'
import App from './App'
import weixin2uniapp from "../weixin2uniapp"
Vue.use(weixin2uniapp);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

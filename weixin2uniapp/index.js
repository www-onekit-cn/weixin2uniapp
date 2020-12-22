import ui from './ui'
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'
import wx from './wx'

export default {
  install(Vue) {
    Vue.use(ui)
  },
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  wx
}

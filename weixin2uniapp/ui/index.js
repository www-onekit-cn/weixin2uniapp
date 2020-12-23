import ad_custom from './ad-custom'
import page from './page'
import voip_room from './voip-room'

export default {
    install(Vue) {
        Vue.use(ad_custom)
        Vue.use(page)
        Vue.use(voip_room)
    },
}
import ad from './ad'
import ad_custom from './ad-custom'
import audio from './audio'
import button from './button'
import canvas from './canvas'
import camera from './camera'
import checkbox from './checkbox'
import checkbox_group from './checkbox-group'
import cover_image from './cover-image'
import cover_view from './cover-view'
import editor from './editor'
import form from './form'
import functional_page_navigator from './functional-page-navigator'
import icon from './icon'
import image from './image'
import input from './input'
import label from './label'
import live_player from './live-player'
import live_pusher from './live-pusher'
import map from './map'
import match_media from './match-media'
import movable_area from './movable-area'
import movable_view from './movable-view'
import navigation_bar from './navigation-bar'
import navigator from './navigator'
import official_account from './official-account'
import open_data from './open-data'
import page from './page'
import page_meta from './page-meta'
import picker from './picker'
import picker_view from './picker-view'
import picker_view_column from './picker-view-column'
import progress from './progress'
import radio from './radio'
import radio_group from './radio-group'
import rich_text from './rich-text'
import scroll_view from './scroll-view'
import slider from './slider'
import swiper from './swiper'
import swiper_item from './swiper-item'
import Switch from './switch'
import text from './text'
import textarea from './textarea'
import video from './video'
import view from './view'
import voip_room from './voip-room'
import web_view from './web-view'





export default {
    install(Vue) {
        Vue.use(ad)
        Vue.use(ad_custom)
        Vue.use(audio)
        Vue.use(button)
        Vue.use(canvas)
        Vue.use(camera)
        Vue.use(checkbox)
        Vue.use(checkbox_group)
        Vue.use(cover_image)
        Vue.use(cover_view)
        Vue.use(editor)
        Vue.use(form)
        Vue.use(functional_page_navigator)
        Vue.use(icon)
        Vue.use(image)
        Vue.use(input)
        Vue.use(label)
        Vue.use(live_player)
        Vue.use(live_pusher)
        Vue.use(map)
        Vue.use(match_media)
        Vue.use(movable_area)
        Vue.use(movable_view)
        Vue.use(navigation_bar)
        Vue.use(navigator)
        Vue.use(progress)
        Vue.use(radio)
        Vue.use(official_account)
        Vue.use(radio_group)
        Vue.use(open_data)
        Vue.use(rich_text)
        Vue.use(scroll_view)
        Vue.use(slider)
        Vue.use(page)
        Vue.use(page_meta)
        Vue.use(picker)
        Vue.use(picker_view)
        Vue.use(picker_view_column)
        Vue.use(swiper)
        Vue.use(swiper_item)
        Vue.use(Switch)
        Vue.use(text)
        Vue.use(textarea)
        Vue.use(video)
        Vue.use(view)
        Vue.use(voip_room)
        Vue.use(web_view)
    },
}
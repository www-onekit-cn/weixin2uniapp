import view from './view.vue'
view.install = (Vue) => Vue.component(view.name, view);
export default view

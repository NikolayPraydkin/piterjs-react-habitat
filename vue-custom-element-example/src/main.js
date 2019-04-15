import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueCustomElement from 'vue-custom-element'
import PiterJsModal from './components/PiterjsModal'

Vue.config.ignoredElements = ['piterjs-modal']
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueCustomElement)

Vue.customElement('piterjs-modal', PiterJsModal)

import Vue from 'vue'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { } from "@fortawesome/free-brands-svg-icons"
import { faCode, faMobileAndroid, faServer } from "@fortawesome/free-solid-svg-icons"

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
Vue.config.productionTip = false
library.add(faCode, faServer, faMobileAndroid)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

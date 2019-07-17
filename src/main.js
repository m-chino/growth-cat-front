// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import Vuex from 'vuex'
import { Motions } from './store/modules/motions'
Vue.use(Vuex)

// Vue.config.productionTip = false
const store = new Vuex.Store({
  modules: {
    Motions: Motions
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

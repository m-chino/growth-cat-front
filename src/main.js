// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {UPDATE_MESSAGE} from './store/mutation-types'
Vue.use(Vuex)

// Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    msg: 'Hello'
  },
  mutations: {
    [UPDATE_MESSAGE] (state, newMsg) {
      state.msg = newMsg
    }
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

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
    msg: 'Hello',
    moment: {
      regsterTimestamp: '2019-03-29 16:00:51',
      accelerationmeterX: 10.5,
      accelerationmeterY: 10.5,
      accelerationmeterZ: 10.5,
      gyroscopeX: 10.5,
      gyroscopeY: 10.5,
      gyroscopeZ: 10.5,
      magnetometerX: 10.5,
      magnetometerY: 10.5,
      magnetometerZ: 10.5
    }
  },
  mutations: {
    [UPDATE_MESSAGE] (state, newMsg) {
      state.msg = newMsg
    }
  },
  actions: {
    repeat (context) {
      let msg = context.state.msg
      context.commit(UPDATE_MESSAGE, `${msg} ${msg}`)
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

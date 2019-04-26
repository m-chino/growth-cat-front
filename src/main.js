// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {UPDATE_MOMENT, GET_NEW_MOMENT} from './store/mutation-types'
import axios from 'axios'
Vue.use(Vuex)

// Vue.config.productionTip = false
const API_URL = 'http://lpc-2116.gxp.local:8080'
const store = new Vuex.Store({
  state: {
    moments: [{
      registerTimestamp: '2019-04-16T23:59:59.000+0000',
      accelerationmeter_x: 9,
      accelerationmeter_y: -8,
      accelerationmeter_z: 0.7,
      gyroscope_x: 66666666,
      gyroscope_y: 5.5555555,
      gyroscope_z: -0.04,
      magnetometer_x: 333,
      magnetometer_y: 222,
      magnetometer_z: 111
    }]
  },
  mutations: {
    [UPDATE_MOMENT] (state, newMoment) {
      state.moments = newMoment
    }
  },
  actions: {
    [GET_NEW_MOMENT] () {
      axios.get(API_URL + '/motion/' + '001-001-001').then(res => {
        this.commit(UPDATE_MOMENT, res.data)
      }).catch(error => {
        throw error
      })
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

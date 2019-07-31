import {UPDATE_MOTIONS, GET_NEW_MOTIONS} from '../mutations'
import axios from 'axios'
import _ from 'lodash'
/* eslint-disable */

// ここをサーバのIPに合わせる
const VUE_APP_API_URL_BASE = 'http://localhost:8080'

export const Motions = {
  state: {
    motions: [{
      registerTimestamp: '1990-01-01T00:00:00.000+0000',
      accelerationmeter_x: 0,
      accelerationmeter_y: 0,
      accelerationmeter_z: 0,
      gyroscope_x: 0,
      gyroscope_y: 0,
      gyroscope_z: 0,
      magnetometer_x: 0,
      magnetometer_y: 0,
      magnetometer_z: 0,
      luxometer: 0.1
    }]
  },
  getters: {
    chart_motion: state => {
      // データ
      let motions = state.motions
      // グラフの横軸ラベル（timestamp）
      let labels = _.map(motions, (motion) => {
        return motion.registerTimestamp
      })
      let dataset = []

      let luxometer = _.map(motions, (motion) => {
        return motion.luxometer
      })
      let luxGraph = {
        label: "光量",
        // backgroundColor: '#e249ff',
        borderColor: '#e249ff',
        type: 'line',
        fill: false,
        data: luxometer
      }

      let accelerationmeterXGraph = {
        label: "運動量X値",
        borderColor: '#ffa220',
        type: 'line',
        fill: false,
        data: _.map(motions, (motion) => motion.accelerationmeter_x)
      }

      dataset.push(luxGraph)
      dataset.push(accelerationmeterXGraph)

      return {
        labels: labels,
        datasets: dataset
      }
    },
    chart_option: () => {
      const option = {
        layout: {
          padding: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          }
        },
        scales: {
          yAxes: {
            ticks: {
              fontSize: 18,
              min: 0,
              max: 0.1,
              stepSize: 0.05
            }
          }
        }
      }
      console.log('option:',option)
      return option;
    }
  },
  mutations: {
    [UPDATE_MOTIONS] (state, newMotions) {
      state.motions = newMotions
    }
  },
  actions: {
    [GET_NEW_MOTIONS] (state, deviceId) {
      axios.get(VUE_APP_API_URL_BASE + '/motion/es/' + deviceId).then(res => {
        this.commit(UPDATE_MOTIONS, res.data)
      }).catch(error => {
        throw error
      })
    }
  }
}



import {UPDATE_MOTIONS, GET_NEW_MOTIONS} from '../mutations'
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
/* eslint-disable */

// ここをサーバのIPに合わせる
const VUE_APP_API_URL_BASE = 'http://35.200.82.70:8080'

export const Motions = {
  state: {
    motions: [{
      registerTimestamp: '01-01 00:00',
      accelerationmeter_x: 99,
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
        return moment(motion.registerTimestamp).format("MM-DD HH:MM")
      })
      let dataset = []

      let accelerationmeterXYZGraph = {
        label: "運動量",
        borderColor: '#ffa220',
        type: 'line',
        fill: false,
        data: _.map(motions, (motion) => Math.sqrt(Math.pow(motion.accelerationmeter_x, 2) + Math.pow(motion.accelerationmeter_y, 2) + Math.pow(motion.accelerationmeter_z, 2)))
      }

      dataset.push(accelerationmeterXYZGraph)

      return {
        labels: labels,
        datasets: dataset
      }
    },
    chart_option: () => {
      const option = {
        //グラフの縦横比の自動調整を解除
        maintainAspectRatio: false,
        responsive: true,
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
              maxTicks: 200,
              autoSkip: false,
              fontSize: 18,
              min: 0,
              max: 200,
              stepSize: 20,
              beginAtZero: true
            }
          }
        }
      }
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



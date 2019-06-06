import {UPDATE_MOMENT, GET_NEW_MOMENT} from './../mutations'
import axios from 'axios'
/* eslint-disable */

// ここをサーバのIPに合わせる
const VUE_APP_API_URL_BASE =  'http://172.168.13.4:8080'

export const Moments = {
    state: {
        moments: [{
            registerTimestamp: '1990-01-01T00:00:00.000+0000',
            accelerationmeter_x: 0,
            accelerationmeter_y: 0,
            accelerationmeter_z: 0,
            gyroscope_x: 0,
            gyroscope_y: 0,
            gyroscope_z: 0,
            magnetometer_x: 0,
            magnetometer_y: 0,
            magnetometer_z: 0
        }]
    },
    mutations: {
        [UPDATE_MOMENT] (state, newMoment) {
            state.moments = newMoment
        }
    },
    actions: {
        [GET_NEW_MOMENT] (state, deviceId) {
            axios.get(VUE_APP_API_URL_BASE + '/motion/' + deviceId).then(res => {
                this.commit(UPDATE_MOMENT, res.data)
            }).catch(error => {
                throw error
            })
        }
    }
}
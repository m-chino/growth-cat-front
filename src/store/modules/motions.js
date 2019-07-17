import {UPDATE_MOTIONS, GET_NEW_MOTIONS} from '../mutations'
import axios from 'axios'
/* eslint-disable */

// ここをサーバのIPに合わせる
const VUE_APP_API_URL_BASE =  'http://192.168.13.3:8080'

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
            luxometer: 0
        }]
    },
    mutations: {
        [UPDATE_MOTIONS] (state, newMotions) {
            state.motions = newMotions
        }
    },
    actions: {
        [GET_NEW_MOTIONS] (state, deviceId) {
            axios.get(VUE_APP_API_URL_BASE + '/motion/' + deviceId).then(res => {
                this.commit(UPDATE_MOTIONS, res.data)
            }).catch(error => {
                throw error
            })
        }
    }
}
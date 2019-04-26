import {UPDATE_MOMENT, GET_NEW_MOMENT} from './../mutations'
import axios from 'axios'
/* eslint-disable */

const API_URL = 'http://lpc-2116.gxp.local:8080'

export const Moments = {
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
        [GET_NEW_MOMENT] (state, deviceId) {
            axios.get(API_URL + '/motion/' + deviceId).then(res => {
                this.commit(UPDATE_MOMENT, res.data)
            }).catch(error => {
                throw error
            })
        }
    }
}
<template>
  <div class="hello">
    <h1>Growth-cat</h1>
      <button @click="update">更新</button>
      <line-chart
        class="chart"
        :chart-data="chart_motion"
        :options="chart_option"
      ></line-chart>
      <!--<div>-->
        <!--<p>更新日時:{{motion.registerTimestamp}}</p>-->
        <!--<p>加速度X軸:{{motion.accelerationmeter_x}}</p>-->
        <!--<p>加速度Y軸:{{motion.accelerationmeter_y}}</p>-->
        <!--<p>加速度Z軸:{{motion.accelerationmeter_z}}</p>-->
        <!--<p>角加速度X軸:{{motion.gyroscope_x}}</p>-->
        <!--<p>角加速度Y軸:{{motion.gyroscope_y}}</p>-->
        <!--<p>角加速度Z軸:{{motion.gyroscope_z}}</p>-->
        <!--<p>磁気強度X軸:{{motion.magnetometer_x}}</p>-->
        <!--<p>磁気強度Y軸:{{motion.magnetometer_y}}</p>-->
        <!--<p>磁気強度Z軸:{{motion.magnetometer_z}}</p>-->
        <!--<p>光度:{{motion.luxometer}}</p>-->
      <!--</div>-->
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import { GET_NEW_MOTIONS } from './../store/mutations'
import LineChart from './LineChart'

const deviceId = 'demo1'
export default {
  name: 'Growthcat',
  components: {LineChart},
  computed: {
    ...mapState({
      motion: state => state.Motions.motions[ state.Motions.motions.length - 1 ]
    }),
    ...mapGetters([
      'chart_motion',
      'chart_option'
    ])
  },
  methods: {
    update () {
      this.$store.dispatch(GET_NEW_MOTIONS, deviceId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.chart{
  height: 500px;
  width: 100%;
}
</style>

<template>
  <div class="hello">
    <h1>Growth-cat</h1>
      <button @click="update">更新</button>
      <div>
        <p>更新日時:{{moment.registerTimestamp}}</p>
        <p>加速度X軸:{{moment.accelerationmeter_x}}</p>
        <p>加速度Y軸:{{moment.accelerationmeter_y}}</p>
        <p>加速度Z軸:{{moment.accelerationmeter_z}}</p>
        <p>角加速度X軸:{{moment.gyroscope_x}}</p>
        <p>角加速度Y軸:{{moment.gyroscope_y}}</p>
        <p>角加速度Z軸:{{moment.gyroscope_z}}</p>
        <p>磁気強度X軸:{{moment.magnetometer_x}}</p>
        <p>磁気強度Y軸:{{moment.magnetometer_y}}</p>
        <p>磁気強度Z軸:{{moment.magnetometer_z}}</p>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_NEW_MOMENT } from './../store/mutations'
export default {
  name: 'Growthcat',
  computed: {
    ...mapState({
      moment: state => state.Moments.moments[ state.Moments.moments.length - 1 ]
    })
  },
  methods: {
    update () {
      this.$store.dispatch(GET_NEW_MOMENT)
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

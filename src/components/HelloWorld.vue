<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <input type="text" v-model="newMsg"/>
      <button @click="update">更新</button>
      <button @click="repeat">繰り返す</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { UPDATE_MESSAGE } from './../store/mutation-types'
export default {
  name: 'HelloWorld',
  data () {
    return {
      newMsg: null
    }
  },
  computed: {
    ...mapState({
      msg: state => state.msg
    })
  },
  methods: {
    update () {
      this.$store.commit(UPDATE_MESSAGE, this.newMsg)
    },
    repeat () {
      this.$store.dispatch('repeat')
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

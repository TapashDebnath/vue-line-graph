import Vue from 'vue'
import Vuex from 'vuex'
import LineGraphModule from './modules/LineGraphModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    LineGraphModule,
  },
})
import Vue from 'vue'
import Router from 'vue-router'
import LineGraph from '@/components/LineGraph'
import VueGoogleCharts from 'vue-google-charts'


Vue.use(VueGoogleCharts)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LineGraph',
      component: LineGraph
    }
  ]
})

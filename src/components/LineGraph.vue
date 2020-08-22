<template>
  <div>
      <h1>Google Line Graph</h1>
      <p><strong>vue-google-charts: </strong> npm install --save vue-google-charts</p>
      <br/> <br/> <br/>
      <select @change="selectType" v-model="type">
        <option 
          v-for="(type, index) in graphTypes" 
          :key="index" 
          :v-value="type"
        >{{type}}</option>
      </select>
      <GChart
          v-if="chartData.length > 0"
          type="LineChart"
          :data="chartData"
          :options="chartOptions"
      />
      <div v-else>NO Data</div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import { mapActions, mapGetters } from 'vuex'

const formatLegendText = text => {
    text = text.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const getChartOptions = type => {
    return {
        title: type,
        width: 1200,
        height: 800,
        pointSize: 5,
        legend:{position: 'top', alignment: 'center'},
        series: {
            0: { pointShape: 'circle' },
        },
        hAxis: {
            slantedText: true,
            slantedTextAngle: 45
        }
    }
}


export default {
    name: 'LineGraph',
    components: {
        GChart
    },

    data () {
        return {
            graphTypes: ['clickThruRate', 'sales', 'pageViews', 'orders'],
            type: 'clickThruRate',
        }
    },

    computed: {
        ...mapGetters('LineGraphModule', [
            'LineChartData'
        ]),
        
        
        chartOptions: vm => getChartOptions(vm.type),
        chartDataHeader: vm => ['Year', formatLegendText(vm.type)],
        chartData: vm => [vm.chartDataHeader, ...vm.LineChartData],
    },

    methods: {
        ...mapActions('LineGraphModule', [
            'changeType'
        ]),

        async selectType() {
            await this.changeType(this.type)
        },
    },

    created: function() {
       // this.chartOptions.title = this.type; 
        this.changeType(this.type)
    }
}
</script>

<style scoped>
  select {
    height: 32px;
    width: 200px;
  }
</style>

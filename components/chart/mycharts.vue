<template>
  <div id="echarts">
    <div ref="myChart" class="myChart" :id="nuxtId"></div>
  </div>
</template>
<script type="text/javascript">
  import api from '~/plugins/libs/api'
  export default {
    props:{
     nuxtId:{
       type: String,
       default:'chart'
     }
    },
    data () {
      return {
        expression: 'expresson String',
        foo: 'foo'
      }
    },
    created(){
       console.log(this.nuxtId)
    },
    methods: {
      echartsInit () {
        // 找到容器
        let chartDom =document.getElementById(`${this.nuxtId}`);
        console.log(chartDom)
        let myChart = this.$echarts.init(chartDom,'macarons')
        // 开始渲染
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      },
      echartsInit2 () {
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        myChart.setOption({
          title: {text: 'echarts 饼图'},
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: [
                {value: 235, name: '视频广告'},
                {value: 274, name: '联盟广告'},
                {value: 310, name: '邮件营销'},
                {value: 335, name: '直接访问'},
                {value: 400, name: '搜索引擎'}
              ]
            }
          ]
        })
      }
    },
    mounted () {
      this.echartsInit()
      // this.echartsInit2()
      api.get('users/').then(res=>{
        // console.log(res,3333)
      })
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .myChart{
    width: 600px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
   // float: left;
  }
</style>

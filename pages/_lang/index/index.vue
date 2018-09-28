
<template>
  <div class="fullscreen">
    <nuxt-content-list></nuxt-content-list>
    <nuxt-content-chart></nuxt-content-chart>
    <nuxt-content-map></nuxt-content-map>
    <!--<my-charts :nuxt-id="'lineChart'"></my-charts>-->
  </div>
</template>

<script>
  import MyCharts from'~/components/chart/mycharts.vue'
  import NuxtContentChart from'~/components/nuxt-content-chart/nuxt-content-chart.vue'
  import NuxtContentList from'~/components/nuxt-content-list/nuxt-content-list.vue'
  import NuxtContentMap from'~/components/nuxt-content-map/nuxt-content-map.vue'
  export default {
    name: "index",
    components:{
      MyCharts,
      NuxtContentChart,
      NuxtContentList,
      NuxtContentMap
    }
  }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
.fullscreen{
  display: flex;
  height: 100%;
}
</style>

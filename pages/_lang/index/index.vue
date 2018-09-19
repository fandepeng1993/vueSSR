
<template>
  <div>
    <h1>默认index主页</h1>
    <my-charts></my-charts>
    <nuxt-link :to="{path:`${$i18n.path('/about')}`}">about</nuxt-link>
  </div>
</template>

<script>
  import MyCharts from'~/components/mycharts.vue'
  export default {
    name: "index",
    components:{
      MyCharts
    }
  }
</script>

<style scoped>

</style>

<template>
   <div class="header">
      <nuxt-time></nuxt-time>
       <div class="titles">
         东方航空运维数据分析平台系统运行健康图
       </div>
      <nuxt-logo v-if="false"></nuxt-logo>
   </div>
</template>

<script>
  import NuxtTime from '~/components/nuxt-time/index.vue'
  export default {
    name: "index",
    data() {
      return {
      };
    },
    components:{
      NuxtTime
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .header{
    display:flex;
    height: 30px;
    align-items: center;
    border-bottom: 1px solid $border-color-1;
    .titles{
       margin: 0 auto;
       // @include no-wrap
     }
  }

</style>

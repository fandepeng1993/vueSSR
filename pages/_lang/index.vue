
<template>
  <div class="container">
    <nuxt-header></nuxt-header>
    <div class="content">
      <nuxt-left></nuxt-left>
      <main class="nuxt-right">
        <nuxt-child/>
      </main>
    </div>
    <nuxt-footer></nuxt-footer>
  </div>
</template>
<script>

  import NuxtFooter from'~/components/nuxt-footer/index.vue'
  import NuxtHeader from'~/components/nuxt-header/index.vue'
  import NuxtLeft from'~/components/nuxt-left/index.vue'

  export default {
    beforeCreate(){
    },
    methods:{

    },
    components:{
      NuxtFooter,
      NuxtLeft,
      NuxtHeader

    }

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped type="text/scss">
  .container{
    flex: 1;
    display: flex;
    flex-direction: column;
    .content{
      flex: 1;
      display: flex;
      height: calc(100vh - 111px);
      overflow: hidden;
      .nuxt-right{
        height: 100%;
        overflow-y:scroll ;
        flex: 1;
      }
    }
  }

</style>

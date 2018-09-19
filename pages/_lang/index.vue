
<template>
  <div>
    <nuxt-header></nuxt-header>
    <div class="container">
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
      /*if(this.$route.fullPath=='/') {
           this.$router.replace({path:'/cn'})
      }
       console.log(123,this.$route.fullPath)*/
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
  @import "~assets/style/public.scss";
  .container{
    display: flex;
    .nuxt-right{
      flex: 1;
    }
  }

  /*p{
    width: 100px;
    color: red;
    @include no-wrap()
  }*/
</style>

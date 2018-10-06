
<template>
  <div class="container">
    <nuxt-header></nuxt-header>
    <div class="content">
      <nuxt-left v-if="false"></nuxt-left>
      <main class="nuxt-right">
        <nuxt-child/>
      </main>
    </div>
    <nuxt-footer></nuxt-footer>
  </div>
</template>
<script>
  /*测试提交*/
  import NuxtFooter from'~/components/nuxt-footer/index.vue'
  import NuxtHeader from'~/components/nuxt-header/index.vue'
  import NuxtLeft from'~/components/nuxt-left/index.vue'
  import api from '~/plugins/libs/api'

  let serverTime=null
  let getAPi = function () {
    api.get('https://api.github.com/orgs/angular/members?page=1&per_page=5').then((data)=>{
      console.log(data)
      if(data){
        starPolling()
      }
    })
  }
  let  closedPolling = function () {
    if(serverTime)  {
      clearTimeout(serverTime)
    }
  }
  let starPolling = function () {
    closedPolling()
    serverTime = setTimeout(getAPi,3000);
  }
  export default {
    beforeCreate(){
    },
    asyncData(context){
      // console.log(context.app)
    },
    created(app){
      // 开启轮询查数据
      // this.starPolling()
      /*if(serverTime){

      }*/

    },
    mounted(){
      this.isfine()
    },
    methods:{
      starPolling(){
        starPolling()
      },
      isok(){
        console.log('isok')
      },
      isfine(){
        this.isok()
      }

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
    background-color: $--color-bg;
    .content{
      flex: 1;
      display: flex;
      height: calc(100vh - 60px);
      overflow: hidden;
      .nuxt-right{
        height: 100%;
        overflow-y:scroll;
        flex: 1;
      }
    }
  }

</style>

<template>
    <div class="content-chart">
      <chart></chart>
      {{testresult}}
    </div>
</template>

<script>
  import Chart from '~/components/chart/mycharts.vue'
  import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'
  export default {
    name: "nuxt-content-chart",
    data(){
      return {}
    },
    created(){

    },
    mounted(){
      //this.testadd('678');
       console.log(this.testresult)
    },
    methods:{
     /* ...mapMutations({
        testadd: 'system/add'
      }),*/
      //...mapActions({testadd:'system/testadd'})
    },
    computed:{
      ...mapGetters({testresult:'system/testresult'})
    },
    components:{
      Chart
    }
  }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
 .content-chart{
   flex: 1;
 }
</style>

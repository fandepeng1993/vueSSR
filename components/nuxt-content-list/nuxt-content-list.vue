<template>
    <div class="conten-list">
      <nuxt-title></nuxt-title>
      <div>nuxt-content-list</div>
    </div>
</template>

<script>
  import NuxtTitle from '~/components/nuxt-title/nuxt-title.vue'
  export default {
    name: "nuxt-content-list",
    components:{
      NuxtTitle
    }

  }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
  .conten-list{
    flex: 1;
  }
</style>

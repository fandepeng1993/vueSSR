<template>
    <div class="logo-time">
       <span>{{new Date()|dateTime({onlyD:true})}}</span>
    </div>
</template>

<script>
  export default {
    name: "index",
    created(){

    }
  }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
   .logo-time{
     position: absolute;
     right: 0px;
     background-color: $color-1;
     padding: 0px 3px;
      span {
        color: #93ded7;
      }
   }
</style>

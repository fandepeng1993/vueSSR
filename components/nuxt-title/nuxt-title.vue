<template>
    <div class="nuxt-title clearfix">
       <div class="nuxt-title-wrap ">
         <div class="box">
           <p>系统健康度与系统请求量</p>
         </div>
       </div>
    </div>
</template>

<script>
  export default {
    name: "nuxt-title"
  }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
 .nuxt-title{
   .nuxt-title-wrap{
     background-color: $color-1;
     float: left;
     padding: 5px 10px;
     .box{
        border:4px solid $border-color-1;
        border-top-width: 2px;
        border-bottom-width: 2px;
        border-radius: 50% 0;
        position: relative;
        p{
          padding: 8px;
          font-size: $medium-fs;
        }
       &:after{
         content: '';
         width:0;
         height:0;
         border-width: 16px 0px 0px 24px;
         border-style:solid;
         border-color:transparent transparent transparent $border-color-1;
         position: absolute;
         left: 0;
         bottom: 0;
       }
     }
   }
 }
</style>

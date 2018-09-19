<template>
    <header class="header">
      <el-menu
        :default-active="languageIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">{{$t('exHeader.language')}}</template>
          <el-menu-item :index="item" v-for="(item,index) in $store.state.locales" :key="index">{{item=='cn'?$t('exHeader.chinese'):$t('exHeader.english')}}</el-menu-item>

          <el-menu-item index="1-3">其他</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">方言</template>
            <el-menu-item index="1-4-1">方言1</el-menu-item>
            <el-menu-item index="1-4-2">方言2</el-menu-item>
            <el-menu-item index="1-4-3">方言3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </header>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
      };
    },
    computed:{
      languageIndex: function() {
        return this.$store.state.locale
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        let path = this.$route.fullPath;
        let patt=new RegExp(/^\/[^\/]+/).exec(path);
        if(patt){
          if(this.$store.state.locales.includes(patt.toString().replace('/',''))){
            path = this.$route.fullPath.replace(/^\/[^\/]+/, '')
            if(!path){
               path = '/'
            }
          }
        }
        if(key==this.$i18n.fallbackLocale){
          this.$router.replace({path:`${path}`})
        } else {
          if(path=='/'){
            path = ''
          }
          this.$router.replace({path:`/${key}${path}`})
        }
        return
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <op-nav></op-nav>
    <op-header v-if="!isIndexPage"></op-header>
    <router-view/>
    <op-footer v-if="!isIndexPage"></op-footer>
  </div>
</template>

<script type="text/ecmascript-6" lang="babel">
  import opNav from './components/nav';
  import opHeader from './components/header';
  import opFooter from './components/footer';
  
  export default {
    name: 'app',
    components: {
      opNav,
      opHeader,
      opFooter
    },
    computed: {
      isIndexPage() {
        return this.$route.name === 'index';
      }
    },
    created() {
      this.$i18n.locale = this.$route.params.lang;
    }
  };
</script>

<style lang="less" type="text/less">
  /*@import "styles/main.less";*/
  #app {
    width: 100%;
    height: 100%;
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
</style>

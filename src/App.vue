<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <op-nav></op-nav>
    <op-header></op-header>
    <router-view/>
    <op-footer></op-footer>
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
    }
  };
</script>

<style lang="less" type="text/less">
  /*@import "styles/main.less";*/
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
</style>

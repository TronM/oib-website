<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <op-header></op-header>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6" lang="babel">
  import opHeader from './components/header';
  
  export default {
    name: 'app',
    components: {
      opHeader
    }
  };
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>

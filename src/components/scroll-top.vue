<template>
  <div class="backtop" @click="scrollTop"><img src="../assets/img/icon/top.png" alt="back to top"></div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  
  export default {
    methods: {
      scrollTop() {
        $('html, body').animate({ scrollTop: 0 }, 500);
      }
    }
  };
</script>

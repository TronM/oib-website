<template>
  <div class="wrapper index">
    <div class="main box-padding">
      <div class="col-xs-4"><a href=""><img src="../../assets/img/main/logo-white.png" alt="念相" class="logo"></a></div>
      <div class="col-xs-pull-1"><img src="../../assets/img/icon/nav-white.png" alt="" class="nav-toggle" @click="openNav"></div>
      <div class="text col-xs-12">
        <ul>
          <li><img src="../../assets/img/mindex/text11.png" alt="" width="78.57%"><div class="text1"></div></li>
          <li><img src="../../assets/img/mindex/text21.png" alt="" width="45.37%"><div class="text2"></div></li>
          <li><img src="../../assets/img/mindex/text31.png" alt="" width="47.59%"><div class="text3"></div></li>
          <li><img src="../../assets/img/mindex/text41.png" alt="" width="77.77%"><div class="text4"></div></li>
        </ul>
        <img src="../../assets/img/mindex/text5.png" alt="" width="90%">
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  import hub from '../../utils/hub';
  
  export default {
    methods: {
      openNav() {
        hub.$emit('open-nav');
      }
    },
    mounted() {
      const scale = document.documentElement.clientWidth / 640;
      $('.index .text div').css('transform', `scale(${scale})`);
    }
  };
</script>

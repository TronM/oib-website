<template>
  <div class="wrapper index">
    <div class="video">
      <video src="http://oib.oss-cn-beijing.aliyuncs.com/web/bg.mp4" autoplay="autoplay" loop="loop" @click="isVideoShown = false" v-if="isVideoShown"></video>
    </div>
    <!-- <video src="../../assets/video/bg.mp4" autoplay="autoplay" loop="loop"></video> -->
    <div class="main box-padding">
      <div class="col-xs-2"><a href=""><img src="../../assets/img/main/logo-white.png" alt="念相" class="logo"></a></div>
      <div class="col-xs-pull-1"><img src="../../assets/img/icon/nav-white.png" alt="" class="nav-toggle" @click="openNav"></div>
      <div class="text col-xs-10 col-xs-offset-1">
        <ul>
          <li><img src="../../assets/img/index/text11.png" alt=""><div class="text1"></div></li>
          <li><img src="../../assets/img/index/text21.png" alt=""><div class="text2"></div></li>
          <li><img src="../../assets/img/index/text31.png" alt=""><div class="text3"></div></li>
          <li><img src="../../assets/img/index/text41.png" alt=""><div class="text4"></div></li>
        </ul>
        <img src="../../assets/img/index/text5.png" alt="">
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import hub from '../../utils/hub';
  
  export default {
    data() {
      return {
        isVideoShown: true
      };
    },
    methods: {
      openNav() {
        hub.$emit('open-nav');
      }
    }
  };
</script>

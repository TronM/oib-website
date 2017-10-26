<template>
  <div class="nav">
    <img src="../assets/img/icon/close.png" alt="关闭" class="close">
    <ul class="link">
      <li><a href="index.html" data-i18n="nav.home">HOME</a></li>
      <li><a href="works.html" data-i18n="nav.works">WORKS</a></li>
      <li><a href="about.html" data-i18n="nav.about">ABOUT</a></li>
      <li><a href="news.html" data-i18n="nav.news">NEWS</a></li>
      <li><a href="service.html" data-i18n="nav.service">SERVICE</a></li>
      <li><a href="contact.html" data-i18n="nav.contact">CONTACT</a></li>
    </ul>
    <ul class="share">
      <li><a href=""><img src="../assets/img/icon/weixin-red.png" alt=""></a></li>
      <li><a href=""><img src="../assets/img/icon/weibo-red.png" alt=""></a></li>
      <li><a href=""><img src="../assets/img/icon/be-red.png" alt=""></a></li>
    </ul>
    <div class="copyright">©2015 沪ICP备14026675号-1</div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  
  export default {
    mounted() {
      console.log('qqq', $);
      // 导航动画
      $('.nav-toggle').on('click', () => {
        $('.nav').animate({ right: '0' });
      });

      $('.nav .close').on('click', () => {
        $('.nav').animate({ right: '-250px' });
      });
    }
  };
</script>
<!--<style>-->
<!--</style>-->

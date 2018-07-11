<template>
  <div class="nav">
    <img src="../assets/img/icon/close.png" alt="关闭" class="close" @click="closeNav()">
    <ul class="link">
      <li v-for="item of navConfig" @click="closeNav()"><router-link :to="item.to" v-t="item.name"></router-link></li>
    </ul>
    <ul class="share">
      <!-- <li><a href="#"><img src="../assets/img/icon/weixin-red.png" alt=""></a></li>
      <li><a href="#"><img src="../assets/img/icon/be-red.png" alt=""></a></li>
      <li><a href="#"><img src="../assets/img/icon/1.png" alt=""><img src="../assets/img/main/1.png" class="qr" alt=""></a></li>
      <li><a href="#"><img src="../assets/img/icon/2.png" alt=""><img src="../assets/img/main/2.png" class="qr" alt=""></a></li>
      <li><a href="#"><img src="../assets/img/icon/3.png" alt=""><img src="../assets/img/main/3.png" class="qr" alt=""></a></li> -->
      <li><img src="../assets/img/main/1.png" class="qr" alt=""><br>OIB公众号</li>
      <li><img src="../assets/img/main/2.png" class="qr" alt=""><br>美妆超级产品经理</li>
      <li><img src="../assets/img/main/3.png" class="qr" alt=""><br>人人做美妆</li>
    </ul>
    <div class="copyright">©2015 沪ICP备14026675号-1</div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  import navConfig from '../navConfig';
  import hub from '../utils/hub';
  
  export default {
    data() {
      return {
        navConfig
      };
    },
    created() {
      hub.$on('open-nav', () => {
        this.openNav();
      });
    },
    methods: {
      openNav() {
        $('.nav').animate({ right: '0' });
      },
      closeNav() {
        $('.nav').animate({ right: window.flagPC ? '-250px' : '-100vw' });
      }
    }
  };
</script>

<template>
  <div class="nav">
    <img src="../assets/img/icon/close.png" alt="关闭" class="close" @click="closeNav()">
    <ul class="link">
      <li v-for="item of navConfig" @click="closeNav()"><router-link :to="item.to" v-t="item.name"></router-link></li>
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
        $('.nav').animate({ right: '-250px' });
      }
    }
  };
</script>

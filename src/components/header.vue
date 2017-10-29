<template>
  <div class="header wrapper box-padding">
    <div class="bar-press">
      <div></div>
    </div>
    <div class="col-xs-2"><a href="index.html"><img src="../assets/img/main/logo-red.png" alt="" class="logo"></a></div>
    <div class="col-xs-8" id="page-name">{{activeNav}}</div>
    <div class="col-xs-2 corner">
      <div class="language"><a href="javascript:void(0);" lang="en">EN</a> <span>|</span> <a href="javascript:void(0);" lang="zh_cn">CN</a></div>
      <img src="../assets/img/icon/nav-red.png" alt="" class="nav-toggle" @click="openNav">
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import hub from '../utils/hub';
  import navConfig from '../navConfig';

  export default {
    computed: {
      activeNav() {
        return navConfig.find(item =>
          item.to.name.split('.')[0] === this.$route.name.split('.')[0]
        ).name;
      }
    },
    methods: {
      openNav() {
        hub.$emit('open-nav');
      }
    }
  };
</script>

<template>
  <div class="header wrapper" v-bind:class="{ 'box-padding' : isPC }">
    <div class="bar-press">
      <div></div>
    </div>
    <div class="col-sm-2 col-xs-4"><a href="index.html"><img src="../assets/img/main/logo-red.png" alt="" class="logo"></a></div>
    <div class="col-sm-8" v-if="isPC" id="page-name" v-t="activeNav"></div>
    <div class="col-sm-2 col-xs-8 corner">
      <div class="language">
        <a @click="changeLocale('en')">EN</a>
        <span>|</span>
        <a @click="changeLocale('zh_cn')">CN</a>
      </div>
      <img src="../assets/img/icon/nav-red.png" alt="" class="nav-toggle" @click="openNav">
    </div>
    <div class="col-xs-12" v-if="!isPC" id="page-name" v-t="activeNav"></div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import hub from '../utils/hub';
  import navConfig from '../navConfig';

  export default {
    data() {
      return {
        isPC: window.isPC
      };
    },
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
      },
      changeLocale(lang) {
        this.$i18n.locale = lang;
        const { name } = this.$route;
        this.$router.push({ name, params: { lang } });
      }
    }
  };
</script>
<style>
  .header .corner div a {
    cursor: pointer;
  }
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/main.less';
// import './main.css';
import App from './App';
import router from './router';
import messages from './local/messages';

if (window.isPC) {
  import('./styles/pc-main.less');
} else {
  import('./styles/mobile-main.less');
}

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  // locale: 'zh_cn', // set locale
  fallbackLocale: 'zh_cn',
  messages, // set locale messages
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App },
});

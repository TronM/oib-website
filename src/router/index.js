import Vue from 'vue';
import Router from 'vue-router';
import newsList from '@/pages/news/list/list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'newsList',
      component: newsList,
    },
  ],
});

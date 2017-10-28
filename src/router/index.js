import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index/index';
import about from '@/pages/about/index';
import newsList from '@/pages/news/list/list';
import worksList from '@/pages/works/list/list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/news',
      name: 'newsList',
      component: newsList,
    },
    {
      path: '/works',
      name: 'worksList',
      component: worksList,
    }
  ]
});

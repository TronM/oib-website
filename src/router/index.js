import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index/index';
import about from '@/pages/about/about';
import service from '@/pages/service/service';
import contact from '@/pages/contact/contact';
import newsList from '@/pages/news/list/list';
import newsDetail from '@/pages/news/detail/detail';
import workList from '@/pages/work/list/list';
import workDetail from '@/pages/work/detail/detail';

Vue.use(Router);

const root = Vue.component('root', {
  template: '<router-view></router-view>'
});

export default new Router({
  routes: [
    {
      path: '/:lang',
      name: 'root',
      component: root,
      children: [
        {
          path: '',
          name: 'index',
          component: index,
        },
        {
          path: 'about',
          name: 'about',
          component: about,
        },
        {
          path: 'contact',
          name: 'contact',
          component: contact,
        },
        {
          path: 'service',
          name: 'service',
          component: service,
        },
        {
          path: 'news',
          name: 'news.list',
          component: newsList,
        },
        {
          path: 'news/:id',
          name: 'news.detail',
          component: newsDetail,
        },
        {
          path: 'works',
          name: 'work.list',
          component: workList,
        },
        {
          path: 'work/:id',
          name: 'work.detail',
          component: workDetail,
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'root', params: { lang: 'zh_cn' } }
    }
  ]
});

<template>
  <div>
    <div class="wrapper news-detail">
      <div class="kv">
        <img :src="news.bannerImg" alt="">
      </div>
      <div class="row main box-padding">
        <div class="col-xs-2 side-column">
          <h3><span>NEWS</span></h3>
          <h4>{{news.title}}</h4>
        </div>
        <div class="col-xs-8 detail">
          <div class="date"><span>TIME</span>{{news.createdAt | dateFormat}}</div>
          <div v-html="news.contentHTML"></div>
          
          <br /><br /><br />
          <p>
            <strong>链接</strong><br />
            <strong>OIB念相设计官网</strong><br />
            <a href="http://www.nx-design.net" target="_blank">www.nx-design.net</a>
          </p>
          <br /><br /><br />
          <p>
            <strong>鸣谢</strong><br />
            <div v-for="item of news.acknowledgments">
              <strong>聚美丽</strong><br />
              <a href="http://www.jumeili.cn/News/View/21422.html" target="_blank">http://www.jumeili.cn/News/View/21422.html</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  
    <scroll-top></scroll-top>
  
    <ul class="other box-padding">
      <li v-for="item of recommendNews">
        <router-link :to="{ name: 'news.detail', params: { id: item.id } }">
          <div>
            <img :src="item.bannerImg">
            <div class="hover">
              <div class="box">
                <div class="middle">{{item.title}}</div>
              </div>
            </div>
          </div>
          <div class="circle"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import newsApi from '@/api/news';
  import dateFormat from '@/filters/date';
  import scrollTop from '@/components/scroll-top';

  export default {
    data() {
      return {
        news: {
          id: '1',
          title: '哈哈哈哈',
          createdAt: '2017-10-10 10:20:30',
          bannerImg: 'https://dummyimage.com/800X450/CC9',
          contentHTML: '',
          information: '', // 信息
          acknowledgments: [{ // 鸣谢
            name: '聚美丽',
            link: 'http://www.jumeili.cn/News/View/21422.html'
          }],
          enable: 1, // number, 是否启用，1是 0否
        },
        recommendNews: [{
          id: '3',
          title: '中国化妆品设计的国际首金',
          createdAt: '2017-10-10 10:20:30',
          bannerImg: 'http://test.tron-m.com/oib-api/resource/getResources.do?id=67',
          contentHTML: '',
          information: '', // 信息
          acknowledgments: [{ // 鸣谢
            name: '聚美丽',
            link: 'http://www.jumeili.cn/News/View/21422.html'
          }],
          enable: 1, // number, 是否启用，1是 0否
        }, {
          id: '4',
          title: '首届CBF召开，专注于美妆消费者前瞻性视觉洞察',
          createdAt: '2017-10-10 10:20:30',
          bannerImg: 'http://test.tron-m.com/oib-api/resource/getResources.do?id=68',
          contentHTML: '',
          information: '', // 信息
          acknowledgments: [{ // 鸣谢
            name: '聚美丽',
            link: 'http://www.jumeili.cn/News/View/21422.html'
          }],
          enable: 1, // number, 是否启用，1是 0否
        }]
      };
    },
    filters: {
      dateFormat
    },
    components: {
      scrollTop
    },
    methods: {
      async fetchNews() {
        const { id } = this.$route.params;
        this.news = await newsApi.get(id);
      }
    },
    watch: {
      $route() {
        this.fetchNews();
      }
    },
    created() {
      this.fetchNews();
    }
  };
</script>

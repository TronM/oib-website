<template>
  <div>
    <div class="wrapper news-detail">
      <div class="kv">
        <img :src="$t('news.detail.bannerImg')" alt="">
      </div>
      <div class="row main box-padding">
        <div class="col-sm-2 col-xs-12 side-column">
          <h3><span>{{ $t('pages.news.label') }}</span></h3>
          <h4>{{ $t('news.detail.title') }}</h4>
        </div>
        <div class="col-sm-8 col-xs-12 detail">
          <div class="date"><span>{{ $t('pages.public.time') }}</span>{{news.createdAt | dateFormat}}</div>
          <div v-html="$t('news.detail.contentHTML')"></div>
          
          <br /><br /><br />
          <p>
            <strong>{{ $t('pages.news.link') }}</strong><br />
            <strong>OIB念相设计官网</strong><br />
            <a href="http://www.nx-design.net" target="_blank">www.nx-design.net</a>
          </p>
          <br /><br /><br />
          <p>
            <strong >{{ $t('pages.news.acknowledgments') }}</strong><br />
            <div v-for="(item, index) of news.acknowledgments">
              <strong>{{ $t(`news.detail.acknowledgments[${index}].name`) }}</strong><br />
              <a :href="$t(`news.detail.acknowledgments[${index}].name`)" target="_blank">{{ $t(`news.detail.acknowledgments[${index}].name`) }}</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  
    <scroll-top></scroll-top>
  
    <op-swiper :slide-list="recommendSlideList" :options="swiperOptions"></op-swiper>
  
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
  import opSwiper from '@/components/op-swiper';

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
        swiperOptions: {
          slidesPerView: 2,
          spaceBetween: 30,
          effect: 'slide'
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
      scrollTop,
      opSwiper
    },
    computed: {
      recommendSlideList() {
        return this.recommendNews.map(item => item.bannerImg);
      }
    },
    methods: {
      async fetchNews() {
        const { id } = this.$route.params;
        this.news = await newsApi.get(id);
        ['zh_cn', 'en'].forEach((lang) => {
          this.$i18n.mergeLocaleMessage(lang, {
            news: {
              detail: Object.assign({}, this.news, this.news[lang])
            }
          });
        });
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

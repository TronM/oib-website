<template>
  <div class="wrapper news">
    <ul class="list">
      <li v-for="(item, index) of news">
        <a :href="`news-detail.${item.index}.html?id=${item.id}`">
          <div class="box">
            <div class="middle">
              <h3>VOL.{{item.index}} | {{item.title}}<span data-i18n="nav.home"></span></h3>
              <span>{{item.createdTime}}</span>
            </div>
          </div>
        </a>
      </li>
      <infinite-loading @infinite="infiniteHandler">
        <span slot="no-more">
          There is no more News :(
        </span>
      </infinite-loading>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import axios from 'axios';
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    components: {
      InfiniteLoading
    },
    data() {
      return {
        news: [{
          title: '彩妆购物者视觉行为研究报告重磅发布',
          createdTime: '2017Y 07M 22D',
          index: 0
        }, {
          title: '未来彩妆零售怎么玩？这个红研究室说了算',
          createdTime: '2017Y 05M 25D',
          index: 0
        }, {
          title: '首届CBF召开，专注于美妆消费者前瞻性视觉洞察',
          createdTime: '2017Y 05M 24D',
          index: 0
        }, {
          title: '中国化妆品设计的国际首金',
          createdTime: '2016Y 09M 24D',
          index: 0
        }],
        currentPage: 1,
        pageSize: 10
      };
    },
    created() {
      this.loadMoreData();
    },
    methods: {
      infiniteHandler($state) {
        this.loadMoreData().then(({ content, totalElements }) => {
          if (content && content.length && this.news.length < totalElements) {
            $state.loaded();
            return;
          }
          $state.complete();
        });
      },
      loadMoreData() {
        return axios.get('http://localhost:9999/oib-api/newses', {
          params: {
            page: this.currentPage,
            rows: this.pageSize
          }
        }).then(({ data }) => {
          this.currentPage += 1;
          const { content } = data.data;
          this.news = this.news.concat(content.map((item, index) =>
             Object.assign({}, item, { index: content.length - index })
          ));
          return data.data;
        });
      }
    }
  };
</script>
<!--<style>-->
<!--</style>-->

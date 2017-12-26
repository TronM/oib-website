<template>
  <div class="wrapper news">
    <ul class="list" v-if="news.length">
      <li v-for="(item, index) of news">
        <router-link :to="{ name: 'news.detail', params: { id: item.id } }">
          <div class="box">
            <div class="middle">
              <h3>VOL.{{item.index}} | {{ $t(`news.list[${index}].title`) }}</h3>
              <span>{{item.createdAt | dateFormat}}</span>
            </div>
          </div>
        </router-link>
      </li>
      <infinite-loading @infinite="infiniteHandler">
        <span slot="no-more">
          {{ $t('pages.news.no_more_result') }}
        </span>
      </infinite-loading>
    </ul>
    <div v-else class="no-more-result">{{ $t(`pages.news.no_more_result`) }}</div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import newsApi from '@/api/news';
  import dateFormat from '@/filters/date';
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    components: {
      InfiniteLoading
    },
    data() {
      return {
        news: [],
        currentPage: 1,
        pageSize: 10
      };
    },
    filters: {
      dateFormat
    },
    created() {
      this.loadMoreData();
    },
    methods: {
      infiniteHandler($state) {
        this.loadMoreData().then(({ content, totalElements }) => {
          if (content && content.length && this.news.length <= totalElements) {
            $state.loaded();
            return;
          }
          $state.complete();
        });
      },
      loadMoreData() {
        return newsApi.list({
          enable: 1,
          page: this.currentPage,
          rows: this.pageSize
        }).then((data) => {
          this.currentPage += 1;
          const { content } = data;
          this.news = this.news.concat(content.map((item, index) =>
            Object.assign({}, item, { index: content.length - index })
          ));
          // 设置国际化字符内容
          ['zh_cn', 'en'].forEach((lang) => {
            this.$i18n.mergeLocaleMessage(lang, {
              news: {
                list: this.news.map(item => Object.assign({}, item, item[lang]))
              }
            });
          });
          return data;
        });
      }
    }
  };
</script>

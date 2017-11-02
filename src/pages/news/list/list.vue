<template>
  <div class="wrapper news">
    <ul class="list">
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
          if (content && content.length && this.news.length < totalElements) {
            $state.loaded();
            return;
          }
          $state.complete();
        });
      },
      loadMoreData() {
        return newsApi.list({
          page: this.currentPage,
          rows: this.pageSize
        }).then((data) => {
          this.currentPage += 1;
          const { content } = data;
          this.news = this.news.concat(content.map((item, index) =>
             Object.assign({}, item, { index: content.length - index })
          ));
          this.$i18n.mergeLocaleMessage('zh_cn', { news: { list: this.news } });
          this.$i18n.mergeLocaleMessage('en', { news: { list: [{ title: 'haha' }] } });
          console.log('ppp', this.$i18n.getLocaleMessage('zh_cn'));
          return data;
        });
      }
    }
  };
</script>

<template>
  <div class="wrapper works">
    <template v-if="worksCollection.length">
      <div class="row" v-for="(row, rowIndex) of worksCollection">
        <div class="col-sm-4 col-xs-12"  v-for="(item, colIndex) of row">
          <router-link :to="{ name: 'work.detail', params: { id: item.id } }">
            <img :src="$t(`works.list[${3 * rowIndex + colIndex}].cover`) || 'https://dummyimage.com/800X450/F00'" alt="">
            <div class="hover">
              <h4>{{ $t(`works.list[${3 * rowIndex + colIndex}].name`) }}</h4>
              <p>{{ $t(`works.list[${3 * rowIndex + colIndex}].coverText`) }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </template>
    <div v-else class="no-more-result">{{ $t(`pages.work.no_more_result`) }}</div>
  </div>
</template>
<script>
  import workApi from '@/api/work';
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    components: {
      InfiniteLoading
    },
    computed: {
      worksCollection() {
        return this.works.reduce((preResult, item, index) => {
          if (index % 3) {
            preResult[parseInt(index / 3, 10)].push(item);
          } else {
            preResult.push([item]);
          }
          return preResult;
        }, []);
      }
    },
    data() {
      return {
        works: [],
        currentPage: 1,
        pageSize: 100
      };
    },
    created() {
      this.loadMoreData();
    },
    methods: {
      infiniteHandler($state) {
        this.loadMoreData().then(({ content, totalElements }) => {
          if (content && content.length && this.works.length < totalElements) {
            $state.loaded();
            return;
          }
          $state.complete();
        });
      },
      loadMoreData() {
        return workApi.list({
          enable: 1,
          page: this.currentPage,
          rows: this.pageSize
        }).then((data) => {
          this.currentPage += 1;
          const { content } = data;
          this.works = this.works.concat(content.map((item, index) =>
             Object.assign({}, item, { index: content.length - index })
          ));
          // 设置国际化字符内容
          ['zh_cn', 'en'].forEach((lang) => {
            this.$i18n.mergeLocaleMessage(lang, {
              works: {
                list: this.works.map(item => Object.assign({}, item, item[lang]))
              }
            });
          });
          return data;
        });
      }
    }
  };
</script>

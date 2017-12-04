<template>
  <div class="wrapper works">
    <div class="row" v-for="(row, rowIndex) of worksCollection">
      <div class="col-sm-4 col-xs-12"  v-for="(item, colIndex) of row">
        <router-link :to="{ name: 'work.detail', params: { id: item.id } }">
          <img :src="$t(`works.list[${3 * rowIndex + colIndex}].cover`) || 'https://dummyimage.com/800X450/F00'" alt="">
          <div class="hover">
            <h4>{{ $t(`works.list[${3 * rowIndex + colIndex}].name`) }}</h4>
            <p>{{ $t(`works.list[${3 * rowIndex + colIndex}].coverText`) }}</p>
            <div>欧诗漫 产品设计</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
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
//        works: [{
//          id: '1',
//          name: '哈哈哈哈',
//          createdAt: '2017-10-10 10:20:30', // string（或者时间戳也可以，但最好都统一用一种）创建时间,
//          bannerImg: 'https://dummyimage.com/800X450/FF0',  // string, 头图链接
//          contentHTML: '<div>哈ppp哈哈</div>', // string, 正文
//          cover: 'https://dummyimage.com/800X450/FF0', // string, 封面链接
//          coverText: 'BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -
//  NAMING - TVC COMMERCIAL - DIGITAL', // string, 封面文字
//          coverVideoUrl: '', // string, 封面视频地址
//          enable: 1, // number, 是否启用，1是 0否
//          sort: 10  // number, 排序顺序
//        }, {
//          id: '2',
//          name: 'OSM',
//          createdAt: '2017-10-10 10:20:30',
//          bannerImg: 'https://dummyimage.com/800X450/F0F',
//          contentHTML: '<div>哈哈哈</div>',
//          cover: 'https://dummyimage.com/800X450/F0F',
//          coverText: 'BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -
//  NAMING - TVC COMMERCIAL - DIGITAL',
//          coverVideoUrl: '',
//          enable: 1,
//          sort: 20
//        }, {
//          id: '3',
//          name: 'OSM',
//          createdAt: '2017-10-10 10:20:30',
//          bannerImg: 'https://dummyimage.com/800X450/CCC',
//          contentHTML: '<div>哈哈哈</div>',
//          cover: 'https://dummyimage.com/800X450/CCC',
//          coverText: 'BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -
//  NAMING - TVC COMMERCIAL - DIGITAL',
//          coverVideoUrl: '',
//          enable: 1,
//          sort: 30
//        }],
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
          if (content && content.length && this.works.length < totalElements) {
            $state.loaded();
            return;
          }
          $state.complete();
        });
      },
      loadMoreData() {
        return workApi.list({
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

<template>
  <div class="wrapper works">
    <div class="row" v-for="row of worksCollection">
      <div class="col-xs-4" v-for="item of row">
        <a href="works-detail.html">
          <img :src="item.cover" alt="">
          <div class="hover">
            <h4>{{item.name}}</h4>
            <p>{{item.coverText}}</p>
            <div>欧诗漫 产品设计</div>
          </div>
        </a>
      </div>
    </div>
    <!--<div class="row">-->
      <!--<div class="col-xs-4">-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/FF0" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
      <!--<div class="col-xs-4">-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/F0F" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
      <!--<div class="col-xs-4">-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/0FF" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
      <!--<div class="col-xs-4">-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/345" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/789" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
      <!--<div class="col-xs-4">-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/135" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X450/246" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
      <!--<div class="col-xs-4">-->
        <!--<a href="works-detail.html">-->
          <!--<img src="https://dummyimage.com/800X900/CCC" alt="">-->
          <!--<div class="hover">-->
            <!--<h4>OSM</h4>-->
            <!--<p>BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL</p>-->
            <!--<div>欧诗漫 产品设计</div>-->
          <!--</div>-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import axios from 'axios';
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
        works: [{
          id: '1',
          name: '哈哈哈哈',
          createdAt: '2017-10-10 10:20:30', // string（或者时间戳也可以，但最好都统一用一种）创建时间,
          bannerImg: 'https://dummyimage.com/800X450/FF0',  // string, 头图链接
          contentHTML: '<div>哈ppp哈哈</div>', // string, 正文
          cover: 'https://dummyimage.com/800X450/FF0', // string, 封面链接
          coverText: 'BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL', // string, 封面文字
          coverVideoUrl: '', // string, 封面视频地址
          enable: 1, // number, 是否启用，1是 0否
          sort: 10  // number, 排序顺序
        }, {
          id: '2',
          name: 'OSM',
          createdAt: '2017-10-10 10:20:30',
          bannerImg: 'https://dummyimage.com/800X450/F0F',
          contentHTML: '<div>哈哈哈</div>',
          cover: 'https://dummyimage.com/800X450/F0F',
          coverText: 'BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL',
          coverVideoUrl: '',
          enable: 1,
          sort: 20
        }, {
          id: '3',
          name: 'OSM',
          createdAt: '2017-10-10 10:20:30',
          bannerImg: 'https://dummyimage.com/800X450/CCC',
          contentHTML: '<div>哈哈哈</div>',
          cover: 'https://dummyimage.com/800X450/CCC',
          coverText: 'BOTTLE CONCEPT DESIGN - PACKAGING - MARKETING -  NAMING - TVC COMMERCIAL - DIGITAL',
          coverVideoUrl: '',
          enable: 1,
          sort: 30
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
          if (content && content.length && this.works.length < totalElements) {
            $state.loaded();
            return;
          }
          $state.complete();
        });
      },
      loadMoreData() {
        return axios.get('http://localhost:9999/oib-api/works', {
          params: {
            page: this.currentPage,
            rows: this.pageSize
          }
        }).then(({ data }) => {
          this.currentPage += 1;
          const { content } = data.data;
          this.works = this.works.concat(content.map((item, index) =>
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

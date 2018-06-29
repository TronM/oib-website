<template>
  <div>
    <div class="wrapper works-detail">
      <div class="kv">
        <img :src="$t('work.detail.bannerImg')" alt="" data-toggle="modal" data-target="#myModal">
      </div>
      <div class="row main box-padding">
        <div class="col-sm-2 col-xs-12 side-column">
          <h3><span>{{ $t('pages.work.project') }}</span></h3>
          <h4>{{ $t('work.detail.name') }}</h4>
        </div>
        <div class="col-sm-8 col-xs-12 detail">
          <!-- <div class="date"><span>{{ $t('pages.public.time') }}</span>{{work.createdAt | dateFormat}}</div> -->
          <div style="margin-bottom: 80px;" v-html="$t('work.detail.contentHTML')"></div>

          <div class="row">
            <div class="col-sm-6 col-xs-12">
              <h4>SERVICE</h4>
              <br>
              <div v-for="item of $t('work.detail.serviceNames')">{{ item }}</div>
            </div>
            <div class="col-sm-6 col-xs-12">
              <h4>CREDITS</h4>
              <br>
              <div class="row" v-for="item of $t('work.detail.credits')">
                <span>{{ item.job }}</span>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal container fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">视频信息</h4>
        </div>
        <div class="modal-body">
          <embed :src="$t('work.detail.coverVideoUrl')" width="100%" height="100%" allowfullscreen="true" flashvars="isAutoPlay=true" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash">
        </div>
      </div>
    </div>

    <scroll-top></scroll-top>

    <div class="other box-padding">
      <op-swiper :slide-list="recommendedWorks" :options="swiperOptions">
        <router-link slot-scope="{ item }" :to="{ name: 'work.detail', params: { id: item.id } }">
          <div>
            <img :src="item.bannerImg">
            <div class="hover">
              <div class="box">
                <div class="middle">{{item.name}}</div>
              </div>
            </div>
          </div>
          <div class="circle"></div>
        </router-link>
      </op-swiper>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import workApi from '@/api/work';
  import serviceTagApi from '@/api/service-tag';
  import dateFormat from '@/filters/date';
  import scrollTop from '@/components/scroll-top';
  import opSwiper from '@/components/op-swiper';

  export default {
    data() {
      return {
        serviceTagOptions: [],
        work: {
          id: '1',
          name: '',
          createdAt: '',
          bannerImg: 'https://dummyimage.com/800X450/F0F',
          contentHTML: '<div>加载中...</div>',
          cover: 'https://dummyimage.com/800X450/F0F',
          coverText: '',
          coverVideoUrl: '',
          enable: 1,
          serviceNames: [],
          sort: 0
        },
        swiperOptions: {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: '',
          effect: 'slide'
        },
        recommendedWorks: []
      };
    },
    filters: {
      dateFormat
    },
    components: {
      scrollTop,
      opSwiper
    },
    methods: {
      async fetchWork() {
        const { id } = this.$route.params;
        this.work = await workApi.get(id);
        this.recommendedWorks = (await workApi.recommendedList({ id }))
          .map(item => Object.assign(item, item[this.$route.params.lang]));
        const langKeys = ['label', 'enLabel'];
        ['zh_cn', 'en'].forEach((lang, index) => {
          this.work.serviceNames = this.serviceTagOptions
            .filter(item => this.work.services.indexOf(item.id) > -1)
            .map(item => item[langKeys[index]]);
          this.$i18n.mergeLocaleMessage(lang, {
            work: {
              detail: Object.assign({}, this.work, this.work[lang])
            }
          });
        });
      }
    },
    watch: {
      $route() {
        this.fetchWork();
      }
    },
    async created() {
      this.serviceTagOptions = (await serviceTagApi.list()).content;
      this.fetchWork();
    }
  };
</script>

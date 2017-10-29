<template>
  <div>
    <div class="wrapper works-detail">
      <div class="kv">
        <img :src="work.bannerImg" alt="" data-toggle="modal" data-target="#myModal">
      </div>
      <div class="row main box-padding">
        <div class="col-xs-2 side-column">
          <h3><span>PROJECT</span></h3>
          <h4>{{work.name}}</h4>
        </div>
        <div class="col-xs-8 detail">
          <div class="date"><span>TIME</span>{{work.createdAt | dateFormat}}</div>
          <div v-html="work.contentHTML"></div>
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
          <embed :src="work.coverVideoUrl" width="100%" height="100%" allowfullscreen="true" flashvars="isAutoPlay=true" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash">
        </div>
      </div>
    </div>
  
    <scroll-top></scroll-top>
  
    <ul class="other box-padding">
      <li v-for="item of recommendWorks">
        <router-link :to="{ name: 'work.detail', params: { id: item.id } }">
          <div>
            <img :src="item.cover">
            <div class="hover">
              <div class="box">
                <div class="middle">{{item.name}}</div>
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
  import workApi from '@/api/work';
  import dateFormat from '@/filters/date';
  import scrollTop from '@/components/scroll-top';
  
  export default {
    data() {
      return {
        work: {
          id: '',
          name: '',
          createdAt: '',
          bannerImg: 'https://dummyimage.com/800X450/F0F',
          contentHTML: '<div>加载中...</div>',
          cover: 'https://dummyimage.com/800X450/F0F',
          coverText: '',
          coverVideoUrl: '',
          enable: 1,
          sort: 0
        },
        recommendWorks: [{
          id: '1',
          name: 'test',
          createdAt: '',
          bannerImg: 'https://dummyimage.com/800X450/CC9',
          contentHTML: '<div>加载中...</div>',
          cover: 'https://dummyimage.com/800X450/CC9',
          coverText: '',
          coverVideoUrl: '',
          enable: 1,
          sort: 0
        }, {
          id: '2',
          name: 'test',
          createdAt: '',
          bannerImg: 'https://dummyimage.com/800X450/99C',
          contentHTML: '<div>加载中...</div>',
          cover: 'https://dummyimage.com/800X450/99C',
          coverText: '',
          coverVideoUrl: '',
          enable: 1,
          sort: 0
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
      async fetchWork() {
        const { id } = this.$route.params;
        this.work = await workApi.get(id);
      }
    },
    watch: {
      $route() {
        this.fetchWork();
      }
    },
    created() {
      this.fetchWork();
    }
  };
</script>

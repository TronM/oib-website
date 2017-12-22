<template>
  <div class="wrapper about">
    <op-swiper :slide-list="slideList" :options="{}"></op-swiper>
    
    <div class="text box-padding"><img src="../../assets/img/about/text.png" alt=""></div>
    
    <div class="kv box-padding clearfix">
      <div class="col-sm-3 col-xs-6 item">
        <h4>ESTABLISHED</h4>
        <span>2013</span>
        <a href="">Find and join us</a>
      </div>
      <div class="col-sm-3 col-xs-6 item">
        <h4>PROJECTS</h4>
        <span>200 +</span>
        <a href="">Explore our work</a>
      </div>
      <div class="col-sm-3 col-xs-6 item">
        <h4>BRANDS</h4>
        <span>100 +</span>
        <a href="">Search our clients</a>
      </div>
      <div class="col-sm-3 col-xs-6 item">
        <h4>INCOME</h4>
        <span>200Billion +</span>
        <a href="">Contact us</a>
      </div>
      <div class="col-xs-12 logo"><img src="../../assets/img/about/logo.png" alt="" v-show="!isPC"></div>
    </div>
    
    <ul class="list">
      <li v-for="item of listData">
        <h3>{{ $t(item.title) }}</h3>
        <div v-html="$t(item.detailHtml)"></div>
      </li>
      <li>
        <h3>{{ $t('pages.about.people') }}</h3>
        <div class="people">
          <div class="row" v-for="item of peopleList">
            <div class="col-sm-5 col-xs-12 photo"><img :src="item.photoUrl" alt=""></div>
            <div class="col-sm-7 col-xs-12 info">
              <h4>{{item.name}}<span>{{item.title}}</span></h4>
              <p>{{item.intro}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  import aboutApi from '@/api/about';
  import opSwiper from '@/components/op-swiper';
  
  export default {
    data() {
      return {
        isPC: window.isPC,
        slideList: [
          require('../../assets/img/about/1.jpg'),
          require('../../assets/img/about/2.jpg'),
          require('../../assets/img/about/3.jpg'),
          require('../../assets/img/about/4.jpg')
        ],
        about: {},
        listData: [{
          key: 'introductionHTML',
          title: 'pages.about.introduction',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'serviceHTML',
          title: 'pages.about.service',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'compositionHTML',
          title: 'pages.about.composition',
          detailHtml: `<div>
          OIB.CHINA总部位于上海浦西世博园区超过1200平米的OIB时尚创新中心，在广州拥有品牌策略与创意供应链中心，在日本神户拥有产品研发中心。
          
          <br><br>公司旗下拥有吴志刚品牌策划（W-INSIGHT@OIB）、念相设计（OIB.NX-DESIGN）、OIB.CHINA创意供应链中心、中日化妆品创新中心、翊飞电子商务、美研所、如芮、楚初等众多以产品创意人为核心的品牌创意供应链管理与服务公司。
          
          <br><br>W-INSIGHT@OIB：致力于思考与实践，在日新月异的产业变革下，智慧地进行品牌建设与品牌营销，帮助客户在中国复杂多变的消费者市场和新兴渠道中发现机遇，精准定位品牌的市场目标，让客户的品牌有所作为，并使之传承百年。我们在时尚消费品领域兼备敏锐的本土和国际视野，并依靠不断创新的众多工具来完成此理想。
          
          <br><br>OIB.NX-DESIGN：深入研习中国消费者的视觉审美变化，形成对中国消费美学的深刻认知及美学主张。及时洞悉中国个性与渠道最新动向，并将视觉呈现准确匹配渠道销售特征。将视觉呈现环节与OIB策略咨询优势紧密结合，确保商业目的的有效达成。立足时尚消费品行业，并不断加强专业壁垒，形成业内的绝对领导优势。
          
          <br><br>OIB.CHINA创意供应链中心：信息化扁平的时代，依靠信息不对称而实现资源配置的传统供应系统迅速没落。我们认为，针对新时代更加个性与细分的新一代用户，只有通过“创意”了来激化“创一代”的热情、以“创新、创意”为核心驱动供应链系统各个环节有效增值、为用户带来真正触动内心的品牌，才是新时代所需要的“创意供
        
        </div>`
        }, {
          key: 'parterHTML',
          title: 'pages.about.parter',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'philosophyHTML',
          title: 'pages.about.philosophy',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'clientsHTML',
          title: 'pages.about.clients',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'ipHTML',
          title: 'pages.about.ip',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'visionHTML',
          title: 'pages.about.vision',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'awards',
          title: 'pages.about.awards',
          detailHtml: '<div>detail</div>'
        }],
        peopleList: [{
          photoUrl: require('../../assets/img/about/wuzhigang.jpg'),
          name: '吴志刚',
          title: 'OIB总经理',
          intro: '曾任上市公司、知名企业总经理、市场总监等职，并同时担任中国百货商业协会洗涤化妆品分会副秘书长、中国化妆品市场营销中心副主任、《化妆品观察》、《中国美妆》主笔，《中国化妆品》、《日用化学工业》、《日用化学品科学》编委。曾获中国杰出营销人金鼎奖、中国广告长城奖、中国化妆品营销十大策划人等荣誉。2013年创立广州吴志刚品牌策划有限公司，后与上海念相设计等企业共同组建集团公司OIB。'
        }, {
          photoUrl: require('../../assets/img/about/jiangguozheng.jpg'),
          name: '姜国政',
          title: 'OIB副总经理 | 念相设计创始人',
          intro: '曾在法国巴黎centdegres奢侈品设计公司任职，并协助该公司进入上海，担任首席设计师。先后参与了纪梵希香水、Jean Galliano香水、佰草集护肤系列、自然堂护肤系列、彩妆系列、美素全案，马爹利全案，以及KRUPS厨房家电，SUPOR苏泊尔家电和SEIKO精工女表等诸多知名品牌的设计工作。2013年初在上海创建念相设计品牌（上海）有限公司，后与广州吴志刚品牌策划有限公司等企业共同组建OIB。'
        }, {
          photoUrl: require('../../assets/img/about/chenjun.jpg'),
          name: '陈俊',
          title: 'OIB供应链事业群总监',
          intro: '曾任上海美颂化妆品有限公司设计总监，负责芳草集产品与用户体验设计。并曾负责小护士、索芙特品牌设计成品输出工作，拥有超过十五年的化妆品行业产品开发设计及形象管理工作经验，有极为丰富的创意管理及供应链管理经验。现任OIB供应链事业群总监、OIB旗下广州吴志刚品牌策划有限公司副总经理、OIB旗下盛世传美机构创意总监及供应链负责人。'
        }, {
          photoUrl: require('../../assets/img/about/nongqian.jpg'),
          name: '农倩',
          title: 'OIB策略事业群总监',
          intro: '曾就职于化妆品上市公司，拥有超过十年的化妆品策划及品牌管理工作经验。2014年出任OIB策略总监，擅长消费者洞察与品牌策略体系构建，对数字化时代下的品牌传播与商业模式创新有深刻洞见。服务过美妆、个护、母婴、食品等不同品类诸多品牌，是OLAY、妙巴黎、玛丽黛佳、百雀羚、韩后、法兰琳卡、娇兰佳人、帮宝适等项目的主要负责人。'
        }, {
          photoUrl: require('../../assets/img/about/chendan.jpg'),
          name: '陈丹',
          title: 'OIB创意事业群总监',
          intro: '专注时尚美妆行业多年，曾在知名公司任职创意总监，服务过联合利华、嗳呵、法国UDV旗下香水品牌、云南白药及集团旗下品牌养元青、千草堂、锐度、三草两木、佰草童话等诸多知名品牌。2014年出任OIB创意总监至今，服务了韩束、红色小象、一叶子、珀莱雅、欧诗漫、阿芙、相宜本草、百雀羚、韩后、法兰琳卡等国内知名美妆。'
        }, {
          photoUrl: require('../../assets/img/about/chendan.jpg'),
          name: '魏琳凌',
          title: 'OIB商务总监',
          intro: '曾任知名媒体上市公司市场副总监，参与公司收、并购等媒体大事件，成功谈判与腾讯世博、第一财经年度经济人物颁奖盛典等媒体合作项目，拥有十年时尚、传媒行业工作经验。2014年出任OIB商务总监，成功谈判业内80%品牌客户，与欧莱雅、上美、欧诗漫、相宜本草、百雀羚、伽蓝、珀莱雅、韩后、如涵电商等知名化妆品集团建立了长久战略合作关系。'
        }]
      };
    },
    components: {
      opSwiper
    },
    mounted() {
      $('.about .list h3')
        .on('mouseenter', function () {
          $(this).addClass('active');
        })
        .on('mouseleave', function () {
          $(this).removeClass('active');
        })
        .on('click', function () {
          $(this).next().toggle();
        });
    },
    async created() {
      this.about = await aboutApi.get();
      if (this.about.zh_cn || this.about.en) {
        this.listData = this.listData.map(item => Object.assign(item, {
          detailHtml: `about.detail.${item.key}`
        }));
        ['zh_cn', 'en'].forEach((lang) => {
          this.$i18n.mergeLocaleMessage(lang, {
            about: {
              detail: Object.assign({}, this.about, this.about[lang])
            }
          });
        });
      }
    }
  };
</script>

<template>
  <div class="wrapper about">
    <op-swiper :slide-list="slideList"></op-swiper>

    <div class="text box-padding"><img src="../../assets/img/about/text.png" alt=""></div>

    <div class="kv box-padding clearfix">
      <div class="col-sm-3 col-xs-6 item">
        <h4>ESTABLISHED</h4>
        <span>2013</span>
        <router-link to="contact">Find and join us</router-link>
      </div>
      <div class="col-sm-3 col-xs-6 item">
        <h4>PROJECTS</h4>
        <span>200 +</span>
        <router-link to="works">Explore our work</router-link>
        <a href=""></a>
      </div>
      <div class="col-sm-3 col-xs-6 item">
        <h4>BRANDS</h4>
        <span>100 +</span>
        <router-link to="service">Search our clients</router-link>
      </div>
      <div class="col-sm-3 col-xs-6 item">
        <h4>INCOME</h4>
        <span>200Billion +</span>
        <router-link to="contact">Contact us</router-link>
      </div>
      <!-- <div class="col-xs-12 logo"><img src="../../assets/img/about/logo.png" alt="" v-show="!isPC"></div> -->
    </div>

    <ul class="list">
      <li v-for="item of listData">
        <h3>{{ $t(item.title) }}</h3>
        <div v-html="$t(item.detailHtml)" class="perview-html"></div>
      </li>
      <li>
        <h3>{{ $t('pages.about.people') }}</h3>
        <div class="people">
          <div class="row" v-for="item of peopleList">
            <div class="col-sm-5 col-xs-12 photo"><img :src="item.photoUrl" alt=""></div>
            <div class="col-sm-7 col-xs-12 info">
              <h4>{{item.name}}<span>{{item.title}}</span></h4>
              <p v-html="item.intro"></p>
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
        slideList: [],
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
          key: 'parterHTML',
          title: 'pages.about.parter',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'clientsHTML',
          title: 'pages.about.clients',
          detailHtml: '<div>detail</div>'
        }, {
          key: 'awardHTML',
          title: 'pages.about.awards',
          detailHtml: '<div>detail</div>'
        }],
        peopleList: [{
          photoUrl: require('../../assets/img/about/wuzhigang.jpg'),
          name: '吴志刚',
          title: 'OIB.China 创始人',
          intro: '曾任上市公司与知名企业总经理、市场总监、事业部总经理，中国百货商业协会洗涤化妆品分会副秘书长；中国化妆品市场营销中心副主任；《化妆品观察》《中国美妆》主笔；《中国化妆品》《日用化学工业》《日用化学品科学》编委；中国化妆品营销十大策划人；荣获中国杰出营销人金鼎奖和中国广告长城奖。'
        }, {
          photoUrl: require('../../assets/img/about/chenjun.jpg'),
          name: '陈俊',
          title: '创意及供应链事业群总监',
          intro: '超过二十年的化妆品行业产品开发设计及形象管理工作经历，有极为丰富的创意管理及供应链管理经验，曾任几大知名上市化妆品公司设计总监，并负责过MaxFactor、BOURJOIS的爆品设计及生产输出工作，OPPO、VIVO特供礼盒的生产输出工作等。'
        }, {
          photoUrl: require('../../assets/img/about/aiwentao.jpg'),
          name: '艾文涛',
          title: '艺术总监',
          intro: '多年品牌创意设计及品牌视觉管理服务经验，服务品牌均为各行业领导品牌，长期服务欧洲最大的供热集团德国威能／中国智能手机领导品牌VIVO／休闲食品领军品牌周黑鸭等，同时帮助多个创新品牌建立品牌定位策略及美学体系。'
        }, {
          photoUrl: require('../../assets/img/about/nongqian.jpg'),
          name: '农倩',
          title: '整合营销事业群总监',
          intro: '中山大学工商管理硕士，化妆品行业从业十年，具备甲方和乙方双重工作经历。2013年加入OIB.CHINA至今，历任玛丽黛佳、资生堂、百雀羚、法兰琳卡、妙巴黎等逾30个品牌的策略与整合营销传播项目负责人，擅长化妆品与时尚消费品领域的消费者洞察与品牌体系构建，亦对数字时代下的女性内容营销有较为深刻的洞见。'
        }, {
          photoUrl: require('../../assets/img/about/panliang.jpg'),
          name: '潘良',
          title: '商业智慧 & 品牌策略总监',
          intro: '多年品牌定位策划以及渠道B2B内容营销推广经验，2014年加入OIB－China，至今负责OLAY、玛丽黛佳、资生堂、帮宝适等知名品牌的渠道内容推广项目。熟悉化妆品专业渠道商业运作、零售研究、渠道内容推广、渠道活动策划、数字化落地营销手段、终端人员提升方法。'
        }, {
          photoUrl: require('../../assets/img/about/linzhanhua.jpg'),
          name: '林湛华',
          title: '超级产品策略总监',
          intro: '曾任职于品牌市场部、广告公司及媒体公司，熟懂产品开发及营销的整体链条运作，对产品差异卖点打造 、消费者营销语言转化、商业渠道突破拥有丰富实操经验。2014年加入OIB China，聚焦时尚行业，参与国内外知名品牌超级产品打造，涵盖法国妙巴黎天鹅绒彩唇釉、唇色编辑口红、韩后旗下达人面膜、娇兰佳人旗下植物日记植酵水光系列等。'
        }, {
          photoUrl: require('../../assets/img/about/tangxiaoxin.jpg'),
          name: '汤晓昕',
          title: '传播创意副总监',
          intro: '毕业于广东工业大学，数字媒体以及工商管理双学位，拥有艺术的敏锐触觉与市场的敏捷洞察力，与国内外知名导演有丰富的合作经历，担任过制片人与导演。<br>资历：<br>1.与泰国知名的皇室御用导演共同制作一系列的创意商业视频，在外网得到上百万的点击量。<br>2.制作过院线电影，曾与《龙门飞甲》、《一代宗师》、《忍者神龟》等知名制作团队合作，并参与票房营销工作完成当期票房目标。'
        }, {
          photoUrl: require('../../assets/img/about/zhuqianru.jpg'),
          name: '朱倩如',
          title: 'DAV创意副总监',
          intro: '毕业于伦敦艺术大学，数字艺术硕士学位，常年与不同领域的艺术家跨界合作拥有丰富的国内外短视频制作经验。<br>伦敦创业，曾联合创立海外设计师平台，负责所有视频影像制作，成为腾讯民艺类原创视频首推内容。<br>拥有自己的影像工作室，视频点击量达数百万，作品分别展览于上海、伦敦、米兰等城市。'
        }, {
          photoUrl: require('../../assets/img/about/fenghao.jpg'),
          name: '冯浩',
          title: '供应链总监',
          intro: '曾先后任职大型时尚集团公司，历任经理，总监，总经理一职；先后服务国内大型化妆品品牌：珀莱雅，美肤宝，花印，金芦荟，荟宝等多个品牌，并负责过Max Factor, BOURJOIS, OPPO, VIVO爆品礼盒的生产供应工作；十多年来专注于供应链统筹管理，生产实施，流程化操作，运营，运输物流等供应链管理体系。'
        }, {
          photoUrl: require('../../assets/img/about/yuxiaohu.jpg'),
          name: '余晓虎',
          title: '客户总监',
          intro: '毕业于中山大学岭南（大学）学院MBA，超过10年化妆品OEM/ODM销售管理经验，曾任职于国内知名化妆品OEM公司销售总监，非常熟悉了解化妆品市场及客户需求，具有多个项目全程操盘营销管理及执行的经验，能独立并熟练操作项目营销策划所涉及的全部环节，擅长客户开拓、维护、业务团队培养管理。'
        }, {
          photoUrl: require('../../assets/img/about/jinjing.jpg'),
          name: '金晶',
          title: '客户总监',
          intro: '2010 年曾任知名化妆品品牌经理。2013 年担任OIB.NX-DESIGN运营总监，全权负责公司的市场运作与管理，并参与公司首轮融资。2017年担任OIB.CHINA商务总监，具有较强的开拓和商务谈判能力。成功的服务众多知名品牌，并公司建立长久战略合作关系。'
        }, {
          photoUrl: require('../../assets/img/about/chenyanan.jpg'),
          name: '陈亚男',
          title: '商务客户总监',
          intro: '曾任于品牌销售部，4年甲方从业经验，管理全渠道运营及销售，于2016年加入OIB.CHINA客户部。全面负责OIB集团项目运营和管理，推动公司销售业务，具有较强的商务沟通力，在入职期间与国内外知名化妆品集团建立长久战略合作服务客户：百雀羚、三生花、娇兰佳人、资生堂、玛丽黛佳、隆力奇、青蛙集团、优禾生活、袋鼠妈妈等等。'
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
      this.slideList = (await aboutApi.getSliders()).sliders;
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

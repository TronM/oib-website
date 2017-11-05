<template>
  <div class="wrapper service">
    <op-swiper :slide-list="slideList"></op-swiper>
    
    <div class="category">
      <ul>
        <li :class="{ active: shownCategory.value === item.value }" class="item" v-for="item of categories" @click="chooseCategory(item)">
          {{ $t(item.label) }}
          <div v-if="item.options && item.options.length">
            <span></span>
            <ol>
              <li v-for="cItem of item.options" @click="chooseOption(cItem)">{{cItem.label}}</li>
            </ol>
          </div>
        </li>
      </ul>
      <div v-if="shownCategory.value === categories[0].value" class="result-letter">
        <div class="nav-letter">
          BRANDS<span @click="chooseOption('')">A~Z</span>:
          <span @click="chooseOption(item)" v-for="item of letterList">{{item}}</span>
        </div>
        <div class="result">
          <div class="row" v-for="(item, row) of letterResult">
            <div class="col-xs-offset-1 col-xs-1 letter">{{item.value}}</div>
            <div class="col-xs-10 list">
              <div class="col-xs-2" v-for="(cItem, col) of item.result">{{ cItem.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="shownCategory.value === categories[1].value" class="result-other box-padding">
        <div class="result" v-for="item of industryResult">
          <h3>{{item.value | formatEnums(industryOptions)}}</h3>
          <div class="row">
            <div class="col-xs-2" v-for="cItem of item.result">{{cItem.name}}</div>
          </div>
        </div>
      </div>
      <div v-if="shownCategory.value === categories[2].value" class="result-other box-padding">
        <div class="result" v-for="item of projectResult">
          <h3>{{item.value | formatEnums(projectOptions)}}</h3>
          <div class="row">
            <div class="col-xs-2" v-for="cItem of item.result">{{cItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  import customerApi from '@/api/customer';
  import industryApi from '@/api/industry';
  import serviceTagApi from '@/api/service-tag';
  import opSwiper from '@/components/op-swiper';
  import formatEnums from '@/filters/enums';

  export default {
    components: {
      opSwiper
    },
    filters: {
      formatEnums
    },
    data() {
      return {
        shownCategory: {},
        slideList: [
          'https://dummyimage.com/800X300/246',
          'https://dummyimage.com/800X300/CCC',
          'https://dummyimage.com/800X300/FF0',
          'https://dummyimage.com/800X300/0CC',
          'https://dummyimage.com/800X300/00F',
          'https://dummyimage.com/800X300/1F7'
        ],
        industryData: [],
        projectData: [],
//        projectOptions: [{
//          value: 1, label: '策略'
//        }, {
//          value: 2, label: '设计'
//        }, {
//          value: 3, label: '全案咨询'
//        }, {
//          value: 4, label: '供应链'
//        }, {
//          value: 5, label: '数字传播'
//        }],
        serviceList: [{
          name: 'AFU 阿芙',
          letter: 'A',
          industry: '1',
          project: '1'
        }, {
          name: 'AI MI 瑷媄',
          letter: 'A',
          industry: '1',
          project: '1'
        }, {
          name: 'AVON 雅芳',
          letter: 'A',
          industry: '2',
          project: '3'
        }, {
          name: 'BABY ELEPHANT 红色小象',
          letter: 'B',
          industry: '2',
          project: '3'
        }, {
          name: 'BEAUTY LAND 必优兰',
          letter: 'B',
          industry: '2',
          project: '3'
        }, {
          name: 'BEAUTY PLUS 美丽加芬',
          letter: 'B',
          industry: '4',
          project: '2'
        }, {
          name: 'BIOFILA 贝肤泉',
          letter: 'B',
          industry: '2',
          project: '4'
        }, {
          name: 'BLUE BLUE 海蓝蓝',
          letter: 'B',
          industry: '4',
          project: '5'
        }, {
          name: 'BOURJOIS 妙巴黎',
          letter: 'B',
          industry: '3',
          project: '5'
        }, {
          name: 'CALIBIO 嘉莉比奥',
          letter: 'C',
          industry: '2',
          project: '5'
        }, {
          name: 'CAMENAE 嘉美乐',
          letter: 'C',
          industry: '2',
          project: '5'
        }, {
          name: 'CBE 上海美博会',
          letter: 'C',
          industry: '2',
          project: '5'
        }, {
          name: 'CHANDO 自然堂',
          letter: 'C',
          industry: '1',
          project: '2'
        }, {
          name: 'CMM郑明明',
          letter: 'C',
          industry: '1',
          project: '2'
        }, {
          name: 'COGI 高姿',
          letter: 'C',
          industry: '2',
          project: '2'
        }, {
          name: 'COMETEA',
          letter: 'C',
          industry: '2',
          project: '3'
        }],
        letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', '0~9']
      };
    },
    computed: {
      letterResult() {
        return this.shownCategory.seleted
          && this.letterCustomer.filter(item => item.value == this.shownCategory.seleted)
          || this.letterCustomer;
      },
      industryResult() {
        return this.shownCategory.seleted
          && this.industryCustomer.filter(item => item.value == this.shownCategory.seleted)
          || this.industryCustomer;
      },
      projectResult() {
        return this.shownCategory.seleted
          && this.projectCustomer.filter(item => item.value == this.shownCategory.seleted)
          || this.projectCustomer;
      },
      letterCustomer() {
        return this.formatResult(this.serviceList, 'initial');
      },
      industryCustomer() {
        return this.formatResult(this.serviceList, 'category');
      },
      projectCustomer() {
        return this.formatResult(this.serviceList, 'serviceTags');
      },
      industryOptions() {
        const langKeys = ['label', 'enLabel'];
        ['zh_cn', 'en'].forEach((lang, index) => {
          this.$i18n.mergeLocaleMessage(lang, {
            service: {
              industryOptions: this.industryData.map(item =>
                ({ value: item.id, label: item[langKeys[index]] }))
            }
          });
        });
        return this.$t('service.industryOptions');
      },
      projectOptions() {
        const langKeys = ['label', 'enLabel'];
        ['zh_cn', 'en'].forEach((lang, index) => {
          this.$i18n.mergeLocaleMessage(lang, {
            service: {
              projectOptions: this.projectData.map(item =>
                ({ value: item.id, label: item[langKeys[index]] }))
            }
          });
        });
        return this.$t('service.projectOptions');
      },
      categories() {
        return [{
          label: 'pages.service.letter',
          value: 'letter',
          seleted: ''
        }, {
          label: 'pages.service.industry',
          value: 'industry',
          options: this.industryOptions,
          seleted: ''
        }, {
          label: 'pages.service.project',
          value: 'project',
          options: this.projectOptions,
          seleted: ''
        }];
      }
    },
    async created() {
      this.serviceList = (await customerApi.list()).content;
      this.industryData = (await industryApi.list()).content;
      this.projectData = (await serviceTagApi.list()).content;

      this.shownCategory = this.categories[0];
    },
    mounted() {
      $('.service .category .item')
        .on('mouseenter', function () {
          $(this).addClass('hover');
        })
        .on('mouseleave', function () {
          $(this).removeClass('hover');
        });
    },
    methods: {
      chooseCategory(item) {
        this.shownCategory = Object.assign({}, item);
      },
      chooseOption(option) {
        this.$nextTick(() => {
          this.shownCategory.seleted = option.value || option;
        });
      },
      formatResult(serviceList, mapKey) {
        const map = {};
        serviceList.forEach((item) => {
          const key = item[mapKey];
          if (Array.isArray(key)) {
            key.forEach((keyItem) => {
              map[keyItem] = map[keyItem] || [];
              map[keyItem].push(item);
            });
          } else {
            map[key] = map[key] || [];
            map[key].push(item);
          }
        });
        // 设置国际化字符内容
        ['zh_cn', 'en'].forEach((lang) => {
          this.$i18n.mergeLocaleMessage(lang, {
            service: {
              list: Object.keys(map).map(key => ({
                value: key,
                result: map[key].map(item => Object.assign({}, item, item[lang]))
              }))
            }
          });
        });
        return this.$t('service.list');
      }
    }
  };
</script>

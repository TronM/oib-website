<template>
  <div class="wrapper service">
    <op-swiper :slide-list="slideList"></op-swiper>
    
    <div class="category">
      <ul>
        <li :class="{ active: shownCategory === item.value }" class="item" v-for="item of categories" @click="chooseCategory(item)">
          {{item.label}}
          <div v-if="item.options && item.options.length">
            <span></span>
            <ol>
              <li v-for="cItem of item.options" @click="chooseOption(cItem)">{{cItem.label}}</li>
            </ol>
          </div>
        </li>
      </ul>
      <div v-if="shownCategory === 'letter'" class="result-letter">
        <div class="nav-letter">
          BRANDS<span @click="chooseOption('')">A~Z</span>:
          <span @click="chooseOption(item)" v-for="item of letterList">{{item}}</span>
        </div>
        <div class="result">
          <div class="row" v-for="item of letterResult">
            <div class="col-xs-offset-1 col-xs-1 letter">{{item.value}}</div>
            <div class="col-xs-10 list">
              <div class="col-xs-2" v-for="cItem of item.result">{{cItem.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="shownCategory === 'industry'" class="result-other box-padding">
        <div class="result" v-for="item of industryResult">
          <h3>{{item.value | formatEnum(industryOptions)}}</h3>
          <div class="row">
            <div class="col-xs-2" v-for="cItem of item.result">{{cItem.name}}</div>
          </div>
        </div>
      </div>
      <div v-if="shownCategory === 'project'" class="result-other box-padding">
        <div class="result" v-for="item of projectResult">
          <h3>{{item.value | formatEnum(projectOptions)}}</h3>
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
  import opSwiper from '@/components/op-swiper';

  export default {
    components: {
      opSwiper
    },
    filters: {
      formatEnum(value, enums) {
        console.log('ooo', value, enums, enums.find(item => item.value == value));
        return enums.find(item => item.value == value).label;
      }
    },
    data() {
      return {
        shownCategory: 'letter',
        slideList: [
          'https://dummyimage.com/800X300/246',
          'https://dummyimage.com/800X300/CCC',
          'https://dummyimage.com/800X300/FF0',
          'https://dummyimage.com/800X300/0CC',
          'https://dummyimage.com/800X300/00F',
          'https://dummyimage.com/800X300/1F7'
        ],
        industryOptions: [{
          value: 1, label: '护肤'
        }, {
          value: 2, label: '洗护'
        }, {
          value: 3, label: '彩妆'
        }, {
          value: 4, label: '母婴'
        }, {
          value: 5, label: '香水'
        }, {
          value: 6, label: '奢侈品'
        }, {
          value: 7, label: '酒'
        }, {
          value: 8, label: '饮料'
        }, {
          value: 9, label: '食品'
        }],
        projectOptions: [{
          value: 1, label: '策略'
        }, {
          value: 2, label: '设计'
        }, {
          value: 3, label: '全案咨询'
        }, {
          value: 4, label: '供应链'
        }, {
          value: 5, label: '数字传播'
        }],
        categories: [{
          label: '按首字母',
          value: 'letter'
        }, {
          label: '行业类别',
          value: 'industry',
          options: []
        }, {
          label: '服务项目',
          value: 'project',
          options: []
        }],
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
        letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', '0~9'],
        selectedLetter: '',
        selectedIndustry: '',
        selectedProject: ''
      };
    },
    computed: {
      letterResult() {
        return this.selectedLetter
          && this.letterCustomer.filter(item => item.value == this.selectedLetter)
          || this.letterCustomer;
      },
      industryResult() {
        return this.selectedIndustry
          && this.industryCustomer.filter(item => item.value == this.selectedIndustry)
          || this.industryCustomer;
      },
      projectResult() {
        return this.selectedProject
          && this.projectCustomer.filter(item => item.value == this.selectedProject)
          || this.projectCustomer;
      },
      letterCustomer() {
        return this.formatResult(this.serviceList, 'letter');
      },
      industryCustomer() {
        return this.formatResult(this.serviceList, 'industry');
      },
      projectCustomer() {
        return this.formatResult(this.serviceList, 'project');
      }
    },
    created() {
      this.categories[1].options = this.industryOptions;
      this.categories[2].options = this.projectOptions;
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
        this.shownCategory = item.value;
        this.selectedLetter = '';
        this.selectedIndustry = '';
        this.selectedProject = '';
      },
      chooseOption(option) {
        this.$nextTick(() => {
          const map = {
            'letter': 'selectedLetter',
            'industry': 'selectedIndustry',
            'project': 'selectedProject'
          };
          this[map[this.shownCategory]] = option.value || option;
        });
      },
      formatResult(serviceList, mapKey) {
        const map = {};
        serviceList.forEach((item) => {
          map[item[mapKey]] = map[item[mapKey]] || [];
          map[item[mapKey]].push(item);
        });
        return Object.keys(map).map(key => ({
          value: key,
          result: map[key]
        }));
      }
    }
  };
</script>

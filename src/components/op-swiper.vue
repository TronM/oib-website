<template>
  <swiper :options="swiperOptions" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) of slideList" :key="index">
      <slot v-if="$scopedSlots.default" :item="item"></slot>
      <img  v-else :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script type="text/ecmascript-6" lang="babel">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import '@/styles/swiper-3.4.2.min.css';
  
  const defaultOptions = {
    notNextTick: true,
    loop: true,
    autoplay: 4000,
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    speed: 1500,
//    width: $('body').width(),
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade'
  };
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      slideList: {
        type: Array,
        default: () => [
          'https://dummyimage.com/800X450/246',
          'https://dummyimage.com/800X450/CCC',
          'https://dummyimage.com/800X450/FF0',
//          'https://dummyimage.com/800X450/0CC',
//          'https://dummyimage.com/800X450/00F',
          'https://dummyimage.com/800X450/1F7'
        ]
      },
      options: {
        type: Object,
        default: () => defaultOptions
      }
    },
    watch: {
      slideList(value) {
        console.log('iii', value);
      }
    },
    computed: {
      swiperOptions() {
        return Object.assign({}, defaultOptions, this.options);
      }
    }
  };
</script>

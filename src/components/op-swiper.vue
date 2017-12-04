<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) of slideList" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import '@/styles/swiper-3.4.2.min.css';
  
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: ['slideList', 'options'],
    computed: {
      swiperOption() {
        return Object.keys(this.options).length > 0 ? this.options : {
          notNextTick: true,
          loop: true,
          autoplay: 4000,
          paginationClickable: true,
          autoplayDisableOnInteraction: false,
          speed: 1500,
          // width: $('body').width() < 1440 ? 1440 : $('body').width(),
          width: $('body').width(),
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          effect: 'fade'
        };
      }
    }
  };
</script>

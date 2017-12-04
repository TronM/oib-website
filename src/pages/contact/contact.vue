<template>
  <div class="wrapper contact">
    <div class="list box-padding">
      <div class="row">
        <div class="col-sm-2 col-xs-12  side-column">
          <h3>CENTRE<span>SHANGHAI.CHINA </span></h3>
          <h4>中国·上海 总部</h4>
        </div>
        <div class="col-sm-4 col-xs-12  info">
          <h4>ADDRESS 地址</h4>
          B4-3D，Bansongyuan Rd, <br>
          Huangpu District, Shanghai, China<br>
          Near by Power Station of Art<br>
          中国上海半淞园路388号B4-3D栋<br>
          毗邻上海当代艺术博物馆<br><br>
          <h4>BUSINESS 商务联系</h4>
          OIB总经办 金晶<br>
          +86 13817963363<br>
          jessie.jin@oib-china.com<br>
          官网 www.oib-china.com<br><br>
          
          OIB设计中心-念相设计 运营总监 魏琳凌<br>
          +86 13917300893<br>
          ling.wei@oib-china.com<br>
          官网 www.nx-design.net<br><br>
          
          <h4>JOBS 招聘</h4>
          总部招聘邮箱<br>
          oib.hr@oib-china.com<br>
          
          设计中心招聘邮箱<br>
          info@nx-design.net<br>
        </div>
        <div class="col-sm-6 col-xs-12 map" id="map-shanghai"></div>
      </div>
      <div class="row">
        <div class="col-sm-2 col-xs-12 side-column">
          <h3><span>GUANGZHOU.CHINA</span></h3>
          <h4>中国·广州 分部</h4>
        </div>
        <div class="col-sm-4 col-xs-12 info">
          <h4>ADDRESS 地址</h4>
          Room2005-2006, North Tower, <br>
          Poly Tower V, No. 11, Xiancun Road, <br>
          Zhujiang New Town, Tianhe District,<br>
          Guangzhou, China. <br>
          中国 广州市天河区珠江新城<br>
          洗村路11号保利威座2005-2006<br><br>
          
          <h4>Phone 座机</h4>
          020-38556155<br><br>
          
          <h4>BUSINESS 商务联系</h4>
          供应链电话事业群总监 陈俊<br>
          +86 13822162619<br>
          june.chen@oib-china.com<br><br>
          
          策略中心 商务助理 彭丽珍<br>
          +86 13560359426<br>
          peng@oib-china.com<br>
          
          <h4>JOBS 招聘</h4>
          策略中心招聘邮箱<br>
          peng@oib-china.com<br>
        </div>
        <div class="col-sm-6 col-xs-12 map" id="map-guangzhou"></div>
      </div>
      <div class="row">
        <div class="col-sm-2 col-xs-12 side-column">
          <h3>R&D CENTRE<span>KOBE.JAPAN</span></h3>
          <h4>日本·神户 研发中心</h4>
        </div>
        <div class="col-sm-4 col-xs-12 info">
          <h4>ADDRESS 地址</h4>
          神戸市中央区港島南町５−５−２<br>
          神戸国際ビジネスセンター６０５美研創新（株）内<br><br>
          
          <h4>BUSINESS 商务联系</h4>
          日中化妆品国际交流协会 社团法人 松藤玲子<br>
          Tel: 078-381-5304<br>
          matsufuji@cosmo-jc.org<br>
        </div>
        <div class="col-sm-6 col-xs-12 map" id="map-shenhu"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">
  import $ from 'jquery';
  import mapManager from '@/utils/map_manager';
  
  export default {
    data() {
      return {
        contactList: [{
        }]
      };
    },
    mounted() {
      if ($('.map').length > 0) {
        mapManager.setAk('rYCKmvW4fAmb1usg3G7YT8nyPmrqrMpy');
        mapManager.getMapInstance().then((BMap) => {
          const level = 15;
          const map1 = new BMap.Map('map-shanghai');    // 创建Map实例
          map1.centerAndZoom(new BMap.Point(121.502788, 31.207219), level);  // 初始化地图,设置中心点坐标和地图级别
          map1.addControl(new BMap.MapTypeControl());   // 添加地图类型控件
          map1.setCurrentCity('上海');          // 设置地图显示的城市 此项是必须设置的
          const myGeo1 = new BMap.Geocoder();
          myGeo1.getPoint('上海半淞园路388号B4-3D栋', (point) => {
            if (point) {
              map1.centerAndZoom(point, 16);
              map1.addOverlay(new BMap.Marker(point));
            } else {
              alert('您选择地址没有解析到结果!');
            }
          }, '上海市');
          const map2 = new BMap.Map('map-guangzhou');    // 创建Map实例
          map2.centerAndZoom(new BMap.Point(113.333566, 23.127401), level);  // 初始化地图,设置中心点坐标和地图级别
          map2.addControl(new BMap.MapTypeControl());   // 添加地图类型控件
          map2.setCurrentCity('广州');          // 设置地图显示的城市 此项是必须设置的
          const myGeo2 = new BMap.Geocoder();
          // 将地址解析结果显示在地图上,并调整地图视野
          myGeo2.getPoint('广州市天河区珠江新城洗村路11号保利威座2005-2006', (point) => {
            if (point) {
              map2.centerAndZoom(point, 16);
              map2.addOverlay(new BMap.Marker(point));
            } else {
              alert('您选择地址没有解析到结果!');
            }
          }, '广州市');
        });
      }
    }
  };
</script>

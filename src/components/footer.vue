<template>
  <div class="footer wrapper box-padding clearfix">
    <div class="col-sm-7 col-xs-12">
      <h3>LINKS</h3>
      <div class="row clearfix">
        <div class="col-sm-4 col-xs-6"><router-link to="index" class="icon icon-home">首页</router-link></div>
        <div class="col-sm-4 col-xs-6"><router-link to="works" class="icon icon-case">案例</router-link></div>
        <div class="col-sm-4 col-xs-6"><router-link to="about" class="icon icon-about">关于我们</router-link></div>
        <div class="col-sm-4 col-xs-6"><router-link to="news" class="icon icon-news">新闻</router-link></div>
        <div class="col-sm-4 col-xs-6"><router-link to="service" class="icon icon-client">客户</router-link></div>
        <div class="col-sm-4 col-xs-6"><router-link to="contact" class="icon icon-contact">联系我们</router-link></div>
      </div>
    </div>
    <div class="col-sm-3 col-sm-offset-1 col-xs-12">
      <h3>CONTACT</h3>
      <div class="email">商务联系：<br>
      金晶<br>
      Jessie.jin@oib-china.com<br>

      陈亚男<br>
      emily.chen@oib-china.com<br><br>
      招聘邮箱：icy.yu@oib-china.com<br><br>
</div>
    </div>
    <div class="col-xs-12 line">
      <div class="col-sm-6 col-xs-12 copyright">Copyright ©2017 www.oib-china.com . All Rights Reserved 沪ICP备14026675号</div>
      <ul class="col-sm-6 col-xs-12 share">
        <li><img src="../assets/img/main/1.png" alt=""></li>
        <li><img src="../assets/img/main/2.png" alt=""></li>
        <li><img src="../assets/img/main/3.png" alt=""></li>
        <!--<li><a href=""><img src="../assets/img/icon/be-white.png" alt=""></a></li>-->
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" lang="babel">

  export default {
    data() {
      return {
        isQRShow: false
      };
    },
    methods: {
      openQR() {
        this.isQRShow = !this.isQRShow;
      }
    }
  };
</script>

<style lang="less" scoped>
.icon {
  background-repeat: no-repeat;
  background-position: left;
  padding-left: 25px;
  line-height: 30px;
  display: inline-block;
}

.icon-home {
  background-image: url(../assets/img/icon/icon-home.png);
}

.icon-case {
  background-image: url(../assets/img/icon/icon-case.png);
}

.icon-about {
  background-image: url(../assets/img/icon/icon-about.png);
}

.icon-news {
  background-image: url(../assets/img/icon/icon-news.png);
}

.icon-client {
  background-image: url(../assets/img/icon/icon-client.png);
}

.icon-contact {
  background-image: url(../assets/img/icon/icon-contact.png);
}
</style>



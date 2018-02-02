<template>
  <div class="main">
    <div class="div_none">
    <div class="cert_pic"><img src="../../assets/images/icon/icon-null.png" height="246" width="303"/></div>
    <div class="cert_tip">暂无待支付订单哦~</div>
    </div>
    <div>
      <ul>
        <li><router-link to="pendPay"><label>城乡居民养老保险2017年订单</label><span>待支付</span></router-link> </li>
        <li><router-link to="pendPay"><label>城乡居民养老保险2017年订单</label><span>待支付</span></router-link> </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '缴款单缴费'
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .cert_pic{margin:104px auto 0 auto;width: 151px;height: 123px;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;margin-top:35px;}
  .cert_pic img{width: 100%;height: 100%;}
  .div_none{display: none;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  ul{background: #FFFFFF;}
  li{text-align: left;font-size: 14px;height: 60px;line-height: 60px;
    padding-left: 15px;list-style: none;background: url(../../assets/images/icon/icon-dhjt.png) no-repeat right 4% center;
    background-size:18px;color: #000;}
  li:last-child{border: none;}
  li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li label{font-size: 15px;color: #000000;}
  li span{display: block; float: right;margin-right: 10%;color: #F65150;}
</style>

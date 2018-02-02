<template>
  <div class="main">
    <div class="title">保单总额</div>
    <div class="price">¥2480.00</div>
    <ul class="insur_info">
      <li>投保人<span>李美丽</span></li>
      <li>被保人<span>李春琳</span></li>
    </ul>
    <ul class="amount">
      <li><label>医保余额支付</label><span>¥ 2000.00</span></li>
      <li><label>还需支付</label><span class="sp_color">¥ 480.00</span></li>
    </ul>
    <div class="btn_pay">
      <span>确认付款</span>
      <label> ¥ 480.00</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '保险详情'
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .title{font-size: 16px;color: #888888;padding-top: 43px;background: #ffffff;padding-bottom: 10px;}
  .price{font-size: 36px;padding-bottom: 34px;background: #ffffff;}
  .insur_info{background: #ffffff;}
  .insur_info li{height: 51px;line-height: 51px;font-size: 14px;color: #888888;text-align: left;margin-left: 4%;list-style: none;}
  .insur_info span{color: #353535 ;float: right;margin-right: 4%;}
  .select{background: url("../../assets/images/icon/icon-dhjt.png") no-repeat right 4% center; background-size: 20px;}
  .insur_info:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .insur_info li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .amount{background: #FFFFFF;margin-top: 15px;text-align: left;}
  .amount:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .amount li{height: 51px;line-height: 51px; list-style: none;margin-left: 4%;}
  .amount li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .amount label{font-size: 14px;color: #333333;font-weight:400;}
  .amount span{font-size: 15px;color: #333333;float: right;margin-right: 4%;}
  .sp_color{color: #F65150!important;}
  .btn_pay{width: 92%;height: 65px;background: #3399FF; border-radius: 3px;margin: 15px auto;}
  .btn_pay label{display: block;font-size: 21px;color: #FFF284;margin-top: -8px;}
  .btn_pay span{display: block;font-size: 18px; color: #FFFFFF;line-height: 40px;}
</style>

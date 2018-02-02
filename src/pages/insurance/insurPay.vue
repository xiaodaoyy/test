<template>
  <div class="main">
    <div class="head">
      <div>
        <ul>
          <li><i><img src="../../assets/images/insurance/icon-trademark.png"/></i></li>
          <li>平安特定疾病保险保障计划</li>
          <li>348399922334</li>
        </ul>
      </div>
      <div class="pay_sign"><img src="../../assets/images/insurance/icon-pay.png"/></div>
    </div>
    <ul class="insur_info">
      <li>投保人<span>李美丽</span></li>
      <li>被保人<span>李美丽</span></li>
      <li class="select" @click="redirectTo">产品详情</li>
      <li class="select" @click="redirectToFlow">理赔流程</li>
      <li>服务电话<span>400-000000</span></li>
    </ul>
    <ul class="amount">
      <li><label>保单总额</label><span>¥ 2480.00</span></li>
      <li><label>医保余额支付</label><span>¥ 2000.00</span></li>
      <li><label>还需支付</label><span class="sp_color">¥ 480.00</span></li>
    </ul>
    <div class="look">查看<a>《投保须知》</a><router-link to="healthNotifi">《健康告知》</router-link><a>《保险条款》</a></div>
    <div class="tip">本页面保单信息仅供参考，实际保单状态请以保险公司核心业务系统中记载为准</div>
    <input class="btn_close" type="button" value="关闭订单"/>
    <div class="btn_sure">
      <div class="price"> ¥ 2480.00</div>
      <div class="btn_want" @click="toPay">确认付款</div>
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
      redirectTo(){this.$router.push('/introduction')},
      toPay(){this.$router.push('/confirmPay')},
      redirectToFlow(){this.$router.push('/claimFlow')},
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{height: 100%;}
  .head{height: 98px;text-align: left; background: #ffffff;}
  .head:after{border: 1px solid #F76362;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .head li{list-style: none;height: 32px;line-height: 32px;margin-left: 4%;}
  .head>div{display: inline-block;}
  .head>div:first-child{width: 70%;}
  .pay_sign{height: 70px;width: 70px;margin-left: 10px;}
  .head li:nth-child(2){font-size: 16px;color: #353535;}
  .head li:last-child{font-size: 14px;color: #888888;}
  .insur_info{background: #ffffff;}
  .insur_info li{height: 51px;line-height: 51px;font-size: 14px;color: #888888;text-align: left;margin-left: 4%;list-style: none;}
  .insur_info span{color: #353535 ;float: right;margin-right: 4%;}
  .select{background: url("../../assets/images/icon/icon-dhjt.png") no-repeat right 4% center; background-size: 20px;}
  .insur_info:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .insur_info li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .amount{background: #FFFFFF;margin-top: 15px;text-align: left;}
  .amount:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .amount li{height: 51px;line-height:51px;list-style: none;margin-left: 4%;}
  .amount label{font-size: 14px;color: #333333;font-weight:400;}
  .amount span{font-size: 15px;color: #333333;float: right;margin-right: 4%;}
  .sp_color{color: #F65150!important;}
  .look{height: 48px;line-height: 48px;font-size: 14px;color: #333333;text-align: left;margin-left: 4%;}
  .look a{color: #3399FF!important;outline: none; text-decoration: none;}
  .tip{background: url("../../assets/images/icon/icon-plaint.png") no-repeat left 2% top 3px; background-size: 18px;height: 42px;font-size: 14px;
    text-align: left;padding-left: 10%;color: #888888;}
  .btn_close{height: 48px;width: 92%;font-size: 18px;color: #333333;margin-top: 12px;background: #ffffff;
    -webkit-appearance: none; outline: none;border: none;margin-bottom: 60px;}


  .btn_sure{height: 48px;overflow: hidden;position: fixed;left:0;bottom: 0;width: 100%;background: #ffffff;}
  .head i{display: block;height: 22px;width: 68px;position: relative;top:5px;}
  .btn_sure>div{float: left;}
  .price{font-size: 21px;color: #F65150;width: 60%;line-height: 48px;}
  .btn_want{background: #3399FF;line-height: 48px;width: 40%;color: #ffffff;font-size: 18px;}

</style>

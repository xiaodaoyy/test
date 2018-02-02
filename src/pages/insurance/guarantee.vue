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
      <div class="pay_sign"><img src="../../assets/images/insurance/icon-guarantee.png"/></div>
    </div>
    <ul class="insur_info">
      <li>投保人<span>李美丽</span></li>
      <li>被保人<span>李春琳</span></li>
      <li>保障额度<span>200 万</span></li>
      <li>可赔次数<span>1 次</span></li>
      <li>保单总额<span>¥ 2480.00</span></li>
      <li>保障期限<span>2017-07-12—2018-07-11</span></li>
    </ul>
    <ul class="insur_info partition">
      <li  class="select" @click="redirectToFlow">理赔流程</li>
      <li>服务电话<span>400-000000</span></li>
    </ul>
    <div class="btn_group">
      <div class="btn_apply" @click="redirectToClaim">申请理赔</div>
      <div class="btn_record" @click="redirectToRecord">理赔记录</div>
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
      redirectToFlow(){this.$router.push('/claimFlow')},
      redirectToClaim(){this.$router.push('/claimApplication')},
      redirectToRecord(){this.$router.push('/claimRecord')},
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{height: 100%;}
  .head{height: 98px;text-align: left; background: #ffffff;}
  .head:after{border: 1px solid #65C2E2;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .head li{list-style: none;height: 32px;line-height: 32px;margin-left: 4%;}
  .head>div{display: inline-block;}
  .head>div:first-child{width: 70%;}
  .pay_sign{height: 70px;width: 70px;margin-left: 10px;}
  .head li:nth-child(2){font-size: 16px;color: #353535;}
  .head li:last-child{font-size: 14px;color: #888888;}
  .head i{display: block;height: 22px;width: 68px;position: relative;top:5px;}
  .insur_info{background: #ffffff;}
  .insur_info li{height: 51px;line-height: 51px;font-size: 14px;color: #888888;text-align: left;margin-left: 4%;list-style: none;}
  .insur_info span{color: #353535 ;float: right;margin-right: 4%;}
  .select{background: url("../../assets/images/icon/icon-dhjt.png") no-repeat right 4% center; background-size: 20px;}
  .insur_info:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .insur_info li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .partition{margin-top: 16px;}
  .btn_group{border-top:1px solid #DFDFDF;height: 48px;line-height: 48px;font-size: 18px; overflow: hidden;position: fixed;left:0;bottom: 0;width: 100%;background: #ffffff;}
  .btn_group>div{float: left;width: 50%;}
  .btn_apply{background: #3295F8 url("../../assets/images/insurance/icon-apply.png") no-repeat left 15% center;background-size: 18px;color: #ffffff;}
  .btn_record{background: #ffffff url("../../assets/images/insurance/icon-record.png") no-repeat left 15% center;background-size: 18px;color: #3399FF;}
</style>

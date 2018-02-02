<template>
  <div class="main"><div>
    <div class="title"><i><img src="../../assets/images/icon/icon-selected.png"/></i><span>挂失成功</span></div>
    <ul class="info">
      <li><span>姓名</span><label>张贝贝</label></li>
      <li><span>社保保障号码</span><label>420821199108272943</label></li>
      <li><span>卡号</span><label>W59841</label></li>
      <li><span>手机号码</span><label>13388616917</label></li>
      <li><span>社保卡状态</span><label>已挂失</label></li>
      <li><span>挂失日期</span><label>2016-06-25</label></li>
    </ul>
    <div class="time_tip">社保卡<span>挂失有效期为5天。</span></div>
  </div>
    <!--<div>-->
      <!--<div class="result_icon"></div>-->
      <!--<div class="cert_tip">挂失失败！<br/>-->
        <!--手机号与注册手机账号信息不符，请重试</div>-->
      <!--<div><router-link to=" "><input class="btn_sure" type="button" value="返回"/></router-link></div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '生存认证'
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .title{height: 90px; background: #ffffff;}
  .title i{width: 32px;height: 32px;display: block;margin:11px auto 0 auto;padding-top: 15px;}
  img{width: 100%;height: 100%;}
  .title span{font-size: 17px; color: #02BB00;line-height: 40px;}
  .time_tip{font-size: 14px;text-align: left;margin-left: 4%;color: #888888;margin-top: 20px;}
  .time_tip span{color: #F65150;}
  .info{background: #ffffff;margin-top: 18px;}
  .info:before{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .info li{list-style: none;text-align: left;font-size: 14px;height: 51px;line-height: 51px;}
  .info li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .info span{display: inline-block;width: 46%;margin-left: 4%;color: #888888;}
  .info label{display: inline-block;width: 46%;margin-right: 4%;color: #353535;text-align: right;}
  .result_icon{width: 80px;height: 80px;background: url("../../assets/images/icon/icon-fail.png") no-repeat center;
    border-radius: 50%;background-size: 80px;margin: 90px auto 0 auto;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;margin-top:35px;}
  .cert_tip span{color: #FE4D4D;}
  .btn_sure{width: 90%;height: 50px;background: #3399FF;border-radius: 8px;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}

</style>

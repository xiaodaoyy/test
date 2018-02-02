<template>
  <div class="main">
    <div class="head">
      <div class="change"></div>
      <div class="head_tip">2017-2-23 省立同德医院 住院申请理赔</div>
    </div>
    <div>
      <ul class="ul_shed">
        <li class="accept">提交审核 <p><label>完成</label><span class="rough_color">2014-7-14</span></p></li>
        <li class="accept">审核 <p><label  class="hand">不通过</label><span class="rough_color">上传的住院小结，需要盖上医院公章。</span></p></li>
        <li class="accept">结案 <p><label>完成</label><span class="rough_color">2014-7-14</span></p></li>
        <li class="rough">理赔支付 <p><label class="rough_color">未开始</label></p></li>
      </ul>
    </div>
    <!--<div>-->
      <!--<div class="icon_no"></div>-->
      <!--<div class="error_tip">审核不通过</div>-->
      <!--<div class="btn_return"><input type="button" value="重新申请"/></div>-->
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
  .head{height: 65px;background: #FFF;overflow: hidden;}
  .change{width: 30px;height: 30px;background: url("../../assets/images/insurance/icon-compensate.png") no-repeat center;
    background-size: 100% 100%;margin-top: 17px;margin-left: 15px;float: left;}
  .head_tip{float: left;text-align: left;font-size: 15px; color: #333333;line-height: 65px;margin-left: 11px;font-weight: 200;}
  li{list-style: none ;margin-left: 30px;text-align: left;height: 60px; line-height: 50px;font-size: 14px;}
  .accept:before {content: ""; display: inline-block; width: 12px;height: 12px; background-color: #3399FF;border-radius: 50%; position: relative; left: -15px;}
  .rough:before{content: "";display: inline-block;width: 12px;height: 12px;background-color: #FFF;border: 1px solid #3399FF; border-radius: 50%; position: relative; left: -15px;  }
  ul{background: url("../../assets/images/icon/icon-vert-line.png") no-repeat left 20.5px top 15px;background-size: 1px 200px;}
  li p{float: right;line-height: 24px;margin-top: 10px;margin-right: 24px;text-align: right;}
  li p label{display: block;color: #009924;}
  li p span{display: block;color: #666666;font-size: 12px;}
  .hand{color: #FF0000;}
  .rough_color{color: #999999 ;}
  .icon_no{width: 80px;height: 80px;background: #DE2928;border-radius: 50%;margin: 83px auto 19px auto;}
  .error_tip{font-size: 15px; color: #353535; line-height: 46px;}
  .btn_return>input{-webkit-appearance: none;outline: none; width: 90%;height: 48px;border: none;color: #FFF;font-size: 18px;margin: 30px auto;background: #3399FF;border-radius: 6px;}
  .ul_shed{color: #888888;}
</style>

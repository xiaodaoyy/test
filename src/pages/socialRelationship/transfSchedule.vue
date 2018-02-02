<template>
  <div class="main">
    <div class="change"></div>
    <div class="tip">社保转移—基本养老保险</div>
    <div class="applier">申请人：李美丽</div>
    <div class="content">
      <ul>
        <li class="accept">受理 <p><label>办理完成</label><span>2014-7-14</span></p></li>
        <li class="accept">转出地办理 <p><label>审核通过</label><span>2014-7-14</span></p></li>
        <li class="accept">转入地办理 <p><label class="hand">进心中</label><span>2014-7-14</span></p></li>
        <li class="rough">办结 <p><label class="rough_color">未开始</label></p></li>
      </ul>
    </div>
    <!--<div class="content">-->
      <!--<div class="blank"></div>-->
      <!--<div class="icon_no"><img src="../assets/images/icon/icon-fail.png"/></div>-->
      <!--<div class="error_tip">审核不通过</div>-->
      <!--<div class="explain">身份证信息与照片不符，请重新提交！谢谢。</div>-->
      <!--<div class="btn_return"><input type="button" value="重新申请"/></div>-->
    <!--</div>-->
   </div>
</template>

<script>
  document.getElementsByTagName('body')[0].className = 'body_bg2';
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
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
 .content{background: #ffffff;width: 94%;margin: 20px auto 0 auto;border-radius: 5px;}
 .change{width: 43px;height: 43px;background: #ffffff url("../../assets/images/icon/icon-weibiaoti-8.png") no-repeat center;
   background-size: 22px; margin: 32px auto 0 auto;border-radius: 50%;}
 .tip{font-size: 19px;color: #F7E90E;text-shadow: 0 1px 2px rgba(0,0,0,0.50);margin-top: 11px;}
  .applier{font-size: 14px;color: #B1DAF8;margin-top: 10px;}
  li{list-style: none ;margin-left: 30px;text-align: left;height: 80px; line-height: 50px;font-size: 14px;}
  .accept:before {content: ""; display: inline-block; width: 12px;height: 12px; background-color: #3399FF;border-radius: 50%; position: relative; left: -15px;}
  .rough:before{content: "";display: inline-block;width: 12px;height: 12px;background-color: #FFF;border: 1px solid #3399FF; border-radius: 50%; position: relative; left: -15px;  }
  ul{background: url("../../assets/images/icon/icon-vert-line.png") no-repeat left 20.5px top 15px;background-size: 1px 270px;}
  li p{float: right;line-height: 24px;margin-top: 10px;margin-right: 24px;text-align: right;}
  li p label{display: block;color: #009924;}
  li p span{display: block;color: #666666;font-size: 12px;}
  .hand{color: #FF0000;}
  .rough_color{color: #999999 ;}
  .blank{height: 57px;}
  .icon_no{width: 80px;height: 80px;background: #DE2928;border-radius: 50%;margin: 0px auto 19px auto;}
  .error_tip{font-size: 15px; color: #353535; line-height: 46px;}
  .btn_return>input{-webkit-appearance: none;outline: none; width: 90%;height: 48px;border: none;color: #FFF;font-size: 18px;margin: 30px auto;background: #3399FF;border-radius: 6px;}
  .explain{font-size:14px;color: #888888;text-align: center;}
  img{width: 100%;}
</style>

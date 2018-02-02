<template>
  <div class="main">
    <div class="head">
      <div class="change"></div>
      <div class="head_tip">社保转移——基本养老保险<br/>
        申请人：李美丽
      </div>
    </div>
    <div>
      <ul>
        <li class="accept">受理 <p><label>办理完成</label><span>2014-7-14</span></p></li>
        <li class="accept">转出地办理 <p><label>办理完成</label><span>2014-7-14</span></p></li>
        <li class="accept">转入地办理 <p><label class="hand">进心中</label><span>2014-7-14</span></p></li>
        <li class="rough">办结 <p><label class="rough_color">未开始</label></p></li>
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
  .change{width: 40px;height: 40px;background:#3399FF url("../../assets/images/icon/icon-change-identity.png") no-repeat center;
    background-size: 20px; border-radius: 50%;margin-top: 12px;margin-left: 15px;float: left;}
  .head_tip{float: left;text-align: left;font-size: 15px; color: #333333;line-height: 24px;margin-left: 11px;margin-top: 8px;font-weight: 200;}
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
</style>

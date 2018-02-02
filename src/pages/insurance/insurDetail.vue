<template>
  <div class="main">
    <div class="head">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/images/insurance/detail-banner.png"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="explain">重疾、意外、疾病综合、保险简单介绍。</div>
    <div class="inventory">
      <div class="tip">保障清单</div>
      <ul class="items">
        <li>意外伤害保障<span>20万元</span></li>
        <li>意外伤害保障<span>10万元</span></li>
        <li>意外医疗保障<span>1万元</span></li>
      </ul>
      <div class="look_more">查看保障详情</div>
    </div>
    <div class="life">
      <ul>
        <li class="li_border">保障期限<span>1年</span></li>
        <li>生效日期<span>2017-08-21</span></li>
      </ul>
    </div>
    <div class="insur_per">被保人为本人<span>李美丽</span></div>
    <div class="beneficiary">保险受益人为法定受益人</div>
    <div class="claim_flow" @click="redirectToFlow">理赔流程</div>
    <div class="product">产品介绍</div>
    <div class="pro_pic"><img src="../../assets/images/insurance/img-product.png"/></div>
    <div class="agreement">
     <div><input :class="check?'in_sure':''" type="checkbox" :checked="check" @click="checkState"/></div>
      <div>本人承诺投保信息的真实性，理解并同意
       <a>《投保须知》</a><a>《保险条款》</a><a>《平台服务协议》</a>
        的全部内容。</div>
    </div>
    <div class="btn_sure">
      <div class="cust_serv"></div>
      <div class="price"> ¥ 2480.00</div>
      <div class="btn_want" @click="redirectTo">我要投保</div>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '保险详情',
        check:false
      }
    },
    methods:{
      redirectTo(){this.$router.push('/insurPay')},
      checkState(){
          if(this.check){
              this.check=false;
          }else {
              this.check=true;
          }
      },
      redirectToFlow(){this.$router.push('/claimFlow')},
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .head{height: 140px;}
  .head img{width: 100%;height: 100%;}
  /*a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}*/
  /*a:hover, a:visited, a:link, a:active {color: #333; }*/
  /*li{list-style: none;}*/
  .explain{height: 64px;line-height: 64px;background: #ffffff;text-align: left;margin-left: 4%;font-size: 15px;color: #333333;}
  .explain:after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 103.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .inventory{height: 177px;background: #ffffff;margin-top: 15px;}
  .tip{padding-left: 20px; height: 44px;margin-left: 4%;line-height: 44px;font-size: 15px;color: #353535;text-align: left; background: url("../../assets/images/insurance/icon-gura-list.png") no-repeat left center;background-size: 15px;}
  .tip:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .items{margin-left: 8%;text-align: left;}
  .items li{height: 35px;line-height: 35px;font-size: 14px;color: #888888;}
  .items span{float: right;margin-right: 5.2%;}
  .look_more{font-size: 13px;color: #888888;background: #F1F1F1;height: 28px;line-height: 28px;}
  .life{margin-top: 15px;background: #ffffff;height: 89px;text-align: left;}
  .life:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .life li{height: 44px;line-height: 44px;margin-left: 4%;list-style: none;font-size: 15px;color: #353535;}
  .li_border:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .life span,.insur_per>span{float: right;margin-right: 4%;}
  .insur_per{height: 44px;line-height: 44px;font-size: 15px;color: #353535;text-align: left;padding-left: 4%;margin-top: 15px;background: #ffffff;}
  .btn_sure{height: 48px;overflow: hidden;position: fixed;left:0;bottom: 0;width: 100%;background: #ffffff;}
  .cust_serv{height: 48px;background: url("../../assets/images/insurance/icon-serv.png") no-repeat center;background-size: 25px;width: 20%; }
  .btn_sure>div{float: left;}
  .price{font-size: 21px;color: #F65150;width: 40%;line-height: 48px;}
  .btn_want{background: #3399FF;line-height: 48px;width: 40%;color: #ffffff;font-size: 18px;}
  .beneficiary{font-size: 12px;color: #888888;text-align: left;margin-left: 4%;height: 37px;line-height: 37px;}
  .claim_flow{height: 44px;line-height: 44px;text-align: left;padding-left: 4%;font-size: 15px;color: #353535;
    background: #ffffff url("../../assets/images/icon/icon-dhjt.png") no-repeat right center;background-size: 20px;}
  .product{height: 44px;line-height: 44px;font-size: 15px;color: #353535;text-align: left; padding-left: 4%;margin-top: 15px;background: #ffffff;}
  .product:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .pro_pic{background: #ffffff;padding: 10px;}
  .agreement{height: 104px;text-align: left;font-size: 14px;color: #888888;margin-bottom: 50px;}
  .agreement a{color: #3399FF;display: inline-block;}
  .agreement>div{float: left;}
  .agreement>div:first-child{width: 10%;height: 100%;}
  .agreement>div:last-child{width: 80%;margin-top: 20px;margin-left: 5px;line-height: 18px;}
  .agreement input{border:1px solid #DFDFDF;border-radius: 4px;-webkit-appearance: none;outline: none;height: 16px;width: 16px;
  margin-left: 15px;margin-top: 21px;}
  .in_sure{background:#3399FF url("../../assets/images/icon/icon-check-w.png") no-repeat center; background-size: 12px;}
</style>

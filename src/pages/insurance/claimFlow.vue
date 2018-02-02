<template>
  <div class="main">
    <div class="head">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/images/insurance/detail-banner.png"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tip">理赔流程</div>
    <ul>
      <li><span>报案：拨打24小时客服电话95522-3或网上报案；</span> </li>
      <li><span>申请：将相关资料准备齐全后向我公司申请理赔；</span> </li>
      <li><span>审核：受理您的理赔申请并进行必要的审核及调查；</span> </li>
      <li><span>结案：按理赔决定进行理赔，理赔款将通过支付宝账号或银行卡进行付款。</span> </li>
    </ul>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '理赔流程',
        check:false
      }
    },
    methods:{

    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .head{height: 140px;}
  .head img{width: 100%;height: 100%;}
  .tip{background:#ffffff url("../../assets/images/insurance/icon-flow.png") no-repeat left 4% center;background-size: 15px;
    height: 44px;line-height: 44px;font-size: 15px;color: #353535;text-align: left;padding-left: 12%;}
  .tip:after{border: 1px solid #DFDFDF;left: -10%;top:0px;width: 109%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li{list-style: none ;margin-left: 30px;text-align: left;height: 70px; line-height: 20px;font-size: 14px;}
  li:before{content: "";display: inline-block;width: 21px;height: 21px;background-color: #FFF;border: 1px solid #333333; border-radius: 50%; position: relative; left: -15px; top: 20px; }
  ul{background:#FFF url("../../assets/images/icon/icon-line-black.png") no-repeat left 26px top 32px;background-size: 1px 200px;}
  li>span{display: block;margin-left: 15px;margin-top: -5px;}
</style>

<template>
  <div class="main">
    <div class="order_status">订单状态<span>待支付</span></div>
    <ul>
      <li><span>缴费人</span><label>李美丽 （332020******11）</label></li>
      <li><span>缴费类型</span><label>城乡居民养老保险</label></li>
      <li><span>年度</span><label>2017年</label></li>
      <li><span>个人缴费金额</span><label>¥ 140.00</label></li>
      <li><span>手续费</span><label>¥ 0.14</label></li>
      <li><span>实付金额</span><label class="red">¥ 140.14</label></li>
    </ul>
    <input class="btn_pay" type="button" value="支付宝支付"/>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '待支付订单'
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .order_status{ height: 62px; line-height: 62px;text-align: left;font-size: 15px;color: #000000;padding-left: 4%;}
  .order_status>span{background: #F65150;border-radius: 6px;font-size: 16px;color: #FFFFFF;display: block;float: right;
  height: 30px;width: 73px;line-height: 30px;text-align: center;margin-right: 4%;margin-top: 16px;}
  ul{background: #ffffff;}
  li{height: 51px;line-height: 51px;text-align: left;margin-left: 4%;list-style: none;}
  li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li>span{font-size:14px;color: #888888;}
  li>label{font-size:14px;color: #353535;float: right;margin-right: 4%;}
  .red{font-size: 16px!important;color: #F65150!important;}
  .btn_pay{background: #3399FF;border-radius: 6px;-webkit-appearance: none;outline: none;width: 90%;border: none;height: 50px;color: #ffffff;font-size: 18px;margin-top: 40px;}
</style>

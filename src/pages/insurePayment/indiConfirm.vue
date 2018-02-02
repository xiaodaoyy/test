<template>
  <div class="main">
    <div class="content">
      <ul>
       <li><span>参保人：</span><label>李美丽（3320******11）</label></li>
        <li><span>参保险种：</span><label>养老+医疗</label></li>
        <li><span>缴费基数：</span><label>第2档 缴费基数1200.00元</label></li>
        <li><span>参保原因：</span><label>个体工商户注册变更</label></li>
        <li><span>起缴方式：</span><label>中断月开始起缴</label></li>
      </ul>
      <ul>
        <li><span>中断年月：</span><label> 2017年02月</label></li>
        <li><span>月缴纳金额：</span><label>325.80元/月</label></li>
        <li class="li_width">养老保险240.00元/月，医疗保险84.00元/月，代理费1.8元/月。</li>
      </ul>
      <div class="total"><label>需缴纳金额</label> 651.60元/月</div>
    </div>
    <div class="btn_sure"><router-link to="indiSucc"><input type="button" value="确认参保"/></router-link> </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '个人参保',
        selectShow:false,
        val:''
      }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .btn_sure input{height: 48px;font-size: 18px;color: #FFFFFF;background: #3399FF;width: 100%;-webkit-appearance: none;
    outline: none;border: none;position: fixed;bottom: 0px;left: 0px;}
  .content{width: 92%;background: #ffffff;margin: 22px auto;border: 1px solid #DFDFDF;border-radius: 10px;font-size: 14px;text-align: left;}
  ul{margin: 20px;}
  ul:after{border: 1px dashed #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li{list-style: none;height: 33px;}
  li>span{color: #888888;display: inline-block;width: 90px;}
  .li_width{height: 50px;color: #888888;font-size: 13px;}
  .total{font-size: 16px; color: #F65150;height: 60px;}
  .total>label{margin-left: 20px;margin-right: 30px;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
</style>

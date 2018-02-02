<template>
  <div class="main">
    <div v-show="historyShow">
  <div class="module" @click="redirectTo(1)">
    <div>
    <ul>
      <li>平安特定疾病保险保障计划</li>
      <li>订单将于下单24小时后关闭</li>
    </ul>
    </div>
    <div><img src="../../assets/images/insurance/icon-pay.png"/></div>
  </div>
      <div class="module"  @click="redirectTo(2)">
      <div>
        <ul>
          <li>平安特定疾病保险保障计划</li>
          <li class="multi">保障期限 2017-04-05—2018-0405<br><span>2笔理赔记录</span></li>
        </ul>
      </div>
      <div><img src="../../assets/images/insurance/icon-guarantee.png"/></div>
    </div>
    <input type="button" value="查看历史保单" class="btn_history" @click="historyShow=false;"/>
    </div>
    <div v-show="!historyShow">
      <div class="module" @click="redirectTo(3)">
        <div>
          <ul>
            <li>平安特定疾病保险保障计划</li>
            <li>保障期限 2016-04-05—2017-0405</li>
          </ul>
        </div>
        <div><img src="../../assets/images/insurance/icon-invalid.png"/></div>
      </div>
      <div class="module">
        <div>
          <ul>
            <li>平安特定疾病保险保障计划</li>
            <li>保障期限 2016-04-05—2017-0405</li>
          </ul>
        </div>
        <div><img src="../../assets/images/insurance/icon-invalid.png"/></div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '我的保单',
        check:false,
        historyShow:true
      }
    },
    methods:{
      redirectTo(type){
          if(type==1){
          this.$router.push("/insurPay");
          }else if(type==2){
            this.$router.push("/guarantee");
          }else {
            this.$router.push("/settlement ");
          }
      },
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .module{min-height: 81px;background: url("../../assets/images/insurance/bg-policy.png") no-repeat;background-size: 100% 100%;width: 92%;
    margin: 15px auto 0 auto;text-align: left;}
  .module li{list-style: none;margin-left: 15px;}
  .module li:first-child{font-size: 14px;color: #000000;line-height: 49px;}
  .module li:last-child{font-size: 11px;color: #888888;line-height: 30px;}
  .module>div{display: inline-block;}
  .module>div:first-child{width:75%;}
  .module>div:last-child{height: 58px;width: 58px;}
  .multi{line-height: 18px!important;}
  .multi>span{color: #3399FF;}
  .btn_history{width: 92%;height: 48px;font-size: 18px;color: #333333;background-color: #ffffff;margin-top: 56px;outline: none;-webkit-appearance: none;border: none;}
</style>

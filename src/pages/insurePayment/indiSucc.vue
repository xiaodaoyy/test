<template>
  <div class="main">
    <div class="result_icon"></div>
    <div class="cert_tip">参保成功！<br/>
      请前往就近的xx银行办理代扣业务<br/>
      业务办理验证码：<span>63733839</span></div>
    <div><router-link to="indiInsur"><input class="btn_sure" type="button" value="返回首页"/></router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '个人参保'
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .result_icon{width: 80px;height: 80px;background: #07AF05 url("../../assets/images/icon/icon-hook.png") no-repeat center;
    border-radius: 50%;background-size: 44px;margin: 90px auto 0 auto;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;margin-top:35px;}
  .cert_tip span{color: #FE4D4D;}
  .btn_sure{width: 90%;height: 50px;background: #3399FF;border-radius: 8px;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
</style>

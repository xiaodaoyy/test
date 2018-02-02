<template>
  <div class="main">
    <div class="result_icon"></div>
    <div class="cert_tip">异地就医备案已提交成功！<br/>
      工作人员将于<span>3个工作日内</span>审核，请耐心等待。</div>
    <div><router-link to="remote"><input class="btn_sure" type="button" value="返回首页"/></router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '异地就医备案'
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

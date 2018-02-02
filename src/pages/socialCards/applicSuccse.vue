<template>
  <div class="main">
    <div class="result_icon"></div>
    <div class="cert_tip"><span>待审核...</span><br/>
      您的资料已提交<br/>
      经办机构将于3个工作日内完成审核。</div>
    <div><router-link to="applicSchedule"><input class="btn_sure" type="button" value="返回"/></router-link></div>
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
  .cert_tip{font-size: 14px; color: #888; line-height: 30px;margin-top:35px;}
  .cert_tip span{font-size: 16px;color: #333333;}
  .btn_sure{width: 90%;height: 50px;background: #3399FF;border-radius: 4px;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
</style>

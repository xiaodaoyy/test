<template>
  <div class="main">
    <div class="result_icon"></div>
    <div class="cert_tip">社保转移申请已提交成功！</div>
    <div><router-link to="transfSchedule"><input class="btn_search" type="button" value="进度查询"/></router-link></div>
    <div><router-link to="transferClassify"><input class="btn_back" type="button" value="返回首页"/></router-link></div>
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
  .btn_search{width: 90%;height: 48px;background: #3399FF;border-radius: 3px;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
  .btn_back{width: 90%;height: 48px;background: #ffffff;border-radius: 3px;border: none;font-size: 18px;color: #333333;margin-top: 35px;-webkit-appearance: none;outline: none;border: 1px solid #D5D5D5;}
</style>

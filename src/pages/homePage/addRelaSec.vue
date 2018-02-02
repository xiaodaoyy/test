<template>
  <div class="main">
   <div class="leave_msg">您所添加的亲人社保局预留手机号为：130***1233</div>
    <div class="check_num"><input type="tel" placeholder="输入验证码"/><input type="button" value="发送验证码"/></div>
    <div class="btn_next"><input type="button" value="确认"/></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '添加亲人'
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .leave_msg{height: 52px;line-height: 52px;text-align: left;padding-left: 15px;font-size: 13px;color: #1F1F1F;}
  input{-webkit-appearance: none;height: 30px;border: none;outline: none;font-size: 14px;}
  .btn_next input{width: 90%;height: 48px;color: #FFF;font-size: 18px;background: #3399FF;border-radius: 6px;margin: 40px auto 0 auto;}
  .check_num>input[type=tel]{width: 66%;height: 50px;padding-left: 4%;vertical-align: top;}
  .check_num>input[type=button]{width: 30%;height: 50px;background: #3399FF;color: #FFFFFF;font-size: 15px;vertical-align: top;}
</style>

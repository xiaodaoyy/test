<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div class="head">
    <div class="user_info">
      <div class="user_pic"><img src="../../assets/images/icon/img-headpic.png"/></div>
      <div class="user_msg">
        <ul>
        <li>杭州市社会保障卡</li>
        <li>姓名： 李美丽</li>
        <li>卡号： A123456</li>
        <li>状态： 正常</li>
        <li>社会保障号码：332619876737373</li>
      </ul></div>
    </div>
    </div>
    <div class="tip">社保局预留手机号：<span>132*****1</span></div>
    <div class="yzm"><label>验证码</label><input type="tel" placeholder="输入验证码"/><input type="button" value="获取验证码"/></div>
    <div><router-link to="reportSuccess"><input class="btn_sure" type="button" value="申请挂失"/></router-link></div>
    <div class="time_tip">社保卡<span>挂失有效期为5天。</span></div>
    <div v-show="boot" class="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/loss.png"/></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '生存认证',
        boot:true,
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 33px;position: absolute;top:61%;left: 30%;z-index: 1;}
  .head{height: 170px;background: #F9F9F9;padding-top: 15px;}
  .user_info{overflow: hidden; height: 154px;width: 92%;margin: 0 auto; background-image: linear-gradient(-180deg, #1685DD 18%, #3086DD 82%); border-radius: 20px;}
  img{width: 100%;height: 100%;}
  .user_info>div{float: left;}
  .user_pic{height: 48px;width: 48px;border-radius: 50%;overflow: hidden;margin-left: 18px; margin-top: 32px;}
  li{list-style: none;text-align: left;line-height: 18px;}
  .user_msg{font-size: 12px;width: 75%;}
  .user_msg ul{margin-top: 15px;color: #FFF;margin-left: 7.7%;}
  .user_msg li:first-child{font-size: 15px;line-height: 36px;}
  .user_msg li:last-child{font-size: 13px;line-height: 36px;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
  .tip{font-size: 14px;color: #1F1F1F;height: 51px;line-height: 51px;text-align: left;margin-left: 4%;}
  .tip span,.time_tip span{color: #F65150;}
  .yzm{background: #ffffff;height: 51px;line-height: 51px;text-align: left;}
  .yzm label{display: inline-block;width: 20%;font-size: 14px;color: #333333;margin-left: 4%;}
  .yzm input[type=tel]{width: 40%;height: 34px;border: none;}
  .yzm input[type=button]{width: 30%;height: 34px;background: #FFFFFF;border: 1px solid #F65150;border-radius: 4px;font-size: 15px;
    color: #F65150;}
  .btn_sure{-webkit-appearance: none;outline: none; width: 90%;height: 48px;border: none;color: #FFF;font-size: 18px;margin: 30px auto;background: #3399FF;border-radius: 4px;}
  .time_tip{font-size: 14px;text-align: left;margin-left: 4%;color: #888888;}
  input{-webkit-appearance: none;outline: none;}
</style>

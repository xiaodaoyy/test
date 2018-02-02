<template>
  <div class="main">
    <div class="content">
      <label>个人基本信息</label>
      <ul>
        <li><span>姓名：</span><label>*美丽</label></li>
        <li><span>身份证号：</span><label>123*******45</label></li>
        <li><span>历年账户金额：</span><label>3100.00元</label></li>
      </ul>
    </div>
    <div class="title">转移信息</div>
    <div class="foot">
      <ul>
        <li><label>姓名</label><input type="text" value="李三四" readonly="readonly"/></li>
        <li><label>身份证号</label><input type="text" value="3320208839939332" readonly="readonly"/></li>
        <li><label>本人关系</label><input class="in_bg" type="text" value="配偶" readonly="readonly"/></li>
        <li><label>转移金额</label><input type="text" value="33333.00" readonly="readonly"/></li>
        <li><label>验证码</label><input class="in_yzm" type="tel" placeholder="请输入短信验证码"/>
          <input class="in_get_yzm" type="button" value="获取验证码" /></li>
      </ul>
    </div>
    <div class="btn_sure"><router-link to=""><input type="button" value="确认转移"/></router-link></div>
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
    },methods:{
      sendMessage(){
          MessageBox({
            title: '提示',
            message: '确定执行此操作?',
            showCancelButton: true
          });
        }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .foot ul{background: #ffffff;margin-top: 15px;}
  .foot li{height: 51px;line-height: 51px;text-align: left;}
  .foot li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .foot li>label{font-size: 14px;color: #333333;margin: 0 6% 0 4%;font-weight: bold;display: inline-block;width:18%;}
  .foot li>input{width: 68%;height: 40px;outline: none;-webkit-appearance: none;border: none;}
  .in_bg{background:  url("../../assets/images/icon/icon-jtdown.png") no-repeat right center; background-size: 18px; }
  .btn_sure input{height: 48px;font-size: 18px;color: #FFFFFF;background: #3399FF;width: 90%;-webkit-appearance: none;outline: none;border: none;margin-top: 30px;margin-bottom: 20px;border-radius: 3px;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
  .content{width: 92%;background: #ffffff;margin: 22px auto;border: 1px solid #DFDFDF;border-radius: 10px;font-size: 14px;text-align: left;}
  .content ul{margin: 20px;}
  .content li{list-style: none;height: 33px;}
  .content li>span{color: #888888;display: inline-block;width: 90px;}
  .total>label{margin-left: 20px;margin-right: 30px;}
  .content>label{margin-top: 13px;margin-left:20px;display: block;}
  .title{text-align: left;padding-left: 4%;font-size: 14px;}
  .in_yzm{width: 40%!important;}
  .in_get_yzm{width: 30%!important;height: 34px!important;background: none;border: 1px solid #F65150!important; border-radius: 8px;color: #F65150; }
</style>

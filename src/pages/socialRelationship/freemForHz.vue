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
        <li><label>姓名</label><input type="text" placeholder="转移人员姓名"/></li>
        <li><label>身份证号</label><input type="text" placeholder="转移人员身份证号"/></li>
      </ul>
    </div>
    <div class="btn_next"><router-link to="transConfim"><input type="button" value="下一步"/></router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '社保转移',
        selectShow:false,
        val:''
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
  .btn_next input{ height: 48px;font-size: 18px;color: #FFFFFF;background: #3399FF;width: 90%;-webkit-appearance: none;outline: none;border: none;margin-top: 30px;border-radius: 3px;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
  .content{width: 92%;background: #ffffff;margin: 22px auto;border: 1px solid #DFDFDF;border-radius: 10px;font-size: 14px;text-align: left;}
  .content>label{margin-top: 13px;margin-left:20px;display: block;}
  .content ul{margin:10px 20px;}
  .content li{list-style: none;height: 33px;}
  .content li>span{color: #888888;display: inline-block;width: 110px;}
  .title{text-align: left;padding-left: 4%;font-size: 14px;}
</style>

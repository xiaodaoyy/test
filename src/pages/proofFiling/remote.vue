<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div class="has_record">
      <div class="remote_list">
        <ul class="ul_info">
          <li class="pic"><i><img src="../../assets/images/consult/img-hospital2.png"/></i></li>
          <li class="describe success"><label>杭州市第一人民医院</label><span></span></li>
          <li class="sign"><input class="input_clo1" type="button" value="成功"/></li>
        </ul>
      </div>
      <div class="remote_list">
        <ul class="ul_info">
          <li class="pic"><i><img src="../../assets/images/consult/img-hospital2.png"/></i></li>
          <li class="describe"><label>杭州市第一人民医院</label>
            <span>失败原因：身份证与所填写资料不符，证明上午医师盖章</span>
          </li>
          <li class="sign"><input class="input_clo2" type="button" value="失败"/></li>
        </ul>
      </div>
    </div>
    <div class="hasno">
      <div class="cert_pic"><img src="../../assets/images/icon/icon-auth.png" height="246" width="303"/></div>
      <div class="cert_tip">您还未添加备案～</div>
     </div>
    <div><router-link to="addRemote"><input class="btn_sure" type="button" value="添加备案"/></router-link></div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/ydjyba1.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><img src="../../assets/images/boot/ydjyba2.png"/></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '异地就医备案',
        boot1:true,
        boot2:false
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
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:57%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:57%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 40px;position: absolute;bottom:16%;right: 13%;z-index: 1;}
  .remote_list{background: #FFF url("../../assets/images/icon/icon-dhjt.png") no-repeat right center;background-size: 26px;}
  .ul_info{height:71px;}
  .remote_list:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .ul_info li{float: left;list-style: none;height: 71px;text-align: left;}
  .pic{width: 20%;}
  .describe{width: 55%;}
  .describe label{display: block;font-size: 14px;color: #333;margin-top: 7px;}
  .describe span{display: block;font-size:13px;color: #999999;line-height: 20px;}
  .success{line-height: 71px;}
  .success label{margin-top: 0px;}
  .sign{width: 20%;line-height: 71px;}
  .pic i{height: 40px;width: 40px;display: inline-block;padding-top: 15px;margin-left: 7px;}
  .sign input{-webkit-appearance: none;outline: none; background: none;height: 18px;margin-right: 8.7%;font-size: 13px;width: 46px;line-height: 18px;}
  .input_clo1{border: 1px solid #3399FF;border-radius: 4px;color: #3399FF ;}
  .input_clo2{border: 1px solid #FE4D4D;border-radius: 4px;color: #FE4D4D ;}
  img{width: 100%;height: 100%;}
  .cert_pic{margin:80px auto 0 auto;width: 151px;height: 123px;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;margin-top:35px;}
  .btn_sure{position: fixed;bottom: 0;left: 0; width: 100%; height: 50px;background: #3399FF;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
  .hasno{display: none;}
 </style>

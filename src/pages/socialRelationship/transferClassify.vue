<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <ul class="menu">
      <li :class="{'choose':active==1}" @click="active=1"><i><img src="../../assets/images/icon/icon-oldman.png"/></i><label>基本养老保险</label></li>
      <li :class="{'choose':active==2}" @click="active=2"><i><img src="../../assets/images/icon/icon-medic-box.png"/></i><label>基本医疗保险</label></li>
      <li :class="{'choose':active==3}" @click="active=3"><i><img src="../../assets/images/icon/icon-soldier.png"/></i><label>退役军人养老</label></li>
    </ul>
   <div><router-link to="socialTransfer"><input type="button" value="确认转移" class="btn_sure"/></router-link></div>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/sbzy1.png"/></div>
   </div>
  </div>
</template>

<script>
  document.getElementsByTagName('body')[0].className = 'body_bg';
  export default {
    name: 'index',
    data () {
      return {
        msg: '社保转移',
        active:0,
        boot:true
      }
    },
    methods:{
    }
  }
 </script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 35px;position: absolute;bottom:20%;left: 32%;z-index: 1;}
  .menu{font-size: 16px;color: #FFFFFF;margin-top: 20px;}
  .menu li{list-style: none;height: 60px;width: 80%;line-height: 60px;background: rgba(11,109,207,0.50);border: 1px solid #016BD6;
    border-radius: 100px;margin: 48px auto 0 auto;text-align: left;}
  .menu i{width:33px;height: 38px; display: inline-block;position: relative;left: 8.4%;top: 10px;}
  .menu label{margin-left: 20%;}
  img{height: 100%;width: 100%;}
  .choose{background:rgba(16,224,255,0.50) url("../../assets/images/icon/icon-checktrue.png") no-repeat right 30px center!important;background-size: 22px!important;border: none!important;}
 .btn_sure{-webkit-appearance: none;outline: none;width: 56%;height: 40px;border: none;background: #3399FF; border-radius: 100px;
   position: fixed;bottom: 50px;left: 22%;font-size: 18px; color: #FFFFFF;}
</style>

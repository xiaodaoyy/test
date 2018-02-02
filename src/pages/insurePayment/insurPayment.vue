<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
      <div class="menu_list"><router-link to="singlePayment">
        <div class="pic"><img src="../../assets/images/icon/icon-pay.png"/></div>
        <div class="title">缴款单缴费</div></router-link>
      </div>
    <div class="menu_list"><router-link to="cityInsure">
      <div class="pic"><img src="../../assets/images/icon/icon-cjyl.png"/></div>
      <div class="title">城居养老保险缴费</div></router-link>
    </div>
    <div class="menu_list"><router-link to="cityInsure">
      <div class="pic"><img src="../../assets/images/icon/icon-cjyilao.png"/></div>
      <div class="title">城居医疗保险缴费</div></router-link>
    </div>
    <div class="menu_list"><router-link to="cityInsure">
      <div class="pic"><img src="../../assets/images/icon/icon-seyl.png"/></div>
      <div class="title">少儿医疗保险缴费</div></router-link>
    </div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/payment1.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><span class="next2" @click="boot3=true;boot2=false" ></span><img src="../../assets/images/boot/payment2.png"/></div>
    <div class="boot" v-show="boot3"><span class="last3" @click="boot3=false"></span><span class="next3" @click="boot4=true;boot3=false" ></span><img src="../../assets/images/boot/payment3.png"/></div>
    <div class="boot" v-show="boot4"><span class="last4" @click="boot4=false"></span><img src="../../assets/images/boot/payment4.png"/></div>
  </div>
  </div>
  </template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '社保缴费',
        boot1:true,
        boot2:false,
        boot3:false,
        boot4:false,
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
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:51%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:51%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 33px;position: absolute;top:36%;left: 15%;z-index: 1;}
  .next2{display: block;width: 30%;height: 33px;position: absolute;top:36%;right: 15%;z-index: 1;}
  .last3{display: block;width: 30%;height: 33px;position: absolute;top:46%;left: 23%;z-index: 1;}
  .next3{display: block;width: 30%;height: 33px;position: absolute;top:46%;right: 6%;z-index: 1;}
  .last4{display: block;width: 30%;height: 37px;position: absolute;bottom:15%;right: 7%;z-index: 1;}
  .menu_list{background: #FFF url("../../assets/images/icon/icon-dhjt.png") no-repeat right 15px center;background-size: 26px;
    width: 90%;margin: 20px auto 0 auto;height: 60px;border-radius: 16px;text-align: left;font-size: 14px;color: #333333;line-height: 60px;}
  .menu_list div{float: left;}
  .title{margin-left: 15px;}
  .pic{height: 40px;width: 40px;margin-left: 6.9%;margin-top: 9.5px;}
  img{width: 100%;height: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
 </style>

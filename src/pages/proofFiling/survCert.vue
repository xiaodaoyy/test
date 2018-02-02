<template>
  <div class="main">
    <div class="cert_pic"><img src="../../assets/images/icon/icon-auth.png" height="246" width="303"/></div>
    <div class="cert_tip">通过生存认证（即养老待遇资格认证）后，可领取养老保险金。</div>
    <div><router-link to="survCertInfo"  @click.native="isCertification"><input class="btn_sure" type="button" value="本人认证"/></router-link></div>
    <div><router-link to="chooseRelative"><input class="btn_sure" type="button" value="帮助亲人认证"/></router-link></div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/scrz1.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><span class="next2" @click="boot3=true;boot2=false" ></span><img src="../../assets/images/boot/scrz2.png"/></div>
    <div class="boot" v-show="boot3"><span class="last3" @click="boot3=false"></span><img src="../../assets/images/boot/scrz3.png"/></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '生存认证',
        boot1:true,
        boot2:false,
        boot3:false,
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:35%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:35%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 33px;position: absolute;top:46%;left: 15%;z-index: 1;}
  .next2{display: block;width: 30%;height: 33px;position: absolute;top:46%;right: 15%;z-index: 1;}
  .last3{display: block;width: 30%;height: 40px;position: absolute;bottom:33%;left: 34%;z-index: 1;}
  .cert_pic{margin:0 auto;width: 151px;height: 123px;margin-top: 80px;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;width: 72%;margin: 0 auto;text-align: left;margin-top:35px;}
  img{width: 100%;height: 100%;}
  .btn_sure{width: 90%;height: 50px;background: #3399FF;border-radius: 8px;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
</style>

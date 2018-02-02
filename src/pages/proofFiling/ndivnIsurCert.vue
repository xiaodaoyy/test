<template>
  <div class="main">
    <div class="cert_pic"><img src="../../assets/images/icon/icon-auth.png"/></div>
    <div class="cert_tip">个人参保证明PDF文件下载</div>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/sbzm.png"/></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '个人参保证明',
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
  .last{display: block;width: 30%;height: 40px;position: absolute;bottom:12%;left: 34%;z-index: 1;}
  .cert_pic{margin:0 auto;width: 40%;height: 112px;margin-top: 80px;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;width: 100%;margin-top:35px;}
  img{width: 100%;height: 100%;}
</style>

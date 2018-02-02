<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <ul>
      <li>
        <router-link to="ndivnIsurCert">个人参保证明（个人专用）</router-link>
      </li>
      <li>
        <router-link to="">历年参保证明</router-link>
      </li>
      <li>
        <router-link to="">养老保险待遇发放证明</router-link>
      </li>
    </ul>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/sbzm1.png"/></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '生存认证',
        boot:true
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 33px;position: absolute;top:60%;left: 30%;z-index: 1;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  ul{background: #FFFFFF;}
  li{text-align: left;font-size: 14px;height: 53px;border-bottom: 1px solid #DFDFDF;line-height: 53px;
    padding-left: 15px;list-style: none;background: url(../../assets/images/icon/icon-dhjt.png) no-repeat right 15px center;
    background-size:18px;}
</style>

<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div class="head_info">
      <div>
        <span>本市职工上年月平均工资(元)</span>
        <label>3500.00</label>
        <span>现在年龄(岁)</span>
        <label>30</label>
      </div>
      <div>
      <span>养老保险账户累计余额(元)</span>
      <label>34000.99</label>
      <span>退休年龄(岁)</span>
      <label>60</label>
    </div>
    </div>
    <div class="title">预测我的养老金</div>
    <ul>
      <li><label>月工资(元)</label><input type="tel" placeholder="请输入你月的工资"/></li>
      <li><label>默认个人工资增长率(%)</label><input type="text" placeholder="3"/></li>
      <li><label>默认职工工资增长率(%)</label><input type="text" placeholder="5"/></li>
      <li><label>期望退休后每月工资(元)</label><input type="text" placeholder="请输入退休后期望月工资"/></li>
    </ul>
    <div class="btn_next"><router-link to="forecastSec"><input type="button" value="开始计算"/></router-link></div>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/yljyc.png"/></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '我的养老金预测',
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
  img{height: 100%;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 40px;position: absolute;top:54%;left: 33%;z-index: 1;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .head_info{height: 154px;background: #2585E4;overflow: hidden;color: #FFFFFF;text-align: left;}
  .head_info>div{float: left;width: 48%;padding-left: 2%;}
  .head_info span{display: block;font-size: 12px;margin-top: 16px;}
  .head_info label{display: block;font-size: 21px;font-weight: 600;margin-top: 10px;margin-bottom: 22px;}
  .head_info>div:last-child{background: url("../../assets/images/icon/icon-vert-line.png") no-repeat left bottom 14px;background-size: 1px 65px}
  .title{height: 40px;line-height: 40px;text-align: left;background: #EBF4FB;padding-left: 15px;font-size: 14px;}
  ul{background: #FFFFFF;}
  li{margin-left: 15px;list-style: none;height: 51px; text-align: left;line-height: 51px;}
  li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li>label{display: inline-block;width: 50%;font-size: 14px;color: #000000;font-weight: 200;}
  input{-webkit-appearance: none;height: 30px;border: none;outline: none;text-align: right;width: 48%;}
  .btn_next input{text-align: center; width: 90%;height: 48px;color: #FFF;font-size: 18px;background: #3399FF;border-radius: 6px;margin: 30px auto 0 auto;}

</style>

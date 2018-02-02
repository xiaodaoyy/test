<template>
  <div class="main">
    <div class="head_info">
      <div>计算结果仅供参考</div>
      <span>我现在30岁，60岁退休，退休后的大致可领取的月养老金(元)</span>
      <label>6000.00</label>
    </div>
    <div class="title">养老规则</div>
   <div class="content">按照我目前的工资，不能达到期望的退休后生活水平，我如果需要逐步提高工资待遇或者每月额外增加养老金<span>709.92</span> 元。</div>
     </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '我的养老金预测'
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .head_info{height: 154px;background: #2585E4;color: #FFFFFF;text-align: left;}
  .head_info>div{font-size: 16px;height: 48px;margin-left: 4.4%;line-height: 48px;}
  .head_info>div:after{border: 1px solid #4DB5FF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .head_info span{display: block;font-size: 12px;margin-top: 12px;margin-left: 4.4%;}
  .head_info label{display: block;font-size: 32px;font-weight: 100;margin-top: 8px;margin-left: 4.4%;}
  .head_info>div:last-child{background: url("../../assets/images/icon/icon-vert-line.png") no-repeat left bottom 14px;background-size: 1px 65px}
  .title{height: 40px;line-height: 40px;text-align: left;background: #EBF4FB;padding-left: 15px;font-size: 14px;}
  .content{font-size: 14px;color: #333333;line-height: 21px;text-align: left;margin: 19px 4% 0 4%;}
  .content>span{color: #E5796C;}
</style>

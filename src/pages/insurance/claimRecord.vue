<template>
  <div class="main">
    <ul class="record_list">
      <li @click="toNewPage">
      <div  class="info">
        <div>017-02-23 省立同德医院 住院详情</div>
        <div><span>理赔编号：2344552</span><span>2017-02-20 </span></div></div>
      <div class="sign_state1">待审核</div>
    </li>
      <li @click="toNewPage">
      <div  class="info">
        <div>017-02-23 省立同德医院 住院详情</div>
        <div><span>理赔编号：2344552</span><span>2017-02-20 </span></div></div>
      <div class="sign_state2">结案</div>
    </li>
      <li @click="toNewPage">
      <div  class="info">
        <div>017-02-23 省立同德医院 住院详情</div>
        <div><span>理赔编号：2344552</span><span>2017-02-20 </span></div></div>
      <div class="sign_state3">失败</div>
    </li>
    </ul>
    <div class="tip">上传的住院小结，需要盖上医院公章。</div>
   </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '理赔记录'
      }
    },
    methods:{
        toNewPage(){this.$router.push("/schedule");}
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .record_list{background: #ffffff;}
  .record_list>li{list-style: none; margin-left: 4%; height: 68px;text-align: left;background: url("../../assets/images/icon/icon-dhjt.png") no-repeat right 2% center;background-size: 18px;}
  .record_list li:after{border: 1px solid #DFDFDF;left: 0;top:13px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .record_list>li>div{display: inline-block;}
  .info{margin-top: 13px;width: 70%;}
  .info span{font-size: 13px;color: #888888;margin-right: 4%;}
  .info>div:first-child{overflow: hidden;height: 22px; text-overflow:ellipsis;font-size: 15px;color: #333333;}
  .sign_state1{width: 55px;height: 26px;background: #3399FF;border-radius: 4px;font-size: 15px;color: #FFFFFF;line-height: 26px;text-align: center;
  position: relative;top:-10px;}
 .sign_state2{width: 55px;height: 26px;background: #CCCCCC;border-radius: 4px;font-size: 15px;color: #FFFFFF;line-height: 26px;text-align: center;
  position: relative;top:-10px;}
 .sign_state3{width: 55px;height: 26px;background: #F65150;border-radius: 4px;font-size: 15px;color: #FFFFFF;line-height: 26px;text-align: center;
  position: relative;top:-10px;}
  .tip{height: 44px;line-height: 44px;font-size: 13px;color: #F65150; text-align: left;margin-left: 4%;background-color: #ffffff;}
</style>

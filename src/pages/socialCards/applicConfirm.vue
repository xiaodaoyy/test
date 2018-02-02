<template>
  <div class="main">
    <div class="title">信息确认</div>
    <ul class="info"><li><label>姓名：</label><span>李美丽</span></li>
      <li><label>身份证号：</label><span>433434348123242434</span></li>
      <li><label>手机号码：</label><span>13288473627</span></li>
      <li><label>性别：</label><span>女</span></li>
      <li><label>签收信息：</label><span>本人签收</span></li>
      <li><label>邮寄地址：</label><span>湖州市吴兴区塞西路369号</span></li>
    </ul>
    <ul class="pic">
      <li><i><img src="../../assets/images/social/icon-card3.png"/></i><span>身份证正面</span></li>
      <li><i><img src="../../assets/images/social/icon-card3.png"/></i><span>身份证反面</span></li>
    </ul>
    <div class="inch_pic"><i><img src="../../assets/images/social/icon-inch-photo.png"/></i><span>1寸证件照</span></div>
    <div class="btn_group"><input type="button" value="关闭"/><input @click="btnsure" type="button" value="确定"/></div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '社保卡预申领'
      }
    },
    methods:{
        btnsure:function(){
          this.$router.push({path:'/applicSuccse'});
        }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .title{font-size: 18px;color: #333333;height: 53px;line-height: 53px;}
  .title:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .info li{list-style: none;height: 40px;line-height: 40px;text-align: left;font-size: 14px;color: #333333;}
  .info li label{display: inline-block;width: 30%;margin-left: 4%;}
  .btn_group input{width: 40%;height: 42px;-webkit-appearance: none;outline: none;font-size: 18px;}
  .btn_group input:first-child{margin-right: 10%;background: #3399FF;border-radius:4px;color: #ffffff;border: none;}
  .btn_group input:last-child{background: #ffffff;border-radius:4px;border: 1px solid #979797;color: #454545;}
  .pic li{list-style: none;float: left;width: 50%;min-height: 150px;}
  .pic span,.inch_pic span{font-size:14px; color: #333333;}
  .pic i{display: block;width: 80%;margin:20px auto 0 auto;}
  img{width: 100%;}
  .inch_pic{margin-bottom: 30px;}
  .inch_pic i{display: block;width: 20%;margin-left: 4%;}
  .inch_pic span{display: block;text-align: left;margin-left: 4%;}
</style>

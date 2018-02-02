<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div class="content">
      <ul>
        <li><span>参保人：</span><label>李美丽（3320******11）</label></li>
        <li><span>参保险种：</span><label>养老+医疗</label></li>
        <li><span>缴费基数：</span><label>第2档 缴费基数1200.00元</label></li>
        <li><span>最近缴纳：</span><label>2017年5月</label></li>
      </ul>
    </div>
    <div class="foot">
      <ul>
        <li><label>中断原因</label><input readonly="readonly" :value="interruptReson" @click="interruptVisible=true" type="text" placeholder="请选择"/></li>
        <li><label>中断年月</label><input type="tel" value="2017年9月" readonly="readonly"/></li>
        <li><label>手机号</label><input type="tel" placeholder="请输入手机号码"/></li>
        <li><label>验证码</label><input class="in_yzm" type="tel" placeholder="请输入短信验证码"/><input class="in_get_yzm" type="button" value="获取验证码"/></li>
      </ul>
    </div>
    <div class="btn_next"><router-link to="indiConfirm"><input type="button" value="确认中断参保"/></router-link></div>
    <mt-popup v-model="interruptVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slotinterruptReson" valueKey="text"  @change="onInterruptChange"></mt-picker>
      <div class="popbtn"><span @click="interruptVisible=false">取消</span><span @click="interruptVisible=false">完成</span></div>
    </mt-popup>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/breakinsur.png"/></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '个人参保',
        selectShow:false,
        val:'',
        interruptVisible:false,
        interruptReson:'',
        boot:true,
        slotinterruptReson: [
        {
          flex: 1,
          values: [{value:'0',text:'请选择'}, {value:'1',text:'退休'}, {value:'2',text:'出国'},{value:'3',text:'未成年'}],
          textAlign: 'center'
        }
      ],
      }
    },methods:{
      onInterruptChange(picker, values){
        if(values[0]!=undefined) {
          this.interruptReson = values[0].text;
          if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0]);
          }
        }

      },
    }

  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img {width: 100%;height: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 33px;position: absolute;top:55%;left: 30%;z-index: 1;}
  .foot ul{background: #ffffff;margin-top: 15px;}
  .foot li{height: 51px;line-height: 51px;text-align: left;list-style: none;}
  .foot li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .foot li>label{font-size: 14px;color: #333333;margin: 0 6% 0 4%;font-weight: bold;display: inline-block;width:18%;}
  .foot li>input{width: 68%;height: 40px;outline: none;-webkit-appearance: none;border: none;}
  .foot li>input[type=text]{background:  url("../../assets/images/icon/icon-jtdown.png") no-repeat right center; background-size: 18px; }
  .btn_next input{position: fixed;left: 0;bottom: 0; height: 48px;font-size: 18px;color: #FFFFFF;background: #3399FF;width: 100%;-webkit-appearance: none;outline: none;border: none;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
  .content{width: 92%;background: #ffffff;margin: 22px auto;border: 1px solid #DFDFDF;border-radius: 10px;font-size: 14px;text-align: left;}
  .content ul{margin: 20px;}
  .content li{list-style: none;height: 33px;}
  .content li>span{color: #888888;display: inline-block;width: 90px;}
  .total>label{margin-left: 20px;margin-right: 30px;}
  .in_yzm{width: 40%!important;}
  .in_get_yzm{width: 30%!important;height: 34px!important;background: none;border: 1px solid #F65150!important; border-radius: 8px;color: #F65150; }
</style>

<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <headUser></headUser>
    <div class="insur_species"  @click="insureVisible=true"><label>参保险种</label><span>{{insureType}}</span></div>
    <div class="choose_base">选择参保基数</div>
    <div :class="active==1?'module choose':'module'" @click="choose('1')">
      <label>第1档 缴费基数850.50元</label>
      <span>养老保险 170.10元/月</span>
      <span>医疗保险 84.00元/月</span>
    </div>
    <div  :class="active==2?'module choose':'module'" @click="choose('2')">
      <label>第2档 缴费基数1200.00元</label>
      <span>养老保险 170.10元/月</span>
      <span>医疗保险 84.00元/月</span>
    </div>
    <div  :class="active==3?'module choose':'module'" @click="choose('3')">
      <label>第3档 缴费基数2000.00元</label>
      <span>养老保险 170.10元/月</span>
      <span>医疗保险 84.00元/月</span>
    </div>
    <div>
      <ul>
        <li><label>参保原因</label><input @click="insuReasonsVisible=true" readonly="readonly" type="text" placeholder="请选择" :value="insuReason" /></li>
        <li><label>起缴方式</label><input @click="payWayVisible=true" :value="payWay" readonly="readonly" type="text" placeholder="当前月进行月缴"/></li>
        <li><label>手机号</label><input type="tel" placeholder="请输入手机号码"/></li>
      </ul>
    </div>
    <div class="tip">温馨提示：<br/>
      中断期间有XX市外参保缴费的，请至社保中心窗口办理。</div>
    <div class="btn_next"><router-link to="indiConfirm"><input type="button" value="下一步"/></router-link></div>
    <mt-popup v-model="insureVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slotInsureType" valueKey="text"  @change="onInsureTypeChange"></mt-picker>
      <div class="popbtn"><span @click="insureVisible=false">取消</span><span @click="insureVisible=false">完成</span></div>
    </mt-popup>
    <mt-popup v-model="insuReasonsVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slotInsuReason" valueKey="text"  @change="onInsuResonChange"></mt-picker>
      <div class="popbtn"><span @click="insuReasonsVisible=false">取消</span><span @click="insuReasonsVisible=false">完成</span></div>
    </mt-popup>
    <mt-popup v-model="payWayVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slotPayWay" valueKey="text"  @change="onPayWayChange"></mt-picker>
      <div class="popbtn"><span @click="payWayVisible=false">取消</span><span @click="payWayVisible=false">完成</span></div>
    </mt-popup>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/personinsur.png"/></div>
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
        active:'2',
        insureVisible:false,
        boot:true,
        insureType:'请选择',
        slotInsureType: [
          {
            flex: 1,
            values: [{value:'0',text:'请选择'}, {value:'1',text:'养老'}, {value:'2',text:'医疗'},{value:'3',text:'养老+医疗'}],
            textAlign: 'center'
          }
        ],
        insuReasonsVisible:false,
        insuReason:'请选择',
        slotInsuReason: [
          {
            flex: 1,
            values: [{value:'0',text:'请选择'}, {value:'1',text:'个体工商户注册变更'}, {value:'2',text:'系统提供参保原因'}],
            textAlign: 'center'
          }
        ],
        payWayVisible:false,
        payWay:"",
        slotPayWay: [
          {
            flex: 1,
            values: [{value:'1',text:'当前月进行起缴'}, {value:'2',text:'中断月份开始起缴'}],
            textAlign: 'center'
          }
        ],
      }
    },
    methods:{
      choose(id){
        this.active=id;
      },
      onInsureTypeChange(picker, values){
        if(values[0]!=undefined) {
          this.insureType = values[0].text;
        }
        /*if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }*/
      },
      onInsuResonChange(picker, values){
        if(values[0]!=undefined) {
          this.insuReason=values[0].text;
        }
       /* if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }*/
      },
      onPayWayChange(picker, values){
        if(values[0]!=undefined) {
          this.payWay = values[0].text;
        }
       /* if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }*/
      }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 33px;position: absolute;bottom:15%;left: 30%;z-index: 1;}
  .insur_species{height: 51px;line-height: 51px;background: #ffffff url("../../assets/images/icon/icon-jtdown.png") no-repeat right 4% center;
    background-size: 18px;text-align: left; font-size: 14px; margin-top: 15px;}
  .insur_species>label{margin: 0 12% 0 4%;font-weight: bold;}
  .insur_species>span{color: #888888;}
  .choose_base{height: 40px;line-height: 40px;color: #888888;font-size: 14px;text-align: left;padding-left: 4%;}
  .module{background: #ffffff;height: 80px;text-align: left;padding-left: 4%;padding-top: 10px}
  .module:after{border: 1px solid #DFDFDF;left: 0px;top:15px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .module>label{font-size: 15px;color: #333333;font-weight: 200;display: block;line-height: 24px;}
  .module>span {font-size: 14px; color: #888888;line-height: 20px;display: block;}
  .choose{background:  rgba(165,210,255,0.5) url("../../assets/images/icon/icon-selected.png") no-repeat right 4% center;background-size: 20px;}
  ul{background: #ffffff;margin-top: 15px;}
  li{height: 51px;line-height: 51px;text-align: left;}
  li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li>label{font-size: 14px;color: #333333;margin: 0 12% 0 4%;font-weight: bold;display: inline-block;width:18%;}
  li>input{width: 60%;height: 40px;outline: none;-webkit-appearance: none;border: none;}
  li>input[type=text]{background:  url("../../assets/images/icon/icon-jtdown.png") no-repeat right center; background-size: 18px; }
  .tip{height: 76px;font-size: 14px;color: #888888;line-height: 20px;text-align: left; padding: 15px;}
  .btn_next input{height: 48px;font-size: 18px;color: #FFFFFF;background: #3399FF;width: 100%;-webkit-appearance: none;outline: none;border: none;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
</style>

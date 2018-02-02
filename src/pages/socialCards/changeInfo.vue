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
    <table class="tab_main" cellpadding="0" cellspacing="0">
      <tr><td rowspan="3" valign="top"><label>邮寄地址</label><span>个人权益单将寄送到该地址</span></td>
        <td><input class="bg_add" type="text"  @click="choiceArea"  readonly="readonly" v-model="strAddr" placeholder="请选择省、市、县"/></td></tr>
      <tr><td><input class="bg_add" readonly="readonly"  type="text" placeholder="请选择街道社区"/></td></tr>
      <tr><td><input type="text" placeholder="请输入详细地址"/></td></tr>
      <tr><td><label>参保人手机</label></td><td><input type="text" placeholder="请输入手机号码"/></td></tr>
      <tr><td><label>电子邮件</label></td><td><input type="text" placeholder="请输入你的邮箱"/></td></tr>
    </table>
    <div><router-link to=""><input class="btn_sure" type="button" value="保存"/></router-link></div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="current_addr">{{currAddr}}</div>
      <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
      <div class="picker-toolbar">
        <span class="btn-cancel" @click="cancleaddress">取消</span>
        <span class="btn-sure" @click="selectaddress">完成</span>
      </div>
    </mt-popup>
    <div v-show="boot" class="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/infochange.png"/></div>
  </div>
  </div>
</template>

<script>
  import addr from '../../../build/city.json';
  export default {
    name: 'index',
    data () {
      return {
        msg: '信息更改',
        boot:true,
        popupVisible: false,
        areaPicker: '',
        citySlots: [
          {
            flex: 1,
            values:[],
            className: 'slot1',
            textAlign: 'center'
          }, {
            flex: 1,
            values: [],
            className: 'slot2',
            textAlign: 'center'
          }, {
            flex: 1,
            values:[],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        strAddr:'',
        currAddr:''
      }
    },
    created () {
      this.loadAreaList()
    },
    methods:{
      loadAreaList: function () {
        let pro=addr.province;
        let listPro=[],listCity=[],listArea=[];
        for (let i=0;i<pro.length;i++){
          listPro.push(pro[i].name);
        }
        let city=addr.city.filter(a=>(a.idCardNum+'').startsWith(''+pro[0].idCardNum));
        city.map(a=>{ listCity.push(a.name); });
        addr.area.filter(a=>{if((a.idCardNum+'').startsWith(''+city[0].idCardNum)){ listArea.push(a.name);}});
        this.citySlots[0].values = listPro;
        this.citySlots[1].values = listCity;
        this.citySlots[2].values = listArea;
      },
      choiceArea: function () {
        this.popupVisible = true;
        // 设置默认选中
      },
      cancleaddress: function () {
        this.popupVisible = false;

      },
      selectaddress: function () {
        this.popupVisible = false;
        this.strAddr=this.areaPicker.getValues(0);
      },
      onCityChange: function (picker, values) {
        this.currAddr=values[0]+values[1]+values[2];
        this.areaPicker = picker;
        if(values[1] === undefined ||  values[2] === undefined){return false;}
        if(provinceNmae!=values[0]){
          provinceNmae=values[0];
          let proId=addr.province.filter(a=>a.name===values[0])[0].idCardNum;
          let cities = [];
          let citylist = [];
          let arealist = [];
          cities = addr.city.filter(a=>(a.idCardNum+'').startsWith(''+proId));
          cities.map(a=>{ citylist.push(a.name); });
          picker.setSlotValues(1, citylist);
          cityName=cities[0].name;
          addr.area.filter(a=>{
            if((a.idCardNum+'').startsWith(''+cities[0].idCardNum)){
              arealist.push(a.name);
            }
          });
          picker.setSlotValues(2, arealist);
        }
        if(cityName!=values[1]) {
          cityName=values[1];
          let cityId=addr.city.filter(a=>a.name===values[1])[0].idCardNum;
          let arealist=[];
          addr.area.filter(a=>{
            if((a.idCardNum+'').startsWith(''+cityId)){
              arealist.push(a.name);
            }
          });
          picker.setSlotValues(2, arealist);
        }
      }
    }
  }
  document.body.style.background="#f9f9f9";
  let provinceNmae = "";
  let cityName = "";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 33px;position: absolute;top:52%;left: 33%;z-index: 1;}
  .tab_main{background: #ffffff;margin-top: 16px;}
  .tab_main td{border-bottom: 1px solid #DFDFDF;height: 53px;text-align: left;}
  .tab_main td:first-child{width: 35%;}
  .tab_main td:last-child{width: 65%;}
  .tab_main label{font-size: 15px;font-weight: 300; color: #000000;display: block;margin-left: 15px;margin-top: 16px;}
  .tab_main span{font-size: 13px;color: #888888 ;margin-left: 15px;display: block;width: 60%;margin-top: 8px;}
  .tab_main input{-webkit-appearance: none;outline: none;height: 34px;width: 85%;padding-left: 10px;border: none;}
  .btn_sure{position: fixed;bottom: 0;left: 0; width: 100%;height: 48px;background: #3399FF;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
  img{width: 100%;}
  .bg_add{background: url("../../assets/images/icon/icon-dhjt.png")no-repeat right;background-size: 20px;}

  .mint-popup-4 {width: 100%;}
  .mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {-webkit-backface-visibility: hidden;backface-visibility: hidden;  }
  .current_addr{height: 45px;line-height: 45px;font-size: 16px;color: #000000;border-bottom: 1px solid #CECECE;text-align: left; padding-left: 18px;}
  .picker-toolbar{border-top: 1px solid #CECECE;height: 45px;text-align: left;line-height: 45px;font-size: 14px;}
  .btn-cancel{display: inline-block;height: 45px;width: 50%;text-align: center;box-sizing: border-box;border-right:1px solid #CECECE;  }
  .btn-sure{display: inline-block;height: 45px;width: 50%;text-align: center;margin-left: -2%;}
  .picker-item.picker-selected{color: #3399FF!important;}
</style>

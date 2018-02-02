<template>
  <div class="main">
    <headUser></headUser>
    <ul class="content">
      <li><p><b>参保地</b><br/>转出地</p><span>杭州市</span></li>
      <li><label>转入地</label><input @click="choiceArea" class="address" type="text" v-model="strAddr" placeholder="请选择转入地" readonly="readonly"/></li>
      <li><label>验证码</label><input class="in_yzm" type="text" placeholder="请输入短信验证码"/><input class="btn_get_yzm" type="button" value="获取验证码"/></li>
    </ul>
    <div class="btn_sure"><router-link to="transfSucc"><input type="button" value="提交申请"/></router-link></div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="current_addr">{{currAddr}}</div>
      <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
      <div class="picker-toolbar">
        <span class="btn-cancel" @click="cancleaddress">取消</span>
        <span class="btn-sure" @click="selectaddress">完成</span>
      </div>
    </mt-popup>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/sbzy2.png"/></div>
  </div>
</template>

<script>
  import addr from '../../../build/city.json';
  export default {
    name: 'index',
    data () {
      return {
        msg: '社保转移',
        selectShow:false,
        val:'',
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
          }
        ],
        strAddr:'',
        currAddr:''
      }
    },
    created () {
      this.loadAreaList()
    },
    methods: {
      loadAreaList: function () {
        let pro=addr.province;
        let listPro=[],listCity=[],listArea=[];
        for (let i=0;i<pro.length;i++){
          listPro.push(pro[i].name);
        }
        let city=addr.city.filter(a=>(a.idCardNum+'').startsWith(''+pro[0].idCardNum));
        city.map(a=>{ listCity.push(a.name); });

        this.citySlots[0].values = listPro;
        this.citySlots[1].values = listCity;
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
        this.currAddr=values[0]+values[1];
        this.areaPicker = picker;
        if(values[1] === undefined ){return false;}
          let proId=addr.province.filter(a=>a.name===values[0])[0].idCardNum;
          let cities = [];
          let citylist = [];
          let arealist = [];
          cities = addr.city.filter(a=>(a.idCardNum+'').startsWith(''+proId));
          cities.map(a=>{ citylist.push(a.name); });
          picker.setSlotValues(1, citylist);
          addr.area.filter(a=>{
            if((a.idCardNum+'').startsWith(''+cities[0].idCardNum)){
              arealist.push(a.name);
            }
          });
          picker.setSlotValues(2, arealist);
      }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 35px;position: absolute;bottom:28%;left: 33%;z-index: 1;}
  .content{margin-top: 15px;background: #ffffff;text-align: left;}
  .content li{height: 53px; list-style: none;line-height: 53px;margin-left: 4%}
  .content li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  input{-webkit-appearance: none;outline: none;}
  .content p{display: inline-block;line-height: 20px;font-size: 13px;color: #888888;width: 25%;position: relative;
    top:8px;}
  b{font-size: 15px;color: #000000;font-weight: 500;}
  .content label{font-size: 15px;color: #000000;font-weight: 400;display: inline-block;width: 25%;}
  .content span{font-size: 14px;color: #333333;}
  .address{height: 35px;width: 70%;border: none; background: url("../../assets/images/icon/icon-dhjt.png")no-repeat right center;background-size: 18px;}
  .in_yzm{width: 40%;height: 35px;border: none;}
  .btn_get_yzm{font-size: 15px;color: #F65150;border: 1px solid #F65150;border-radius: 4px;background: none;width: 30%;height: 34px;}
  .btn_sure input{background: #3399FF;font-size: 18px; color: #FFFFFF;width: 100%;height: 48px;position: fixed;bottom: 0px;left: 0px;border: none;}

  .mint-popup-4 {width: 100%;}
  .mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {-webkit-backface-visibility: hidden;backface-visibility: hidden;  }
  .current_addr{height: 45px;line-height: 45px;font-size: 16px;color: #000000;border-bottom: 1px solid #CECECE;text-align: left; padding-left: 18px;}
  .picker-toolbar{border-top: 1px solid #CECECE;height: 45px;text-align: left;line-height: 45px;font-size: 14px;}
  .btn-cancel{display: inline-block;height: 45px;width: 50%;text-align: center;box-sizing: border-box;border-right:1px solid #CECECE;  }
  .btn-sure{display: inline-block;height: 45px;width: 50%;text-align: center;margin-left: -2%;}
  .picker-item.picker-selected{color: #3399FF!important;}
</style>

<template>
  <div>
    <div class="mint-cell-value is-link" @click="choiceArea">
      <input placeholder="请选择省市" type="text" class="mint-field-core text-right" readonly="readonly" v-model="strAddr">
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="current_addr">{{currAddr}}</div>
      <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
      <div class="picker-toolbar">
        <span class="btn-cancel" @click="cancleaddress">取消</span>
        <span class="btn-sure" @click="selectaddress">完成</span>
      </div>
    </mt-popup>
    </div>
</template>
<script>
  import addr from '../../build/city.json';
  export default {
    data: () => ({
      popupVisible: true,
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
      strAddr:'请选择',
      currAddr:''
    }),
    created () {
      this.loadAreaList()
    },
    mounted () {

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
  let provinceNmae = "";
  let cityName = "";
</script>
<style scoped>
  .mint-popup-4 {width: 100%;}
  .mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {-webkit-backface-visibility: hidden;backface-visibility: hidden;  }
  .current_addr{height: 45px;line-height: 45px;font-size: 16px;color: #000000;border-bottom: 1px solid #CECECE;text-align: left; padding-left: 18px;}
  .picker-toolbar{border-top: 1px solid #CECECE;height: 45px;text-align: left;line-height: 45px;font-size: 14px;}
  .btn-cancel{display: inline-block;height: 45px;width: 50%;text-align: center;box-sizing: border-box;border-right:1px solid #CECECE;  }
  .btn-sure{display: inline-block;height: 45px;width: 50%;text-align: center;margin-left: -2%;}
  .picker-item.picker-selected{color: #3399FF!important;}
</style>

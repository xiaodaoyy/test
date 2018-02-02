<template>
  <div class="main">
    <ul>
      <li><span>缴费类型</span><label>城乡居民医疗保险</label></li>
      <li class="bg_person"><span>身份证号</span><label>3320207777777777</label></li>
      <li class="bg_jt" @click="yearVisible=true"><span> 缴费年度</span><label>{{year}}</label></li>
    </ul>
    <input class="btn_pay" type="button" value="查询"/>
    <mt-popup v-model="yearVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slotYear" valueKey="text"  @change="onYearChange"></mt-picker>
      <div class="popbtn"><span @click="yearVisible=false">取消</span><span @click="yearVisible=false">完成</span></div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '城乡居民医疗保险',
        year:'2017',
        yearVisible:false,
        slotYear: [
          {
            flex: 1,
            values: [{value:'2017',text:'2017'}, {value:'2016',text:'2016'}, {value:'2015',text:'2015'},{value:'2014',text:'2014'}],
            textAlign: 'center'
          }
        ],
      }
    },
    methods:{
      onYearChange(picker, values){
        this.year=values[0].text;
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      },
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  ul{background: #ffffff;}
  li{height: 51px;line-height: 51px;text-align: left;margin-left: 4%;list-style: none;}
  li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li>span{font-size:14px;color: #333333;font-weight: bold;display: inline-block;}
  li>label{font-size:14px;color: #353535;display: inline-block;margin-left: 50px;}
  .btn_pay{background: #3399FF;border-radius: 6px;-webkit-appearance: none;outline: none;width: 90%;border: none;height: 50px;color: #ffffff;font-size: 18px;margin-top: 40px;}
  .bg_person{background: url("../../assets/images/icon/icon-person.png")no-repeat right 4% center;background-size: 20px;}
  .bg_jt{background: url("../../assets/images/icon/icon-jtdown.png")no-repeat right 4% center;background-size: 20px;}
</style>

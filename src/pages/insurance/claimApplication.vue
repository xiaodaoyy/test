<template>
  <div class="main">
    <div :class="{'progress_bar1':showone,'progress_bar2':showtwo,'progress_bar3':showthree}">
    <div>1.选择就诊记录</div>
    <div>2.填写信息</div>
    <div>3.上传资料</div>
  </div>
    <div class="part_one" v-show="showone">
      <div class="tip">选择就诊记录：</div>
      <ul class="hospt_list">
        <li>
          <div class="in_check"><input class="select" type="checkbox"/></div>
          <div class="hospt_info"><label>省立同德医院</label><span>2016-10-10</span></div>
          <div class="sign">住院</div>
          <div class="price">2000.00</div>
        </li>
        <li>
          <div class="in_check"><input type="checkbox"/></div>
          <div class="hospt_info"><label>省立同德医院</label><span>2016-10-10</span></div>
          <div class="sign">住院</div>
          <div class="price">2000.00</div>
        </li>
      </ul>
      <div class="btn_next"><input @click="checkOne()" type="button" value="下一步"/></div>
    </div>
    <div class="part_two" v-show="showtwo">
      <ul class="fill_info">
        <li>申请项目<span>一般住院津贴</span></li>
        <li class="li_height"><div>被保人<span>李春琳</span></div><div>33202019901102000000</div></li>
        <li>联系电话<input type="text" placeholder="请填写"/></li>
        <li>联系地址<input type="text" placeholder="请填写"/></li>
      </ul>
      <ul class="fill_info">
        <li>开户名<span>李美丽</span></li>
        <li>开户行<input type="text" placeholder="请填写"/></li>
        <li>银行卡号<input type="text" placeholder="请填写"/></li>
      </ul>
      <div class="btn_next"><input @click="checkTwo()" type="button" value="下一步"/></div>
    </div>
    <div class="part_three" v-show="showthree">
      <div class="tip_three">被保人身份证</div>
      <div class="pic_card">
        <div>
          <div id="upload1" @click="addPic1" class="pic"><img src="../../assets/images/social/icon-card1.png"/></div>
          <div>上传身份证正面</div>
          <input id="in_upload1" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange1" style="display: none;">
        </div>
        <div>
          <div id="upload2" @click="addPic2" class="pic"><img src="../../assets/images/social/icon-card2.png"/></div>
          <div>上传身份证反面</div>
          <input id="in_upload2" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange2" style="display: none;">
        </div>
      </div>
      <div class="tip_three">门（急）诊病历</div>
      <div class="add_pic">
        <div id="upload3" @click="addPic3"><img src="../../assets/images/insurance/icon-addpic.png"/></div>
        <input id="in_upload3" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange3" style="display: none;">
      </div>
      <div class="tip_three">门（急）诊病历</div>
      <div class="add_pic ma_bo">
        <div id="upload4" @click="addPic4"><img src="../../assets/images/insurance/icon-addpic.png"/></div>
        <input id="in_upload4" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange4" style="display: none;">
      </div>
      <div class="btn_next"><router-link to="applicConfirm"> <input type="button" value="提 交"/></router-link></div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="current_addr">{{currAddr}}</div>
      <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
      <div class="picker-toolbar">
        <span class="btn-cancel" @click="cancleaddress">取消</span>
        <span class="btn-sure" @click="selectaddress">完成</span>
      </div>
    </mt-popup>
    <div v-show="boot" class="boot">
      <span class="last" @click="boot=false"></span><img src="../../assets/images/boot/preclaim.png"/>
    </div>
  </div>
</template>

<script>
  import addr from '../../../build/city.json';
  export default {
    name: 'index',
    data () {
      return {
        msg: '生存认证',
        showone:true,
        showtwo:false,
        showthree:false,
        checkStatus:false,
        boot:false,
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
        strAddr:'请选择省、市、县',
        currAddr:''
      }
    },
    methods:{
      checkOne(){
        this.showone=false;
        this.showtwo=true;
        this.showthree=false;
      },checkTwo(){
        this.showone=false;
        this.showtwo=false;
        this.showthree=true;
      }, checkValue(bool){
        if(bool){
          this.checkStatus=false;
        }else {
          this.checkStatus=true;
        }
      },addPic1:function () {
        document.getElementById('in_upload1').click();
      },
      onFileChange1:function (e) {
        // 检查是否为图像类型
        var simpleFile = document.getElementById('in_upload1').files[0];
        if(!/image\/\w+/.test(simpleFile.type)) {
          alert("请确保文件类型为图像类型");
          return false;
        }
        var reader = new FileReader();
        // 将文件以Data URL形式进行读入页面
        reader.readAsDataURL(simpleFile);
        reader.onload = function(e){
          document.getElementById('upload1').innerHTML= '<img src="'+e.target.result+'" alt="" style="height: 100%;width: 100%;"/>';
        }
      },addPic2:function () {
        document.getElementById('in_upload2').click();
      },
      onFileChange2:function (e) {
        // 检查是否为图像类型
        var simpleFile = document.getElementById('in_upload2').files[0];
        if(!/image\/\w+/.test(simpleFile.type)) {
          alert("请确保文件类型为图像类型");
          return false;
        }
        var reader = new FileReader();
        // 将文件以Data URL形式进行读入页面
        reader.readAsDataURL(simpleFile);
        reader.onload = function(e){
          document.getElementById('upload2').innerHTML= '<img src="'+e.target.result+'" alt="" style="height: 100%;width: 100%;"/>';
        }
      },addPic3:function () {
        document.getElementById('in_upload3').click();
      },
      onFileChange3:function (e) {
        // 检查是否为图像类型
        var simpleFile = document.getElementById('in_upload3').files[0];
        if(!/image\/\w+/.test(simpleFile.type)) {
          alert("请确保文件类型为图像类型");
          return false;
        }
        var reader = new FileReader();
        // 将文件以Data URL形式进行读入页面
        reader.readAsDataURL(simpleFile);
        reader.onload = function(e){
          document.getElementById('upload3').innerHTML= '<img src="'+e.target.result+'" alt="" style="height: 100%;width: 100%;"/>';
        }
      },
      addPic4:function () {
      document.getElementById('in_upload4').click();
    },
    onFileChange4:function (e) {
      // 检查是否为图像类型
      var simpleFile = document.getElementById('in_upload4').files[0];
      if(!/image\/\w+/.test(simpleFile.type)) {
        alert("请确保文件类型为图像类型");
        return false;
      }
      var reader = new FileReader();
      // 将文件以Data URL形式进行读入页面
      reader.readAsDataURL(simpleFile);
      reader.onload = function(e){
        document.getElementById('upload4').innerHTML= '<img src="'+e.target.result+'" alt="" style="height: 100%;width: 100%;"/>';
      }
    },
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
    },
    created () {
      this.loadAreaList()
    }
  }
  document.body.style.background="#F9F9F9";
  let provinceNmae = "";
  let cityName = "";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%; height: 40px;position: absolute;bottom:22%;left: 31%;z-index: 1;}
  .progress_bar1{height: 52px;line-height: 52px;overflow: hidden;background: url("../../assets/images/social/progress1.png")no-repeat;background-size: 100% 100%;}
  .progress_bar1>div{float: left;width: 33.33%;font-size: 14px;}
  .progress_bar1>div:first-child{color: #ffffff;}
  .progress_bar2{height: 52px;line-height: 52px;overflow: hidden;background: url("../../assets/images/social/progress2.png")no-repeat;background-size: 100% 100%;}
  .progress_bar2>div{float: left;width: 33.33%;font-size: 14px;}
  .progress_bar2>div:nth-child(2){color: #ffffff;}
  .progress_bar3{height: 52px;line-height: 52px;overflow: hidden;background: url("../../assets/images/social/progress3.png")no-repeat;background-size: 100% 100%;}
  .progress_bar3>div{float: left;width: 33.33%;font-size: 14px;}
  .progress_bar3>div:last-child{color: #ffffff;}
  .pic{width: 90%;margin:17px auto 0 auto;height: 144px;}
  .pic span{font-size: 15px;color: #FFFFFF; position: relative;top:-38px;}
  img{width: 100%;height: 100%;}
  input{-webkit-appearance: none;outline: none;}
  .btn_next input{height: 48px;width: 100%;background: #3399FF;border: none;font-size: 18px;color: #FFFFFF;position: fixed;bottom: 0px;left: 0px;}
  .btn-sure{display: inline-block;height: 45px;width: 50%;text-align: center;margin-left: -2%;}
  .tip{height: 51px;line-height: 51px;font-size: 14px;color: #333333;margin-left: 4%;text-align: left;}
  .hospt_list{background: #ffffff;}
  .hospt_list li{height: 65px;border-bottom: 1px solid #DFDFDF; overflow: hidden;background:url("../../assets/images/icon/icon-dhjt.png") no-repeat right 4% center;background-size: 18px;}
  .in_check{width: 15%;float: left;line-height: 65px;margin-top: 8px;}
  .in_check input{height: 25px;width: 25px;border: 1px solid #C7C7C7;border-radius: 2px;}
  .hospt_info{width: 35%;text-align: left;float: left;}
  .hospt_info>label{display: block;font-size: 14px;color: #333333;line-height: 24px;margin-top: 10px;}
  .hospt_info>span{font-size: 13px;color: #888888;}
  .sign{width: 40px;height: 18px;border: 1px solid #3399FF;border-radius: 3px;font-size: 12px;color: #3399FF;float: left;margin-top: 17px;}
  .price{float: right;margin-right: 10%;line-height: 65px;}
  .fill_info{background: #ffffff;margin-top: 16px;}
  .fill_info li{height: 51px;line-height: 51px;font-size: 14px;color: #888888;text-align: left;margin-left: 4%;list-style: none;}
  .fill_info span{color: #353535 ;float: right;margin-right: 4%;}
  .select{background: url("../../assets/images/icon/icon-check-true-red.png") no-repeat center; background-size: 20px;}
  .fill_info:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .fill_info li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .li_height{height: 83px!important;line-height: 30px!important;}
  .li_height>div:first-child{padding-top: 10px;}
  .fill_info input{float: right;text-align: right;margin-right: 2%;background: url("../../assets/images/icon/icon-dhjt.png") no-repeat right center;
    background-size: 20px;padding-right: 25px;height: 30px;margin-top: 10px;border: none;}
  .tip_three{ margin-top: 15px; background: #ffffff;height: 44px;line-height: 44px;font-size: 15px;color: #353535;margin-left: 4%;text-align: left;}
  .pic_card{background: #ffffff; height: 130px;border-bottom: 1px solid #DFDFDF;border-top: 1px solid #DFDFDF;font-size: 13px;color: #000000;}
  .pic_card>div{display: inline-block;width: 49%;}
  .pic_card .pic{width: 102px;height: 65px;}
  .add_pic{background: #ffffff;height: 103px;border-bottom: 1px solid #DFDFDF;border-top: 1px solid #DFDFDF;font-size: 13px;color: #000000;}
  .add_pic>div{width: 60px;height: 60px;margin-top: 21px;margin-left: 4%;}
  .ma_bo{margin-bottom: 50px;}
</style>

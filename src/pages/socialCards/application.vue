<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div :class="{'progress_bar1':showone,'progress_bar2':showtwo,'progress_bar3':showthree}">
    <div>1.身份证信息</div>
    <div>2.证件照信息</div>
    <div>3.提交信息</div>
    </div>
    <div class="part_one" v-show="showone">
      <div class="tip">请上传二代身份证的正反面照片</div>
      <div id="upload1" @click="addPic1" class="pic"><img src="../../assets/images/social/icon-card1.png"/></div>
      <input id="in_upload1" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange1" style="display: none;">
      <div id="upload2" @click="addPic2" class="pic"><img src="../../assets/images/social/icon-card2.png"/></div>
      <input id="in_upload2" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange2" style="display: none;">
      <div class="notice">注：请不要带眼镜，在光线充足的环境下平视摄像头，
        保持合适的距离，确保照片中面部及身份证清晰可见且无修图</div>
      <div class="btn_next"><input @click="checkOne()" type="button" value="下一步"/></div>
    </div>
    <div class="part_two" v-show="showtwo">
      <div class="tip">请上传2寸证件照</div>
      <div id="upload3" @click="addPic3" class="pic"><img src="../../assets/images/social/icon-photo.png"/><span>上传2寸证件照</span></div>
      <input id="in_upload3" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange3" style="display: none;">
      <div class="notice">注：请不要带眼镜，在光线充足的环境下平视摄像头，
        保持合适的距离，确保照片中面部及身份证清晰可见且无修图</div>
      <div class="btn_next"><input @click="checkTwo()" type="button" value="下一步"/></div>
    </div>
    <div class="part_three" v-show="showthree">
      <ul class="ul_info1">
        <li><label>姓名</label><span>李美丽</span></li>
        <li><label>身份证号</label><span>331010199210100001</span></li>
      </ul>
      <ul class="ul_info2">
        <li class="yzm"><label>手机号码</label><input type="tel" placeholder="请输入手机号码"/><input type="button" value="获取验证码"/></li>
        <li><label>验证码</label><input type="tel" placeholder="请输入验证码"/></li>
        <li><label>性别</label><input type="tel" value="女" readonly="readonly"/></li>
      </ul>
      <div class="title">邮寄信息</div>
      <ul class="ul_info3">
        <li><label>签收信息</label><input type="text" value="本人签收" readonly="readonly"/></li>
        <li><label>邮寄地址</label><input type="text" readonly="readonly" @click="choiceArea" v-model="strAddr"/></li>
        <li><label></label><input type="text" value="请输入详细地址" /></li>
      </ul>
      <div class="agreement"><label><input  :class="checkStatus?'checked':''" @click="checkValue(checkStatus)"  type="checkbox" value="1"/>本人自愿申请XX市社保卡，并保证以上所填信息真实有效。</label></div>
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
  .part_one,.part_two{background: #ffffff;margin-top: 16px;border-top:1px solid  #DFDFDF;}
  .tip{height: 40px;line-height: 56px;text-align: left;font-size: 14px;color: #353535;margin-left: 5%;}
  .pic{width: 90%;margin:17px auto 0 auto;height: 144px;}
  .pic span{font-size: 15px;color: #FFFFFF; position: relative;top:-38px;}
  img{width: 100%;height: 100%;}
  .notice{background: url("../../assets/images/icon/icon-plaint.png")no-repeat left 4% top 10px;background-size: 22px;font-size: 14px;
    color: #333333;text-align: left;padding:10px 4% 15px 12%;}
  input{-webkit-appearance: none;outline: none;}
  .btn_next input{height: 48px;width: 100%;background: #3399FF;border: none;font-size: 18px;color: #FFFFFF;position: fixed;bottom: 0px;left: 0px;}
  .part_three li{height: 53px;line-height: 53px;list-style: none;margin-left: 4%;text-align: left;}
  .part_three li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .ul_info1,.ul_info2{background: #ffffff;margin-top:  15px;}
  .ul_info1:before,.ul_info2:before,.ul_info3:before{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .part_three li label{font-size: 15px;font-weight: 300;display: inline-block;width: 25%;}
  .part_three span, .part_three li input{font-size: 14px;height: 34px;width: 70%;border: none;}
  .ul_info2 input,.ul_info3 input{color: #999999;}
  .yzm input[type=tel]{width: 40%!important;}
  .yzm input[type=button]{width: 30%!important;background: #FFFFFF;border: 1px solid #F65150;border-radius: 4px;font-size: 15px;
    color: #F65150;}
  .title{font-size: 13px;color: #888888;text-align: left;padding-left: 4%;height: 38px;line-height: 38px;}
  .ul_info3{background: #ffffff;}
  .agreement{margin:20px 4% 50px 4%; text-align: left;}
  .agreement input{border: 1px solid #DFDFDF;width: 16px;height: 16px;border-radius: 3px;vertical-align: middle;margin-right: 5px;}
  .agreement label{font-size: 14px;color: #888888;vertical-align: middle;}
  .checked{background:#3399FF url("../../assets/images/icon/icon-hook.png")no-repeat center;background-size: 13px; }
  .mint-popup-4 {width: 100%;}
  .mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {-webkit-backface-visibility: hidden;backface-visibility: hidden;  }
  .current_addr{height: 45px;line-height: 45px;font-size: 16px;color: #000000;border-bottom: 1px solid #CECECE;text-align: left; padding-left: 18px;}
  .picker-toolbar{border-top: 1px solid #CECECE;height: 45px;text-align: left;line-height: 45px;font-size: 14px;}
  .btn-cancel{display: inline-block;height: 45px;width: 50%;text-align: center;box-sizing: border-box;border-right:1px solid #CECECE;  }
  .btn-sure{display: inline-block;height: 45px;width: 50%;text-align: center;margin-left: -2%;}
  .picker-item.picker-selected{color: #3399FF!important;}
</style>

<template>
  <div class="main">
    <div class="set_info div_border"><label>姓名</label><input type="text" value="李美丽（332020******11）" readonly="readonly" /></div>
    <div class="set_info"><label>医院</label><input @click="hospVisible=true" class="in_bg" type="text" readonly="readonly" v-model="hospValue" /></div>
  <div class="registration">
    <div class="tip">税务登记证副本</div>
    <div id="upload1" class="upload" @click="addPic1"><img src="../../assets/images/icon/icon-add.png" height="22" width="22"/></div>
    <input id="in_upload1" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange1" style="display: none;">
    <div class="explain">请上传市级定点医疗机构副主任以上医生开具的转院证明书，证明书需有医院盖章确认，限传5张。</div>
  </div>
    <div class="registration">
      <div class="tip">上传社保卡正面照片</div>
      <div id="upload2" @click="addPic2" class="upload"><img src="../../assets/images/icon/icon-add.png" height="22" width="22"/></div>
      <input id="in_upload2" type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange2" style="display: none;">
    </div>
    <div class="btn_sure"><router-link to="addRemoSucc"><input type="button" value="提   交"/></router-link></div>
    <div class="pop_hosp" v-show="hospVisible">
      <div class="pop_left">
        <span>北京市</span>
        <span>上海市</span>
        <span>浙江省</span>
        <ul>
          <li class="check_on">杭州</li>
          <li>宁波</li>
          <li>绍兴</li>
      </ul>
      </div>
      <div class="pop_right">
        <ul>
          <li @click="hospValue='杭州市第一人民医院',hospVisible=false">杭州市第一人民医院</li>
          <li @click="hospValue='杭州市第二人民医院',hospVisible=false">杭州市第二人民医院</li>
          <li @click="hospValue='浙江省中医院',hospVisible=false">浙江省中医院</li>
          <li @click="hospValue='浙江省解放军一一七医院',hospVisible=false">浙江省解放军一一七医院</li></ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '异地就医备案',
        hospValue:'请选择需要转至的医院',
        hospVisible:false
      }
    },
    methods:{
      addPic1:function () {
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
          document.getElementById('upload1').innerHTML= '<img src="'+e.target.result+'" alt="" width="57px" height="57px"/>';
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
          document.getElementById('upload2').innerHTML= '<img src="'+e.target.result+'" alt="" width="57px" height="57px"/>';
        }
    }
  }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .set_info{height: 53px;background: #FFFFFF;line-height: 53px;text-align: left;}
  .div_border:after{border: 1px solid #DFDFDF;left: 4%;top:0px;width: 95.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .set_info>label{display: inline-block;width: 20%;font-size: 15px;font-weight:500;color: #000000;margin-left: 4%;}
  .set_info>input{-webkit-appearance: none;width: 70%;height: 40px;border: none;line-height: 40px;font-size: 14px;color: #888888;}
  .in_bg{background: url("../../assets/images/icon/icon-dhjt.png") no-repeat right center;background-size: 18px;}
  .registration{background: #FFFFFF;margin-top: 15px;min-height: 145px;}
  .tip{height: 44px;padding-left: 4%;line-height: 44px;font-size: 15px;text-align: left;color: #353535;}
  .tip:after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .upload{height: 57px;width: 57px;border: 1px dashed #C3C3C3;margin: 21px 4%;}
  .explain{text-align: left;padding-left: 47px;background: url("../../assets/images/icon/icon-plaint.png") no-repeat left 4.4% top;
    background-size:20px; font-size: 14px;color: #333333;padding-bottom: 20px;}
  .upload img{margin-top: 17px;}
  .btn_sure input{-webkit-appearance: none;background: #3399FF;width: 100%;height: 50px;border: none; color: #FFFFFF;font-size: 18px;outline: none;}
  .pop_hosp{width: 100%;height: 100%;position: fixed;top: 0;left:0;background: #FFFFFF;overflow: hidden;text-align: left;}
  .pop_hosp>div{float: left;}
  .pop_left{width: 25%;height:100%;background: #F9F9F9;border-right: 1px solid #DFDFDF;font-size: 14px;color: #333333;}
  .pop_left>span{width: 85%;display: block;height: 40px;line-height: 40px;background: url("../../assets/images/icon/icon-jtdown.png") no-repeat right 10% center;
  background-size: 15px; border-bottom: 1px solid #DFDFDF;padding-left: 15%;}
  .pop_left li{list-style: none;height: 40px; border-bottom: 1px solid #DFDFDF;line-height: 40px;text-align: center;}
  .check_on{background-color:#FFFFFF; width: 101%;}
  .pop_right{width: 74%;}
  .pop_right li{list-style: none;margin-left: 10%;font-size: 14px;color: #333333;line-height: 40px;border-bottom: 1px solid #DFDFDF;}
</style>

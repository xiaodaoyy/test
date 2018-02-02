<template>
  <div class="main">
    <headUser></headUser>
    <div class="head_tip">授权（下方人员使用“{{tmhandleName}}”医保账户中历年账户中的余额）</div>
    <div class="div_bar1"><span>添加成员</span></div>
    <div>
      <ul class="datum">
        <li><label>姓名</label><input   type="text" placeholder="请输入姓名" v-model="transRname"/></li>
        <li><label>身份证号</label><input   type="text"  placeholder="请输入身份证" v-model="transRid" /></li>
        <li><label>手机号码</label><input   type="text"  placeholder="手机号码" v-model="transPhone"/></li>
        <li><label>关系</label><input @click="popupRelatVisible=true" readonly="readonly"  placeholder="请选择人员关系" type="text"   v-model="transShip" ></li>
      </ul>
      <div class="tip">设置完成后，<span>该成员可以使用{{tmhandleName}}医保账户中历年账户余额</span></div>
      <input class="btn_pay" type="button" value="下一步" @click="faceCertifi"/>
    </div>
    <mt-popup v-model="popupRelatVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slots"   valueKey="text"   @change="onValuesChange"  ></mt-picker>
      <div class="popbtn"><span @click="popupRelatVisible=false">取消</span><span @click="slotOver">完成</span></div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '添加共济成员',
        handleId: Base64.decode(sessionStorage.getItem('handleId')),
        handleName: Base64.decode(sessionStorage.getItem('handleName')),
        tmhandleName:Base64.decode(sessionStorage.getItem("tmhandleName")),
        tmhandleId:Base64.decode(sessionStorage.getItem("tmhandleId")),
        transRid:'',
        transRname:'',
        transPhone:'',
        transShip:'',
        transShipId:'',
        visible: true,
        popupRelatVisible:false,
        changNum:0,
        slots:
          [{
            flex: 1,
            values:[],
            //values: [{value:'1',text:'父母'},{value:'2',text:'配偶'},{value:'3',text:'子女'}],
            className: 'slot1',
            textAlign: 'center'
          }],
      }
    },
    methods:{
      slotOver(){
        this.popupRelatVisible=false;
        if(this.changNum===1){
          this.transShip = '父母';
          this.transShipId = '1';
          this.changNum = 2;
        }
      },

      //点击修改亲属关系
      onValuesChange(picker, values) {
        if(values[0]!=undefined) {
          if(this.changNum===0){
            this.transShip = '';
            this.transShipId = '';
            this.changNum = 1;
          }else{
            this.transShip = values[0].text;
            this.transShipId = values[0].value;
            this.changNum = 2;
          }
        }
      },
      getSlotShip(){
        this.transShip = '';
        this.transShipId ='';
        this.slots[0].values.push(JSON.parse("{\"value\":\"1\",\"text\":\"父母\"}"));
        this.slots[0].values.push(JSON.parse("{\"value\":\"2\",\"text\":\"配偶\"}"));
        this.slots[0].values.push(JSON.parse("{\"value\":\"3\",\"text\":\"子女\"}"));
      },

      faceCertifi:function(){
        let regName =/^[\u4e00-\u9fa5]{2,4}$/;
        if(!regName.test(this.transRname)){
          this.$messagebox.alert("真实姓名填写有误");
          return false;
        }

        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(reg.test(this.transRid) === false) {
          this.$messagebox.alert("身份证输入不合法");
          return false;
        }

        if(this.transRid.trim().length==18){
          if(this.utils.isCid(this.transRid)===true){

          }else{
            this.$messagebox.alert("身份证输入不合法");
            return false;
          }
        }

        let regPhone = /^1[0-9]{10}$/;
        if(regPhone.test(this.transPhone) === false) {
          this.$messagebox.alert("手机号码输入不合法");
          return false;
        }

        if(this.transShipId == ''){
          this.$messagebox.alert("请选择亲属关系！")
          return;
        }

        let data = {
          name: this.handleName,
          cardNo: this.handleId,
          returnPage : process.env.FamilyFreemRetUrl
        }
        //发起人脸识别url

        this.$http.get("/faceOne/url",{params:data})
          .then(res=>{
            if(res.success){
              localStorage.setItem('freemShip', Base64.encode(this.transShipId));
              localStorage.setItem('freemId', Base64.encode(this.transRid.toUpperCase()));
              localStorage.setItem('freemName', Base64.encode(this.transRname));
              localStorage.setItem('freemPhone', Base64.encode(this.transPhone));
              localStorage.setItem('faceFamilyFreem', "1");
              window.location.href = res.body;
            }else{
              this.$messagebox.alert("获取人脸识别界面失败，请重新进入办事大厅！")
            }
          });
      }
    },
    created(){

    },
    mounted(){
      this.getSlotShip();
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  input{-webkit-appearance: none;outline: none;}
  .head_tip{height: 35px;text-align: left;font-size: 12px;color: #888888;line-height: 35px;background: #ffffff;padding-left: 15px;}
  .btn_pay{background: #3399FF;width: 100%;border: none;height: 50px;color: #ffffff;font-size: 18px;margin-top: 10px;position: fixed;bottom: 0;left: 0;}
  .div_bar1{margin-top: 19px; height: 52px;line-height: 52px;text-align: left;font-size: 14px;background: url("../../assets/images/icon/progress-bar1.png") no-repeat; background-size: 100% 52px;}
  .div_bar1>span{display: inline-block;width: 45%;margin-left: 5%;height: 52px;}
  .div_bar1>span:first-child{color: #ffffff;}
  .div_bar2{margin-top: 19px;height: 52px;line-height: 52px;text-align: left;font-size: 14px;background: url("../../assets/images/icon/progress-bar2.png") no-repeat; background-size: 100% 52px;}
  .div_bar2>span{display: inline-block;width: 45%;margin-left: 5%;height: 52px;}
  .div_bar2>span:last-child{color: #ffffff;}
  .datum{background: #ffffff;}
  .datum li{height: 53px;line-height: 53px;text-align: left;margin-left: 4%;list-style: none;}
  .datum li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .datum label {display: inline-block;width: 30%;font-size: 15px;font-weight: 600; }
  .datum input{height: 40px;border: none;width: 65%;}
  .in_bg{background: url("../../assets/images/icon/icon-person.png")no-repeat right center;background-size: 18px;}
  .in_bg2{background:url("../../assets/images/icon/icon-timedh.png") no-repeat right 0px center;background-size: 18px;}
  .tip{line-height: 26px;font-size: 12px;padding-left: 15px;text-align: left;margin-top: 10px;}
  .tip>span,.leave_num span{color: #F65150;}
  .leave_num{height: 53px;line-height: 53px;padding-left: 4%;text-align: left;font-size: 14px;}
  .in_yzm{height: 51px;line-height: 51px;background: #ffffff;text-align: left;}
  .in_yzm label{font-size: 14px;color: #333333;margin-left: 4%;font-weight: 600;}
  .in_yzm input[type=tel]{width: 35%;margin: 0 20px;height: 40px;border: none;}
  .in_yzm input[type=button]{width: 25%;margin: 0 4%;height: 34px;border: 1px solid #F65150; border-radius: 4px;background: none;color:#F65150; }
  .btn_finish{background: #3399FF; border-radius: 6px;font-size: 18px;color: #FFFFFF;width: 90%;height: 50px;border: none;margin-top: 40px;}

  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .module{height: 86px;border: 1px solid #EBEBEB;border-radius: 100px;width: 92%;margin: 15px auto 0px auto;overflow: hidden;background: #F9F9F9;  }
  .user_pic{float: left;height: 55px;width: 55px;border-radius: 50%;background: #EEEEEE;margin-top: 15px;margin-left: 11px;}
  .user_info{float: left;margin-left: 9px;margin-top: 12px;}
  .user_info label{font-size: 14px; color: #000000;}
  .user_info li{font-size: 12px;color: #888888;list-style: none;text-align: left;}
  .content{padding-top: 10px;padding-bottom: 10px;position: fixed;width: 100%;height: 100%;left: 0;top:0;background: #FFFFFF;}
  .btn_add input{height: 48px;background: #3399FF;-webkit-appearance: none;font-size: 18px; color: #FFFFFF;border: none;width: 100%;}
  .chooseTrue{border: 1px solid #06BD04!important;background: url("../../assets/images/icon/icon-selected.png") no-repeat right 4% center;background-size: 18px;}
  .btn_go input{-webkit-appearance: none;outline: none;position: fixed;bottom: 0px;left: 0px;width: 100%;height: 50px;background: #3399FF;border: none;font-size: 18px;color: #ffffff;}
  img{width: 100%;height: 100%;}

</style>

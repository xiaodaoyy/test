<template>
  <div class="main">
    <ul>
      <li><label>姓名</label><input type="text" placeholder="请输入亲人的真实姓名" v-model="granteeName"/></li>
      <li><label>身份证号</label><input type="text" placeholder="请输入身份证号" v-model="granteeId"/></li>
      <!-- <li><label>社保卡号</label><input type="text" placeholder="请输入社保卡号" v-model="card"/></li>-->
      <li><label>关系</label><input @click="popupRelatVisible=true" readonly="readonly" class="in_bg" type="text" placeholder="配偶 v-model="identity" ></li>
      <!-- <li><label>参保地</label><input @click="popupAddVisible=true" readonly="readonly" class="in_bg" type="text" placeholder="杭州市" :value="address"v-model="address"/></li>-->
    </ul>
    <div class="btn_next"><input type="button" value="下一步"  @click="faceCertifi" /></div>
    <mt-popup v-model="popupRelatVisible"  position="bottom" style="width: 100%;">
      <mt-picker :slots="slots"   valueKey="text"   @change="onValuesChange"   :visible-item-count="3"></mt-picker>
      <div class="popbtn"><span @click="popupRelatVisible=false">取消</span><span @click="popupRelatVisible=false">完成</span></div>
    </mt-popup>
    <!--<mt-popup v-model="popupAddVisible"  position="bottom" style="width: 100%;">-->
    <!--<mt-picker :slots="slotsAdd" valueKey="text"  @change="onAddChange" :visible-item-count="3"></mt-picker>-->
    <!--<div class="popbtn"><span @click="popupAddVisible=false">取消</span><span @click="popupAddVisible=false">完成</span></div>-->
    <!--</mt-popup>-->
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '',
        visible: true,
        popupRelatVisible:false,
        identity:'父母',
        identityId:'1',
        slots:
          [{
            flex: 1,
            values: [{value:'1',text:'父母'},{value:'2',text:'配偶'},{value:'3',text:'子女'},{value:'9',text:'其他'}],
            className: 'slot1',
            textAlign: 'center'
          }],
        address:'杭州',
        granteeName:'',
        granteeId:'',
        card:'',
        cid:Base64.decode(sessionStorage.getItem("cid"))
      }
    },
    methods:{
      //点击修改亲属关系
      onValuesChange(picker, values) {
        if(values[0]!=undefined) {
          this.identity = values[0].text;
          this.identityId = values[0].value;
        }
      },
      faceCertifi(){
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(reg.test(this.granteeId) === false) {
          this.$messagebox.alert("身份证输入不合法");
          return false;
        }

        if(this.granteeId.trim().length==18){
          if(this.utils.isCid(this.granteeId)===true){

          }else{
            this.$messagebox.alert("身份证输入不合法");
            return false;
          }
        }


        let regName =/^[\u4e00-\u9fa5]{2,4}$/;
        if(!regName.test(this.granteeName)){
          this.$messagebox.alert("真实姓名填写有误");
          return false;
        }
       /* if(this.granteeId == this.cid) {
          this.$messagebox.alert("您添加的亲情网成员是当前登录人");
          return false;
        }*/

        let data = {
          name: this.granteeName,
          cardNo: this.granteeId.toUpperCase(),
          returnPage : process.env.FamilyRetUrl
        }
        //发起人脸识别url
        this.$http.get("/face/url",{params:data})
          .then(res=>{
            if(res.success){
              localStorage.setItem('ship', Base64.encode(this.identityId));
              localStorage.setItem('granteeId', Base64.encode(this.granteeId.toUpperCase()));
              localStorage.setItem('granteeName', Base64.encode(this.granteeName));
              localStorage.setItem('faceFamily', "1");
              window.location.href = res.body;
            }else{
              alert("获取人脸识别界面失败，请重新进入办事大厅！")
            }
          });
      }
    }
  }
  document.body.style.background="#f7f7f7";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  ul{background: #FFFFFF;}
  li{margin-left: 15px;list-style: none;height: 51px; text-align: left;line-height: 51px;}
  li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  li>label{display: inline-block;width: 70px;font-size: 15px;color: #000000;font-weight: 200;}
  input{-webkit-appearance: none;height: 30px;border: none;outline: none;}
  .btn_next input{width: 90%;height: 48px;color: #FFF;font-size: 18px;background: #3399FF;border-radius: 6px;margin: 56px auto 0 auto;}
  .in_bg{background: url("../../assets/images/icon/icon-jtdown.png") no-repeat right center;background-size: 18px;}
  ul input{width: 70%;font-size: 14px;}
</style>

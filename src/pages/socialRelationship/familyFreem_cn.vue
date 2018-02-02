<template>
  <div class="main">
    <!-- <div  v-show="true">
       <div class="setting">
         <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
         <div class="set_tip">即将开通...</div>
       </div>
     </div>
     <div  v-show="false">-->
    <div class="head_info">
      <ul>
        <li><div class="div_sculpture"><img src="../../assets/images/icon/img-headpic2.png"/></div></li>
        <li class="user_head_info"><label>{{tmhandleName}}</label><span>社会保障号：{{tmhandleId}}</span></li>
      </ul>
    </div>
    <div class="div_navbar">
      <div class="div_bg"></div>
      <mt-navbar v-model="selected">
        <mt-tab-item class="tabfont" id="1">授权账户</mt-tab-item>
        <!--<mt-tab-item class="tabfont"  id="2">被授权账户</mt-tab-item>-->
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="tip"><span>温馨提示：</span>授权其他人使用&nbsp;{{tmhandleName}}&nbsp;历年账户金额</div>
        <div class="pic_tip">
          <div class="pic1"><i><img src="../../assets/images/icon/icon-person-gray.png"/></i><label>{{tmhandleName}}</label></div>
          <div class="pic2"><i><img src="../../assets/images/icon/sketch-map.png"/></i></div>
          <div class="pic3"><i><img src="../../assets/images/icon/icon-people.png"/></i><label>以下人员</label></div>
        </div>
        <div class="content">
          <div class="module" v-for="(item,index) in granteeList">
            <div class="user_pic"><img :src="item.pic"/></div>
            <div class="user_info">
              <ul>
                <li><label>{{item.ship | transforShip}}：{{item.tmName}}</label></li>
                <li>身份证号：{{item.tmId}}</li>
                <li>授权时间：{{item.grantTime}}</li>
                <li>状态：{{item.status | transforFamilyStatus}}</li>
              </ul>
            </div>
            <div class="user_oper" @click="op2(index)" v-show="item.status=='1'">解除授权</div>
          </div>
        </div>
        <div><router-link to="familyProtocol_cn"><input class="btn_sure" type="button" value="+  添加授权"/></router-link></div>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- <div class="hasno">
       <div class="cert_pic"><img src="../../assets/images/icon/icon-auth.png" height="246" width="303"/></div>
       <div class="cert_tip">您暂未添加任何被授权人，添加后，被授权人可以
         使用您医保账户中个人账户金额。</div>
       <div><router-link to="familyProtocol"><input class="btn_sure" type="button" value="+  添加授权"/></router-link></div>
      </div>-->
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot3=true;boot1=false" ></span><img src="../../assets/images/boot/familyfree1.png"/></div>
    <!--<div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><span class="next2" @click="boot3=true;boot2=false" ></span><img src="../../assets/images/boot/familyfree2.png"/></div>-->
    <div class="boot" v-show="boot3"><span class="last3" @click="boot3=false"></span><img src="../../assets/images/boot/familyfree3.png"/></div>
  </div>
  <!-- </div>-->
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '异地就医备案',
        visitTimes:sessionStorage.getItem("visitTimes"),
        selected: '1',
        boot1:this.visitTimes=="1",
        /*boot2:false,*/
        boot3:false,
        cname: Base64.decode(sessionStorage.getItem("cname")),
        cid: Base64.decode(sessionStorage.getItem("cid")),
        tmcname: Base64.decode(sessionStorage.getItem("tmcname")),
        tmcid: Base64.decode(sessionStorage.getItem("tmcid")),
        handleName: Base64.decode(sessionStorage.getItem("handleName")),
        handleId: Base64.decode(sessionStorage.getItem("handleId")),
        tmhandleName: Base64.decode(sessionStorage.getItem("tmhandleName")),
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId")),
        granteeList:[]
      }
    },
    methods:{
      getAuthorizedFamily:function(){
        let data ={
          "method": "1021",
          "accepter": process.env.Area,
          "id": Base64.decode(sessionStorage.getItem("handleId")),
          "name": Base64.decode(sessionStorage.getItem("handleName"))
        };
        this.$http.post("/gateway.do/1021?time="+new Date(),"\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            if(res.body && res.body.granteeList && res.body.granteeList.length>0){
              this.granteeList = res.body.granteeList;
              for(var i=0;i<this.granteeList.length;i++){
                if(this.granteeList[i].ship=='1'){
                  this.granteeList[i].pic = require('../../assets/images/icon/icon-spouse.png');
                }else if(this.granteeList[i].ship=='2'){
                  this.granteeList[i].pic = require('../../assets/images/icon/icon-children.png');
                }else if(this.granteeList[i].ship=='3'){
                  this.granteeList[i].pic = require('../../assets/images/icon/icon-children.png');
                }else{
                  this.granteeList[i].pic = require('../../assets/images/icon/icon-children.png');
                }
              }
            }
          },res=>{
            console.log(res);
          });
      },

      op2:function(index){
        let data ={
          "method": "2009",
          "ship": this.granteeList[index].ship,
          "granteeId": this.granteeList[index].id,
          "granteeName": this.granteeList[index].name,
          "op":"2",
          "smsCode":"",
          "id":Base64.decode(sessionStorage.getItem("handleId")),
          "name":Base64.decode(sessionStorage.getItem("handleName")),
          "accepter":process.env.Area
        };
        this.$http.post("/gateway.do/2009?time="+new Date(),"\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            console.log(res)
            if(res.body && res.body.sign=='1') {
              this.$messagebox.alert("操作成功，请等待审核！");
              if (res.body.granteeList && res.body.granteeList.length > 0) {
                this.granteeList = res.body.granteeList;
                for (var i = 0; i < this.granteeList.length; i++) {
                  if (this.granteeList[i].ship == '1') {
                    this.granteeList[i].pic = require('../../assets/images/icon/icon-spouse.png');
                  } else if (this.granteeList[i].ship == '2') {
                    this.granteeList[i].pic = require('../../assets/images/icon/icon-children.png');
                  } else if (this.granteeList[i].ship == '3') {
                    this.granteeList[i].pic = require('../../assets/images/icon/icon-children.png');
                  } else {
                    this.granteeList[i].pic = require('../../assets/images/icon/icon-children.png');
                  }
                }
              }else{
                this.granteeList = [];
              }
            }else if(res.body && res.body.sign=='0') {
              this.$messagebox.alert("操作失败！"+res.body.retmsg);
            }else{
              this.$messagebox.alert("操作失败！");
            }
          },res=>{
            this.$messagebox.alert("操作失败！");
            console.log(res);
          });
      }
    },
    created(){
      this.getAuthorizedFamily();
    }

  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last1{display: block;width: 30%;height: 33px;position: absolute;bottom:19%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;bottom:19%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 33px;position: absolute;top:58%;left: 15%;z-index: 1;}
  .next2{display: block;width: 30%;height: 33px;position: absolute;top:58%;right: 15%;z-index: 1;}
  .last3{display: block;width: 30%;height: 35px;position: absolute;bottom:20%;right: 12%;z-index: 1;}
  img{width: 100%;height: 100%;}
  .cert_pic{margin:80px auto 0 auto;width: 151px;height: 123px;}
  .cert_tip{font-size: 15px; color: #333333; line-height: 30px;margin:35px auto 0 auto; text-align: left;width: 88%;}
  .btn_sure{position: fixed;bottom: 0;left: 0; width: 100%;height: 50px;background: #3399FF;border: none;font-size: 18px;color: #FFFFFF;margin-top: 35px;-webkit-appearance: none;outline: none;}
  .hasno{display: none;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .div_navbar:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .div_bg{background: #f7f7f7;height: 15px;}
  .div_bg:after{border: 1px solid #DFDFDF;left: 0px;top:15px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .tip{height: 35px;font-size: 12px; color: #888; line-height: 35px;text-align: left}
  .tip:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .tip>span{color: #F86969 ;margin-left: 14px;}
  .module{height: 85px;border: 1px solid #EBEBEB;border-radius: 100px;width: 92%;margin: 15px auto 0px auto;overflow: hidden;background: #F9F9F9;  }
  .user_pic{float: left;height: 55px;width: 55px;border-radius: 50%;background: #EEEEEE;margin-top: 8px;margin-left: 11px;}
  .user_info{float: left;margin-left: 9px;margin-top: 9px;}
  .user_info label{font-size: 14px; color: #000000;}
  .user_info li{font-size: 12px;color: #888888;list-style: none;text-align: left;}
  .user_oper{float: right;font-size: 16px; color: #3399FF;height: 44px;width: 44px;border-radius: 50%;margin-top: 14px;margin-right: 11px;font-weight: 200;}
  .content{padding-top: 10px;padding-bottom: 10px;margin-bottom: 50px;}
  .btn_add input{height: 48px;background: #3399FF;-webkit-appearance: none;font-size: 18px; color: #FFFFFF;border: none;width: 100%;}
  .oper_status{float: right; font-size: 16px; color: #888888;line-height: 86px;margin-right: 20px;}
  .pic_tip{overflow: hidden;width: 70%;margin: 0 auto;}
  .pic_tip>div{float: left;height: 90px;margin-top: 20px;vertical-align: bottom;}
  .pic_tip i{display: block;width: 100%;min-height: 50px;}
  .pic_tip label{font-size:14px;color: #000000;display: block;position: relative;bottom: 0px;left: 0px;width: 100%;}
  .pic1{width: 22%}
  .pic2{width: 43%;margin: 0 1%;}
  .pic2>i{margin-top: 10px;}
  .pic3{width: 33%}
  .circular i{ width: 50px;height: 50px; border-radius:50%;overflow: hidden;}

  .head_info{width: 100%;height: 112px;background-image: linear-gradient(-1deg, #43A1FF 4%, #1171D2 96%);}
  .div_sculpture{width: 50px;height: 50px;border-radius: 50%;margin:31px 17px;border: 2px solid rgba(255,255,255,0.3);}
  .div_sculpture>img{width: 100%;height: 100%;border-radius: 50%;}
  .head_info ul{overflow: hidden;}
  .head_info li{float: left;text-align: left;list-style: none;}
  .user_head_info{margin-left: 8px;margin-top: 31px;}
  .user_head_info>label{font-size: 18px;display: block;color: #FFF;}
  .user_head_info>span{font-size: 15px;margin-top: 10px;display: block;color: #FFF;}
</style>

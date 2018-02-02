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
        <li><div class="div_sculpture"><img src="../../assets/images/icon/img-headpic.png"/></div></li>
        <li class="user_head_info"><label>{{tmhandleName}}</label><span>社会保障号：{{tmhandleId}}</span></li>
      </ul>
    </div>
    <div class="div_navbar">
      <div class="div_bg"></div>
      <mt-navbar v-model="selected">
        <mt-tab-item class="tabfont" id="1">我的亲情网</mt-tab-item>
        <!--<mt-tab-item class="tabfont"  id="2">被授权账户</mt-tab-item>-->
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="tip"><span>温馨提示：</span>我可以代表以下人员查看和办理社保相关业务</div>
        <div class="content">
          <div class="module" >
            <div class="user_pic_myself"><img src="../../assets/images/icon/icon-person-gray.png" /></div>
            <div class="user_info">
              <ul>
                <li><label>本人：{{tmcname}}</label></li>
                <li>身份证号：{{tmcid}}</li>
              </ul>
            </div>
            <div class="user_oper" @click="changeUser(cid,cname,tmcid,tmcname)">切换用户</div>
          </div>

          <!--<div class="module">
            <div class="check"><label><input :class="checkStatus?'checked':''" @click="checkValue(checkStatus,item.no)" type="checkbox" value="1" name="agreen"/></label></div>
            <div class="user_pic"></div>
            <div class="user_info">
              <ul>
                <li><label>父母：余麻麻</label></li>
                <li>身份证号：3*****************1</li>
                <li>关注时间：1987-01-01</li>
              </ul>
            </div>
            <div class="user_oper" @click="changeUser(item.id,item.name,item.tmId,item.tmName)">切换用户</div>
          </div>-->

          <div class="module" v-for="item in granteeList">
            <div class="check"><label><input :class="checkStatus?'checked':''" @click="checkValue(checkStatus,item.no)" type="checkbox" value="1" name="agreen"/></label></div>
            <div class="user_pic"><img :src="item.pic"/></div>
            <div class="user_info">
              <ul>
                <li><label>{{item.ship| transforShip}}：{{item.tmName}}</label></li>
                <li>身份证号：{{item.tmId}}</li>
                <li>关注时间：{{item.bindTime}}</li>
              </ul>
            </div>
            <div class="user_oper" @click="changeUser(item.id,item.name,item.tmId,item.tmName)">切换用户</div>
          </div>
        </div>
        <div>
        <div class="btn_add"><router-link to="addRelative"><input type="button" value="+ 添加"/></router-link></div>
        <div class="btn_del" @click="disUser(no)"><input type="button" value="取消关注"/></div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=true"></span><span class="next1" @click="boot3=true;boot1=false" ></span><img src="../../assets/images/boot/familynet1.png"/></div>
    <div class="boot" v-show="boot3"><span class="last3" @click="boot3=false"></span><img src="../../assets/images/boot/familynet3.png"/></div>
  </div>

</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '亲情网',
        selected: '1',
        visitTimes:Base64.decode(sessionStorage.getItem("visitTimes")),
        boot1: this.visitTimes=="1",
        boot3: false,
        vip: Base64.decode(sessionStorage.getItem("vip")),
        tmhandleName: Base64.decode(sessionStorage.getItem("tmhandleName")),//操作人姓名
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId")),//操作人身份证
        handleName: Base64.decode(sessionStorage.getItem("handleName")),//操作人姓名
        handleId: Base64.decode(sessionStorage.getItem("handleId")),//操作人身份证
        tmcname: Base64.decode(sessionStorage.getItem("tmcname")),//本人姓名
        tmcid:Base64.decode(sessionStorage.getItem("tmcid")),//本人身份证号
        cname: Base64.decode(sessionStorage.getItem("cname")),//本人姓名
        cid: Base64.decode(sessionStorage.getItem("cid")),//本人姓名
        no:'',
        checkStatus:false,
        granteeList: [] //授权列表
      }
    },
    methods:{
      checkValue(bool,no){
        if(bool){
          this.checkStatus=false;
          this.no='';
        }else {
          this.checkStatus=true;
          this.no = no;
        }
      },

      //切换用户
      changeUser:function(id,name,tmId,tmName){
        if(id==this.handleId&&name==this.handleName){
          this.$messagebox.alert("已经选择此用户");
        }else {
          sessionStorage.setItem("handleName", Base64.encode(name));
          sessionStorage.setItem("handleId", Base64.encode(id));
          localStorage.setItem("handleName", Base64.encode(name));
          localStorage.setItem("handleId", Base64.encode(id));
          sessionStorage.setItem("tmhandleName", Base64.encode(tmName));
          sessionStorage.setItem("tmhandleId", Base64.encode(tmId));
          this.handleName = name;
          this.handleId = id;
          this.tmhandleName = tmName;
          this.tmhandleId = tmId;
          this.$messagebox.alert("切换成功");
        }
      },
      //查询亲情网信息
      getFamily: function () {
        let data = {
          "vip":Base64.decode(sessionStorage.getItem("vip")),
          "scope": "0",
          "grant": "0"
        };
        this.$http.post(process.env.Gateway+"/family/query","\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");

            if(res.body.granteeList && res.body.granteeList.length>0){
              this.granteeList = res.body.granteeList;
              //设置头像
              for(var i=0;i<this.granteeList.length;i++){
                if(this.granteeList[i].ship==1) {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-parent.png');
                }else if(this.granteeList[i].ship==2) {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-spouse.png');
                }else if(this.granteeList[i].ship==3) {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-children.png');
                }else {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-person-gray.png');
                }
              }
            }
      },res=>{
          console.log(res);
        });

      },
      //解除亲情网信息
      disUser: function (no) {
          if(no==''){
            this.$messagebox.alert("请勾选需要取消关注的亲情网成员!");
            return false;
          }
        let data = {
          "vip":Base64.decode(sessionStorage.getItem("vip")),
          "grantno": no//关系id
        };
        this.$http.post(process.env.Gateway+"/family/release", "\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            this.no = '';
            res = eval("("+Base64.decode(res)+")");
            if(res.body.granteeList && res.body.granteeList.length>0){
              this.granteeList = res.body.granteeList;
              //设置头像
              for(var i=0;i<this.granteeList.length;i++){
                if(this.granteeList[i].ship==1) {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-parent.png');
                }else if(this.granteeList[i].ship==2) {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-spouse.png');
                }else if(this.granteeList[i].ship==3) {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-children.png');
                }else {
                  this.granteeList[i].pic=require('../../assets/images/icon/icon-person-gray.png');
                }
              }
            }else{
              this.granteeList = [];
            }
        },res=>{
          console.log(res);
        });
      }
    },
    created(){

      //调用查询亲情网接口
      this.getFamily();
    }
  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:60%;left: 7%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:60%;right: 22%;z-index: 1;}
  .last2{display: block;width: 30%;height: 33px;position: absolute;top:56%;left: 19%;z-index: 1;}
  .next2{display: block;width: 30%;height: 33px;position: absolute;top:56%;right: 11%;z-index: 1;}
  .last3{display: block;width: 30%;height: 40px;position: absolute;bottom:16%;right: 14%;z-index: 1;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .div_navbar:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .div_bg{background: #f7f7f7;height: 15px;}
  .div_bg:after{border: 1px solid #DFDFDF;left: 0px;top:15px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .tip{height: 35px;font-size: 12px; color: #888; line-height: 35px;text-align: left}
  .tip:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .tip>span{color: #F86969 ;margin-left: 14px;}
  .module{height: 86px;border: 1px solid #EBEBEB;border-radius: 100px;width: 92%;margin: 15px auto 0px auto;overflow: hidden;background: #F9F9F9;  }
  .user_pic{float: left;height: 55px;width: 55px;border-radius: 50%;background: #EEEEEE;margin-top: 15px;margin-left:1%;}
  .user_pic_myself{float: left;height: 55px;width: 55px;border-radius: 50%;background: #EEEEEE;margin-top: 15px;margin-left:30px}
  .user_info{float: left;margin-left: 1%;margin-top: 12px;}
  .user_info label{font-size: 14px; color: #000000;}
  .user_info li{font-size: 12px;color: #888888;list-style: none;text-align: left;}
  .user_oper{float: right;font-size: 16px; color: #3399FF;height: 44px;width: 35px;border-radius: 50%;margin-top: 20px;margin-right: 11px;font-weight: 200;}
  .content{padding-top: 10px;padding-bottom: 10px;}
  .btn_add{float:left;width:49.2%;height: 50px;margin:1px;}
  .btn_add input{height: 48px;background: #3399FF;-webkit-appearance: none;font-size: 18px; color: #FFFFFF;border: none;width: 100%;}
  .btn_del{float:right;width:49.2%;height: 50px;margin:1px;}
  .btn_del input{height: 48px;background: #3399FF;-webkit-appearance: none;font-size: 18px; color: #FFFFFF;border: none;width: 100%;}
  .tip_color{color: #000!important;}
  .oper_status{float: right; font-size: 16px; color: #888888;line-height: 86px;margin-right: 20px;}
  .mint-tab-item-label{font-size: 14px!important;}
  img{width: 100%;height: 100%;}

  .head_info{width: 100%;height: 112px;background-image: linear-gradient(-1deg, #43A1FF 4%, #1171D2 96%);}
  .div_sculpture{width: 50px;height: 50px;border-radius: 50%;margin:31px 17px;border: 2px solid rgba(255,255,255,0.3);}
  .div_sculpture>img{width: 100%;height: 100%;border-radius: 50%;}
  .head_info ul{overflow: hidden;}
  .head_info li{float: left;text-align: left;list-style: none;}
  .user_head_info{margin-left: 8px;margin-top: 31px;}
  .user_head_info>label{font-size: 18px;display: block;color: #FFF;}
  .user_head_info>span{font-size: 15px;margin-top: 10px;display: block;color: #FFF;}
  .check{float: left;height: 55px;width: 20px;margin-top: 30px;margin-left: 5px;}
  .check input{-webkit-appearance: none;outline: none;border: 1px solid #DFDFDF;width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;}
  .check label{vertical-align: middle;font-size: 14px; color: #353535;}
  .checked{background: url("../../assets/images/icon/icon-check-true-red.png")no-repeat center;background-size: 16px;}

</style>

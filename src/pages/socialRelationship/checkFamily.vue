<template>
  <div class="main">
    <headUser></headUser>
    <div class="div_navbar">
      <div class="div_bg"></div>
      <mt-navbar v-model="selected">
        <mt-tab-item class="tabfont" id="1">未授权亲情网</mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="tip"><span>温馨提示：</span>我可以授权给以下人员使用我历年账户中的金额</div>
        <div class="content">
          <div v-for="(item,index) in familyList" :class="active==(index+1)?'module chooseTrue':'module'" @click="choose(index+1)">
            <div class="user_pic"><img src="../../assets/images/icon/icon-parent.png"/></div>
            <div class="user_info">
              <ul>
                <li><label>{{item.ship | transforShip}}：{{item.tmName}}</label></li>
                <li>身份证号：{{item.tmId}}</li>
                <li>关注时间：{{item.bindTime}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btn_add"><input type="button" value="完 成" @click="checkOver"/></div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '亲情网',
        selected: '1',
        boot1: true,
        boot2: false,
        boot3: false,
        active:'1',
        vip: Base64.decode(sessionStorage.getItem("vip")),
        handleName: Base64.decode(sessionStorage.getItem("handleName")),//操作人姓名
        handleId: Base64.decode(sessionStorage.getItem("handleId")),//操作人身份证
        tmhandleName: Base64.decode(sessionStorage.getItem("tmhandleName")),//操作人姓名
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId")),//操作人身份证
        cname: Base64.decode(sessionStorage.getItem("cname")),//本人姓名
        cid:Base64.decode(sessionStorage.getItem("cid")),//本人身份证号
        familyList:[],
        granteeList: [],
      }
    },
    methods:{
      //查询未授权列表
      queryRelation: function() {
        let data = {
          "vip": Base64.decode(sessionStorage.getItem("vip")),
          "scope": "1"
        };
        this.$http.post(process.env.Gateway + "/family/query?time=" + new Date(), "\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res => {
            res = eval("("+Base64.decode(res)+")");
            if (res.body.granteeList && res.body.granteeList.length>0) {
              this.familyList = res.body.granteeList;
              let data2 = {
                "method": "1021",
                "accepter": process.env.Area,
                "id":  Base64.decode(sessionStorage.getItem("handleId")),
                "name":  Base64.decode(sessionStorage.getItem("handleName"))
              };
              this.$http.post("/gateway.do/1021?time=" + new Date(), "\"" + Base64.encode(JSON.stringify(data2))+ "\"")
                .then(res => {
                  res = eval("("+Base64.decode(res)+")");
                  if (res.body && res.body.granteeList && res.body.granteeList.length > 0) {
                    this.granteeList = res.body.granteeList;
                    for(var i=0;i<this.familyList.length;i++){
                      for(var j=0;j<this.granteeList.length;j++){
                        if(this.familyList[i].id==this.granteeList[j].id && this.familyList[i].name==this.granteeList[j].name ){
                          this.familyList.splice(i,1);
                        }else if(this.familyList[i].id==this.handleId && this.familyList[i].name==this.handleName){
                          this.familyList.splice(i,1);
                        }
                      }
                    }
                  }
                }, res => {
                  console.log(res);
                });
              for(var i=0;i<this.familyList.length;i++){
                if(this.familyList[i].ship=='1'){
                  this.familyList[i].pic = require('../../assets/images/icon/icon-spouse.png');
                }else if(this.familyList[i].ship=='2'){
                  this.familyList[i].pic = require('../../assets/images/icon/icon-children.png');
                }else if(this.familyList[i].ship=='3'){
                  this.familyList[i].pic = require('../../assets/images/icon/icon-children.png');
                }else{
                  this.familyList[i].pic = require('../../assets/images/icon/icon-children.png');
                }
              }
            }
        }, res => {
          console.log(res);
        })
      },
      choose(id){
        this.active=id;
      },
      checkOver(){
        if(this.familyList.length>0){
          let rname = this.familyList[this.active-1].name;
          let rid = this.familyList[this.active-1].id;
          let tmrname = this.familyList[this.active-1].tmName;
          let tmrid = this.familyList[this.active-1].tmId;
          let ship = this.familyList[this.active-1].ship;
          let no = this.familyList[this.active-1].no;
          this.$router.push({
            path: 'addAtaxia',
            query: {
              rname: rname,
              rid: rid,
              tmrname: tmrname,
              tmrid: tmrid,
              ship: ship,
              no:no
            }
          })
        }else{
          this.$messagebox.alert("没有可授权的亲人!原因如下：1.亲情网内所有亲人均已授权；2亲情网内还没有关注亲人，请先前往“首页-亲情网”添加关注亲人。");
        }
      }
    },
    created(){
      //未授权已关注亲人列表
      this.queryRelation();

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
  .user_pic{float: left;height: 55px;width: 55px;border-radius: 50%;background: #EEEEEE;margin-top: 15px;margin-left: 11px;}
  .user_info{float: left;margin-left: 9px;margin-top: 12px;}
  .user_info label{font-size: 14px; color: #000000;}
  .user_info li{font-size: 12px;color: #888888;list-style: none;text-align: left;}
  .user_oper{float: right;font-size: 16px; color: #3399FF;height: 44px;width: 44px;border-radius: 50%;margin-top: 20px;margin-right: 11px;font-weight: 200;}
  .content{padding-top: 10px;padding-bottom: 10px;}
  .btn_add input{height: 48px;background: #3399FF;-webkit-appearance: none;font-size: 18px; color: #FFFFFF;border: none;width: 100%;}
  .tip_color{color: #000!important;}
  .oper_status{float: right; font-size: 16px; color: #888888;line-height: 86px;margin-right: 20px;}
  .mint-tab-item-label{font-size: 14px!important;}
  img{width: 100%;height: 100%;}
  .chooseTrue{border: 1px solid #06BD04!important;background: url("../../assets/images/icon/icon-selected.png") no-repeat right 4% center;background-size: 18px;}
  .head_info{width: 100%;height: 112px;background-image: linear-gradient(-1deg, #43A1FF 4%, #1171D2 96%);}
  .div_sculpture{width: 50px;height: 50px;border-radius: 50%;margin:31px 17px;border: 2px solid rgba(255,255,255,0.3);}
  .div_sculpture>img{width: 100%;height: 100%;border-radius: 50%;}
  .head_info ul{overflow: hidden;}
  .head_info li{float: left;text-align: left;list-style: none;}
  .user_head_info{margin-left: 8px;margin-top: 31px;}
  .user_head_info>label{font-size: 18px;display: block;color: #FFF;}
  .user_head_info>span{font-size: 15px;margin-top: 10px;display: block;color: #FFF;}
</style>

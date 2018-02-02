<template>
  <div class="main" v-title="'苍南人社办事大厅'">
    <div class="head">
      <div class="navigation">
        <ul>
          <li>
            <div class="navi_img indexScan"><img src="../../assets/images/icon/icon-saoyisao.png"/></div>
            <div>扫一扫</div>
          </li>
          <li>
            <router-link to="family">
              <div class="navi_img"><img src="../../assets/images/icon/icon-qinqing.png"/></div>
              <div>亲情网</div>
            </router-link>
          </li>
          <li>
            <router-link to="helpMenu">
              <div class="navi_img"><img src="../../assets/images/icon/icon-bangzhu.png"/></div>
              <div>帮助</div>
            </router-link>
          </li>
          <li>
            <router-link to="mine">
              <div class="navi_img"><img src="../../assets/images/icon/icon-wode.png"/></div>
              <div>我的</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="div_module">
        <div class="module_title"><i><img src="../../assets/images/icon/icon-shebaozhengming.png"/></i><span>社保关系</span></div>
        <ul>
          <li @click="isFamilyFreem">
            <i class="icon"><img src="../../assets/images/icon/icon-weibiaoti-5.png"/></i>
            <div class="name">家庭共济</div>
          </li>
        </ul>
      </div>
      <div class="div_module">
        <div class="module_title"><i><img src="../../assets/images/icon/icon-xinxichaxun.png"/></i><span>信息查询</span></div>
        <ul>
          <li>
            <router-link to="InsureInfo">
              <i class="icon"><img src="../../assets/images/icon/icon-canbaojiaofeichaxun.png"/></i>
              <div>参保缴费查询</div>
            </router-link>
          </li>
          <li>
            <router-link to="medInsurance">
              <i class="icon"><img src="../../assets/images/icon/icon-yibaoxiaofeichaxun.png"/></i>
              <div>医保消费查询</div>
            </router-link>
          </li>
          <li>
            <router-link to="persInterest">
              <i class="icon"><img src="../../assets/images/icon/icon-xinxibiangeng.png"/></i>
              <div class="name">个人权益单查询</div>
            </router-link>
          </li>
          <li>
            <router-link to="pension">
              <i class="icon"><img src="../../assets/images/icon/icon-yanglaojinfafang.png"/></i>
              <div>养老金发放</div>
            </router-link>
          </li>
          <li>
            <router-link to="helpMenu">
              <i class="icon"><img src="../../assets/images/icon/icon-changjianwenti.png"/></i>
              <div class="name">常见问题</div>
            </router-link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
    <div style="height: auto;background-color: #cccccc;text-align: center;padding: 5px 0px;font-size:14px;position:fixed;bottom: 0px;width:100%">
      <p>本服务由苍南县人力资源和社会保障局提供</p>
      <p>服务提供热线：12333</p>
    </div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/index1.png"/></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'index',
    data () {
      return {
        boot1:this.visitTimes=="1",
        dynamicInfo:[],  //首页动态
        visitTimes:'0'  //访问次数,
      }
    },
    methods: {
      //首页动态显示与否
      dealMessage:function (e) {
        this.popupVisible=true;
        document.getElementsByClassName('mint-popup')[0].style.top=(e.pageY+55)+'px';
        document.getElementsByClassName('mint-popup')[0].style.left='50%';
      },

      isFamilyFreem:function() {
        let thisObj = this;
        let data = {
          "method": "1024",
          "accepter": process.env.Area,
          "id": Base64.decode(sessionStorage.getItem("handleId")),
          "name": Base64.decode(sessionStorage.getItem("handleName"))
        };
        this.$http.post("/gateway.do/1024?time="+new Date(),"\"" + Base64.encode(JSON.stringify(data))+ "\"").then(function (res) {
          res = eval("("+Base64.decode(res)+")");
          if (res.body.need == "1" ) {
            thisObj.$messagebox.alert(res.body.retmsg);
          }else if(res.body.need == "0"){
            thisObj.$router.push("/familyFreem_cn");
          }

        });

      },

      //用户
      getUser:function () {
        this.$http.post(process.env.ApiUrl+"/api/oauth/get-auth?time="+new Date()).then( user=> {

          user = eval("("+Base64.decode(user)+")");
          sessionStorage.setItem("cid",Base64.encode(user.certnum));
          sessionStorage.setItem("cname",Base64.encode(user.name));
          sessionStorage.setItem("tmcid",Base64.encode(user.tmcertnum));
          sessionStorage.setItem("tmcname",Base64.encode(user.tmname));
          sessionStorage.setItem("id",Base64.encode(user.id));
          let handleName = sessionStorage.getItem("handleName");
          let handleId = sessionStorage.getItem("handleId");
          let tmhandleName = sessionStorage.getItem("tmhandleName");
          let tmhandleId = sessionStorage.getItem("tmhandleId");
          if(this.isEmpty(handleName) || this.isEmpty(handleId) || this.isEmpty(tmhandleName) || this.isEmpty(tmhandleId)){
            sessionStorage.setItem("handleName",Base64.encode(user.name));
            sessionStorage.setItem("handleId",Base64.encode(user.certnum));
            localStorage.setItem("handleName",Base64.encode(user.name));
            localStorage.setItem("handleId",Base64.encode(user.certnum));
            sessionStorage.setItem("tmhandleName",Base64.encode(user.tmname));
            sessionStorage.setItem("tmhandleId",Base64.encode(user.tmcertnum));
          }
          this.addVip();
        });
      },

      //增加会员信息
      addVip:function(){
        let data = {
          "area":process.env.Area,
          "alipayId": Base64.decode(sessionStorage.getItem("id")),
          "id": Base64.decode(sessionStorage.getItem("cid")),//本人的身份证
          "name": Base64.decode(sessionStorage.getItem("cname")),//本人的姓名
        };
        this.$http.post(process.env.Gateway+"/vip/save?time="+new Date(),"\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            this.visitTimes = res.body.visitTimes;
            sessionStorage.setItem("vip",Base64.encode(res.body.vip))
            localStorage.setItem("vip",Base64.encode(res.body.vip))
            sessionStorage.setItem("visitTimes",Base64.encode(res.body.visitTimes))
          },res=>{
            console.log(res);
          });
      },

      //截止时间
      beforePoint:function(){
        var mydate = new Date();
        var year = mydate.getFullYear();
        var month = mydate.getMonth()+1;
        month = month>9?month:('0'+month);
        var date = mydate.getDate();
        date = date>9?date:('0'+date);
        var hour = mydate.getHours();
        hour = hour>9?hour:('0'+hour);
        var minite = mydate.getMinutes();
        minite = minite>9?minite:('0'+minite);
        var second = mydate.getSeconds();
        second = second>9?second:('0'+second);
        return year +''+ month+''+ date + ' ' + hour + ':' + minite + ':' + second;
      },

      //动态信息
      getDynamicInfo:function(){
        let data ={
          "method": "1016",
          "accepter": process.env.Area,
          "id": Base64.decode(sessionStorage.getItem("handleId")),
          "name": Base64.decode(sessionStorage.getItem("handleName")),
          "beforePoint": this.beforePoint(),
          "limit": 10
        };
        this.$http.post("/gateway.do/1016?time="+new Date(),"\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            if(res && res.body && res.body.newsList && res.body.newsList.length>0){
              this.dynamicInfo = res.body.newsList;
              for(var i=0;i<this.dynamicInfo.length;i++){
                if(this.dynamicInfo[i].calzz=='我的医保'){
                  this.dynamicInfo[i].pic = require('../../assets/images/icon/icon-wodeyibao.png');
                  this.dynamicInfo[i].path = 'medInsurance';
                }else if(this.dynamicInfo[i].calzz=='我的养老'){
                  this.dynamicInfo[i].pic = require('../../assets/images/icon/icon-wodeshebaonianduzhangdan.png');
                  this.dynamicInfo[i].path = 'pension';
                }else{
                  this.dynamicInfo[i].pic = require('../../assets/images/icon/icon-wodeshebao.png');
                  this.dynamicInfo[i].path = 'InsureInfo';
                }
              }
            }
          },res=>{
            console.log(res);
          });
      },

      //支付宝扫一扫
      ready:function(callback) {
        // 如果jsbridge已经注入则直接调用
        if (window.AlipayJSBridge) {
          callback && callback();
        } else {
          // 如果没有注入则监听注入的事件
          document.addEventListener('AlipayJSBridgeReady', callback, false);
        }
      }
    },

    created(){

      this.getUser();


    },
    mounted(){
      //支付宝扫一扫
      this.ready(function(){
        document.querySelector('.indexScan').addEventListener('click', function(){
          AlipayJSBridge.call('scan', {
            type: 'qr',
            actionType: 'scanAndRoute'
          }, function (result) {
            alert(JSON.stringify(result));
          });
        });
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    max-width: 786px;
    margin: 0 auto;
    width: 100%;
  }
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:42%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:42%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 33px;position: absolute;top:58%;left: 15%;z-index: 1;}
  .next2{display: block;width: 30%;height: 33px;position: absolute;top:58%;right: 15%;z-index: 1;}
  .last3{display: block;width: 27%;height: 33px;position: absolute;bottom:13%;right: 13%;z-index: 1;}
  .head {
    background-image: linear-gradient(-1deg, #43A1FF 4%, #1171D2 96%);
  }
  .mint-popup{
    width: 90%;
    border-radius: 6px;
    position: absolute;
  }
  .mint-popup>ul{
    height: 70px;
    border-radius: 6px;
    text-align: left;
  }
  .mint-popup:before{
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -20px;
    right: 10px;
  }
  .pop_item>li{
    height: 35px;
    line-height: 35px;
    margin-left: 4%;
    list-style: none;
    padding-left: 25px;
    font-size: 14px;
  }
  .pop_item>li:first-child{
    background: url("../../assets/images/icon/icon-ignore.png") no-repeat left center;
    background-size: 18px;
  }
  .pop_item>li:last-child{
    background: url("../../assets/images/icon/icon-delete.png") no-repeat left center;
    background-size: 16px;
  }
  .user_info {
    height: 55px;
    background: rgba(0, 0, 0, 0.16);
    width: 100%;
  }

  .user_info li {
    list-style: none;
    float: left;
    color: #FFFFFF;
    line-height: 55px;
  }

  .headpic {
    width: 30px;
    height: 30px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    overflow: hidden;
    margin-top: 13px;
    margin-left: 15px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .username {
    font-size: 16px;
    margin-left: 10px;
  }

  .usercard {
    background: rgba(0, 0, 0, 0.07);
    border-radius: 21px;
    height: 21px;
    width: 82px;
    margin-top: 18px;
    font-size: 12px;
    line-height: 21px;
    margin-left: 25px;
  }

  .btn_change {
    -webkit-appearance: none;
    color: #FFFFFF;
    font-size: 13px;
    background: #1FA1FF;
    border-radius: 4px;
    height: 21px;
    width: 58px;
    border: none;
    position: absolute;
    top: 18px;
    right: 15px;
  }

  .navigation {
    height: 90px;
  }

  .navigation li {
    list-style: none;
    float: left;
    width: 25%;
    font-size: 14px;
    color: #FFFFFF;
  }

  .navi_img {
    width: 29px;
    height: 29px;
    margin: 15px auto 10px auto;
  }

  .banner {
    height: 92px;
    background: rgba(0, 0, 0, 0.16);
    /*margin-top: 15px;*/
  }

  a {
    outline: none;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .navigation a:hover, .navigation a:visited, .navigation a:link, .navigation a:active {
    color: #FFF;
  }

  .content a:hover, .content a:visited, .content a:link, .content a:active {
    color: #000;
  }

  .div_tabs {
    border-bottom: 1px solid #DFDFDF;
    margin-top: 15px;
    background: #FFFFFF;
  }
  .posi_tabs{
    position: fixed;
    width: 100%;
    top:0;
    background: #FFFFFF;
    border-bottom: 1px solid #DFDFDF;
  }

  .tabs {
    overflow: hidden;
    height: 58px;
  }

  .tabs > li {
    float: left;
    width: 32.8%;
    text-align: center;
    list-style: none;
    font-size: 13px;
    height: 57px;
    line-height: 20px;
  }

  .tabs > li > div {
    margin-top: 10px;
  }

  .tabs > li:nth-child(1) {
    margin-right: 0.6%;
    border-top: 2px solid #3399FF;
  }

  .tabs > li:nth-child(2) {
    margin-right: 0.6%;
    border-top: 2px solid #EE9F22;
  }

  .tabs > li:nth-child(3) {
    /*margin-right: 0.5%;*/
    border-top: 2px solid #4ED04C;
  }

  .tabs > li:nth-child(4) {
    margin-right: 0.5%;
    border-top: 2px solid #18A3FF;
  }

  .tabs > li:nth-child(5) {
    margin-right: 0.5%;
    border-top: 2px solid #0081DC;
  }

  .tabs > li:nth-child(6) {
    border-top: 2px solid #F44E4E;
  }
  @-webkit-keyframes myfirst
  {
    0%   {background: #3399FF;height:0px;}
    25%  {background: #3399FF; height:15px;}
    50%  {background: #3399FF; height:30px;}
    75%  {background: #3399FF; height:45px;}
    100% {background: #3399FF; height:59px;}
  }
  .choose_tbs1 {
    /*background: #3399FF;*/
    color: #FFFFFF;
    animation:myfirst 0.3s;
    -webkit-animation:myfirst 0.3s;
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes mysecond
  {
    0%   {background: #EE9F22;height:0px;}
    25%  {background: #EE9F22; height:15px;}
    50%  {background: #EE9F22; height:30px;}
    75%  {background: #EE9F22; height:45px;}
    100% {background: #EE9F22; height:59px;}
  }

  .choose_tbs2 {
    /*background: #EE9F22;*/
    color: #FFFFFF;
    animation:mysecond 0.3s;
    -webkit-animation:mysecond 0.3s;
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes mythrid
  {
    0%   {background: #4ED04C;height:0px;}
    25%  {background: #4ED04C; height:15px;}
    50%  {background: #4ED04C; height:30px;}
    75%  {background: #4ED04C; height:45px;}
    100% {background: #4ED04C; height:59px;}
  }
  .choose_tbs3 {
    /*background: #4ED04C;*/
    color: #FFFFFF;
    animation:mythrid 0.3s;
    -webkit-animation:mythrid 0.3s;
    animation-fill-mode: forwards;
  }

  .choose_tbs4 {
    background: #18A3FF;
    color: #FFFFFF;
  }

  .choose_tbs5 {
    background: #0081DC;
    color: #FFFFFF;
  }

  .choose_tbs6 {
    background: #F44E4E;
    color: #FFFFFF;
  }

  .div_module{background: #F7F7F7;padding-top: 15px;}
  .div_module>ul{background: #FFFFFF;min-height: 80px;}
  .div_module li{float: left;width: 33.3%;list-style: none;height: 80px;text-align: center;font-size: 14px;background: #FFFFFF;display: block;}

  .icon {
    width: 25px;
    display: block;
    margin: 15px auto 5px auto;
  }

  .name {
    text-align: center;
  }

  .module_title {
    height: 36px;
    background: #FFF;
    text-align: left;
    font-size: 14px;
    line-height: 36px;
  }

  .module_title:after {
    border: 1px solid #DFDFDF;
    left: 0px;
    top: 0px;
    width: 99.5%;
    position: relative;
    display: block;
    content: "";
    transform: scaleY(0.5);
  }

  .module_title > i {
    width: 18px;
    height: 18px;
    display: inline-block;
    position: relative;
    top: 4px;
    left: 15px;
    border-radius: 50%;
    overflow: hidden;
  }

  .module_title > i > img {
    width: 25px;
    height: 25px;
    position: relative;
    top: -3px;
    left: -4px;
  }

  .module_title > span {
    display: inline-block;
    margin-left: 30px;
  }

  .edition {
    margin-top: 15px;
  }

  .ed_detail {
    height: 120px;
    background: #FFFFFF;
    text-align: left;
  }

  .see {
    height: 37px;
    font-size: 13px;
    color: #787878;
    line-height: 37px;
    background-color: #F9F9F9;
  }

  .ed_head > p {
    width: 30px;
    height: 34px;
    display: block;
    float: right;
    margin-right: 10px;
    background: url("../../assets/images/icon/icon-more.png") no-repeat center;
    background-size: 18px;
  }

  .ed_head > i {
    width: 34px;
    height: 34px;
    display: inline-block;
    position: relative;
    top: 15px;
    left: 15px;
  }

  .ed_head > div {
    height: 34px;
    display: inline-block;
    font-size: 14px;
    color: #999999;
    text-align: left;
    left: 25px;
    top: 15px;
    position: relative;
    vertical-align: top;
  }

  .ed_head > div > span {
    display: block;
  }

  .ed_head > div > span:first-child {
    margin-top: -3px;
    margin-bottom: 5px;
  }

  .ed_desc {
    margin-left: 59px;
    margin-top: 20px;
  }

  .ed_desc > label {
    display: block;
    font-size: 20px;
    font-weight: 300;
    color: #000;
  }

  .ed_desc > span {
    display: block;
    font-size: 14px;
    color: #000;
  }

</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate(){
    let biz_content = this.utils.param("biz_content");
    let _this = this;

    //生存认证
    let certFlag = localStorage.getItem("certFlag");
    if(certFlag=="1" && biz_content &&  biz_content!=null && biz_content!='' && biz_content!=undefined){
      var json = JSON.parse(biz_content);
      json["id"] = Base64.decode(localStorage.getItem("handleId"));
      json["name"] = Base64.decode(localStorage.getItem("handleName"));
      this.$http.post("/faceOne/cert2007",{},{params:{biz_content:JSON.stringify(json)}})
        .then(res=>{
          if(res.success){
            localStorage.removeItem("certFlag");
            _this.$messagebox.alert("认证成功")
          }else{
            localStorage.removeItem("certFlag");
            _this.$messagebox.alert("认证失败!"+res.message)
          }
        });
    }else{
      localStorage.removeItem("certFlag");
    }

    let faceFamily = localStorage.getItem("faceFamily");
    if(faceFamily=="1" && biz_content &&  biz_content!=null && biz_content!='' && biz_content!=undefined){
      this.$http.post("/faceOne/cert",{},{params:{biz_content:this.utils.param("biz_content")}})
        .then(res=>{
          if(res.success){
            let data = {
              "vip": Base64.decode(localStorage.getItem("vip")),
              "granteeId": Base64.decode(localStorage.getItem("granteeId")),
              "granteeName": Base64.decode(localStorage.getItem("granteeName")),
              "ship": Base64.decode(localStorage.getItem("ship")),
              "area": process.env.Area,
              "smsCode": ""
            }

            this.$http.post(process.env.Gateway + "/family/grant","\"" + Base64.encode(JSON.stringify(data))+ "\"")
              .then(res =>{
                res = eval("(" + Base64.decode(res) + ")");
                if(res.success){
                  _this.$messagebox.alert("添加成功")
                }else{
                  _this.$messagebox.alert("添加失败")
                }
                localStorage.removeItem('faceFamily');
                localStorage.removeItem('granteeId');
                localStorage.removeItem('granteeName');
                localStorage.removeItem('ship');
              },res=>{
                localStorage.removeItem('faceFamily');
                localStorage.removeItem('granteeId');
                localStorage.removeItem('granteeName');
                localStorage.removeItem('ship');
              });
          }else{
            localStorage.removeItem('faceFamily');
            localStorage.removeItem('granteeId');
            localStorage.removeItem('granteeName');
            localStorage.removeItem('ship');
            _this.$messagebox.alert("添加失败");
          }
        });
      // this.$router.push("/family");
    }else{
      localStorage.removeItem('faceFamily');
      localStorage.removeItem('granteeId');
      localStorage.removeItem('granteeName');
      localStorage.removeItem('ship');
    }

    let faceFamilyFreem = localStorage.getItem("faceFamilyFreem");
    if(faceFamilyFreem=="1" && biz_content &&  biz_content!=null && biz_content!='' && biz_content!=undefined){
      this.$http.post("/faceOne/cert",{},{params:{biz_content:this.utils.param("biz_content")}})
        .then(res=>{
          if(res.success){
            let data ={
              "method": "2009",
              "ship": Base64.decode(localStorage.getItem("freemShip")),
              "granteeId": Base64.decode(localStorage.getItem("freemId")),
              "granteeName": Base64.decode(localStorage.getItem("freemName")),
              "telephone":Base64.decode(localStorage.getItem("freemPhone")),
              "id":Base64.decode(localStorage.getItem("handleId")),
              "name":Base64.decode(localStorage.getItem("handleName")),
              "accepter":process.env.Area,
              "op":"1",
              "smsCode":""
            };

            this.$http.post("/gateway.do/2009?time="+new Date(),"\"" + Base64.encode(JSON.stringify(data))+ "\"")
              .then(res=>{
                res = eval("("+Base64.decode(res)+")");
                if(res && res.body.sign=='1'){
                  _this.$messagebox.alert("操作成功，请等待审核！");
                }else if(res && res.body.sign=='0'){
                  _this.$messagebox.alert("操作失败！"+res.body.retmsg);
                }else {
                  _this.$messagebox.alert("操作失败！");
                }
                localStorage.removeItem('faceFamilyFreem');
                localStorage.removeItem('freemShip');
                localStorage.removeItem('freemId');
                localStorage.removeItem('freemName');
                localStorage.removeItem('freemPhone');
              },res=>{
                _this.$messagebox.alert("操作失败！");
                localStorage.removeItem('faceFamilyFreem');
                localStorage.removeItem('freemShip');
                localStorage.removeItem('freemId');
                localStorage.removeItem('freemName');
                localStorage.removeItem('freemPhone');
              });
          }else{
            _this.$messagebox.alert("添加失败");
            localStorage.removeItem('faceFamilyFreem');
            localStorage.removeItem('freemShip');
            localStorage.removeItem('freemId');
            localStorage.removeItem('freemName');
            localStorage.removeItem('freemPhone');
          }
        });
    }else{
      localStorage.removeItem('faceFamilyFreem');
      localStorage.removeItem('freemShip');
      localStorage.removeItem('freemId');
      localStorage.removeItem('freemName');
      localStorage.removeItem('freemPhone');
    }
  }
}
</script>

<style>
  *{margin: 0px;padding: 0px;}
  body{height: 100%;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    height: 100%;
  }
  input{font-size: 14px;}
  .body_bg{background: url("assets/images/icon/bg-blue-white.png") no-repeat;background-size: 100%;height: 100%;}
  .body_bg2{background: url("assets/images/icon/bg-blue.png") no-repeat;background-size: 112%;height: 100%;}


  .popbtn{border-top: 1px solid #CECECE;height: 50px;width: 100%;text-align: left;}
  .popbtn span{display: inline-block;width: 50%;height: 100%;text-align: center;line-height: 50px;}
  .popbtn span:first-child {border-right:1px solid #CECECE; box-sizing: border-box;}
  img{width: 100%;}
</style>

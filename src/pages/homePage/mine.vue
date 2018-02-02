<template>
  <div class="main">
    <div class="head">
      <div class="user_info">
        <div class="user_pic"><img src="../../assets/images/icon/img-headpic.png"/></div>
        <div class="user_msg">
          <ul>
            <li>社会保障卡</li>
            <li>姓名： {{tmhandleName}}</li>
            <li>卡号： {{userInfo.card | transforCard}}</li>
            <li>状态： {{userInfo.cardState | transforCardState}}</li>
            <li>社会保障号码：{{tmhandleId}}</li>
          </ul></div>
      </div>
    </div>
    <div v-show="visible1">
      <div class="cert_pic"><img src="../../assets/images/icon/icon-auth.png" height="246" width="303"/></div>
      <div class="cert_tip">暂无办件</div>
    </div>
    <div class="content" v-show="visible2">
      <div class="tip">我的办件</div>
      <div class="mydealt" v-for="(item,index)
       in handlingList">
        <ul>
          <li><span>{{item.handDate}}</span><p><router-link to="apply">{{item.state}}</router-link></p></li>
          <li><label>{{tmhandleName}} {{item.title}}</label></li>
          <li><span class="sp_color">受理部门：{{item.accepter}}</span></li>
        </ul>
      </div>
    </div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/mine1.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><span class="next2" @click="boot3=true;boot2=false" ></span><img src="../../assets/images/boot/mine2.png"/></div>
<!--    <div class="boot" v-show="boot3"><span class="last3" @click="boot3=false"></span><span class="next3" @click="boot4=true;boot3=false" ></span><img src="../../assets/images/boot/mine3.png"/></div>
    <div class="boot" v-show="boot4"><span class="last4" @click="boot4=false"></span><img src="../../assets/images/boot/mine4.png"/></div>-->
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '我的',
        visitTimes:Base64.decode(sessionStorage.getItem("visitTimes")),
        boot1:this.visitTimes=="1",
        boot2:false,
       //boot3:false,
       // boot4:false,
        visible1:true,
        visible2:false,
        handleName:Base64.decode(sessionStorage.getItem("handleName")),
        handleId:Base64.decode(sessionStorage.getItem("handleId")),
        tmhandleName:Base64.decode(sessionStorage.getItem("tmhandleName")),
        tmhandleId:Base64.decode(sessionStorage.getItem("tmhandleId")),
        userInfo:{},//用户信息1001接口
        handlingList:[]//我的办件
      }
    },
    methods:{
      //获取用户信息
      getUserInfo:function(){
        let data  = {
          "method" : "1001",
          "accepter": Base64.decode(sessionStorage.getItem("area")),
          "id" : this.handleId,
          "name" : this.handleName
        };
        this.$http.post("/gateway.do/1001","\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            if(res.success && res.body){
              this.userInfo = res.body;
            }
          },res=>{
            console.log(res);
          });
      },
      getHandlingList(){
        let data  = {
          "method" : "1017",
          "accepter": Base64.decode(sessionStorage.getItem("area")),
          "id" : this.handleId,
          "name" : this.handleName
        };
        this.$http.post("/gateway.do/1017","\"" + Base64.encode(JSON.stringify(data))+ "\"")
          .then(res=> {
            res = eval("("+Base64.decode(res)+")");
            if(res.success && res.body.handlingList){
              this.handlingList  = res.body.handlingList;
              this.visible2 = true;
              this.visible1 = false;
            }else{
              this.visible1 = true;
              this.visible2 = false;
            }
        });
      }
    },
    created(){
      this.getUserInfo();
      //this.getHandlingList();
    }
  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:51%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:51%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 33px;position: absolute;top:66%;left: 12%;z-index: 1;}
  .next2{display: block;width: 30%;height: 33px;position: absolute;top:66%;right: 18%;z-index: 1;}
  .last3{display: block;width: 30%;height: 33px;position: absolute;top:74%;left: 12%;z-index: 1;}
  .next3{display: block;width: 30%;height: 33px;position: absolute;top:74%;right: 18%;z-index: 1;}
  .last4{display: block;width: 30%;height: 37px;position: absolute;bottom:11%;left: 36%;z-index: 1;}
  .head{height: 170px;background: #F9F9F9;padding-top: 15px;}
  .user_info{overflow: hidden; height: 154px;width: 92%;margin: 0 auto; background-image: linear-gradient(-180deg, #1685DD 18%, #3086DD 82%); border-radius: 20px;}
  .cert_pic{margin:62px auto 0 auto;width: 151px;height: 123px;}
  .cert_tip{font-size: 24px; color: #A6A6A6; line-height: 62px;margin-top:30px;}
  img{width: 100%;height: 100%;}
  .user_info>div{float: left;}
  .user_pic{height: 48px;width: 48px;border-radius: 50%;overflow: hidden;margin-left: 18px; margin-top: 32px;}
  li{list-style: none;text-align: left;line-height: 18px;}
  .user_msg{font-size: 12px;width: 75%;}
  .user_msg ul{margin-top: 15px;color: #FFF;margin-left: 7.7%;}
  .user_msg li:first-child{font-size: 15px;line-height: 36px;}
  .user_msg li:last-child{font-size: 13px;line-height: 36px;}
  .haveno{display: none;}
  .tip{height: 44px;line-height: 44px;font-size: 14px;text-align: left;padding-left: 15px;}
  .mydealt{height: 105px;font-size: 14px;}
  .mydealt:before{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .mydealt span{display: inline-block;margin-left: 15px;}
  .mydealt label{display: inline-block;margin-left: 15px;margin-top: 5px;}
  .mydealt p{display: inline-block;float: right;color: #009924;margin-right: 15px;}
  .mydealt li:first-child{height: 44px;line-height: 44px;}
  .mydealt li:first-child:after{border: 1px dashed #DFDFDF;left: 4%;top:0px;width: 95.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .mydealt li:last-child{height: 60px;line-height: 24px;}
  .sp_color{color: #888888;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
  .content{background: #FFF;}
</style>

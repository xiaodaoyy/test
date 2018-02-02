<template>
  <div class="main">
    <headUser></headUser>
    <div class="info_mould">
      <div class="mould_tip"><span> 基本信息</span></div>
      <div class="mould_info">
        <ul>
          <li><label>性别：</label><span>{{insureInfo.gender | transforGender}}</span></li>
          <li><label>出生年月：</label><span>{{insureInfo.birthday}}</span></li>
          <li><label>身份证号：</label><span>{{tmhandleId}}</span></li>
          <li><label>社保卡号：</label><span>{{insureInfo.tmCard}}</span></li>
  <li><label>社保卡状态：</label><span>{{insureInfo.cardState | transforCardState}}</span></li>
  </ul>
  </div>
  </div>
  <div class="info_mould">
    <div class="mould_tip"><span>参保险种</span></div>
    <div class="mould_insured">
    <ul>
    <li v-for="item in insureInfo.insuredList" v-if="item">
    <router-link :to="{path:'contRecord',query:{category:item.category}}">
    <p><label>{{item.name}}</label><span>{{item.org}}</span></p>
  <b>{{item.state}}</b></router-link>
  </li>
  </ul>
  </div>
  </div>
  <div class="info_mould">
    <div class="mould_tip"><span> 账户信息</span></div>
    <div class="mould_account">
    <div>
    <span>养老保险</span>
    <label>{{insureInfo.pensionAcc}}</label>
  <span>累计账户余额</span>
  </div>
  <div>
  <span>医疗保险</span>
  <label>{{insureInfo.medicalAcc}}</label>
  <span>当年账户余额</span></div>
  </div>
  <div class="main_bg"></div>
    </div>
    </div>
    </template>

    <script>

  export default {
    name: 'index',
    data () {
      return {
        person: {},
        handleName: Base64.decode(sessionStorage.getItem("handleName")),//操作人姓名
        handleId: Base64.decode(sessionStorage.getItem("handleId")),//操作人身份证
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId")),//操作人身份证
        msg: '',
        insureInfo: {},
      }
    },
    created(){
      //查询参保
     this.insureinfo();

    },
    filters: {
    },
    methods: {
      //查询参保信息
      insureinfo: function () {
        let data = {
          "method": "1001",
          "accepter": process.env.Area,
          "id": this.handleId,
          "name": this.handleName,
        }
        this.$http.post("/gateway.do/1001","\""+Base64.encode(JSON.stringify(data))+"\"").then(res=>{
          res = eval("("+Base64.decode(res)+")");
          if(res.body){
            this.insureInfo = res.body;
          }
        },res=>{
          this.$messagebox.alert("查询失败!");
          console.log(res);
        });
      }
    }
  }


</script>

<style scoped>
  .main {
    max-width: 786px;
    margin: 0 auto;
    width: 100%;
  }

  a {
    outline: none;
    color: #333;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  a:hover, a:visited, a:link, a:active {
    color: #333;
  }

  .info_mould {
    background: #F9F9F9;
    padding-top: 15px;
  }

  .main_bg {
    background: #F9F9F9;
    height: 30px;
  }

  .mould_tip {
    background: #FFFFFF url("../../assets/images/icon/icon-liney.png") no-repeat left center;
    background-size: 30px 25px;
    text-align: left;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    color: #000;
    width: 100%;
  }
  img{width: 100%;height: 100%;}
  .mould_tip:after {
    border: 1px solid #DFDFDF;
    left: 0px;
    top: 0px;
    width: 99.5%;
    position: relative;
    display: block;
    content: "";
    transform: scaleY(0.5);
  }

  .mould_tip > span {
    margin-left: 30px;
  }

  .mould_info {
    background: #FFFFFF;
  }

  .mould_info li {
    height: 40px;
    list-style: none;
    line-height: 40px;
    text-align: left;
    margin-left: 15px;
  }

  .mould_info label {
    font-size: 14px;
    color: #999999;
    display: inline-block;
    width: 114px;
  }

  .mould_info span {
    font-size: 14px;
    color: #151515;
    display: inline-block;
    font-weight: 200;
    font-family: HelveticaNeue-Medium;
  }

  .mould_insured {
    background: #FFFFFF;
  }

  .mould_insured li {
    height: 60px;
    list-style: none;
    text-align: left;
    background: url(../../assets/images/icon/icon-dhjt.png) no-repeat right 4% center;
    background-size: 18px;
  }

  .mould_insured li:after {
    border: 1px solid #DFDFDF;
    left: 0px;
    top: 0px;
    width: 99.5%;
    position: relative;
    display: block;
    content: "";
    transform: scaleY(0.5);
  }

  .mould_insured p {
    display: inline-block;
    width: 64%;
    margin-top: 13px;
    margin-left: 15px;
  }

  .mould_insured label {
    display: block;
    font-size: 14px;
    color: #333333;
    font-weight: 600;
  }

  .mould_insured span {
    display: block;
    font-size: 12px;
  }

  .mould_insured b {
    display: inline-block;
    font-size: 14px;
    width: 21%;
    height: 25px;
    border: 1px solid #53C1A0;
    border-radius: 6px;
    text-align: center;
    line-height: 25px;
    position: relative;
    right: 10px;
    top: -10px;
    color: #53C1A0;
  }

  .b_other_bg {
    border: 1px solid #FF0000 !important;
    color: #FF0000 !important;
  }

  .mould_account {
    background: #FFFFFF;
    overflow: hidden;
  }

  .mould_account > div {
    float: left;
    width: 50%;
    box-sizing: border-box;
    height: 121px;
  }

  .mould_account > div:first-child {
    border: 1px solid #E8E8E8;
  }

  .mould_account > div > span {
    display: block;
    font-size: 14px;
    color: #888888;
    line-height: 36px;
  }

  .mould_account > div > label {
    display: block;
    font-size: 21px;
    color: #151515;
    line-height: 44px;
  }
</style>

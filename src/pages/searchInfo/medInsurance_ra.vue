<template>
  <div class="main">
   <!-- <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">-->
      <headUser></headUser>
      <div class="div_navbar">
        <mt-navbar v-model="selected">
          <mt-tab-item class="tabfont" id="1">账号信息</mt-tab-item>
          <mt-tab-item class="tabfont" id="2">就诊记录</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="acco_info">
            <li><label>本年划入额：</label><span>{{medinsurance.currIncome}}</span></li>
            <li><label>历年结转额：</label><span>{{medinsurance.yestIncome}}</span></li>
            <li><label>本年支出累计：</label><span>{{medinsurance.currOutcome}}</span></li>
            <li><label>历年支出累计：</label><span>{{medinsurance.yestOutcome}}</span></li>
            <li><label>现账户余额：</label><span>{{medinsurance.account}}</span></li>
            <li><label>本年门诊医保金额：</label><span>{{medinsurance.outpatient}}</span></li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="reco_tip">显示当年医保年度内就诊记录</div>
          <ul class="medi_record">
            <li v-for="item in medinsurance.settleList" v-if="item">
              <router-link :to="{path:'visitDetail',query: {settleId: item.settleId}}"><p><b>{{item.hospital}}</b><span>{{item.bs}}</span>
              </p><label>{{item.settleTime}}</label></router-link>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
 <!-- </div>-->
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        id: '',
        selected: '1',
        medinsurance: {}
      }
    },
    created(){
      //调用医疗记录
      this.getMedinsurance();
    },
    methods: {
      //医疗记录以及余额信息
      getMedinsurance() {
        let data = {
          "method": "1010",
          "accepter": process.env.Area,
          "id": Base64.decode(sessionStorage.getItem('handleId')),
          "name": Base64.decode(sessionStorage.getItem('handleName')),
          "scope": "more"
        };
        this.$http.post("/gateway.do/1010?time="+new Date(), "\""+Base64.encode(JSON.stringify(data))+"\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            if(res.body){
              this.medinsurance = res.body;
            }
          },res=>{
            this.$messagebox.alert("查询失败！");
            console.log(res);
          });
      }

    }
  }
  document.body.style.background = "#F9F9F9";

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

  .div_navbar {
    margin: 15px 0px;
  }

  .acco_info {
    background: #fff;
  }

  .acco_info > li {
    height: 44px;
    text-align: left;
    line-height: 44px;
    font-size: 14px;
    list-style: none;
  }

  .acco_info > li:last-child {
    border: none;
  }

  .acco_info > li:after {
    border: 1px solid #DFDFDF;
    left: 0px;
    top: 0px;
    width: 99.5%;
    position: relative;
    display: block;
    content: "";
    transform: scaleY(0.5);
  }

  .acco_info label {
    color: #888888;
    display: inline-block;
    margin-left: 4%;
    width: 70%;
  }

  .acco_info span {
    color: #333333;
    font-weight: 200;
    display: inline-block;
    text-align: right;
    margin-right: 4%;
    width: 20%;
  }

  .medi_record {
    background: #FFF;
  }

  .medi_record > li {
    height: 70px;
    list-style: none;
    text-align: left;
    border-bottom: 1px solid #DFDFDF;
    background: url(../../assets/images/icon/icon-dhjt.png) no-repeat right 15px center;
    background-size: 18px;
  }

  .medi_record > li:last-child {
    border: none;
  }

  .medi_record > li:after {
    border: 1px solid #DFDFDF;
    left: 0px;
    top: 0px;
    width: 99.5%;
    position: relative;
    display: block;
    content: "";
    transform: scaleY(0.5);
  }

  .medi_record label:last-child {
    font-size: 12px;
    color: #999999;
    line-height: 24px;
    margin-left: 4%;
  }

  .medi_record b {
    font-size: 14px;
    color: #333333;
    margin-top: 15px;
    display: inline-block;
    margin-left: 4%;
    font-weight: 200;
  }

  .reco_tip {
    height: 50px;
    font-size: 14px;
    color: #888888;
    text-align: left;
    line-height: 50px;
    margin-left: 4%;
  }

  .medi_record span {
    font-size: 12px;
    color: #3399FF;
    margin-top: 15px;
    display: inline-block;
    border: 1px solid #3399FF;
    border-radius: 4px;
    width: 46px;
    height: 18px;
    text-align: center;
    margin-left: 5%;
  }

  .othercolor {
    color: #FFA105 !important;
    border: 1px solid #FFA105 !important;
  }
  img{width: 100%;height: 100%;}
  .tabfont {
    font-size: 14px !important;
  }
</style>

<template>
  <div class="main">
    <headUser></headUser>
    <div class="reco_tip">最近{{queryCount}}个月缴费记录</div>
    <div>
      <div class="reco_mould" v-for="item in premiumList">
        <div class="reco_title"><span>{{item.stage}}</span><span>{{item.arrival | transforStatus}}</span></div>
        <ul>
          <li><label>缴费险种： </label><span>{{item.subject}}</span><label class="lbl_mleft">缴费基数： </label><span>{{item.base}}</span></li>
          <li><label>单位缴费： </label><span>{{item.unitCost}}</span><label class="lbl_mleft">个人缴费： </label><span>{{item.perCost}}</span>
          </li>
          <li><label>{{item.org}}</label></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  var insure = {
    template: '<li><p class="insur_con">' +
    '<span class="insur_name">{{name}}</span>' +
    '<span class="state" style="background: #53c19a;">{{status}}</span></p>' +
    '<p class="company">{{company}}</p></li>',
    props: {
      name: String,//险种名称
      status: String,//参保状态
      company: String
    }
  }
  export default {
    name: 'index',
    components: {'insure': insure},
    data () {
      return {
        msg: '舟山人社查询',
        premiumList: [],
        queryCount:process.env.Area=='330381'?'24':'12'
      }
    },
    created(){
      this.getContRecord();
    },
    methods: {
      //取得保险记录
      getContRecord() {
        let data = {
          "method": "1009",
          "accepter": process.env.Area,
          "id": Base64.decode(sessionStorage.getItem("handleId")),//本人的身份证
          "name": Base64.decode(sessionStorage.getItem("handName")),//本人的姓名
          "category": this.$route.query.category,//前一个页面传到的参数
          "stage":new Date().getFullYear() + '' + ((new Date().getMonth()+1)<10?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1))
        };
        this.$http.post("/gateway.do/1009", "\""+Base64.encode(JSON.stringify(data))+"\"").then(res=>{
          res = eval("("+Base64.decode(res)+")");
          if(res.body){
            this.premiumList = res.body.premiumList;
          }
        },res=>{
          //失败
          this.$messagebox.alert("查询失败！");
          console.log(res);
        });
      }
    },
    mounted(){
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

  .reco_tip {
    height: 50px;
    font-size: 14px;
    color: #888888;
    text-align: left;
    line-height: 50px;
    margin-left: 4%;
  }

  .reco_mould {
    width: 92%;
    height: 132px;
    margin-bottom: 15px;
    margin-left: 4%;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px 1px #C2E1FF;
    border-radius: 5px;
  }

  .reco_title {
    height: 25px;
    background: #3399FF;
    line-height: 25px;
    text-align: left;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .reco_title > span {
    font-size: 12px;
    color: #FFFFFF;
  }

  .reco_title > span:first-child {
    margin-left: 15px;
  }

  .reco_title > span:last-child {
    display: inline-block;
    float: right;
    margin-right: 15px;
  }

  .reco_mould li {
    height: 35px;
    line-height: 35px;
    margin-left: 15px;
    list-style: none;
    text-align: left;
  }

  .reco_mould li label {
    font-size: 13px;
    color: #888888;
  }

  .reco_mould li span {
    font-size: 14px;
    color: #353535;
    font-weight: 600;
  }

  .lbl_mleft {
    margin-left: 30px;
  }
</style>


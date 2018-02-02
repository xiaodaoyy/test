<template>
  <div class="main">
    <div class="details_box">
      <dl class="mess">
        <dt>基本信息</dt>
        <dd>参保人：<span>{{tmhandleName}}</span></dd>
        <dd>人员类别：<span>{{detail.feature}}</span></dd>
        <dd>医院/药店：<span>{{detail.hospital}}</span></dd>
        <dd>类型：<span>{{detail.bs}}</span></dd>
        <dd>科室：<span>{{detail.dept}}</span></dd>
        <dd>医师：<span>{{detail.doctor}}</span></dd>
        <dd>疾病名称：<span>{{detail.dis}}</span></dd>
        <dd>就诊日期：<span>{{detail.settleTime}}</span></dd>
      </dl>
      <dl>
        <dt>病情描述</dt>
        <dd><span>{{detail.illness}}</span></dd>
      </dl>
      <dl class="hosp_det">
        <dt>住院概况</dt>
        <dd><span class="name_class normal">住院日期：</span><span class="fee">{{detail.visitTime}}-{{detail.leaveTime}}</span>
        </dd>
      </dl>


      <dl>
        <dt>费用明细</dt>
        <table class="tab_bill">
          <tr>
            <th>项目/规格类</th>
            <th class="mid">金额(元)</th>
            <th class="alr">数量</th>
            <th>自理自费(元/%)</th>
          </tr>
          <tr v-for="item in detail.itemList" v-if="item">
            <td>{{item.subject}}</td>
            <td class="mid">{{item.money}}</td>
            <td align="right">{{item.num}}</td>
            <td align="right"> {{item.selfMoney}}/{{item.selfRatio}}</td>
          </tr>
        </table>
      </dl>
      <dl class="result_det">
        <dt>结算明细</dt>
        <dd>总费用：<span>{{detail.cost}}</span></dd>
        <dd>医疗基金支付：<span>{{detail.fundPay}}</span></dd>
        <dd>现金支付：<span class="red">{{detail.selfPay}}</span></dd>
      </dl>
    </div>
    <div class="bottom_bg_box"></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '住院详单',
        txt: '',
        name: '',
        handleName: Base64.decode(sessionStorage.getItem("handleName")),//操作人姓名
        handleId: Base64.decode(sessionStorage.getItem("handleId")),//操作人身份证
        tmhandleName: Base64.decode(sessionStorage.getItem("tmhandleName")),//操作人姓名
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId")),//操作人身份证
        detail: {}
      }
    },
    methods: {
      //获得保险详单
      getContRecord() {
        let data = {
          "method": "1011",
          "accepter":process.env.Area,
          "id": Base64.decode(sessionStorage.getItem('handleId')),
          "name": Base64.decode(sessionStorage.getItem('handleName')),
          "settleId": this.$route.query.settleId
        };
        this.$http.post("/gateway.do/1011", "\""+Base64.encode(JSON.stringify(data))+"\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            if(res.body){
              this.detail = res.body;
            }
          },res=>{
            this.$messagebox.alert("查询失败！");
            console.log(res);
          });

      }

    },
    created(){
      this.getContRecord();
    }
  }
</script>

<style scoped>
  .main {
    max-width: 786px;
    margin: 0 auto;
    width: 100%;
  }

  .details_box {
    text-align: left;
  }

  .bottom_bg_box,
  .details_box {
    background: rgba(238, 238, 238, 1);
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden
  }

  .bottom_bg_box {
    height: 50px;
    background: #F7F7F7;
  }

  .details_box:after,
  .details_box:before {
    content: "";
    width: 14px;
    height: 100%;
    display: inline-block;
    position: absolute;
    top: 5px;
    background: rgba(238, 238, 238, 1) url(../../assets/images/icon/icon-bgy.png) repeat-y center;
    background-size: 14px;
    z-index: 10
  }

  .details_box:after {
    right: 0px;
    top: -1px
  }

  .details_box:before {
    left: 0px;
    top: -1px
  }

  .details_box dl {
    background: white;
    position: relative;
    padding: 0 17px 16px 28px;
    overflow: hidden;
    border-bottom: 1px dotted #dadada
  }

  .details_box dl:last-child {
    border-bottom: none
  }

  .details_box dl dt {
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
    padding: 19px 0 10px 0;
  }

  .details_box dl dt:before {
    content: "";
    width: 2pt;
    height: 10pt;
    background: rgba(36, 157, 238, 1);
    display: inline-block;
    margin-right: 10px
  }

  .details_box dl dd {
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
    padding: 5px 0 5px 0;
    overflow: hidden
  }

  .details_box dl dd .name_class {
    color: rgba(102, 102, 102, 1);
    display: inline-block;
    width: 40%;
  }

  .fee {
    float: right;
    text-align: left;
    width: 60%;
  }

  .details_box .mess dd span {
    width: 65%;
    float: right;
    text-align: left
  }

  .details_box .result_det dd span {
    width: 60%;
    float: right;
    text-align: left
  }

  .details_box .hosp_det dd {
    padding-right: 10px;
  }

  .red {
    width: 60%;
    float: right;
    text-align: left;
    color: #ff2b2b;
    font-weight: 600;
  }

  .tab_bill {
    border-collapse: collapse;
    font-size: 13px;
    line-height: 20px;
    width: 93%;
    box-sizing: border-box;
    color: rgba(102, 102, 102, 1)
  }

  .tab_bill th {
    white-space: nowrap;
    font-weight: normal;
    text-align: left;
    border-bottom: 1px solid #eee;
    padding: 0 5px 0 0
  }

  .tab_bill tr {
    border-bottom: 1px solid #eee
  }

  .tab_bill tr:last-child {
    border-bottom: none
  }

  .tab_bill .mid {
    padding: 5px 15px;
    text-align: center
  }

  .tab_bill .alr {
    text-align: right
  }

  .tab_bill td {
    color: #666;
    padding: 8px 5px 4px 0;
    word-wrap: break-word;
    word-break: break-all
  }

</style>

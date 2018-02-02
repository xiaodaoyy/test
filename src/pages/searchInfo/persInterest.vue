<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
      <div class="time" @click="yearVisible=true">{{year}}</div>
      <div class="container">
        <div class="persontableBox">
          <table class="proveTable center">
            <tr>
              <th class="proveTit" colspan="6">个人基本信息</th>
            </tr>
            <tr>
              <td class="noborder">姓名</td>
              <td colspan="2">{{tmhandleName}}</td>
              <td class="noborder">户籍状态</td>
              <td colspan="2">{{persInterest.housenature}}</td>
            </tr>
            <tr>
              <td class="noborder">社会保障号码</td>
              <td colspan="2">{{tmhandleId}}</td>
              <td class="noborder">联系电话</td>
              <td colspan="2">{{persInterest.tmPhone}}</td>
            </tr>
            <tr>
              <td class="noborder">单位名称</td>
              <td colspan="5" style="text-align:left">{{persInterest.org}}</td>
            </tr>
            <tr>
              <td rowspan="2">当前参保险种</td>
              <td>养老</td>
              <td>医疗</td>
              <td>失业</td>
              <td>工伤</td>
              <td>生育</td>
            </tr>
            <tr style="white-space: nowrap;">
              <td>{{persInterest.insured_10}}</td>
              <td>{{persInterest.insured_20}}</td>
              <td>{{persInterest.insured_50}}</td>
              <td>{{persInterest.insured_30}}</td>
              <td>{{persInterest.insured_40}}</td>
            </tr>
            <!--<tr>
              <td>养老保险个人缴费基数</td>
              <td colspan="5" style="text-align:left">{{persInterest.base}}</td>
            </tr>-->
          </table>
          <table class="proveTable center">
            <tr>
              <th class="proveTit" colspan="6"><span class="red">{{year}}年</span>缴费情况</th>
            </tr>
            <tr>
              <td>险种</td>
              <td>养老</td>
              <td>医疗</td>
              <td>失业</td>
              <td>工伤</td>
              <td>生育</td>
            </tr>
            <tr v-for="(item,index) in persInterest.starList" v-if="item">
              <td>{{item.stage}}</td>
              <td>{{item.star_10}}</td>
              <td>{{item.star_20}}</td>
              <td>{{item.star_50}}</td>
              <td>{{item.star_30}}</td>
              <td>{{item.star_40}}</td>
            </tr>
            <tr>
              <td colspan="6" style="text-align:left">以上说明：★为已到账，☆为未到账，空白为未参保。</td>
            </tr>
           <!-- <tr>
              <td>养老金个人账户情况</td>
              <td colspan="5">至 {{persInterest.penAccTime}} 账户累计储存额&nbsp;{{persInterest.penAccount}}</td>
            </tr>-->
            <tr>
              <td>医疗保险个人账户情况</td>
              <td colspan="5">至 {{persInterest.medAccTime}} 账户累计储存额&nbsp;{{persInterest.medAccount}}</td>
            </tr>
            <tr>
              <td style="vertical-align: top;" class="noborder">备注:</td>
              <td colspan="5" style="text-align:left;border:none; padding-bottom:0;">{{persInterest.remarks_10}}<br/>{{persInterest.remarks_20}}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <mt-popup v-model="yearVisible" position="bottom" style="width: 100%;">
        <mt-picker :slots="slotYear" valueKey="text" @change="onYearChange" :visible-item-count="3"></mt-picker>
        <div class="popbtn"><span @click="yearVisible=false">取消</span><span @click="getPersInterest">完成</span></div>
      </mt-popup>
      <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1"
                                                                                             @click="boot2=true;boot1=false"></span><img
        src="../../assets/images/boot/individual1.png"/></div>
      <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><img
        src="../../assets/images/boot/individual2.png"/></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '个人权益单',
        year: '',
        yearNew: '',
        yearVisible: false,
        slotYear: [
          {
            flex: 1,
            //values: [{value:'2017',text:'2017 年'}, {value:'2016',text:'2016 年'}, {value:'2015',text:'2015 年'},{value:'2014',text:'2014 年'}],
            values: [],
            textAlign: 'center'
          }
        ],
        visitTimes:Base64.decode(sessionStorage.getItem("visitTimes")),
        boot1:this.visitTimes=="1",
        boot2: false,
        handleName: Base64.decode(sessionStorage.getItem("handleName")),//操作人姓名
        handleId: Base64.decode(sessionStorage.getItem("handleId")),//操作人身份证
        tmhandleName: Base64.decode(sessionStorage.getItem("tmhandleName")),//操作人姓名
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId")),//操作人身份证
        persInterest: {},
      }
    },
    filters: {
    },
    methods: {
      onYearChange(picker, values){
        if (values[0] === undefined) {
          return false;
        }
        this.yearNew = values[0].value;
      },
      getSlotYear(){
        var nowYear = new Date().getFullYear();
        var nowMount = new Date().getMonth()+1;
        if(nowMount<7){
          nowYear = nowYear-1;
        }
        this.year = nowYear;
        this.yearNew = nowYear;
        for (var i = 0; i < 100; i++) {
          this.slotYear[0].values.push(JSON.parse("{\"value\":\"" + (nowYear - i) + "\",\"text\":\"" + (nowYear - i) + " 年\"}"));
        }
      },
      getPersInterest(num){
        if (num != 1 && this.year == this.yearNew) {
          return;
        }
        this.year = this.yearNew;
        this.yearVisible = false;
        let data = {
          "method": "1013",
          "accepter": process.env.Area,
          "id": this.handleId,
          "name": this.handleName,
          "stage": this.year
        };
        this.$http.post("/gateway.do/1013","\""+ Base64.encode(JSON.stringify(data))+"\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
            if (res.body.status && res.body.status=='0'){
              if(res.body.reason){
                $.$messagebox.alert(res.body.reason)
              }else{
                $.$messagebox.alert("您没有个人权益单！")
              }

            }else{
              this.persInterest = res.body;
            }
          },res=>{
            this.$messagebox.alert("查询失败！");
            console.log(res);
          });
      }
    },
    created(){


    },
    mounted(){
      this.getSlotYear();
   //   this.getPersInterest(1);
    }
  }
  document.body.style.background = "#F9F9F9";
</script>

<style scoped>
  .main {
    max-width: 786px;
    margin: 0 auto;
    width: 100%;
    font-size: 12px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .boot {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
  }

  .last1 {
    display: block;
    width: 30%;
    height: 33px;
    position: absolute;
    top: 39%;
    left: 15%;
    z-index: 1;
  }

  .next1 {
    display: block;
    width: 30%;
    height: 33px;
    position: absolute;
    top: 39%;
    right: 15%;
    z-index: 1;
  }

  .last2 {
    display: block;
    width: 30%;
    height: 33px;
    position: absolute;
    top: 59%;
    left: 33%;
    z-index: 1;
  }

  .time {
    height: 44px;
    background: #FFFFFF url("../../assets/images/icon/icon-timedh.png") no-repeat right 15px center;
    background-size: 18px;
    margin: 15px 0px;
    font-size: 15px;
    color: #000000;
    text-align: left;
    line-height: 44px;
    padding-left: 15px;
  }

  .container {
    border-bottom: 1px solid #eee;
    background: #FFFFFF;
  }

  .proveTable {
    width: 100%;
    border-collapse: collapse;
    box-sizing: border-box
  }

  .proveTable.center {
    text-align: center
  }

  .proveTable tr td {
    border: 1px #dadada solid;
    border-left: none;
    padding: 5px 8px
  }

  .proveTit {
    text-align: center;
    padding: 8px 0;
    font-size: 12px;
    color: #333
  }

  .proveTable .mess td {
    padding: 8px 0
  }

  .proveTable .mess .noborder {
    border-right: none;
    padding-left: 5px
  }

  .tabsix td {
    width: 16%
  }

  .twoTab td {
    width: 50%;
    color: #666
  }

  .timetitTable th {
    padding: 25px 0 24px 0;
    background: #ecf7ff;
    font-weight: normal;
    color: #666;
    border: 1px #dadada solid
  }

  .timetitTable th:last-child {
    border-right: 1px #249dee solid
  }

  .timetitTable td {
    padding: 5px;
    color: #333;
    border: 1px #dadada solid
  }

  .timetitTable td:last-child {
    border-right: 1px #249dee solid
  }

  .timedetailTable th {
    padding: 5px 10px;
    background: #ecf7ff;
    font-weight: normal;
    white-space: nowrap;
    border: 1px #dadada solid
  }

  .timedetailTable td {
    padding: 5px;
    text-align: center;
    white-space: nowrap;
    border: 1px #dadada solid
  }

  .persontableBox .noborder {
    border-right: none
  }

  .persontableBox {
    background: #fff;
    overflow-x: hidden
  }

  .persontableBox .proveTable td {
    width: 16%
  }
  img{width: 100%;height: 100%;}
  .paystatusImg {
    width: 10px;
    height: 10px
  }
</style>

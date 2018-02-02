<template>
  <div class="main">
    <headUser></headUser>
    <div class="reco_tip">显示{{year}}年发放记录</div>
    <div>
      <div class="reco_mould" v-for="(item,index) in pension" v-if="item">
        <div class="reco_title"><span>{{item.stage}}</span><span>{{item.status | transforPensionStatus}}</span></div>
        <ul>
          <li><label>固定金额： </label><span>{{item.base}}</span></li>
          <li><label>补发金额： </label><span>{{item.adjustment}}</span></li>
          <li><label>合计： </label><span class="red">{{item.total}}</span></li>
        </ul>
      </div>
    </div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false"></span><img
      src="../../assets/images/boot/yljff1.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><img
      src="../../assets/images/boot/yljff2.png"/></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        person: {},
        msg: '养老金发放',
        visitTimes:Base64.decode(sessionStorage.getItem("visitTimes")),
        boot1:this.visitTimes=="1",
        boot2: false,
        pension: [],
        handleName: Base64.decode(sessionStorage.getItem("handleName")),//操作人姓名
        handleId: Base64.decode(sessionStorage.getItem("handleId")),//操作人身份证
        year:new Date().getFullYear()
      }
    },
    filters: {
    },
    created(){
      this.getPension();
    },
    methods: {
      //查询缴费记录
      getPension(){
        let data = {
          "method": "1012",
          "accepter": process.env.Area,
          "id": this.handleId,
          "name": this.handleName,
          "scope": this.year
        };
        this.$http.post("/gateway.do/1012", "\""+Base64.encode(JSON.stringify(data))+"\"")
          .then(res=>{
            res = eval("("+Base64.decode(res)+")");
              if(res.body && res.body.pensionList && res.body.pensionList.length >0){
                this.pension = res.body.pensionList;
              }
            },res=>{
              this.$messagebox.alert("查询失败！");
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
    top: 68%;
    left: 33%;
    z-index: 1;
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
    font-weight: 200;
    display: block;
    float: right;
    margin-right: 15px;
  }

  .red {
    color: #FF0800 !important;
  }
</style>

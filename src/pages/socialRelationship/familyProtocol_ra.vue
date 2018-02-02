<template>
  <div class="main">
    <!--<div class="content">-->
    <!--<label>家庭共济使用授权服务条款</label>-->
    <!--<p>本人已认真阅读《苍南县职工基本医疗保险个人账户使用操作规程》，知晓想着政策规定。确定本人所绑定的被授权人是文件中规定的本人配偶、父母（不含配偶父母）或子女，本人对双方关系真实性负责。授权其使用本人基本医疗保险个人账户历年余额是本人真实意志的体现，本人对本次授权负完全责任。若违规授权给上述近亲属以外其他人的，由本人承担相应法律责任。</p>-->
    <!--</div>-->
    <div class="content">
      <label>个人账户家庭共济使用说明</label>
      <p> 按照我省的相关规定，参加市区职工基本医疗保险且个人账户历年结余资金充裕的参保人（简称授权人）其个人账户历年结余可用于家庭成员之间共济，具体如下：</p>
      <p> 一、人员范围：可授权正常参加浙江省基本医疗保险的配偶、子女、父母（简称被授权人）共济使用个人账户历年结余资金。</p>
      <p> 二、费用范围：</p>
      <p> 授权人的个人账户历年结余资金可用于支付</p>
      <p> 1.被授权人基本医疗保险按规定的门诊（普通、急诊）医疗费用、定点零售药店购买药品费用中由个人承担的自理、自付、自费医疗费用（非治疗性的除外）；</p>
      <p> 2.被授权人使用除了国家扩大免疫规划外的预防性免疫疫苗使用</p>
      <p> 三、个人账户历年结余资金可授权一个或多个直系亲属使用。授权人可通过网络及APP申请办理建立（或解除）个人账户家庭共济业务，经审核确认后，即时生效。</p>
      <p> 四、被授权人应正常参保缴费，以确保医保待遇正常支付。被授权人不能同时使用两个以上（含两个）授权人的历年个人账户资金。</p>
      <p> 五、被授权人参保在温州市区的。持本人社会保障市民卡在省内异地联网定点医药机构或本市定点医药机构就医购药时，
        符合规定的医药费用可直接从授权人的个人账户历年结余资金支付；参保在省内其他地区的，其符合规定的门诊医药费用仍需个人垫付后，携带
      发票原件到授权人医保辖区经办机构报销。</p>
      <p> 六、被授权人按规定持本人社会保障市民卡及医保专用证历本在省内已联网结算的医保定点医药机构就医、购药所发生的医疗费仍需个人垫付后，携带相关发票原件回授权人医保辖区经办机构报销。</p>
      <p> 七、被授权人只使用授权人的历年个人账户资金，不涉及职工医保当年账户和统筹基金的共享。</p>
      <p> 八、授权人与被授权人，均可以随时解除授权关系。</p>
      <p> 九、未尽事宜，可在浙江省人力资源和社会保障厅及温州市人力资源和社会保障局网站查阅个人账户使用的有关文件。
      （省厅:http://www.zjhrss.gov.cn/art/2016/07/05/art_2341_2234791.html）</p>
    </div>
    <div class="foot">
      <div class="check"><label><input :class="checkStatus?'checked':''" @click="checkValue(checkStatus)" type="checkbox" value="1" name="agreen"/>我已阅读并同意合同的全部内容</label></div>
      <div class="btn_sure"><input type="button" @click="checkNext" value="下一步"/></div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="center" class="explain">
      <div class="title">承若书</div>
      <p>本人（姓名：{{tmhandleName}}，身份证号：{{tmhandleId}}）承若：</p>
      <p>一、本人已经阅读《个人账户家庭共济说明》，知晓并遵守关于个人账户历年结余使用的相关规定；</p>
      <p>二、本人承若被授权人与本人的亲属关系及被授权人的参保信息真实准确，并承担相应的法律责任；</p>
      <p>三、被授权人使用本人的个人账户历年结余资金，本次授权符合本人的真实意志；</p>
      <p>四、本人及被授权人将遵守《中华人民共和国社会保险法》及其他基本医疗保险管理规定，合法使用个人账户资金，并配合医保管理部门的调查和管理行为。</p>
      <router-link to="/addAtaxia_ra"><div class="but-3d">我知道了</div></router-link>
    </mt-popup>
  </div>
</template>


<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '家庭共济',
        checkStatus:false,
        popupVisible:false,
        tmhandleName: Base64.decode(sessionStorage.getItem("tmhandleName")),
        tmhandleId: Base64.decode(sessionStorage.getItem("tmhandleId"))
      }
    },
    methods:{
      checkValue(bool){
        if(bool){
          this.checkStatus=false;
        }else {
          this.checkStatus=true;
        }
      },
      checkNext(){
        if(!this.checkStatus){
          this.$messagebox.alert("请阅读并同意合同的全部内容！");
          return;
        }else{
          this.popupVisible=true;
        }
      }
    }
  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .content{margin-bottom: 122px;}
  .content label{font-size: 16px;color: #000000;margin-bottom: 20px;display: block;margin-top: 40px;}
  .content p{font-size: 14px;color: #888888;letter-spacing:1px; line-height: 30px;text-indent: 25px;text-align: left;margin: 0 15px;}
  .btn_return>input{-webkit-appearance: none;width: 90%;height: 48px;border: none;color: #FFF;font-size: 18px;margin: 30px auto;background: #3399FF;border-radius: 6px;}
  .foot{height: 122px;background: #F8F8F8;position: fixed;left: 0;bottom: 0;width: 100%;}
  .foot>div{height: 50px;}
  .btn_sure{border-radius: 6px;position: relative;bottom: 10px;left: 5%;width: 90%}
  .btn_sure input{ width: 100%;height: 50px;background: #3399FF;border: none;font-size: 18px;color: #FFFFFF;-webkit-appearance: none;outline: none;}
  .check{padding-top: 3%;margin-left: 8%;text-align: left;}
  .check input{-webkit-appearance: none;outline: none;border: 1px solid #DFDFDF;width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;}
  .check label{vertical-align: middle;font-size: 14px; color: #353535;}
  .checked{background: url("../../assets/images/icon/icon-check-true-red.png")no-repeat center;background-size: 16px;}

  .explain{width:85%;hegiht:80%;padding:25px 1%; }
  .explain p{font-size: 12px;color: #888888;letter-spacing:1px; line-height: 20px;text-indent: 25px;text-align: left;margin: 0 15px;}
  .explain .title{padding:5px;color:#000000;font-size: 16px}
  .explain .but-3d{
    position: relative;color:#0A60CA;
    text-decoration: none;
    background-color: #ffffff;
    font-family: "Microsoft YaHei", 微软雅黑, 宋体;
    font-size: 14px;
    display: block;
    padding: 4px;
    border-radius: 8px;
    /* let's use box shadows to make the button look more 3-dimensional */
   /* box-shadow: 0px 1px 0px #00c3ff, 0px 2px 25px blue;*/
    border:1px #0A60CA solid;
    margin: 10px auto;
    width: 160px;
    text-align: center;
    -webkit-transition: all .1s ease;
    -moz-transition: all .1s ease;
    transition: all .1s ease;
  }

  .explain .but-3d:active{
    box-shadow: 0px 1px 0px #ffffff, 0px 1px 1px #0A60CA;
    position: relative;
    top: 1px;
  }
</style>

<template>
  <div class="main">
    <!--<div class="content">-->
    <!--<label>家庭共济使用授权服务条款</label>-->
    <!--<p>本人已认真阅读《苍南县职工基本医疗保险个人账户使用操作规程》，知晓想着政策规定。确定本人所绑定的被授权人是文件中规定的本人配偶、父母（不含配偶父母）或子女，本人对双方关系真实性负责。授权其使用本人基本医疗保险个人账户历年余额是本人真实意志的体现，本人对本次授权负完全责任。若违规授权给上述近亲属以外其他人的，由本人承担相应法律责任。</p>-->
    <!--</div>-->
    <div class="content">
      <label>个人历年账户家庭共济使用等<br/>        相关政策调整情况的说明</label>
      <p> 根据我县基本医疗保险个人历年账户调整完善的相关文件精神，自2017年7月1日起，参加我县职工基本医疗保险且个人账户历年结余资金充裕的参保人员，可授权已参加浙江省基本医疗保险的配偶、子女、父母共济使用个人账户历年结余资金。</p>
      <p>一、自主、自助共济本人的历年账户余额</p>
      <p>参保人员可通过自助方式，自主决定将本人的历年账户资金余额共济给一个或多个近亲属（含配偶、子女、父母）使用。</p>
      <p>二、进一步扩大个人历年账户资金的使用范围</p>
      <p>1、按规定由本人承担的自理、自付、自费的药品和医疗服务项目费用（整形、美容等非治疗性医疗费用除外）;</p>
      <p>2、被授权人在浙江省定点医药机构发生的按规定由个人承担的自理、自付、自费的门诊药品和门诊医疗服务项目费用（整形、美容等非治疗性医疗费用除外）;</p>
      <p>3、本人及被授权人使用除国家扩大免疫规划以外的预防性免疫疫苗费用，具体品种由卫计行政部门确认并公布；</p>
      <p>4、个人账户历年结余资金在4000元以上的参保人员，可自愿将4000元以上部分为其本人、被授权人购买指定的个人账户商业健康保险产品。如不足支付的，参保人员可按相同价格待遇自行出资购买（待省有关部门相关操作细则公布后再执行）。</p>
      <p>三、未尽事宜，您可咨询苍南县人力资源和社会保障局医疗保险股，联系电话：0577-64788262。</p>
      <p> 本人承诺：</p>
      <p>一、本人已阅读《个人历年账户家庭共济使用等相关政策调整情况的说明》，知晓并遵守关于个人历年账户结余资金使用的相关规定。</p>
      <p>二、被授权人与本人的亲属关系（仅限配偶、子女、父母）真实准确，本人对亲属关系的确认承担相关法律责任。</p>
      <p>三、本人本次将本人历年账户结余资金共济给本人近亲属使用，符合本人的真实意志。</p>
      <p>四、本人及被授权人将遵守《中华人民共和国社会保险法》及其他基本医疗保险管理规定，合法使用个人账户资金，并将对医保管理部门的相关管理予以积极配合。</p>
    </div>
    <div class="foot">
      <div class="check"><label><input :class="checkStatus?'checked':''" @click="checkValue(checkStatus)" type="checkbox" value="1" name="agreen"/>我已阅读并同意合同的全部内容</label></div>
      <div class="btn_sure"><input type="button" @click="checkNext" value="下一步"/></div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '家庭共济',
        checkStatus:false
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
          this.$router.push("/addAtaxia_cn");
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
</style>

<template>
  <div class="main">
    <div class="top">
      <div class="drug_pic">
        <i><img src="../../assets/images/consult/img-drug.png"/></i>
      </div>
      <div class="drug_name">
        <ul><li>人参</li><li>山西天生制药有限责任公司</li><li><span>OTC</span></li></ul>
      </div>
    </div>
    <div class="tip">药品详情</div>
    <div class="dise_detail">
      <label>主治适应症</label>
      <p>益气补血，健脾养心。用于气血不足，心悸，失眠，食少乏力，面色萎。</p>
      <label>不良反应</label>
      <p>尚不明确。</p>
      <label>相互作用</label>

    </div>
    <div class="see_more">查看更多详情</div>
    <div class="hosp_more"><span>附近找药</span><label>杭州</label></div>
    <ul class="medi_list">
      <li>
        <div><img src="../../assets/images/consult/img-hospital1.png"/></div>
        <div>
          <ul class="medi_info">
            <li>天天好大药房</li>
            <li>规格<span> 每盒20颗</span></li>
            <li>天天好大药房三塘店…… <span>2.53km</span></li>
          </ul>
        </div>
      </li>
      <li>
        <div><img src="../../assets/images/consult/img-hospital2.png"/></div>
        <div>
          <ul class="medi_info">
            <li>海王星辰</li>
            <li>规格<span>每盒20颗</span></li>
            <li>西湖区古墩路230号杭州<span>2.53km</span></li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/disesearch3.png"/></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '疾病介绍',
        boot:true
      }
    },
    methods: {}
  }
  document.body.style.background = "#F9F9F9";
</script>

<style scoped>

  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 40px;position: absolute;bottom:7%;left: 38%;z-index: 1;}
  input{-webkit-appearance: none;outline: none;}
  img{width: 100%;height: 100%;}
  li{list-style: none;}
  .top{overflow: hidden; background: url("../../assets/images/consult/bg-dise-top.png") no-repeat; background-size: 120%;height: 74px;padding-top: 14px;padding-bottom: 14px;}
  .top>div{float: left;}
  .drug_pic{background-color: #FFFFFF;border: 5px solid rgba(255,255,255,0.5);height: 74px;width: 74px;border-radius: 50%;box-sizing: border-box;margin-left: 15px;}
  .drug_pic i{height: 47px;width: 38px;display: block;margin: 5px auto;}
  .drug_name{text-align: left;margin-left: 8px;color: #FFFFFF}
  .drug_name li:first-child{font-size: 15px;line-height: 26px;}
  .drug_name li:nth-child(2){font-size: 13px;}
  .drug_name span{background: #64C964;border-radius: 2px;display: block;width: 40px;height: 20px;text-align: center;line-height: 20px;font-size: 13px;margin-top: 8px;}
  .tip{height: 44px;font-size: 14px;color: #000000;line-height: 44px;text-align: left;margin-left:4%;}
  .tip:after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 103.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .dise_detail{text-align: left;margin:10px 4.4%;height: 200px;}
  .dise_detail label{font-size: 14px;color: #000000;}
  .dise_detail p{font-size: 14px;color: #888888;line-height: 30px;}
  .see_more{font-size: 14px;color: #888888;background: #F5F5F5;height: 36px;line-height: 36px;}
  .hosp_more{height: 33px;line-height: 33px;text-align: left;}
  .hosp_more>span{font-size: 13px;color: #888888;margin-left: 4%;}
  .hosp_more>label{font-size: 13px;color: #353535;float: right;margin-right: 4%;background: url("../../assets/images/icon/icon-jtdown.png") no-repeat right;background-size: 15px;display: block;padding-right: 15px;}
  .hosp_more:after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 103.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .medi_list>li{height: 102px;overflow: hidden;}
  .medi_list>li>div{float: left;}
  .medi_list>li>div:first-child{height: 60px;width: 20%;margin-left: 4%;margin-top: 15px;}
  .medi_list>li>div:last-child{width: 70%;margin-left: 4%;margin-top: 15px;text-align: left;}
  .medi_list>li:nth-last-child(1):after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 103.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .medi_info>li:first-child{font-size: 16px; color: #333333;line-height: 28px;}
  .medi_info>li:nth-child(2){font-size: 14px; color: #353535; line-height: 24px;}
  .medi_info>li:nth-child(2) span{font-size: 18px;color: #F65150;}
  .medi_info>li:nth-child(2) label{font-size: 14px;color: #F65150;margin-left: 6%;}
  .medi_info>li:last-child{font-size: 13px; color: #888888; line-height: 24px;}
  .medi_info>li:last-child span{float: right;}
</style>

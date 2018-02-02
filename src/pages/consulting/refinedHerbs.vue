<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div class="search"><input type="text" placeholder="请输入药材名称"/><input @click="hotVisible=false;searchVisible=true;" type="button" value="搜 索"/></div>
    <div class="tip">热搜榜单</div>
    <ul class="hot_search" v-show="hotVisible">
      <li><i><img src="../../assets/images/consult/icon-ranking1.png"/></i><span>灵芝</span></li>
      <li><i><img src="../../assets/images/consult/icon-ranking2.png"/></i><span>人参</span></li>
      <li><i><img src="../../assets/images/consult/icon-ranking3.png"/></i><span>鹿茸</span></li>
      <li><label>4</label><span>蛤蚧</span></li>
      <li><label>5</label><span>蛤蚧</span></li>
    </ul>
    <ul class="medi_list" v-show="searchVisible">
      <li><router-link to="drugProfiles">
      <div class="img_border" style="background-color: #4caf50"><img style="height: 40px;width: 40px;margin-top: 10px;" src="../../assets/images/consult/img-medical.png"/></div>
      <div>
        <ul class="medi_info">
          <li>人参五味子颗粒</li>
          <li>吉林一正药业集团有限公司</li>
          <li><span>OTC</span></li>
        </ul>
      </div></router-link>
    </li>
      <li><router-link to="drugProfiles">
        <div class="img_border"><img src="../../assets/images/consult/img-drug.png"/></div>
        <div>
          <ul class="medi_info">
            <li>人参归脾丸</li>
            <li>山西天生制药有限责任公司</li>
            <li><span>OTC</span></li>
          </ul>
        </div></router-link>
      </li>
    </ul>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/drugsearch.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><img src="../../assets/images/boot/drugsearch2.png"/></div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '疾病就医参考',
        hotVisible:true,
        searchVisible:false,
        boot1:true,
        boot2:false
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last1{display: block;width: 30%;height: 33px;position: absolute;top:36%;left: 15%;z-index: 1;}
  .next1{display: block;width: 30%;height: 33px;position: absolute;top:36%;right: 15%;z-index: 1;}
  .last2{display: block;width: 30%;height: 40px;position: absolute;top:45%;left: 34%;z-index: 1;}
  input{-webkit-appearance: none;outline: none;}
  .search{margin: 16px auto 0 auto;}
  .search>input[type=text]{height: 31px;width: 74%;border: 1px solid #EFEFEF;border-radius: 3px;padding-left: 1%;}
  .search>input[type=button]{height: 31px;width: 14%;border: 1px solid #EFEFEF;border-radius: 3px;margin-left: 3%;font-size: 14px;
    color: #FFFFFF;background: #3399FF;border-radius: 4px;}
  img{width: 100%;height: 100%;}
  li{list-style: none;}
  .tip{font-size: 13px;color: #888888;height: 33px;line-height: 33px;background-color: #FFFFFF;}
  .tip:after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .hot_search{background-color: #FFFFFF;}
  .hot_search>li{height: 44px;text-align: left;line-height: 44px;}
  .hot_search>li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .hot_search>li>i{height: 20px;width: 17px;display: inline-block;position: relative;top:5px;left: 4%;}
  .hot_search>li>span{font-size: 15px;color: #888888;margin-left: 10%}
  .hot_search>li>label{font-size: 15px;color: #888888;height: 20px;width: 17px;display: inline-block;position: relative;left: 4%;text-align: center;}
  .medi_list{background-color: #FFFFFF;}
  .medi_list>li{height: 102px;overflow: hidden;}
  .medi_list>li div{float: left;}
  .medi_list>li div:first-child{height: 60px;width: 20%;margin-left: 4%;margin-top: 15px;}
  .medi_list>li div:last-child{width: 70%;margin-left: 4%;margin-top: 15px;text-align: left;}
  .medi_list>li:nth-last-child(1):after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 103.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .medi_info>li:first-child{font-size: 15px; color: #333333;line-height: 28px;}
  .medi_info>li:nth-child(2){font-size: 13px; color: #888888; line-height: 24px;}
  .medi_info>li>span{display: block;width:40px;height: 20px; border: 1px solid #64C964; border-radius: 4px;line-height: 20px;text-align: center;font-size: 13px;
    color: #64C964;}
  .img_border{border-radius: 3px;}
</style>

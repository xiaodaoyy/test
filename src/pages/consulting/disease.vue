<template>
  <div class="main">
    <div  v-show="true">
      <div class="setting">
        <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
        <div class="set_tip">即将开通...</div>
      </div>
    </div>
    <div  v-show="false">
    <div class="search"><input type="text" placeholder="请输入疾病名称"/><input type="button" value="搜 索"/></div>
    <div class="module">
      <div class="title"><span>常见疾病</span></div>
      <div class="icon_list">
        <div><router-link to="diseaseProfiles"><i><img src="../../assets/images/consult/icon-disease1.png" /></i><span>咳嗽</span></router-link></div>
        <div><i><img src="../../assets/images/consult/icon-disease2.png" /></i><span>咽炎</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease3.png" /></i><span>发烧</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease4.png" /></i><span>恶心</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease5.png" /></i><span>血压问题</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease6.png" /></i><span>呼吸问题</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease7.png" /></i><span>视力问题</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease8.png" /></i><span>更多症状</span></div>
      </div>
    </div>
    <div class="module">
      <div class="title"><span>疑难杂症</span></div>
      <div class="icon_list">
        <div><i><img src="../../assets/images/consult/icon-disease9.png" /></i><span>肺炎</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease10.png" /></i><span>癌症</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease11.png" /></i><span>糖尿病</span></div>
        <div><router-link to="diseaseProfiles"><i><img src="../../assets/images/consult/icon-disease12.png" /></i><span>高血压</span></router-link></div>
        <div><i><img src="../../assets/images/consult/icon-disease13.png" /></i><span>白血病</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease14.png" /></i><span>牙周炎</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease15.png" /></i><span>乙肝</span></div>
        <div><i><img src="../../assets/images/consult/icon-disease16.png" /></i><span>更多</span></div>
      </div>
    </div>
    <div class="boot" v-show="boot1"><span class="last1" @click="boot1=false"></span><span class="next1" @click="boot2=true;boot1=false" ></span><img src="../../assets/images/boot/disesearch1.png"/></div>
    <div class="boot" v-show="boot2"><span class="last2" @click="boot2=false"></span><img src="../../assets/images/boot/disesearch2.png"/></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '疾病就医参考',
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
  .last2{display: block;width: 30%;height: 40px;position: absolute;bottom:22%;left: 33%;z-index: 1;}
   input{-webkit-appearance: none;outline: none;}
  .search{margin: 16px auto 0 auto;}
  .search>input[type=text]{height: 31px;width: 74%;border: 1px solid #EFEFEF;border-radius: 3px;padding-left: 1%;}
  .search>input[type=button]{height: 31px;width: 14%;border: 1px solid #EFEFEF;border-radius: 3px;margin-left: 3%;font-size: 14px;
    color: #FFFFFF;background: #3399FF;border-radius: 4px;}
  .module{background: #ffffff;margin-top: 16px;}
  .title{font-size: 14px;color: #000000;text-align: left;height: 36px;line-height: 36px;}
  .title span{margin-left: 4%;}
  .title:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .icon_list{background: #ffffff;overflow: hidden;}
  .icon_list>div{height: 88px;float: left;width: 25%;}
  .icon_list i{display: block;margin: 20px auto 0 auto;width: 23px;height: 23px;}
  .icon_list span{display: block;margin: 10px auto 0 auto;font-size: 14px;color: #000000;}
  img{width: 100%;height: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #009924; }
</style>

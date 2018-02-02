<template>
  <div class="main">
   <div class="main_bg">
     <div class="surv_head">
       <ul><li><i><img src="../../assets/images/icon/icon_idcheck.png"/></i><span class="sp_color1">1.身份核对</span></li>
         <li><i><img src="../../assets/images/icon/icon_facedis.png"/></i><span class="sp_color2">2.人脸识别</span></li>
       </ul>
     </div>
     <div class="check_user_info">
       <ul>
         <li><label>姓名</label><span>{{tmhandleName}}</span></li>
         <li><label>身份证号</label><span>{{tmhandleId}}</span></li>
         <li><label>认证类型</label><span>养老待遇资格认证</span></li>
         <li><label>当前年度</label><span>{{year}}</span></li>
         <li><label>认证时间</label><span>{{authTime}}</span></li>
       </ul>
     </div>
     <div class="help_tip">温馨提示：<br/>
       如您想给亲人帮忙代办养老待遇资格认证：<br/>
       （1）请转至首页“亲情网”中选择代办的亲人；<br/>
       （2）你的信息也将作为认证信息提供给社保部门参考；</div>
     <div class="div_btn"><input type="button" value="进入人脸识别认证" @click="faceCertifi"/></div>
   </div>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/scrz4.png"/></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'index',
    data () {
      return {
        msg: '生存认证',
        visitTimes:Base64.decode(sessionStorage.getItem("visitTimes")),
        boot:this.visitTimes=="1",
        cname:'',
        cid:'',
        tmhandleName:Base64.decode(sessionStorage.getItem("tmhandleName")),
        tmhandleId:Base64.decode(sessionStorage.getItem("tmhandleId")),
        handleName:Base64.decode(sessionStorage.getItem("handleName")),
        handleId:Base64.decode(sessionStorage.getItem("handleId")),
        year:new Date().getFullYear(),
        cerStatus:'',
        authTime:'',
        need:'0'
      }
    },
    created:function(){
      this.getCertifiDate();
    },
    methods:{
      /**
       * 获取认证时间
       */
      getCertifiDate(){
        var mydate = new Date();
        var year = mydate.getFullYear();
        var month = mydate.getMonth()+1;
        month = month>10?month:('0'+month);
        var date = mydate.getDate();
        date = date>10?date:('0'+date);
        var hour = mydate.getHours();
        var minite = mydate.getMinutes();
        minite = minite>10?minite:('0'+minite);
        var second = mydate.getSeconds();
        second = second>10?second:('0'+second);
        var time=year +''+ month+''+ date + ' ' + hour + ':' + minite + ':' + second;
        this.authTime = time;
      },
      faceCertifi(){
        let data = {
          name: this.handleName,
          cardNo: this.handleId,
          returnPage : process.env.CertRetUrl
        }
        //发起人脸识别url
        this.$http.get("/faceOne/url",{params: data})
          .then(res=>{
            if(res.success){
                localStorage.setItem("certFlag","1");
                window.location.href = res.body;
            }else{
                alert(JSON.stringify(res))
            }
        });
      }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height:100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 37px;position: absolute;bottom:33%;left: 30%;z-index: 1;}
  .main_bg{background: #F9F9F9;width: 100%;height: 100%;}
  .surv_head{height: 124px;text-align: center;width: 100%;}
  .surv_head li{float: left;list-style: none;}
  .surv_head ul{width: 209px; margin: 0 auto;padding-top: 30px;}
  .surv_head li:first-child{margin-right:73px;}
  .surv_head i{height: 46px;width: 68px;display: block;}
  .surv_head img{width: 100%;height: 100%;}
  .surv_head span{ font-size: 13px;display: block;line-height: 30px;}
  .sp_color1{color: #3399FF;}
  .sp_color2{color:#888888 ;}
  .check_user_info{background: #FFFFFF;}
  .check_user_info ul{margin-left: 17px;}
  .check_user_info li{list-style: none;height: 53px;line-height: 53px;text-align: left;}
  .check_user_info li:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .check_user_info>ul>li:last-child{border: none;}
  .check_user_info label{display: inline-block;text-align: left;width: 70px;font-size: 15px; font-weight: 600;}
  .check_user_info span{display: inline-block;margin-left: 26px;font-size: 14px;}
  .div_btn{position: fixed;left: 0;bottom:0;width: 100%;}
  .div_btn>input{-webkit-appearance: none; height: 50px;width: 100%;border: none;outline: none;background: #3399FF;font-size: 18px;color: #FFFFFF;}
  .help_tip{text-align: left;height: 320px;font-size: 14px;color: #888888;letter-spacing: 0;line-height: 31px;margin: 9px 0px 0px 4%;}
 </style>

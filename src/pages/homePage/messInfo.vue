<template>
  <div class="main">
    <div class="head"><span>{{messageList.title}}</span></div>
    <div class="content" v-html="messageList.msgText"></div>
    <div class="foot">{{messageList.createDate}}</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '信息详情',
        messageList:[]
      }
    },
    methods:{
      getMessage(){
        this.$http.get(process.env.Gateway+"/messageCenter/query",{params:{userId:process.env.Area,msgType:0}}).then(res=>{
          console.log(res);
          if(res.success){
            this.messageList=res.body;
            this.messageList.createDate=this.timeChange(res.body.createDate);
          }
        });
      },
      timeChange(time){
        let date=new Date(time);
        return date.getFullYear()+'-'
          +((date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1))+'-'
          +(date.getDay()>9?date.getDay():'0'+date.getDay())+' '
          +(date.getHours()>9?date.getHours():'0'+date.getHours())+':'
          +(date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes())+':'
          +(date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds());
      },
    },
    created(){
      this.getMessage();
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .head{height: 50px;text-align: left;font-size: 18px;font-weight: 600;line-height: 52px;
    background: #fff url("../../assets/images/icon/icon-message.png") no-repeat left 15px center;background-size: 17px;}
  .head>span{margin-left: 38px;}
  .head:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .content{background: #FFF;text-align: left;padding: 20px 15px 50px 15px;}
  .content label{font-size: 15px;color: #333333;font-weight: 600;margin-bottom:10px;display: inline-block; }
  .content p{font-size: 14px;color: #151515;line-height: 31px;}
  .content>p{display: block;max-width: 100%;}
  .foot{font-size: 15px;color: #333333;background: #FFF ;text-align: right;padding-right: 4%;padding-bottom: 10px;}
  img{width: 100%;height: 100%;}
</style>

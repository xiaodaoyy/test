<template>
  <div class="main">
    <div class="head"><span>养老金发放</span></div>
    <div class="content">
      <h4 style="padding:10px 0px">功能说明</h4>
      <div style="text-indent:25px;font-size:14px">
      <span>查询个人养老金发放情况。</span>
      </div>
      <h4 style="padding:10px 0px">操作说明</h4>
      <div style="text-indent:25px;font-size:14px">
        <span>1	点击“首页-信息查询-养老金发放”，查询当前年度的养老金发放。</span>
      </div>
    </div>
    <div class="foot"><p>还没解决您的问题？电话咨询:12333</p><i><img src="../../assets/images/icon/icon-tel.png"/></i></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '帮助详情',
        postId:this.$route.query.postId,
        post:{}
      }
    },
    methods:{
        getContent(){
          this.$http.get(process.env.Gateway+"/site/post/detail",{params: {postId:this.postId}}).then(res=>
          {
              console.log(res)
            this.post =  res.body

          });

        }
    },
    created(){
      //this.getContent();
    }

  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .head{height: 50px;text-align: left;font-size: 18px;font-weight: 600;line-height: 52px;
    background: #fff url("../../assets/images/icon/icon-help.png") no-repeat left 15px center;background-size: 17px;}
  .head>span{margin-left: 38px;}
  .head:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .content{background: #FFF;text-align: left;padding: 20px 15px 50px 15px;}
  .content label{font-size: 15px;color: #333333;font-weight: 600;margin-bottom:10px;display: inline-block; }
  .content p{font-size: 14px;color: #151515;line-height: 31px;}
  .foot{font-size: 16px;color: #333333;background: #FFF ;
    margin-top: 18px;background-size: 29px;text-align: left;height: 53px;line-height: 53px;padding-left: 15px;}
  .foot>p{display: inline-block;}
  .foot>i{display: inline-block;width: 30px;height: 30px; position: relative;top:8px;left: 5%;}
  .foot>i>img{width: 100%;height: 100%;}
</style>

<template>
  <div class="main">
    <div class="head"><span>家庭共济</span></div>
    <div class="content">
      <h4 style="padding:10px 0px">功能说明</h4>
      <div style="text-indent:25px;font-size:14px">
      <span>管理家庭共济授权成员，已授权成员可与本人共同使用本人的医保账户余额，可随时解除极权关系。</span>
      </div>
      <h4 style="padding:10px 0px">操作说明</h4>
      <div style="text-indent:25px;font-size:14px">
        <p>1.	点击“首页-社保关系-家庭共济”，显示授权列表。</p>
        <p>2.	点击“添加授权”，勾选同意声明，点击“下一步”。</p>
        <p>3.	点击“请选择授权成员”，从未授权列表中选择被授权人员，点击“完成”，完成该成员的授权。(被授权人需先添加到亲情网)
        </p>
        <p>4.	点击“解除授权”，解除该成员的极权关系。</p>
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

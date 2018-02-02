<template>
  <div class="main">
    <div class="content">
      <div :class="active==1?'module chooseTrue':'module'" @click="choose('1')">
        <div class="user_pic"><img src="../../assets/images/icon/icon-parent.png"/></div>
        <div class="user_info">
          <ul>
            <li><label>父母：丁小花</label></li>
            <li>身份证号：4*******1</li>
            <li>社保卡号：A123455</li>
            <li>授权时间：2016-09-09</li>
          </ul>
        </div>
      </div>
      <div :class="active==2?'module chooseTrue':'module'" @click="choose('2')">
        <div class="user_pic"><img src="../../assets/images/icon/icon-spouse.png"/></div>
        <div class="user_info">
          <ul>
            <li><label>配偶：李四</label></li>
            <li>身份证号：4*******2</li>
            <li>社保卡号：A123455</li>
            <li>授权时间：2016-09-09</li>
          </ul>
        </div>
      </div>
      <div :class="active==3?'module chooseTrue':'module'" @click="choose('3')">
        <div class="user_pic"><img src="../../assets/images/icon/icon-children.png"/></div>
        <div class="user_info">
          <ul>
            <li><label>子女：李一天</label></li>
            <li>身份证号：4*******3</li>
            <li>社保卡号：A123455</li>
            <li>授权时间：2016-09-09</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn_go"><router-link to="survCertInfo"><input type="button" value="去认证"/></router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '舟山人社查询',
        selected: '1',
        active:'1',

      }
    },
    methods:{
        choose(id){
        this.active=id;
      }
    }
  }
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  .module{height: 86px;border: 1px solid #EBEBEB;border-radius: 100px;width: 92%;margin: 15px auto 0px auto;overflow: hidden;background: #F9F9F9;  }
  .user_pic{float: left;height: 55px;width: 55px;border-radius: 50%;background: #EEEEEE;margin-top: 15px;margin-left: 11px;}
  .user_info{float: left;margin-left: 9px;margin-top: 12px;}
  .user_info label{font-size: 14px; color: #000000;}
  .user_info li{font-size: 12px;color: #888888;list-style: none;text-align: left;}
  .content{padding-top: 10px;padding-bottom: 10px;}
  .btn_add input{height: 48px;background: #3399FF;-webkit-appearance: none;font-size: 18px; color: #FFFFFF;border: none;width: 100%;}
  .chooseTrue{border: 1px solid #06BD04!important;background: url("../../assets/images/icon/icon-selected.png") no-repeat right 4% center;background-size: 18px;}
  .btn_go input{-webkit-appearance: none;outline: none;position: fixed;bottom: 0px;left: 0px;width: 100%;height: 50px;background: #3399FF;border: none;font-size: 18px;color: #ffffff;}
  img{width: 100%;height: 100%;}
</style>

<template>
<div class="head_info">
  <ul>
    <li><div class="div_sculpture"><img src="../assets/images/icon/img-headpic.png"/></div></li>
    <li class="user_head_info"><label>{{tmhandleName}}</label><span>社会保障号：{{tmhandleId}}</span></li>
  </ul>
</div>
</template>

<script>
export default{
    data(){
        return {
          tmhandleName:Base64.decode(sessionStorage.getItem('tmhandleName')),
          tmhandleId:Base64.decode(sessionStorage.getItem('tmhandleId')),
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head_info{width: 100%;height: 112px;background-image: linear-gradient(-1deg, #43A1FF 4%, #1171D2 96%);}
  .div_sculpture{width: 50px;height: 50px;border-radius: 50%;margin:31px 17px;border: 2px solid rgba(255,255,255,0.3);}
  .div_sculpture>img{width: 100%;height: 100%;border-radius: 50%;}
  .head_info ul{overflow: hidden;}
  .head_info li{float: left;text-align: left;list-style: none;}
  .user_head_info{margin-left: 8px;margin-top: 31px;}
  .user_head_info>label{font-size: 18px;display: block;color: #FFF;}
  .user_head_info>span{font-size: 15px;margin-top: 10px;display: block;color: #FFF;}
</style>

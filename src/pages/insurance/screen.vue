<template>
  <div class="main">
    <div class="tag_tip">保障类型</div>
    <div class="module">
      <span :class="{choose:chooseOn1==1}" @click="chooseOn1=1">重大疾病</span>
      <span :class="{choose:chooseOn1==2}" @click="chooseOn1=2">防癌保障</span>
      <span :class="{choose:chooseOn1==3}" @click="chooseOn1=3">医疗费用</span>
      <span :class="{choose:chooseOn1==4}" @click="chooseOn1=4">住院津贴</span>
      <span :class="{choose:chooseOn1==5}" @click="chooseOn1=5">少儿健康</span>
      <span :class="{choose:chooseOn1==6}" @click="chooseOn1=6">女性健康</span>
      <span :class="{choose:chooseOn1==7}" @click="chooseOn1=7">老人健康</span>
      <span :class="{choose:chooseOn1==8}" @click="chooseOn1=8">意外健康综合</span>
    </div>
    <div class="tag_tip">保障年龄段</div>
    <div class="module">
      <span :class="{choose:chooseOn2==1}" @click="chooseOn2=1">0-17周岁</span>
      <span :class="{choose:chooseOn2==2}" @click="chooseOn2=2">18-40周岁</span>
      <span :class="{choose:chooseOn2==3}" @click="chooseOn2=3">41-50周岁</span>
      <span :class="{choose:chooseOn2==4}" @click="chooseOn2=4">51-60周岁</span>
      <span :class="{choose:chooseOn2==5}" @click="chooseOn2=5">61周岁及以上</span>
    </div>
   <router-link to="insurance"><input class="btn_sure" type="button" value="确 认"/></router-link>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '筛选',
        chooseOn1:1,
        chooseOn2:1
      }
    },
    methods:{
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;text-align: left;}
  img{width: 100%;height: 100%;}
  .tag_tip{margin-left: 4%;font-size: 14px;color: #888888;margin-top: 20px;}
  .module{overflow: hidden;}
  .module>span{display: block; background: #FFFFFF;border: 1px solid #DFDFDF;border-radius: 4px;width: 28%;
    height: 40px;line-height: 40px;text-align: center;font-size: 14px;margin-left: 3.5%;float: left;margin-top: 20px;}
  .choose{background: #3399FF!important;color: #FFFFFF;}
  .btn_sure{height: 48px;width: 100%;border: none;outline: none;-webkit-appearance: none;background: #3399FF;font-size: 18px;
    color: #FFFFFF;position: fixed;left: 0;bottom: 0;}
</style>

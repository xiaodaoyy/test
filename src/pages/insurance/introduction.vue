<template>
  <div class="main">
  <div class="module">
    <div class="title">意外伤害保障 <span>万元</span><label>20</label></div>
    <div class="content">投保人向保险人交纳一定量的保险费，如果被保险人在保险期限内遭受意外伤害并以此为直接原因或近因，在自遭
      受意外伤害之日起的一定时期内造成死亡、残疾、支出医疗费或暂时丧失劳动能力，则保险人给付被保险人或其受益人一定量的保险金。</div>
  </div>
    <div class="module">
      <div class="title">重大疾病保障 <span>万元</span><label>10</label></div>
      <div class="content">投保人向保险人交纳一定量的保险费，如果被保险人在保险期限内遭受意外伤害并以此为直接原因或近因，在自遭
        受意外伤害之日起的一定时期内造成死亡、残疾、支出医疗费或暂时丧失劳动能力，则保险人给付被保险人或其受益人一定量的保险金。</div>
    </div>
    <div class="module">
      <div class="title">意外医疗保障 <span>万元</span><label>1</label></div>
      <div class="content">投保人向保险人交纳一定量的保险费，如果被保险人在保险期限内遭受意外伤害并以此为直接原因或近因，在自遭
        受意外伤害之日起的一定时期内造成死亡、残疾、支出医疗费或暂时丧失劳动能力，则保险人给付被保险人或其受
        益人一定量的保险金。受意外伤害之日起的一定时期内造疗费或暂时丧失劳动能力，则保险人给付被保险人或其受
        益人一定量的保险金。</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '保障详情',
        check:false
      }
    },
    methods:{

    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  .module{height: auto;width: 92%;background: url("../../assets/images/insurance/bg-introd.png") no-repeat;background-size: 100% 100%;
  margin: 18px auto 0 auto;text-align: left;padding-bottom: 20px;}
  .title{font-size: 19px;color: #000000; line-height: 30px;overflow: hidden;height: 30px;margin: 0 15px 5px 15px;padding-top: 10px;}
  .title>label{float: right;font-size: 31px;color: #F65150;}
  .title>span{float: right;font-size: 12px;color: #F65150;margin-top: 5px;}
  .content{font-size: 12px;color: #666666;line-height: 16px;margin:10px 15px 0px 15px;}
</style>

<template>
  <div class="main">
    <div class="head">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/images/insurance/in-banner.png"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tab">
      <span @click="changeSort1" :class="{bg_sort1:sort1==1,bg_sort2:sort1==2,bg_sort3:sort1==3}">价格排序</span>
      <span @click="changeSort2" :class="{bg_sort1:sort2==1,bg_sort2:sort2==2,bg_sort3:sort2==3}">筛选</span>
    </div>
    <ul class="medi_list">
      <li><router-link to="insurDetail">
        <div><img src="../../assets/images/insurance/img-list1.png"/></div>
        <div>
          <ul class="medi_info">
            <li>平安特定疾病保险保障计划</li>
            <li>重大疾病 |  特定疾病</li>
            <li><span>医保支付</span><label>2000.00</label>元起</li>
          </ul>
        </div></router-link>
      </li>
      <li>
        <div><img src="../../assets/images/insurance/img-list1.png"/></div>
        <div>
          <ul class="medi_info">
            <li>旅游保险</li>
            <li>意外事件 |  旅游疾病</li>
            <li><label>2000.00</label>元起</li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="mine"><router-link to="insurancePolicy"><img src="../../assets/images/insurance/icon-mine.png"/></router-link></div>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/help.png"/></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: '保险',
        boot:false,
        sort1:1,
        sort2:1
      }
    },
    methods:{
      changeSort1(){
          if(this.sort1!=3){
              this.sort1++;
          }else {
              this.sort1=1;
          }
      },changeSort2(){
        if(this.sort2!=3){
          this.sort2++;
        }else {
          this.sort2=1;
        }
        this.$router.push("/screen")
      }
    }
  }
  document.body.style.background="#F9F9F9";
</script>

<style scoped>
  .main{max-width: 786px;margin: 0 auto;width: 100%;}
  img{width: 100%;height: 100%;}
  .boot{width: 100%;height: 100%;position: fixed; z-index: 1;left: 0px;top: 0px;}
  .last{display: block;width: 30%;height: 40px;position: absolute;top:64%;left: 33%;z-index: 1;}
  .head{height: 140px;}
  .head img{width: 100%;height: 100%;}
  a{outline: none;color: #333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
  a:hover, a:visited, a:link, a:active {color: #333; }
  li{list-style: none;}
  .medi_list>li{height: 100px;overflow: hidden;}
  .medi_list>li div{float: left;}
  .medi_list>li div:first-child{height: 66px;width: 21%;margin-left: 4%;margin-top: 15px;}
  .medi_list>li div:last-child{width: 70%;margin-left: 4%;margin-top: 15px;text-align: left;}
  .medi_list>li:nth-last-child(1):after{border: 1px solid #DFDFDF;left: -4%;top:0px;width: 103.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .medi_info>li:first-child{font-size: 16px; color: #333333;line-height: 24px;}
  .medi_info>li:nth-child(2){font-size: 14px; color:#888888; line-height: 24px;}
  .medi_info>li:last-child{font-size: 13px; color: #F65150; line-height: 24px;}
  .medi_info>li:last-child span{border: 1px solid #F65150;border-radius: 2px;font-size: 9px;width: 47px;height: 15px;color: #F65150;margin-right: 10px;}
  .medi_info>li:last-child label{font-size: 18px;margin-right: 5px;}
  .tab{height: 50px;line-height: 50px;font-size: 14px;color: #353535;}
  .tab:after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .tab>span{display: inline-block;width: 49%;}
  .mine{height: 66px;width: 66px;position: fixed;right: 6.8%;bottom: 50px;}
  .bg_sort1{background: url("../../assets/images/insurance/icon-sort1.png") no-repeat right 20% center;background-size: 12px;}
  .bg_sort2{background: url("../../assets/images/insurance/icon-sort2.png") no-repeat right 20% center;background-size: 12px;}
  .bg_sort3{background: url("../../assets/images/insurance/icon-sort3.png") no-repeat right 20% center;background-size: 12px;}

</style>

<template>
  <div class="main">
    <div class="head">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/images/icon/help-banner.png"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="module" v-for="(item,index) in menuList">
      <div @click="checkMenu(item.id,index)">{{item.name}}</div>
      <ul v-show="curentId==item.id">
        <li v-for=" c in item.list">
          <router-link :to="{ path: 'helpInfo',query:{postId :c.postId}}">{{c.title}}</router-link>
        </li>
      </ul>
    </div>
    <div>
    <!--<div class="module">-->
      <!--<div style="background: none"><router-link to="/helpInfo">扫一扫</router-link></div>-->
      <!--<div style="background: none"><router-link to="/helpInfo2">亲情网</router-link></div>-->
      <!--<div style="background: none"><router-link to="/helpInfo3">帮助</router-link></div>-->
      <!--<div style="background: none"><router-link to="/helpInfo4">我的</router-link></div>-->
      <!--<div @click="show1=!show1">证明备案</div>-->
      <!--<ul v-show="show1">-->
        <!--<li>-->
          <!--<router-link to="/helpInfo5">&nbsp;&nbsp;&nbsp;&nbsp;生存认证</router-link>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div @click="show2=!show2">社保关系</div>-->
      <!--<ul v-show="show2">-->
        <!--<li>-->
          <!--<router-link to="/helpInfo6">&nbsp;&nbsp;&nbsp;&nbsp;家庭共济</router-link>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div @click="show3=!show3">信息查询</div>-->
      <!--<ul v-show="show3">-->
        <!--<li>-->
          <!--<router-link to="/helpInfo7">&nbsp;&nbsp;&nbsp;&nbsp;参保缴费查询</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/helpInfo8">&nbsp;&nbsp;&nbsp;&nbsp;医保消费查询</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/helpInfo9">&nbsp;&nbsp;&nbsp;&nbsp;个人权益单查询</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/helpInfo10">&nbsp;&nbsp;&nbsp;&nbsp;养老金发放</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<router-link to="/helpInfo3">&nbsp;&nbsp;&nbsp;&nbsp;常见问题</router-link>-->
        <!--</li>-->
      <!--</ul>-->
      <!--&lt;!&ndash;<div @click="show1=!show1">亲情网</div>-->
      <!--<ul v-show="show1">-->
        <!--<li v-for=" c in this.postList">-->
          <!--<router-link :to="{ path: 'helpInfo',query:{postId :c.postId}}">{{c.title}}</router-link>-->
        <!--</li>-->
      <!--</ul>&ndash;&gt;-->
    <!--</div>-->
    </div>
    <div class="boot" v-show="boot"><span class="last" @click="boot=false"></span><img src="../../assets/images/boot/help.png"/></div>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: 'index',
    data () {
      return {
        msg: '帮助',
        postList:[],
        visitTimes:Base64.decode(sessionStorage.getItem("visitTimes")),
        boot:this.visitTimes=="1",
        show1:false,
        show2:false,
        show3:false,
        curentId:'',
        menuList:[]
      }
    },
    methods:{
      getPostList(){
        this.$http.get(process.env.Gateway+"/help/category",{params: {cityCode:process.env.CategoryId}}).then(res=>
        {
          console.log(res)
            if(res.success){
              this.menuList =  res.body;
            }
        });
      },
      checkMenu(id,index){
          if(id==this.curentId){
            this.curentId='';
          }else {
            this.curentId=id;
            this.$http.get(process.env.Gateway+"/site/post/list?categoryId="+id,{}).then(res=>
            {
                console.log(res)
              if (res.success) {
                this.menuList[index].list = res.body;
                Vue.set(this.menuList, index, this.menuList[index]);
              }
            });
          }
      }
    },
    created(){
      this.getPostList();
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
  ul{background: #FFFFFF;}
  li{text-align: left;font-size: 12px;height: 53px;border-bottom: 1px solid #DFDFDF;line-height: 53px;
    padding-left: 15px;list-style: none;background: url(../../assets/images/icon/icon-dhjt.png) no-repeat right 15px center;
    background-size:18px;color: #000;}
  li:not(:last-child):after{border: 1px solid #DFDFDF;left: 0px;top:0px;width: 99.5%;position: relative; display: block;content: "";transform: scaleY(0.5);}
  .module{background: #FFFFFF;}
  .module>div{text-align: left;font-size: 14px;height: 53px;border-bottom: 1px solid #DFDFDF;line-height: 53px;
    padding-left: 15px;list-style: none;background: url(../../assets/images/icon/icon-jtdown.png) no-repeat right 15px center;
    background-size:16px;color: #000;font-weight:bold}
  .one{background:none}
</style>

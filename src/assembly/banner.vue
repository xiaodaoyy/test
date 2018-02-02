<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgList"><img @click="clickRate(item.id)" v-bind:src="item.imgUrl" /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default{
    data(){
        return {
            imgList:[]
        };
    },methods:{
    getBanner(){
      this.$http.get(process.env.Gateway+"/banner/list",{
        params: {
          code:process.env.Area ,
          type: '1'
        }
      }).then(res => {
        this.imgList=res.body
      })
    },
    clickRate(num){
      this.$http.get(process.env.Gateway+"/banner/addClicks",{
        params: {
          id:num
        }
      }).then(res => {
      })
    }
  },
  created(){
        this.getBanner();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .banner {
    height: 92px;
    background: rgba(0, 0, 0, 0.16);
    margin-top: 15px;
  }
  img{width: 100%;}
</style>

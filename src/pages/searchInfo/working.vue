<template>
  <div>
    <div id="container"></div>
    <div id="panel"></div>
  </div>
  <!--
  <input type="text" ref="searchText" id="searchText" @keyup="keyUpSearch" placeholder="请输入地址"/>


    <div class="address_item" v-for="item in searchData">
      <div class="title">{{ item.name }}</div>
      <div class="description">{{ item.pname }}{{ item.cityname }}{{ item.address }}</div>
    </div>

  <div class="main">
  <div  v-show="true">
    <div class="setting">
      <div class="set_pic"><img src="../../assets/images/icon/icon-setting.png"/></div>
      <div class="set_tip">即将开通...</div>
    </div>
  </div>
  </div>
  -->
</template>
<script>
  import AMap from 'AMap'
  var map;
  export default {
    mounted(){
    this.init();
  },
    methods: {
      init: function () {
       //展示地图
        map = new AMap.Map('container', {
          resizeEnable: true
        }),

       //定位自己的位置
        map.plugin(["AMap.Geolocation"],function(){
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,              //是否使用高精度定位，默认:true
            timeout: 10000,                          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,                          //定位结果缓存0毫秒，默认：0
            convert: true,                          //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,                      //显示定位按钮，默认：true
            buttonPosition: 'RT',                 //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,                     //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,                    //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,                //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:true                 //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
        }),
          map.plugin(["AMap.Scale"],function(){    //加载比例尺插件
           var scale = new AMap.Scale();
            map.addControl(scale);
            scale.show();
          }),
          map.plugin(["AMap.ToolBar"],function(){   //在地图中添加ToolBar插件
          var   toolBar = new AMap.ToolBar();
            map.addControl(toolBar);
            toolBar.show();
            toolBar.showDirection();
            toolBar.showRuler();
          })
      },
      dingwei:function(){
        var map = new AMap.Map("container", {
          resizeEnable: true
        });
        AMap.service(["AMap.PlaceSearch"], function() {
          var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: "010", //城市
            map: map,
            panel: "panel"
          });
          //关键字查询
      //    placeSearch.search('北京大学');
        })
      }
    }
  }
</script>
<style>
  #container{
    width: 100%;
    height: 500px;
    border:1px solid;
    margin:0 auto;
  }
  #panel {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 3px;
    right: 0px;
    width: 280px;
  }
</style>

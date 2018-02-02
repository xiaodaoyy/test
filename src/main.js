// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/css/style.css";
import "mint-ui/lib/style.css";
import "./utils/base64.js"
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios';
import Indicator from 'mint-ui/lib/indicator';
import Lazyload from 'mint-ui/lib/lazyload'
import MintUi from 'mint-ui'
import utils from "./utils"
import * as filters from "./utils/filters.js"
import headUser from './assembly/headInfo';
import banner from './assembly/banner';
import Common from '../build/common.js';
let Base64 = require('js-base64').Base64;
//引入组件
Vue.use(MintUi);
Vue.use(headUser);
Vue.use(banner);
Vue.use(Common);
axios.defaults.baseURL = process.env.ApiUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false;
axios.interceptors.request.use(
  config => {
    let access_token = utils.getToken();
    if(config.url.indexOf(config.baseURL)==-1){

    }else{
      if(access_token){
        config.headers.Authorization = 'Bearer ' + access_token;
      }
    }
    Indicator.open();
    return config;
  }, error => {
    Indicator.close();
    return Promise.reject(error);
  });
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response.data;
  }, error => {
    Indicator.close();
    sessionStorage.setItem("err","1");
    let response = error.response;
    if (!response) {
    } else if (response.status == 401) {
      localStorage.removeItem("token");
      //localStorage.removeItem("userInfo");
     // location.href = location.pathname;
      return response.data;
    } else if (response.status == 403) {
    } else if (response.status >= 500) {

    }
    return Promise.reject(error);
  });

//路由进入前获取用户信息，必须打开微信或支付宝
router.beforeEach((to, from, next) => {
  let token = utils.getToken();
  if (!token) {
  //   let authCode = utils.param('auth_code');
  //   if (!authCode) {
  //     location.href = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=' + process.env.AliPayId
  //       + '&scope=auth_user&' + 'redirect_uri=' + encodeURIComponent(process.env.UiUrl);
  //   } else {
      axios.post("/oauth/token", {}, {
        params: {
          client_id: process.env.ClientId, client_secret: process.env.ClientSecret,
          grant_type: "password", username: '4118', password: '123456'
        }
      }).then(res => {
        if (res.access_token) {
          localStorage.setItem("token", res.access_token);
          location.href = location.pathname;
          next();
        } else {
          //alert('授权失败')
          next();
        }
      })
    // }
  } else {
    next()
  }
  //localStorage.setItem("token", 'null');
});


router.afterEach((to, from, next) => {
  let record=sessionStorage.getItem("befInfo");
  if(record){
    record=JSON.parse(record);
    let befName=record.name;
    if(befName!=to.meta.sign){
      let time=record.time;
      let D_value=Date.now()-time;
       D_value=Math.floor(D_value/1000);
      console.log('浏览'+ befName+'花了'+D_value)
      let error=sessionStorage.getItem("err")==0?'Y':'N';
      let isHandle='0';
      if(from.meta.isHandle&&from.meta.isHandle=='1'){
        isHandle='1';
      }
      D_value==0?1:D_value;
      axios.post(process.env.Gateway+"/serviceLog/save", {}, {
        params: {
          userId:Base64.decode(sessionStorage.getItem('cid')) , cityCode: process.env.Area,
          sts: error, isHandle: isHandle, visitTime: D_value,serviceRouter:befName
        }
      }).then(res => {
        console.log(res)
      })
      let info={"name":to.meta.sign,"time":Date.now()}
      sessionStorage.setItem("befInfo",JSON.stringify(info));
      sessionStorage.setItem("err","0");
    }
  }else {
    let info={"name":to.meta.sign,"time":Date.now()}
    sessionStorage.setItem("befInfo",JSON.stringify(info));
  }
});


//分转换成元
Vue.filter("toYuan", function (value) {
  if (isNaN(value)) return '';
  return value / 100;
});
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(Lazyload);
Vue.prototype.$http = axios;
Vue.prototype.utils = utils;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

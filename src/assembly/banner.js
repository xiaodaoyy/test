/**
 * Created by Administrator on 2017/7/27.
 */
//自定义组件
import Banner from './banner.vue';
const banner={
  install:function (Vue) {
    Vue.component('banner',Banner)
  }}
export default banner

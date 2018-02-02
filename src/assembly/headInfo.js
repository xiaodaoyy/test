/**
 * Created by Administrator on 2017/7/27.
 */
//自定义组件
import headInfo from './headInfo.vue';
const headUser={
  install:function (Vue) {
  Vue.component('headUser',headInfo)
}}
export default headUser

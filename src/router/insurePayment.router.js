/**
 * Created by rm on 2018/1/12.
 */
const IndiInsur = resolve => require(['@/pages/insurePayment/indiInsur.vue'], resolve);
const IndiConfirm = resolve => require(['@/pages/insurePayment/indiConfirm.vue'], resolve);
const IndiSucc = resolve => require(['@/pages/insurePayment/indiSucc.vue'], resolve);
const BreakInsure = resolve => require(['@/pages/insurePayment/breakInsure.vue'], resolve);
const InsurPayment = resolve => require(['@/pages/insurePayment/insurPayment.vue'], resolve);
const SinglePayment = resolve => require(['@/pages/insurePayment/singlePayment.vue'], resolve);
const PendPay = resolve => require(['@/pages/insurePayment/pendPay.vue'], resolve);
const CityInsure = resolve => require(['@/pages/insurePayment/cityInsure.vue'], resolve);
const TransConfim = resolve => require(['@/pages/insurePayment/transConfim.vue'], resolve);
export default [
  {path: '/indiInsur',component: IndiInsur,name:'',title:''},
  {path: '/indiConfirm',component: IndiConfirm,name:'',title:''},
  {path: '/indiSucc',component: IndiSucc,name:'',title:''},
  {path: '/breakInsure',component: BreakInsure,name:'',title:''},
  {path: '/insurPayment',component: InsurPayment,name:'',title:''},
  {path: '/singlePayment',component: SinglePayment,name:'',title:''},
  {path: '/pendPay',component: PendPay,name:'',title:''},
  {path: '/cityInsure',component: CityInsure,name:'',title:''},
  {path: '/transConfim',component: TransConfim,name:'',title:''},
];

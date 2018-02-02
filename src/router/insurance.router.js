/**
 * Created by rm on 2018/1/12.
 */
const Insurance = resolve => require(['@/pages/insurance/insurance.vue'], resolve);
const Screen = resolve => require(['@/pages/insurance/screen.vue'], resolve);
const InsurDetail = resolve => require(['@/pages/insurance/insurDetail.vue'], resolve);
const InsurPay = resolve => require(['@/pages/insurance/insurPay.vue'], resolve);
const ClaimFlow = resolve => require(['@/pages/insurance/claimFlow.vue'], resolve);
const Introduction = resolve => require(['@/pages/insurance/introduction.vue'], resolve);
const InsurancePolicy = resolve => require(['@/pages/insurance/insurancePolicy.vue'], resolve);
const Guarantee = resolve => require(['@/pages/insurance/guarantee.vue'], resolve);
const Settlement = resolve => require(['@/pages/insurance/settlement.vue'], resolve);
const ConfirmPay = resolve => require(['@/pages/insurance/confirmPay.vue'], resolve);
const ClaimApplication = resolve => require(['@/pages/insurance/claimApplication.vue'], resolve);
const ClaimRecord = resolve => require(['@/pages/insurance/claimRecord.vue'], resolve);
const Schedule = resolve => require(['@/pages/insurance/schedule.vue'], resolve);
const HealthNotifi = resolve => require(['@/pages/insurance/healthNotifi.vue'], resolve);
export default [
  {path: '/insurance',component: Insurance,name:'',title:''},
  {path: '/screen',component: Screen,name:'',title:''},
  {path: '/insurDetail',component: InsurDetail,name:'',title:''},
  {path: '/insurPay',component: InsurPay,name:'',title:''},
  {path: '/claimFlow',component: ClaimFlow,name:'',title:''},
  {path: '/introduction',component: Introduction,name:'',title:''},
  {path: '/insurancePolicy',component: InsurancePolicy,name:'',title:''},
  {path: '/guarantee',component: Guarantee,name:'',title:''},
  {path: '/settlement',component: Settlement,name:'',title:''},
  {path: '/confirmPay',component: ConfirmPay,name:'',title:''},
  {path: '/claimApplication',component: ClaimApplication,name:'',title:''},
  {path: '/claimRecord',component: ClaimRecord,name:'',title:''},
  {path: '/schedule',component: Schedule,name:'',title:''},
  {path: '/healthNotifi',component: HealthNotifi,name:'',title:''},

];

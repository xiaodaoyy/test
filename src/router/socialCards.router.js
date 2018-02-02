/**
 * Created by rm on 2018/1/12.
 */
const Application = resolve => require(['@/pages/socialCards/application.vue'], resolve);
const ApplicConfirm = resolve => require(['@/pages/socialCards/applicConfirm.vue'], resolve);
const ApplicSuccse = resolve => require(['@/pages/socialCards/applicSuccse.vue'], resolve);
const ApplicSchedule = resolve => require(['@/pages/socialCards/applicSchedule.vue'], resolve);
const ReportLoss = resolve => require(['@/pages/socialCards/reportLoss.vue'], resolve);
const ReportSuccess = resolve => require(['@/pages/socialCards/reportSuccess.vue'], resolve);
const ChangeInfo = resolve => require(['@/pages/socialCards/changeInfo.vue'], resolve);
export default [
  {path: '/application',component: Application,name:'',title:''},
  {path: '/applicConfirm',component: ApplicConfirm,name:'',title:''},
  {path: '/applicSuccse',component: ApplicSuccse,name:'',title:''},
  {path: '/applicSchedule',component: ApplicSchedule,name:'',title:''},
  {path: '/reportLoss',component: ReportLoss,name:'',title:''},
  {path: '/reportSuccess',component: ReportSuccess,name:'',title:''},
  {path: '/changeInfo',component: ChangeInfo,name:'',title:''},
];

/**
 * Created by rm on 2018/1/12.
 */
const MedInsurance_ra = resolve => require(['@/pages/searchInfo/medInsurance_ra.vue'], resolve);
const PersInterest_ra = resolve => require(['@/pages/searchInfo/persInterest_ra.vue'], resolve);
const InsureInfo = resolve => require(['@/pages/searchInfo/insureInfo.vue'], resolve);
const ContRecord = resolve => require(['@/pages/searchInfo/contRecord.vue'], resolve);
const MedInsurance = resolve => require(['@/pages/searchInfo/medInsurance.vue'], resolve);
const VisitDetail = resolve => require(['@/pages/searchInfo/visitDetail.vue'], resolve);
const Pension = resolve => require(['@/pages/searchInfo/pension.vue'], resolve);
const PersInterest = resolve => require(['@/pages/searchInfo/persInterest.vue'], resolve);
const Working = resolve => require(['@/pages/searchInfo/working.vue'], resolve);
export default [
  {path: '/medInsurance_ra',component: MedInsurance_ra,name:'medInsurance_ra',meta:{title:'医保缴费',sign:'medInsurance'}},
  {path: '/persInterest_ra',component: PersInterest_ra,name:'persInterest_ra',meta:{title:'个人权益单',sign:'persInterest'}},
  {path: '/insureInfo',component: InsureInfo,name:'insureInfo',meta:{title:'参保缴费',sign:'insureInfo'}},
  {path: '/contRecord',component: ContRecord,name:'contRecord',meta:{title:'缴费详情',sign:'insureInfo'}},
  {path: '/medInsurance',component: MedInsurance,name:'medInsurance',meta:{title:'医保缴费',sign:'medInsurance'}},
  {path: '/visitDetail',component: VisitDetail,name:'visitDetail',meta:{title:'医保缴费详情',sign:'medInsurance'}},
  {path: '/pension',component: Pension,name:'pension',meta:{title:'养老金发放',sign:'pension'}},
  {path: '/persInterest',component: PersInterest,name:'persInterest',meta:{title:'个人权益单',sign:'persInterest'}},
  {path: '/working',component: Working,name:'',},
];

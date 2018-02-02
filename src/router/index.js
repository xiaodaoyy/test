import Vue from 'vue'
import Router from 'vue-router'
import Consulting from './consulting.router'
import Help from './help.router'
import Insurance from './insurance.router'
import InsurePayment from './insurePayment.router'
import ProofFiling from './proofFiling.router'
import SearchInfo from './searchInfo.router'
import SocialCards from './socialCards.router'
import SocialRelationship from './socialRelationship.router'


Vue.use(Router)

const Index = resolve => require(['@/pages/homePage/index.vue'], resolve);
const Family = resolve => require(['@/pages/homePage/family.vue'], resolve);
const AddRelative = resolve => require(['@/pages/homePage/addRelative.vue'], resolve);
const AddRelaSec = resolve => require(['@/pages/homePage/addRelaSec.vue'], resolve);
const Mine = resolve => require(['@/pages/homePage/mine.vue'], resolve);
const Apply = resolve => require(['@/pages/homePage/apply.vue'], resolve);
const MessInfo = resolve => require(['@/pages/homePage/messInfo.vue'], resolve);
const Test = resolve => require(['@/pages/test.vue'], resolve);
export default new Router({
  routes: [
    {path: '/',component: Index,name:'index',meta:{title:'首页',sign:'index'}},
    {path: '/family',component: Family,name:'family',meta:{title:'亲情网',sign:'family'}},
    {path: '/addRelative',component: AddRelative,name:'addRelative',meta:{title:'添加亲人',sign:'family'}},
    {path: '/addRelaSec',component: AddRelaSec,name:'addRelaSec',meta:{title:'添加亲人',sign:'family'}},
    {path: '/mine',component: Mine,name:'mine',meta:{title:'我的',sign:'mine'}},
    {path: '/apply',component: Apply,name:'apply',meta:{title:'我的申请',sign:'mine'}},
    {path: '/messInfo',component: MessInfo,name:'messInfo',meta:{title:'信息详情',sign:'messInfo'}},
    {path: '/test',component: Test,name:'',title:''},
  ].concat(Consulting).concat(Help).concat(Insurance).concat(InsurePayment).concat(ProofFiling).concat(SearchInfo).concat(SocialCards).concat(SocialRelationship)
})

/**
 * Created by rm on 2018/1/12.
 */
const SurvCert = resolve => require(['@/pages/proofFiling/survCert.vue'], resolve);
const SurvCertInfo = resolve => require(['@/pages/proofFiling/survCertInfo.vue'], resolve);
const SociSecurity = resolve => require(['@/pages/proofFiling/sociSecurity.vue'], resolve);
const NdivnIsurCert = resolve => require(['@/pages/proofFiling/ndivnIsurCert.vue'], resolve);
const Remote = resolve => require(['@/pages/proofFiling/remote.vue'], resolve);
const AddRemote = resolve => require(['@/pages/proofFiling/addRemote.vue'], resolve);
const AddRemoSucc = resolve => require(['@/pages/proofFiling/addRemoSucc.vue'], resolve);
const ChooseRelative = resolve => require(['@/pages/proofFiling/chooseRelative.vue'], resolve);
export default [
  {path: '/survCert',component: SurvCert,name:'survCert',meta:{title:'生存认证',sign:'survCert',isHandle:'1'}},
  {path: '/survCertInfo',component: SurvCertInfo,name:'survCertInfo',meta:{title:'生存认证',sign:'survCert',isHandle:'1'}},
  {path: '/sociSecurity',component: SociSecurity,name:'',title:''},
  {path: '/ndivnIsurCert',component: NdivnIsurCert,name:'',title:''},
  {path: '/remote',component: Remote,name:'',title:''},
  {path: '/addRemote',component: AddRemote,name:'',title:''},
  {path: '/addRemoSucc',component: AddRemoSucc,name:'',title:''},
  {path: '/chooseRelative',component:ChooseRelative,name:'',title:''},

];
